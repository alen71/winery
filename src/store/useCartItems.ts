import React from 'react'
import { IWine } from 'src/type/wine.type'
import { create } from 'zustand'

export type ICartWine = IWine & {
  quantity: number
}

type CartProps = {
  cartWines: ICartWine[]
  newWine: ICartWine
  addWine: (newWine: ICartWine) => void
  updateCartWines: (newWinesArray: ICartWine[]) => void
}

const useCartItems = create<CartProps>(set => ({
  cartWines: [],
  newWine: {} as ICartWine,
  addWine(newWine) {
    set(state => ({
      ...state,
      cartWines: [...state.cartWines, newWine] as ICartWine[]
    }))
  },
  updateCartWines(newWinesArray) {
    set(() => ({
      cartWines: [...newWinesArray]
    }))
  }
}))

export default useCartItems
