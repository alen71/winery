import React from 'react'
import Logo from '../../shared/Logo'
import MenuBtn from './MenuBtn'

const Navbar = () => {
  return (
    <header className="container h-28">
      <div className="px-10 h-full flex items-center justify-between">
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
