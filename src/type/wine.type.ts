export enum WineTypes {
  PINOT_NOIR = 'Pinot Noir',
  PINOT_GRIGIO = 'Pinot Grigio'
}

export enum WineColors {
  BLACK = 'crno',
  ROSE = 'rose'
}

export enum Variety {
  BARIK = 'Barik'
}

export enum WineMedals {
  AWC_SILVER_2018 = '/public/images/medals/awc-silver-2018.png',
  BIWCF_GOLD_2020 = '/public/images/medals/biwcf-gold-2020.png',
  BIWCF_GOLD_2021 = '/public/images/medals/biwcf-gold-2021.png',
  BIWCF_BRONZE_2020 = '/public/images/medals/biwfc-bronze-2020.png',
  DECANTER_BRONZE_2020 = '/public/images/medals/decanter-bronze-2020.png',
  DECANTER_SILVER_2017 = '/public/images/medals/decanter-silver-2017.png'
}

export type IWineSpecs = {
  alcohol: string
  manufactured: number
  maintenance: string
  drinkOn: string
}

export type IWine = {
  age: number
  image: string
  name: string
  type: WineTypes
  color: WineColors
  medals: WineMedals[]
  description: string
  price: number
  variety?: Variety
  specs: IWineSpecs
}

export type WineList = {
  id: string
  featuredImage: string
  wines: IWine[]
}
