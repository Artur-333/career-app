import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Մասնագիտական Կողմնորոշում | AI Համակարգ',
  description: 'Հայկական AI-ով աշխատող մասնագիտական կողմնորոշման համակարգ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hy">
      <body>{children}</body>
    </html>
  )
}
