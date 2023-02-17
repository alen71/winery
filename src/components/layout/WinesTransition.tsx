import React, { useEffect, useRef, useState } from 'react'
import { easeIn, motion, spring } from 'framer-motion'
import clsx from 'clsx'

type Props = {
  animation: boolean
  initialClosed?: boolean
}

const WinesTransition = ({ animation, initialClosed }: Props) => {
  const [overlayHidden, setOverlayHidden] = useState(true)

  const containerVariants = {
    open: {
      width: '100vw',
      transition: { duration: 1.5, ease: 'anticipate' }
    },
    close: { width: '0vw', originX: 'left', transition: { duration: 1.1 } }
  }

  const overlayVariants = {
    open: {
      opacity: 0.8,
      transition: { duration: 0.8, ease: 'easeIn' }
    },
    close: { opacity: 0, transition: { duration: 1.1 } }
  }

  const textVariants = {
    open: {
      x: 0,
      transition: { type: 'spring', stiffness: 40, delay: 0.6 }
    },
    close: { x: -100, transition: { duration: 1.1 } }
  }

  useEffect(() => {
    if (animation) {
      setOverlayHidden(false)
    }

    if (!animation) {
      setTimeout(() => setOverlayHidden(true), 1200)
    }
  }, [animation])

  return (
    <>
      <motion.div
        initial={initialClosed ? 'close' : 'open'}
        animate={animation ? 'open' : 'close'}
        variants={overlayVariants}
        className={clsx(
          ` bg-gray-primary fixed w-screen h-screen top-0 left-0 z-30`,
          {
            'hidden ': overlayHidden
          }
        )}
      />
      <motion.div
        initial={initialClosed ? 'close' : 'open'}
        animate={animation ? 'open' : 'close'}
        variants={containerVariants}
        className="fixed w-screen h-screen top-0 left-0 bg-black z-30 overflow-hidden"
      >
        <div className="absolute w-screen h-screen flex items-center justify-center text-5xl sm:text-7xl md:text-9xl font-bold text-white/10 tracking-wide">
          <motion.p
            initial={initialClosed ? 'close' : 'open'}
            animate={animation ? 'open' : 'close'}
            variants={textVariants}
            className="text-center mx-auto w-full font-judson font-normal uppercase whitespace-nowrap"
          >
            Vinarija Dumo Vinarija Dumo Vinarija Dumo
          </motion.p>
        </div>
      </motion.div>
    </>
  )
}

export default WinesTransition
