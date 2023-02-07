import React from 'react'

import ShopIcon from 'src/assets/cartIcon.svg'
import useCartItems from 'src/store/useCartItems'

const CartIcon = () => {
  const { cartWines } = useCartItems()

  return (
    <div className="fixed bottom-10 right-10 z-10 w-[73px] h-[73px] rounded-full border-2 border-primary bg-white flex items-center justify-center cursor-pointer">
      <div className="absolute -left-1 -top-1 w-6 h-6 bg-primary rounded-full grid place-content-center text-xs ">
        <div className="absolute left-0 top-0 w-full h-full bg-primary rounded-full animate-ping z-[1]" />
        <span className="z-[2]">{cartWines.length}</span>
      </div>
      <ShopIcon />
    </div>
  )
}

export default CartIcon
