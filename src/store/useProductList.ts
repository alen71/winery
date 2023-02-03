import { create } from 'zustand'

import { productsData } from 'src/data/products'
import { convertToSlug } from 'src/utils/helper'
import { IWine } from 'src/type/wine.type'

type VinesType = {
  wines: IWine[]
}

const useProductList = create<VinesType>(set => ({
  wines: productsData.map(product => {
    return {
      ...product,
      slug: convertToSlug(`${product.name} ${product.age} ${product.type}`)
    }
  })
}))

export default useProductList
