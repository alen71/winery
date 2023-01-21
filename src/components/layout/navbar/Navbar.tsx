import { cva } from 'class-variance-authority'
import React from 'react'
import Logo from '../../shared/Logo'
import MenuBtn from './MenuBtn'

const Navbar = () => {
  const navStyle = cva('')

  return (
    <header className="container h-28">
      <div className="px-10 h-full flex items-center justify-between">
        <div className="flex gap-14 items-center">
          <Logo />
          <p className="text-primary font-black">
            <span className="font-light">Est.</span> 2016
          </p>
        </div>
        <MenuBtn />
      </div>
    </header>
  )
}

export default Navbar
