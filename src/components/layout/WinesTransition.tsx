import React from 'react'
import { easeIn, motion, spring } from 'framer-motion'
import Image from 'next/image'

import { IWine } from 'src/type/wine.type'

type Props = {
  animation: boolean
  initialClosed?: boolean
}

const WinesTransition = ({ animation, initialClosed }: Props) => {
  const containerVariants = {
    open: {
      x: '0%',
      transition: { duration: 1, ease: 'anticipate' }
    },
    close: { x: '-100%', transition: { duration: 1 } }
  }

  return (
    <motion.div
      initial={initialClosed ? 'close' : 'open'}
      animate={animation ? 'open' : 'close'}
      variants={containerVariants}
      className="fixed w-screen h-screen bg-gray-bg z-30 overflow-hidden"
    >
      <div className="absolute w-screen h-screen flex items-center justify-center text-9xl font-bold text-gray-primary">
        <p className="text-center mx-auto">Vinarija Dumo</p>
      </div>
    </motion.div>
  )
}

export default WinesTransition
