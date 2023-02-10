import React, { useEffect, useState } from 'react'
import clsx from 'clsx'

import Logo from '../../shared/Logo'
import MenuBtn from './MenuBtn'
import Menubar from './Menubar'
import useWindowWidth from 'src/hooks/useWindowWidth'

type NavbarProps = {
  wide?: boolean
}

const Navbar = ({ wide }: NavbarProps) => {
  const [isScroll, setIsScroll] = useState(false)
  const [isScrollTopOfPage, setIsScrollTopOfPage] = useState(true)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.querySelector('body')?.classList.remove('overflow-y-scroll')
      document.querySelector('body')?.classList.add('overflow-y-hidden')
    } else {
      document.querySelector('body')?.classList.add('overflow-y-scroll')
      document.querySelector('body')?.classList.remove('overflow-y-hidden')
    }
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
          'sticky top-[-100%] left-0 z-40':
            isScrollTopOfPage === false && !isScroll,
          'backdrop-blur-md bg-gray-primary-alfa bg-blend-color sticky top-0 left-0 z-40':
            isScrollTopOfPage === false && !isScrollTopOfPage && isScroll
        })}
      >
        <div
          className={clsx(
            'px-5 sm:px-10 h-full flex items-center justify-between',
            {
              container: !wide
            }
          )}
        >
          <div className="flex gap-8 lg:gap-14 items-center text-primary scale-[0.8] lg:scale-100">
            <Logo />
            <p className="font-black">
              <span className="font-light">Est.</span> 2016
            </p>
          </div>
          <MenuBtn toggleOpen={() => setOpen(true)} />
        </div>
      </header>
      <div
        className={clsx('fixed inset-0 bg-gray-bg/80 duration-500', {
          'z-[-1] opacity-0 pointer-events-none': !open,
          'z-[49] opacity-1': open
        })}
        onClick={() => setOpen(false)}
      />
      <Menubar open={open} toggleOpen={() => setOpen(false)} />
    </>
  )
}

export default Navbar
