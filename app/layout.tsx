import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'EV Power',
    template: '%s | EV Power'
  },
  description: 'EV Power - The Future of Free Cryptocurrency Mining',
  icons: {
    icon: '/logo.png', // 直接使用相对路径
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
