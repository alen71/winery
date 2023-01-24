import React, { useEffect, useState } from 'react'
import clsx from 'clsx'

import Logo from '../../shared/Logo'
import MenuBtn from './MenuBtn'
import Menubar from './Menubar'
import useWindowWidth from 'src/hooks/useWindowWidth'

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false)
  const [isScrollTopOfPage, setIsScrollTopOfPage] = useState(true)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.querySelector('html')?.classList.toggle('open')
  }, [open])

  useEffect(() => {
    let currPageOffset = 0
    window.addEventListener('scroll', () => {
      const pageOffset = window?.pageYOffset

      setIsScroll(pageOffset < currPageOffset || pageOffset === 0)

      setIsScrollTopOfPage(pageOffset === 0)

      currPageOffset = pageOffset
    })
  }, [])

  const width = useWindowWidth()

  return (
    <>
      <header
        className={clsx('h-20 lg:h-28 w-screen duration-200 ease-in-out', {
          'sticky top-[-100%] left-0 z-10':
            isScrollTopOfPage === false && !isScroll,
          'backdrop-blur-md bg-gray-primary-alfa bg-blend-color sticky top-0 left-0 z-10':
            isScrollTopOfPage === false && !isScrollTopOfPage && isScroll
        })}
      >
        <div className="container px-10 sm:px-16 h-full flex items-center justify-between">
          <div className="flex gap-8 lg:gap-14 items-center text-primary scale-[0.8] lg:scale-100">
            <Logo />
            <p className="font-black">
              <span className="font-light">Est.</span> 2016
            </p>
          </div>
          <MenuBtn toggleOpen={() => setOpen(true)} />
        </div>
      </header>
      <Menubar open={open} toggleOpen={() => setOpen(false)} />
    </>
  )
}

export default Navbar
