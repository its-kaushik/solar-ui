import { ImageResponse } from 'next/og';

export const alt = 'Kaushik Solar Power — Rooftop Solar Installation in Delhi';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1E3A5F 0%, #142942 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Sun icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="80"
          height="80"
          fill="none"
        >
          <circle cx="16" cy="16" r="6" fill="#F59E0B" />
          <g stroke="#F59E0B" strokeWidth="2" strokeLinecap="round">
            <line x1="16" y1="4" x2="16" y2="7" />
            <line x1="16" y1="25" x2="16" y2="28" />
            <line x1="4" y1="16" x2="7" y2="16" />
            <line x1="25" y1="16" x2="28" y2="16" />
            <line x1="7.5" y1="7.5" x2="9.6" y2="9.6" />
            <line x1="22.4" y1="22.4" x2="24.5" y2="24.5" />
            <line x1="7.5" y1="24.5" x2="9.6" y2="22.4" />
            <line x1="22.4" y1="9.6" x2="24.5" y2="7.5" />
          </g>
        </svg>

        <div
          style={{
            display: 'flex',
            fontSize: 48,
            fontWeight: 800,
            color: '#FFFFFF',
            marginTop: 24,
            textAlign: 'center',
          }}
        >
          Kaushik Solar Power
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 24,
            color: '#F59E0B',
            marginTop: 12,
          }}
        >
          Powering Delhi, One Rooftop at a Time
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 18,
            color: '#9CA3AF',
            marginTop: 24,
          }}
        >
          Up to Rs 1,08,000 Government Subsidy | BSES Rajdhani Registered | MNRE Enrolled
        </div>
      </div>
    ),
    { ...size }
  );
}
