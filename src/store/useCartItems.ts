import { IWine } from 'src/type/wine.type'
import { create, useStore } from 'zustand'

export type ICartWine = IWine & {
  quantity: number
}

type CartProps = {
  cartWines: ICartWine[]
  updateCartWines: (newWinesArray: ICartWine[]) => void
  resetCart: () => void
  removeWineFromCart: (wine: ICartWine) => void
  addToCart: (cartWines: ICartWine[], wine: IWine, quantity: number) => void
  decreaseQuantity: (wine: ICartWine) => void
  increaseQuantity: (wine: ICartWine) => void
}

const useCartItems = create<CartProps>((set, get) => ({
  cartWines: [],
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
    const isWineInCart = cartWines.find(cartWine => cartWine.slug === wine.slug)

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
  },
  decreaseQuantity(wine) {
    const decreasedQuantity = wine.quantity - 1

    const cartWines = useCartItems.getState().cartWines

    if (decreasedQuantity < 1) {
      const updatedWines = cartWines.filter(
        cartWine => cartWine.slug !== wine.slug
      )

      updatedWines &&
        set(() => ({
          cartWines: [...updatedWines]
        }))
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

    set(() => ({
      cartWines: [...updatedWineQuantity]
    }))
  },
  increaseQuantity(wine: ICartWine) {
    const cartWines = useCartItems.getState().cartWines

    const updatedWineQuantity = cartWines.map(cartWine => {
      return cartWine.slug === wine.slug
        ? {
            ...cartWine,
            quantity: cartWine.quantity + 1
          }
        : { ...cartWine }
    })

    set(() => ({
      cartWines: [...updatedWineQuantity]
    }))
  }
}))

export default useCartItems
