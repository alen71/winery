import React, { useEffect, useState } from 'react'

import GrapeIcon from 'src/assets/menu-icon-grapes.svg'

type Props = {
  toggleOpen: () => void
}

const MenuBtn = ({ toggleOpen }: Props) => {
  return (
    <button
      className="flex items-center gap-2 cursor-pointer mr-2 sm:mr-0"
      onClick={toggleOpen}
    >
      <p className="uppercase font-black text-base lg:text-lg">Menu</p>
      <span className="scale-[0.8] md:scale-100">
        <GrapeIcon />
      </span>
    </button>
  )
}

export default MenuBtn
