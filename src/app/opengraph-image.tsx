import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const alt = 'Raytrix Energy — Rooftop Solar Installation in Delhi';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage() {
  // Logo is navy on white, so the card uses a light background
  const logo = await readFile(join(process.cwd(), 'public/brand/logo-stacked-legal.png'));
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`;

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
          background: '#FFFFFF',
          borderBottom: '16px solid #F59E0B',
          fontFamily: 'sans-serif',
        }}
      >
        <img src={logoSrc} width={497} height={300} alt="" />

        <div
          style={{
            display: 'flex',
            fontSize: 32,
            fontWeight: 700,
            color: '#1E3A5F',
            marginTop: 36,
          }}
        >
          Powering Delhi, One Rooftop at a Time
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 22,
            color: '#5F6774',
            marginTop: 16,
          }}
        >
          Up to Rs 1,56,000 Government Subsidy | BSES Registered | MNRE Enrolled
        </div>
      </div>
    ),
    { ...size }
  );
}
