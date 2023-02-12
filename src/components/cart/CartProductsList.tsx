import Image from 'next/image'
import React, { useEffect } from 'react'

import ReadMoreBtn from 'src/components/shared/ReadMoreBtn'
import useCartItems from 'src/store/useCartItems'

import XIcon from 'src/assets/XIcon.svg'
import { IWine } from 'src/type/wine.type'
import useManageWineQuantity from 'src/hooks/useManageWineQuantity'
import useSendOrder from 'src/hooks/useSendOrder'

type Props = {}

const CartProductsList = (props: Props) => {
  const { cartWines, updateCartWines, removeWineFromCart, resetCart } =
    useCartItems()
  const { isSuccess } = useSendOrder()

  const totalCost = cartWines?.reduce(
    (accumulator: number, wine) => accumulator + wine.price * wine.quantity,
    0
  )

  const { increaseQuantity, decreaseQuantity } = useManageWineQuantity({
    cartWines,
    updateCartWines
  })

  return (
    <div className="flex-1 justify-self-end w-full md:max-w-[500px] h-full border-x-1 border-y-1 md:border-b-0 border-primary flex flex-col">
      <div className="md:overflow-y-scroll min-h-[400px] md:h-full w-full divide-y-1 divide-primary">
        {cartWines.map(wine => {
          return (
            <div key={wine.slug} className="flex py-6 px-8 gap-8 items-center">
              <div className="max-w-[36px] ">
                <Image src={wine.image} alt={wine.name} />
              </div>

              <div className="flex flex-col w-full items-center gap-6">
                <div className="flex justify-between items-center w-full">
                  <p className="text-base font-medium">
                    {wine.name} {wine.age} - {wine.type}{' '}
                    {wine.variety ? wine.variety : ''}
                  </p>
                  <div
                    className="scale-90 cursor-pointer"
                    onClick={() => removeWineFromCart(wine)}
                  >
                    <XIcon />
                  </div>
                </div>

                <div className="flex gap-14 w-full">
                  <div className="w-full border-b-1 border-gray-primary text-primary pb-1 flex justify-between items-center">
                    <div
                      className="w-3 h-3 grid place-content-center cursor-pointer"
                      onClick={() => decreaseQuantity(wine)}
                    >
                      <span className="bg-primary h-[1px] w-3 " />
                    </div>

                    <p className="font-semibold text-xl">{wine.quantity}</p>

                    <div
                      className="relative flex justify-center items-center w-3 h-3 cursor-pointer"
                      onClick={() => increaseQuantity(wine)}
                    >
                      <span className="absolute bg-primary h-[1px] w-3" />
                      <span className="absolute bg-primary h-[1px] w-3 rotate-90" />
                    </div>
                  </div>

                  <p className="w-full border-b-1 border-gray-primary text-right pb-1">
                    {wine.price * wine.quantity} rsd
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="bg-primary text-white flex justify-between px-8 py-5 w-full text-xl md:text-2xl font-semibold">
        <span>Ukupno:</span>
        <span>{totalCost} rsd</span>
      </div>
      <div className="p-8">
        <p className="mb-6">Nedostaje Vam jos proizvoda?</p>

        <ReadMoreBtn
          text="Nastavite kupovinu"
          href="/shop"
          ariaLabel="Nastavite kupovinu u našem šopu"
        />
      </div>
    </div>
  )
}

export default CartProductsList
