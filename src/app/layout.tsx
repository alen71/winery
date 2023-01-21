import { fonts } from 'src/style/fonts'
import '../style/globals.css'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body
        className={`bg-gray-bg text-white h-screen text-lg ${fonts.jeko.className}`}
      >
        {children}
      </body>
    </html>
  )
}
