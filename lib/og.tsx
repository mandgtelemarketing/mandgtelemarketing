import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

export const ogSize = { width: 1200, height: 630 }
export const ogAlt = 'M&G Telemarketing: a telemarketing team built by agency owners'

// TODO when M&G send the founders photo: add it to this image (spec, Metadata).
export async function renderOg() {
  const logo = await readFile(join(process.cwd(), 'assets/logo-og.png'))
  const src = `data:image/png;base64,${logo.toString('base64')}`
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          background: '#07080b',
          color: '#f4f6fa',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <div style={{ display: 'flex', width: 120, height: 120, borderRadius: 60, background: '#fff', overflow: 'hidden' }}>
            <img src={src} width={120} height={120} alt="" />
          </div>
          <div style={{ fontSize: 40, fontWeight: 800 }}>M&amp;G Telemarketing</div>
        </div>
        <div style={{ marginTop: 48, fontSize: 64, fontWeight: 800, lineHeight: 1.1, maxWidth: 980 }}>
          Make your own live transfers. With a team built by agents.
        </div>
        <div style={{ marginTop: 32, fontSize: 30, color: '#17c3ff' }}>$2,000 per telemarketer per month. Month-to-month.</div>
      </div>
    ),
    ogSize,
  )
}
