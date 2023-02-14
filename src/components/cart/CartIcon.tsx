import clsx from 'clsx'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion, useCycle } from 'framer-motion'

import ShopIcon from 'src/assets/cartIcon.svg'
import useCartItems from 'src/store/useCartItems'
import { useDimensions } from 'src/hooks/useDimensions'
import useWindowWidth from 'src/hooks/useWindowWidth'

import XIcon from 'src/assets/XIcon.svg'
import CartProductsList from './CartProductsList'
import CartForm from './CartForm'
import ShopBtn from '../shared/ShopBtn'

const CartIcon = () => {
  const { cartWines, updateCartWines } = useCartItems()

  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)
  const width = useWindowWidth()

  const position = width < 641 ? '40px' : '80px'

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(140% at calc(100% - ${position}) calc(100% - ${position}))`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: `circle(0% at calc(100% - ${position}) calc(100% - ${position}))`,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 40
      }
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.querySelector('body')?.classList.remove('overflow-y-scroll')
      document.querySelector('body')?.classList.add('overflow-y-hidden')
    } else {
      document.querySelector('body')?.classList.add('overflow-y-scroll')
      document.querySelector('body')?.classList.remove('overflow-y-hidden')
    }
  }, [isOpen])

  useLayoutEffect(() => {
    const storedWines = JSON.parse(localStorage.getItem('cart')!)

    if (!storedWines) return

    updateCartWines(storedWines)
  }, [])

  const cartQuantity = cartWines?.reduce(
    (accumulator: number, wine) => accumulator + wine.quantity,
    0
  )

  return (
    <motion.div
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <div
        className={clsx(
          'fixed bottom-5 sm:bottom-10 right-5 sm:right-10 flex w-[45px] sm:w-[73px] h-[45px] sm:h-[73px] border-2 border-primary bg-white rounded-full items-center justify-center cursor-pointer opacity-1 duration-300 z-20',
          { 'opacity-0 pointer-events-none': isOpen }
        )}
        onClick={toggleOpen as () => void}
      >
        <div className="absolute -left-1 -top-1 w-4 sm:w-6 h-4 sm:h-6 bg-primary rounded-full grid place-content-center text-xs ">
          <div
            className={clsx(
              'absolute left-0 top-0 w-full h-full bg-primary rounded-full ',
              { 'animate-ping': cartWines.length > 0 }
            )}
          />
          <span className="z-[2]">{cartQuantity}</span>
        </div>
        <ShopIcon className="scale-[0.6] sm:scale-100" />
      </div>

      <motion.div
        variants={sidebar}
        className={clsx('fixed inset-0 w-full bg-white z-10', {
          'z-[60]': isOpen
        })}
      >
        <div
          onClick={() => toggleOpen()}
          className="scale-125 md:scale-150 absolute right-5 md:right-10 top-5 md:top-10 cursor-pointer z-10"
        >
          <XIcon />
        </div>

        {cartWines.length > 0 && (
          <div className="text-gray-primary w-full h-full flex flex-col md:flex-row md:justify-center font-medium overflow-y-scroll md:overflow-y-hidden pt-14 md:pt-0 ">
            <CartProductsList />
            <CartForm />
          </div>
        )}

        {cartWines.length === 0 && (
          <div className="absolute w-full h-full grid place-content-center">
            <p className="text-gray-primary font-semibold text-3xl mb-5">
              Vaša korpa je prazna.
            </p>
            <div className="mx-auto">
              <ShopBtn />
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default CartIcon
