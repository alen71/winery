import React from 'react'
import { IWine } from 'src/type/wine.type'
import { create } from 'zustand'

type CartProps = {
  cartWines: IWine[]
}

const useCartItems = create<CartProps>(set => ({
  cartWines: []
}))

export default useCartItems
