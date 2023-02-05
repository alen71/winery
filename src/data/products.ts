import {
  Group,
  IWine,
  Variety,
  WineCategory,
  WineMedals,
  WineTypes
} from 'src/type/wine.type'

import DumoPinotNoir2015 from '/public/images/vina/Pinot Noir 2015.png'
import DumoPinotNoir2016 from '/public/images/vina/Pinot Noir 2016.png'
import DumoPinotNoir2017 from '/public/images/vina/Pinot Noir 2017.png'
import DumoPinotNoir2018 from '/public/images/vina/Pinot Noir 2018.png'
import DumoPinotNoir2019 from '/public/images/vina/Pinot Noir 2019.png'
import DumoPinotNoir2020 from '/public/images/vina/Pinot Noir 2020.png'
import DumoRose2021 from '/public/images/vina/Dumo Rose 2021.png'
import KestenPinotGrigioBarik2020 from '/public/images/vina/Pinot Grigio 2022.png'
import KestenPinotNoir2020 from '/public/images/vina/Kesten Pinot Noir - 2020.png'
import KestenPinotNoirBarik2020 from '/public/images/vina/Kesten Pinot Noir 2020 Barik.png'

export const productsData: IWine[] = [
  {
    slug: '',
    age: 2021,
    image: DumoRose2021,
    name: 'Dumo',
    type: WineTypes.ROSE,
    medals: [WineMedals.BIWCF_GOLD_2021],
    description:
      'Finished her are its honoured drawings nor. Pretty see mutual thrown all not edward ten. Particular an boisterous up he reasonably frequently. Several any had enjoyed shewing studied two. Up intention remainder sportsmen behaviour ye happiness. Few again any alone style added abode ask.',
    price: 1700,
    specs: {
      alcohol: '13%',
      maintenance: '10 meseci u Francuskom hrastu',
      drinkOn: '14-16C',
      manufactured: 2000
    },
    group: Group.DUMO_ROSE
  },
  {
    slug: '',
    age: 2015,
    image: DumoPinotNoir2015,
    name: 'Dumo',
    type: WineTypes.PINOT_NOIR,
    medals: [
      WineMedals.AWC_SILVER_2018,
      WineMedals.DECANTER_SILVER_2017,
      WineMedals.BIWCF_GOLD_2020
    ],
    description:
      'Finished her are its honoured drawings nor. Pretty see mutual thrown all not edward ten. Particular an boisterous up he reasonably frequently. Several any had enjoyed shewing studied two. Up intention remainder sportsmen behaviour ye happiness. Few again any alone style added abode ask.',
    price: 1700,
    specs: {
      alcohol: '13%',
      maintenance: '10 meseci u Francuskom hrastu',
      drinkOn: '14-16C',
      manufactured: 2000
    },
    group: Group.DUMO_PINOT_NOIR
  },
  {
    slug: '',
    age: 2016,
    image: DumoPinotNoir2016,
    name: 'Dumo',
    type: WineTypes.PINOT_NOIR,
    medals: [
      WineMedals.AWC_SILVER_2018,
      WineMedals.DECANTER_SILVER_2017,
      WineMedals.BIWCF_GOLD_2020
    ],
    description:
      'Finished her are its honoured drawings nor. Pretty see mutual thrown all not edward ten. Particular an boisterous up he reasonably frequently. Several any had enjoyed shewing studied two. Up intention remainder sportsmen behaviour ye happiness. Few again any alone style added abode ask.',
    price: 1700,
    specs: {
      alcohol: '13%',
      maintenance: '10 meseci u Francuskom hrastu',
      drinkOn: '14-16C',
      manufactured: 2000
    },
    group: Group.DUMO_PINOT_NOIR
  },
  {
    slug: '',
    age: 2017,
    image: DumoPinotNoir2017,
    name: 'Dumo',
    type: WineTypes.PINOT_NOIR,
    medals: [
      WineMedals.AWC_SILVER_2018,
      WineMedals.DECANTER_SILVER_2017,
      WineMedals.BIWCF_GOLD_2020
    ],
    description:
      'Finished her are its honoured drawings nor. Pretty see mutual thrown all not edward ten. Particular an boisterous up he reasonably frequently. Several any had enjoyed shewing studied two. Up intention remainder sportsmen behaviour ye happiness. Few again any alone style added abode ask.',
    price: 1700,
    specs: {
      alcohol: '13%',
      maintenance: '10 meseci u Francuskom hrastu',
      drinkOn: '14-16C',
      manufactured: 2000
    },
    group: Group.DUMO_PINOT_NOIR
  },
  {
    slug: '',
    age: 2018,
    image: DumoPinotNoir2018,
    name: 'Dumo',
    type: WineTypes.PINOT_NOIR,
    medals: [
      WineMedals.AWC_SILVER_2018,
      WineMedals.DECANTER_SILVER_2017,
      WineMedals.BIWCF_GOLD_2020
    ],
    description:
      'Finished her are its honoured drawings nor. Pretty see mutual thrown all not edward ten. Particular an boisterous up he reasonably frequently. Several any had enjoyed shewing studied two. Up intention remainder sportsmen behaviour ye happiness. Few again any alone style added abode ask.',
    price: 1700,
    specs: {
      alcohol: '13%',
      maintenance: '10 meseci u Francuskom hrastu',
      drinkOn: '14-16C',
      manufactured: 2000
    },
    group: Group.DUMO_PINOT_NOIR
  },
  {
    slug: '',
    age: 2019,
    image: DumoPinotNoir2019,
    name: 'Dumo',
    type: WineTypes.PINOT_NOIR,
    medals: [
      WineMedals.AWC_SILVER_2018,
      WineMedals.DECANTER_SILVER_2017,
      WineMedals.BIWCF_GOLD_2020
    ],
    description:
      'Finished her are its honoured drawings nor. Pretty see mutual thrown all not edward ten. Particular an boisterous up he reasonably frequently. Several any had enjoyed shewing studied two. Up intention remainder sportsmen behaviour ye happiness. Few again any alone style added abode ask.',
    price: 1700,
    specs: {
      alcohol: '13%',
      maintenance: '10 meseci u Francuskom hrastu',
      drinkOn: '14-16C',
      manufactured: 2000
    },
    group: Group.DUMO_PINOT_NOIR
  },
  {
    slug: '',
    age: 2020,
    image: DumoPinotNoir2020,
    name: 'Dumo',
    type: WineTypes.PINOT_NOIR,
    medals: [
      WineMedals.AWC_SILVER_2018,
      WineMedals.DECANTER_SILVER_2017,
      WineMedals.BIWCF_GOLD_2020
    ],
    description:
      'Finished her are its honoured drawings nor. Pretty see mutual thrown all not edward ten. Particular an boisterous up he reasonably frequently. Several any had enjoyed shewing studied two. Up intention remainder sportsmen behaviour ye happiness. Few again any alone style added abode ask.',
    price: 1700,
    specs: {
      alcohol: '13%',
      maintenance: '10 meseci u Francuskom hrastu',
      drinkOn: '14-16C',
      manufactured: 2000
    },
    group: Group.DUMO_PINOT_NOIR
  },
  {
    slug: '',
    age: 2020,
    image: KestenPinotGrigioBarik2020,
    name: 'Kesten',
    type: WineTypes.PINOT_GRIGIO,
    medals: [],
    description:
      'Finished her are its honoured drawings nor. Pretty see mutual thrown all not edward ten. Particular an boisterous up he reasonably frequently. Several any had enjoyed shewing studied two. Up intention remainder sportsmen behaviour ye happiness. Few again any alone style added abode ask.',
    price: 1700,
    specs: {
      alcohol: '13%',
      maintenance: '10 meseci u Francuskom hrastu',
      drinkOn: '14-16C',
      manufactured: 2000
    },
    variety: Variety.BARIK,
    group: Group.DUMO_PINOT_GRIGIO
  },
  {
    slug: '',
    age: 2020,
    image: KestenPinotNoir2020,
    name: 'Kesten',
    type: WineTypes.PINOT_NOIR,
    medals: [WineMedals.BIWCF_BRONZE_2020, WineMedals.DECANTER_BRONZE_2020],
    description:
      'Finished her are its honoured drawings nor. Pretty see mutual thrown all not edward ten. Particular an boisterous up he reasonably frequently. Several any had enjoyed shewing studied two. Up intention remainder sportsmen behaviour ye happiness. Few again any alone style added abode ask.',
    price: 1700,
    specs: {
      alcohol: '13%',
      maintenance: '10 meseci u Francuskom hrastu',
      drinkOn: '14-16C',
      manufactured: 2000
    },
    group: Group.KESTEN_PINOT_NOIR
  },
  {
    slug: '',
    age: 2020,
    image: KestenPinotNoirBarik2020,
    name: 'Kesten',
    type: WineTypes.PINOT_NOIR,
    medals: [WineMedals.BIWCF_BRONZE_2020, WineMedals.DECANTER_BRONZE_2020],
    description:
      'Finished her are its honoured drawings nor. Pretty see mutual thrown all not edward ten. Particular an boisterous up he reasonably frequently. Several any had enjoyed shewing studied two. Up intention remainder sportsmen behaviour ye happiness. Few again any alone style added abode ask.',
    price: 1700,
    specs: {
      alcohol: '13%',
      maintenance: '10 meseci u Francuskom hrastu',
      drinkOn: '14-16C',
      manufactured: 2000
    },
    variety: Variety.BARIK,
    group: Group.KESTEN_PINOT_NOIR
  }
]
