import 'src/style/globals.css'
import type { AppProps } from 'next/app'
import { jeko } from 'src/style/fonts'
import { useEffect } from 'react'

function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${jeko.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  )
}

export default App
