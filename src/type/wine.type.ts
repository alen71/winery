import { StaticImageData } from 'next/image'

import awcSilver2018 from '/public/images/medals/awc-silver-2018.png'
import biwfcGold2020 from '/public/images/medals/biwcf-gold-2020.png'
import biwfcGold2021 from '/public/images/medals/biwfc-gold-2021.png'
import biwfcBronze2020 from '/public/images/medals/biwfc-bronze-2020.png'
import decanterBronze2020 from '/public/images/medals/decanter-bronze-2020.png'
import decanterSilver2017 from '/public/images/medals/decanter-silver-2017.png'

export enum WineTypes {
  PINOT_NOIR = 'Pinot Noir',
  PINOT_GRIGIO = 'Pinot Grigio',
  ROSE = 'Rose'
}

export enum Variety {
  BARIK = 'Barik'
}

export const WineMedals = {
  AWC_SILVER_2018: awcSilver2018,
  BIWCF_GOLD_2020: biwfcGold2020,
  BIWCF_GOLD_2021: biwfcGold2021,
  BIWCF_BRONZE_2020: biwfcBronze2020,
  DECANTER_BRONZE_2020: decanterBronze2020,
  DECANTER_SILVER_2017: decanterSilver2017
}

export enum Group {
  DUMO_PINOT_NOIR = 'Dumo_Pinot_Noir',
  KESTEN_PINOT_NOIR = 'Kesten_Pinot_Noir',
  DUMO_PINOT_GRIGIO = 'Dumo_Pinot_Grigio',
  DUMO_ROSE = 'Dumo_Rose'
}

export enum SpecsNames {
  ALCOHOL = 'alkohol',
  MANUFACTURED = 'proizvedeno u seriji',
  MAINTENANCE = 'odležavanje',
  DRINK_ON = 'piti na'
}

export type IWineSpecs = {
  [SpecsNames.ALCOHOL]: string
  [SpecsNames.MANUFACTURED]: number
  [SpecsNames.MAINTENANCE]: string
  [SpecsNames.DRINK_ON]: string
}

export type IWine = {
  age: number
  image: StaticImageData
  name: string
  type: WineTypes
  medals: StaticImageData[]
  description: string
  price: number
  specs: IWineSpecs
  group: Group
  slug: string
  variety?: Variety
  orgNum?: number
  archived?: boolean
  sold?: boolean
}

export type WineCategory = {
  id: string
  wine: IWine[]
}
