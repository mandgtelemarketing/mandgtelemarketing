import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'M&G Telemarketing',
    short_name: 'M&G',
    start_url: '/',
    display: 'browser',
    background_color: '#07080b',
    theme_color: '#07080b',
    icons: [{ src: '/icon.png', sizes: '192x192', type: 'image/png' }],
  }
}
