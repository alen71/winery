import { create } from 'zustand'

import { productsData } from 'src/data/products'
import { convertToSlug } from 'src/utils/helper'
import { IWine } from 'src/type/wine.type'

type vinesType = { vines: IWine[]; setSlug: (vines: IWine[]) => void }

const useProductList = create<vinesType>(set => ({
  vines: [],
  setSlug: (vines: IWine[]) => {
    set((): any => {
      vines: vines
    })
  }
}))

export default useProductList
