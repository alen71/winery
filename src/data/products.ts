import useProductList from 'src/store/useProductList'
import { IWine, WineColors, WineTypes } from 'src/type/wine.type'
import { convertToSlug } from 'src/utils/helper'

export const productsData: IWine[] = [
  {
    id: 'Dumo Pinot Noir',
    age: 2019,
    image: '',
    name: 'Dumo',
    type: WineTypes.PINOT_NOIR,
    color: WineColors.BLACK,
    medals: [],
    description:
      'Finished her are its honoured drawings nor. Pretty see mutual thrown all not edward ten. Particular an boisterous up he reasonably frequently. Several any had enjoyed shewing studied two. Up intention remainder sportsmen behaviour ye happiness. Few again any alone style added abode ask.',
    price: 1700,
    specs: {
      alcohol: '13%',
      maintenance: '10 meseci u Francuskom hrastu',
      drinkOn: '14-16C',
      manufactured: 2000
    }
  }
]
