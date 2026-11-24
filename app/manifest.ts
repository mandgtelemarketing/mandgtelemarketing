import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'M&G Telemarketing',
    short_name: 'M&G',
    start_url: '/',
    display: 'browser',
    background_color: '#141311',
    theme_color: '#141311',
    icons: [{ src: '/icon.png', sizes: '192x192', type: 'image/png' }],
  }
}
