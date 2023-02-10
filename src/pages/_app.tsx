import 'src/style/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence, motion } from 'framer-motion'
import { jeko } from 'src/style/fonts'
import LoadingScreen from 'src/components/layout/LoadingScreen'

function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${jeko.variable} font-sans relative`}>
      <AnimatePresence mode="wait">
        <LoadingScreen>
          <Component {...pageProps} />
        </LoadingScreen>
      </AnimatePresence>
    </div>
  )
}

export default App
