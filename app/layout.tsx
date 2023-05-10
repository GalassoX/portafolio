import { Roboto } from 'next/font/google'
import './globals.css'

const robotoFont = Roboto({ weight: "400", subsets: ["latin"] })

export const metadata = {
  title: 'Rafael Marrugo - Portfolio Web',
  description: 'Hi! Im Rafael Marrugo, this is my Portfolio Web. Enter to view more info about me!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"></link>
      </head>
      <body className={robotoFont.className}>{children}</body>
    </html>
  )
}
