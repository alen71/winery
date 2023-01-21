import '../style/globals.css'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body
        className={`bg-gray-bg text-white h-screen text-lg font-[${inter}, sans-serif]`}
      >
        {children}
      </body>
    </html>
  )
}
