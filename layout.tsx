import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.evpowertoken.xyz/'),  // 替换为你的实际域名
  title: {
    default: 'EV Power',
    template: '%s | EV Power'
  },
  description: 'EV Power - The Future of Free Cryptocurrency Mining',
  icons: {
    icon: [
      {
        url: '/logo.png',
        href: '/logo.png',
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>EV Power</title>
        <link rel="icon" type="image/png" href="/logo.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
