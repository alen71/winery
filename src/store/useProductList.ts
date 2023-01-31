import { create } from 'zustand'

import { WineList } from 'src/type/wine.type'
import { productsData } from 'src/data/products'
import { convertToSlug } from 'src/utils/helper'

type vinesType = { vines: WineList[]; setSlug: (vines: WineList[]) => void }

const useProductList = create<vinesType>(set => ({
  vines: [],
  setSlug: (vines: WineList[]) => {
    set((): any => {
      vines: vines
    })
  }
}))

export default useProductList
