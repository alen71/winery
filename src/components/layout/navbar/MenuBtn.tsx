import React from 'react'

import GrapeIcon from '../../assets/menu-icon-grapes.svg'

const MenuBtn = () => {
  return (
    <button className="flex items-center gap-2 cursor-pointer">
      <p className="uppercase font-black">Menu</p>
      <GrapeIcon />
    </button>
  )
}

export default MenuBtn
