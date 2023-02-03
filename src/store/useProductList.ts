import { create } from 'zustand'

import { productsData } from 'src/data/products'
import { convertToSlug } from 'src/utils/helper'
import { WineCategory } from 'src/type/wine.type'

type vinesType = {
  wines: WineCategory[]
  setSlug: (wines: WineCategory[]) => void
}

const useProductList = create<vinesType>(set => ({
  wines: productsData.map(product => {
    return { ...product, slug: convertToSlug(product.id) }
  }),
  setSlug: (wines: WineCategory[]) => {
    set((): any => {
      wines: wines
    })
  }
}))

export default useProductList
