import { create } from 'zustand'

import { productsData } from 'src/data/products'
import { convertToSlug } from 'src/utils/helper'
import { IWine } from 'src/type/wine.type'

type VinesType = {
  wines: IWine[]
}

const useProductList = create<VinesType>(set => ({
  wines: productsData.map((product, i) => {
    const isVariety = product.variety
      ? `${product.name} ${product.age} ${product.type} ${product.variety}`
      : `${product.name} ${product.age} ${product.type}`
    return {
      ...product,
      slug: convertToSlug(isVariety),
      orgNum: i + 1
    }
  })
}))

export default useProductList
