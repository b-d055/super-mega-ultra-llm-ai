import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SuperMegaLltra LLM AI',
  description: '90s inspired landing page for my LLM AI',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
