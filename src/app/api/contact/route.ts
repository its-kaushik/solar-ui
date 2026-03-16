import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { rateLimit } from '@/lib/rate-limit';

function getResend() {
  if (!process.env.RESEND_API_KEY) return null;
  return new Resend(process.env.RESEND_API_KEY);
}

interface ContactBody {
  name: string;
  phone: string;
  email?: string;
  propertyType: string;
  location: string;
  message?: string;
  website?: string; // honeypot
}

function validatePhone(phone: string): boolean {
  return /^[6-9]\d{9}$/.test(phone);
}

function buildEmailHTML(body: ContactBody): string {
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  const whatsappLink = `https://wa.me/91${body.phone}?text=${encodeURIComponent(`Hi ${body.name}, thank you for contacting Kaushik Solar Power. `)}`;

  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #1E3A5F; padding: 20px 24px; border-radius: 12px 12px 0 0;">
        <h1 style="color: #FFFFFF; margin: 0; font-size: 20px;">New Lead Received</h1>
        <p style="color: #9CA3AF; margin: 4px 0 0; font-size: 14px;">${timestamp}</p>
      </div>
      <div style="background: #FFFFFF; padding: 24px; border: 1px solid #E5E7EB; border-top: none;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #6B7280; font-size: 14px; width: 120px;">Name</td>
            <td style="padding: 8px 0; font-weight: 600; font-size: 14px;">${body.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6B7280; font-size: 14px;">Phone</td>
            <td style="padding: 8px 0; font-weight: 600; font-size: 14px;">
              <a href="tel:+91${body.phone}" style="color: #1E3A5F; text-decoration: none;">+91 ${body.phone}</a>
            </td>
          </tr>
          ${body.email ? `
          <tr>
            <td style="padding: 8px 0; color: #6B7280; font-size: 14px;">Email</td>
            <td style="padding: 8px 0; font-size: 14px;">
              <a href="mailto:${body.email}" style="color: #1E3A5F; text-decoration: none;">${body.email}</a>
            </td>
          </tr>` : ''}
          <tr>
            <td style="padding: 8px 0; color: #6B7280; font-size: 14px;">Property Type</td>
            <td style="padding: 8px 0; font-size: 14px; text-transform: capitalize;">${body.propertyType}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6B7280; font-size: 14px;">Location</td>
            <td style="padding: 8px 0; font-size: 14px;">${body.location}</td>
          </tr>
          ${body.message ? `
          <tr>
            <td style="padding: 8px 0; color: #6B7280; font-size: 14px; vertical-align: top;">Message</td>
            <td style="padding: 8px 0; font-size: 14px;">${body.message}</td>
          </tr>` : ''}
        </table>

        <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #E5E7EB;">
          <p style="margin: 0 0 12px; font-size: 13px; color: #6B7280;">Quick Actions:</p>
          <a href="tel:+91${body.phone}" style="display: inline-block; padding: 8px 16px; background: #1E3A5F; color: #FFFFFF; text-decoration: none; border-radius: 8px; font-size: 13px; margin-right: 8px;">
            Call Now
          </a>
          <a href="${whatsappLink}" style="display: inline-block; padding: 8px 16px; background: #25D366; color: #FFFFFF; text-decoration: none; border-radius: 8px; font-size: 13px;">
            WhatsApp
          </a>
        </div>
      </div>
      <div style="padding: 12px 24px; background: #F3F4F6; border-radius: 0 0 12px 12px; border: 1px solid #E5E7EB; border-top: none;">
        <p style="margin: 0; font-size: 12px; color: #9CA3AF;">This lead was submitted via kaushiksolarpower.com. Please respond within 24 hours.</p>
      </div>
    </div>
  `;
}

export async function POST(request: NextRequest) {
  // Rate limiting
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  const { allowed } = rateLimit(ip);
  if (!allowed) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  let body: ContactBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  // Honeypot check — silently accept but don't process
  if (body.website) {
    return NextResponse.json({ success: true });
  }

  // Server-side validation
  if (!body.name || body.name.length < 2 || body.name.length > 100) {
    return NextResponse.json({ error: 'Invalid name' }, { status: 400 });
  }
  if (!body.phone || !validatePhone(body.phone)) {
    return NextResponse.json({ error: 'Invalid phone number' }, { status: 400 });
  }
  if (!body.propertyType || !['residential', 'commercial'].includes(body.propertyType)) {
    return NextResponse.json({ error: 'Invalid property type' }, { status: 400 });
  }
  if (!body.location || body.location.length < 3) {
    return NextResponse.json({ error: 'Invalid location' }, { status: 400 });
  }

  try {
    // Send email notification
    const resend = getResend();
    if (resend && process.env.CONTACT_EMAIL_TO) {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'Kaushik Solar <onboarding@resend.dev>',
        to: process.env.CONTACT_EMAIL_TO,
        subject: `New Lead: ${body.name} — ${body.propertyType} — ${body.location}`,
        html: buildEmailHTML(body),
      });
    }

    // Append to Google Sheet (fire-and-forget)
    if (process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
      fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          name: body.name,
          phone: body.phone,
          email: body.email || '',
          propertyType: body.propertyType,
          location: body.location,
          message: body.message || '',
          status: 'New',
        }),
      }).catch(console.error);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again.' },
      { status: 500 }
    );
  }
}
