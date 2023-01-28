export enum WineTypes {}

export enum WineColors {}

export enum WineMedals {}

export type IWine = {
  image: string
  name: string
  type: WineTypes
  color: WineColors
  medals: WineMedals
  age: number[]
  price: number
}
