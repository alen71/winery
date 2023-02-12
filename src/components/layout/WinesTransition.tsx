import React from 'react'
import { easeIn, motion, spring } from 'framer-motion'
import Image from 'next/image'

import { IWine } from 'src/type/wine.type'

type Props = {
  animation: boolean
  nextWine: IWine
}

const WinesTransition = ({ animation, nextWine }: Props) => {
  const containerVariants = {
    open: {
      width: '100vw',
      transition: { type: 'spring', stiffness: 50 }
    },
    close: { width: '0vw', origin: 'left', transition: { duration: 1 } }
  }

  const imageVariants = {
    open: {
      opacity: 1,
      transition: { duration: 0.3, delay: 0.6 }
    },
    close: { opacity: 0, transition: { delay: 1 } }
  }

  const nameVariants = {
    open: {
      opacity: 1,
      x: -80,
      transition: { type: 'spring', stiffness: 60, delay: 0.6 }
    },
    close: { opacity: 0, x: 0, transition: { delay: 1 } }
  }

  const ageVariants = {
    open: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, delay: 1 }
    },
    close: { opacity: 0, scale: 1.5, transition: { delay: 1 } }
  }

  return (
    <motion.div
      initial="close"
      animate={animation ? 'open' : 'close'}
      variants={containerVariants}
      className="fixed h-screen bg-gray-bg z-30 overflow-hidden"
    >
      <div className="absolute w-screen h-screen flex items-center justify-center flex-col md:flex-row gap-10 md:gap-20">
        <motion.div
          variants={imageVariants}
          initial="close"
          animate={animation ? 'open' : 'close'}
          className="max-w-[150px] md:max-w-[200px]"
        >
          <Image src={nextWine.image} alt={nextWine.name} />
        </motion.div>

        <div className="text-center md:text-left">
          <motion.p
            variants={nameVariants}
            initial="close"
            animate={animation ? 'open' : 'close'}
            className="font-bold text-3xl md:text-5xl"
          >
            {nextWine.name} {nextWine.type}{' '}
            {nextWine.variety ? `| ${nextWine.variety}` : ''}
          </motion.p>
          <motion.p
            variants={ageVariants}
            initial="close"
            animate={animation ? 'open' : 'close'}
            className="font-black text-7xl md:text-9xl text-primary"
          >
            {nextWine.age}
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}

export default WinesTransition
