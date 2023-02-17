import React, { useEffect, useRef, useState } from 'react'
import { easeIn, motion, spring } from 'framer-motion'
import Image from 'next/image'

import { IWine } from 'src/type/wine.type'
import clsx from 'clsx'

type Props = {
  animation: boolean
  initialClosed?: boolean
}

const WinesTransition = ({ animation, initialClosed }: Props) => {
  const transitionContainerRef = useRef<HTMLDivElement>(null)
  const [overlayHidden, setOverlayHidden] = useState(true)

  const containerVariants = {
    open: {
      x: '0%',
      transition: { duration: 1, ease: 'anticipate' }
    },
    close: { x: '-100%', transition: { duration: 1 } }
  }

  const overlayVariants = {
    open: {
      opacity: 0.8,
      transition: { duration: 0.6, ease: 'easeIn' }
    },
    close: { opacity: 0, transition: { duration: 1.1 } }
  }

  useEffect(() => {
    if (animation) {
      setOverlayHidden(false)
    }

    if (!animation) {
      setTimeout(() => setOverlayHidden(true), 1100)
    }
  }, [animation])

  return (
    <>
      <motion.div
        initial={initialClosed ? 'close' : 'open'}
        animate={animation ? 'open' : 'close'}
        variants={overlayVariants}
        className={clsx(
          'bg-gray-primary fixed w-screen h-screen top-0 left-0 z-30',
          {
            'hidden ': overlayHidden
          }
        )}
      />
      <motion.div
        ref={transitionContainerRef}
        initial={initialClosed ? 'close' : 'open'}
        animate={animation ? 'open' : 'close'}
        variants={containerVariants}
        className="fixed w-screen h-screen bg-gray-bg z-30 overflow-hidden"
      >
        <div className="absolute w-screen h-screen flex items-center justify-center text-9xl font-bold text-gray-primary">
          <p className="text-center mx-auto">Vinarija Dumo</p>
        </div>
      </motion.div>
    </>
  )
}

export default WinesTransition
