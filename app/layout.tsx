import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'

const urban = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Koficenti\'s Blog',
  description: 'Just another tech blog.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={urban.className}>{children}</body>
    </html>
  )
}
