import React from 'react'
import { IWine } from 'src/type/wine.type'
import { create } from 'zustand'
import { persist, StateStorage } from 'zustand/middleware'

export type ICartWine = IWine & {
  quantity: number
}

type CartProps = {
  cartWines: ICartWine[]
  setStoredWines: () => void
  addStoredWines: () => void
  updateCartWines: (newWinesArray: ICartWine[]) => void
  resetCart: () => void
  removeWineFromCart: (wine: ICartWine) => void
  addToCart: (cartWines: ICartWine[], wine: IWine, quantity: number) => void
}

const useCartItems = create<CartProps>()(
  persist(
    (set, get) => ({
      cartWines: [],
      setStoredWines() {
        set({
          cartWines: [...get().cartWines]
        })
      },
      addStoredWines() {
        set({
          cartWines: get().cartWines
        })
      },
      updateCartWines(newWinesArray) {
        set(() => ({
          cartWines: [...newWinesArray]
        }))
      },
      resetCart() {
        set(() => ({
          cartWines: []
        }))
      },
      removeWineFromCart(wine) {
        set(state => ({
          cartWines: [
            ...state.cartWines.filter(cartWine => cartWine.slug !== wine.slug)
          ]
        }))
      },
      addToCart(cartWines, wine, quantity) {
        // see if current wine is in cart
        const isWineInCart = cartWines.find(
          cartWine => cartWine.slug === wine.slug
        )

        // if current wine isn't in cart set it
        if (!isWineInCart) {
          set(state => ({
            cartWines: [
              ...state.cartWines,
              { ...wine, quantity: quantity }
            ] as ICartWine[]
          }))
          return
        }

        // if current wine is in cart change his quantity
        if (isWineInCart) {
          const index = cartWines.indexOf(isWineInCart)

          const updatedWineArray = cartWines.map(wine => {
            return isWineInCart.slug === wine.slug
              ? {
                  ...isWineInCart,
                  quantity: wine.quantity + quantity
                }
              : { ...wine }
          })
          set(() => ({
            cartWines: [...updatedWineArray]
          }))
        }
      }
    }),
    {
      name: 'cart' // name of the item in the storage (must be unique),
    }
  )
)

export default useCartItems
