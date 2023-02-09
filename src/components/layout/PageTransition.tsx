import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

type Props = {
  children: ReactNode
}

const PageTransition = ({ children }: Props) => {
  return (
    <>
      <motion.div
        key="page transition animation screen"
        initial={{ width: '100vw' }}
        animate={{ width: '0vw' }}
        exit={{ width: '100vw' }}
        transition={{ duration: 1 }}
        className="fixed inset-0 overflow-hidden h-screen bg-gray-primary z-[9999]"
      >
        <div className="absolute top-0 left-0 w-screen h-screen grid place-content-center">
          <motion.p className="text-7xl text-primary font-semibold">
            Vinarija DUMO
          </motion.p>
        </div>
      </motion.div>
      {children}
    </>
  )
}

export default PageTransition
