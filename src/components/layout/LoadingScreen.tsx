import React, { ReactNode, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

import Logo from 'src/assets/Logo.svg'

type Props = {
  children: ReactNode
}

const LoadingScreen = ({ children }: Props) => {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setHidden(true)
    }, 1300)
  }, [])

  return (
    <>
      <motion.div
        key="page transition animation screen"
        initial={{ width: '100vw' }}
        animate={{ width: '0vw' }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className={clsx(
          'fixed inset-0 overflow-hidden h-screen bg-gray-primary z-[9999]',
          {
            'hidden ': hidden
          }
        )}
      >
        <div className="absolute top-0 left-0 w-screen h-screen grid place-content-center text-primary">
          <div className="scale-110 sm:scale-[1.8]">
            <Logo />
          </div>
        </div>
      </motion.div>
      {children}
    </>
  )
}

export default LoadingScreen
