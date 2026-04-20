import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MbokaStream — Le cinéma congolais, chez vous',
  description: 'Toutes les séries de SB Production en exclusivité. Regardez depuis Bruxelles, Paris, Atlanta, Montréal. Biso na biso.',
  keywords: ['congolais', 'streaming', 'diaspora', 'séries', 'lingala', 'kinshasa'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
