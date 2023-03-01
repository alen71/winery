import 'src/style/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence, motion } from 'framer-motion'
import { jeko } from 'src/style/fonts'
import { Judson } from '@next/font/google'

import LoadingScreen from 'src/components/layout/LoadingScreen'

const judson = Judson({
  weight: ['400'],
  subsets: ['latin'],
  style: ['italic'],
  variable: '--font-judson'
})

function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${jeko.variable} ${judson.variable} font-sans relative`}>
      <AnimatePresence mode="wait">
        <LoadingScreen>
          <Component {...pageProps} />
        </LoadingScreen>
      </AnimatePresence>
    </div>
  )
}

export default App
