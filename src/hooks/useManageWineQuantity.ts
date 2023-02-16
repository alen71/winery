import React, { useCallback } from 'react'
import { ICartWine } from 'src/store/useCartItems'

type Props = {
  cartWines: ICartWine[]
  updateCartWines: (newWinesArray: ICartWine[]) => void
}

const useManageWineQuantity = ({ cartWines, updateCartWines }: Props) => {
  const increaseQuantity = useCallback(
    (wine: ICartWine) => {
      const updatedWineQuantity = cartWines.map(cartWine => {
        return cartWine.slug === wine.slug
          ? {
              ...cartWine,
              quantity: cartWine.quantity + 1
            }
          : { ...cartWine }
      })

      updateCartWines(updatedWineQuantity)
    },
    [cartWines, updateCartWines]
  )

  const decreaseQuantity = useCallback(
    (wine: ICartWine) => {
      const decreasedQuantity = wine.quantity - 1

      if (decreasedQuantity < 1) {
        const updatedWines = cartWines.filter(
          cartWine => cartWine.slug !== wine.slug
        )

        updatedWines && updateCartWines(updatedWines)
        return
      }

      const updatedWineQuantity = cartWines.map(cartWine => {
        return cartWine.slug === wine.slug
          ? {
              ...cartWine,
              quantity: decreasedQuantity
            }
          : { ...cartWine }
      })

      updateCartWines(updatedWineQuantity)
    },
    [cartWines, updateCartWines]
  )

  return { increaseQuantity, decreaseQuantity }
}

export default useManageWineQuantity
