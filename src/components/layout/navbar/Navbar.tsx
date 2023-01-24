import React, { useEffect, useState } from 'react'
import clsx from 'clsx'

import Logo from '../../shared/Logo'
import MenuBtn from './MenuBtn'

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false)
  const [isScrollTopOfPage, setIsScrollTopOfPage] = useState(true)

  useEffect(() => {
    let currPageOffset = 0
    window.addEventListener('scroll', () => {
      const pageOffset = window?.pageYOffset

      setIsScroll(pageOffset < currPageOffset || pageOffset === 0)

      setIsScrollTopOfPage(pageOffset === 0)

      currPageOffset = pageOffset
    })
  }, [])

  return (
    <header
      className={clsx('h-28 w-full duration-200 ease-in-out', {
        'sticky top-[-100%] left-0 z-10':
          isScrollTopOfPage === false && !isScroll,
        'backdrop-blur-md bg-darker-primary-alfa bg-blend-color sticky top-0 left-0 z-10':
          isScrollTopOfPage === false && !isScrollTopOfPage && isScroll
      })}
    >
      <div className="container px-16 h-full flex items-center justify-between">
        <div className="flex gap-14 items-center text-primary">
          <Logo />
          <p className="font-black">
            <span className="font-light">Est.</span> 2016
          </p>
        </div>
        <MenuBtn />
      </div>
    </header>
  )
}

export default Navbar
