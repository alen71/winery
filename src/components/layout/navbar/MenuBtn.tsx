import React, { useEffect, useState } from 'react'

import GrapeIcon from 'src/assets/menu-icon-grapes.svg'
import Menubar from './Menubar'

const MenuBtn = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.querySelector('html')?.classList.toggle('open')
  }, [open])

  return (
    <>
      <button
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <p className="uppercase font-black">Menu</p>
        <GrapeIcon />
      </button>
      <Menubar open={open} toggleOpen={() => setOpen(false)} />
    </>
  )
}

export default MenuBtn
