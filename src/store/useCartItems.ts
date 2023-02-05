import React from 'react'
import { create } from 'zustand'

const useCartItems = create(set => ({
  cartWines: []
}))

export default useCartItems
