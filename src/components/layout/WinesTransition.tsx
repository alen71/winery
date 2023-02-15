import React from 'react'
import { easeIn, motion, spring } from 'framer-motion'
import Image from 'next/image'

import { IWine } from 'src/type/wine.type'

type Props = {
  animation: boolean
}

const WinesTransition = ({ animation }: Props) => {
  const containerVariants = {
    open: {
      width: '100vw',
      transition: { type: 'spring', stiffness: 40 }
    },
    close: { width: '0vw', transition: { duration: 1 } }
  }

  const textVariants = {
    open: {
      opacity: 1,
      transition: { duration: 0.3, delay: 0.6 }
    },
    close: { opacity: 0, transition: { delay: 1 } }
  }

  return (
    <motion.div
      initial="open"
      animate={animation ? 'open' : 'close'}
      variants={containerVariants}
      className="fixed h-screen bg-gray-bg z-30 overflow-hidden"
    >
      <div className="absolute w-screen h-screen flex items-center justify-center text-6xl">
        <motion.p
          variants={textVariants}
          initial="close"
          animate="open"
          className="font-medium"
        >
          Vinarija <span className="font-bold text-primary">Dumo</span>
        </motion.p>
      </div>
    </motion.div>
  )
}

export default WinesTransition
