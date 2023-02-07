import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useCycle } from 'framer-motion'

import ShopIcon from 'src/assets/cartIcon.svg'
import useCartItems from 'src/store/useCartItems'
import { useDimensions } from 'src/hooks/useDimensions'

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${
      height * 2 + 335
    }px at calc(100% - 80px) calc(100% - 80px))`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: `circle(30px at calc(100% - 80px) calc(100% - 80px))`,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
}

const CartIcon = () => {
  const { cartWines } = useCartItems()

  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  useEffect(() => {
    if (isOpen) {
      document.querySelector('body')?.classList.remove('overflow-y-scroll')
      document.querySelector('body')?.classList.add('overflow-y-hidden')
    } else {
      document.querySelector('body')?.classList.add('overflow-y-scroll')
      document.querySelector('body')?.classList.remove('overflow-y-hidden')
    }
  }, [isOpen])

  return (
    <motion.div
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
      onClick={toggleOpen as () => void}
    >
      <div
        className={clsx(
          'fixed bottom-10 right-10 flex w-[73px] h-[73px] border-2 border-primary bg-white rounded-full items-center justify-center cursor-pointer opacity-1 duration-300 z-20',
          { 'opacity-0 pointer-events-none': isOpen }
        )}
      >
        <div className="absolute -left-1 -top-1 w-6 h-6 bg-primary rounded-full grid place-content-center text-xs ">
          <div className="absolute left-0 top-0 w-full h-full bg-primary rounded-full animate-ping" />
          <span className="z-[2]">{cartWines.length}</span>
        </div>
        <ShopIcon />
      </div>

      <motion.div
        variants={sidebar}
        className={clsx(
          'fixed inset-0 w-full bg-white z-10 flex items-center justify-center',
          {}
        )}
      >
        <h1 className="text-gray-primary">Da vidimo radil</h1>
      </motion.div>
    </motion.div>
  )
}

export default CartIcon
