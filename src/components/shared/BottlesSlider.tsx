import Image from 'next/image'
import React, { useState } from 'react'

import RoseWine from '/public/images/Rose-Kesten-boca-vina.png'
import MMXVIII from '/public/images/Pinot-Noir-Odsjaj-2.png'
import KestenWine from '/public/images/Crno-Kesten.png'
import clsx from 'clsx'

type Props = {}

const shopWines = [
  {
    key: 1,
    imageUrl: RoseWine,
    name: 'Kesten',
    type: 'Rose',
    title: 'Pinot Noir',
    position: 'md:col-start-1 md:col-end-3'
  },
  {
    key: 2,
    imageUrl: MMXVIII,
    name: 'MMXVIII',
    type: 'Crno',
    title: 'Pinot Noir',
    position: 'md:col-start-2 md:col-end-4'
  },
  {
    key: 3,
    imageUrl: KestenWine,
    name: 'Kesten',
    type: 'Crno',
    title: 'Pinot Noir',
    position: 'md:col-start-3 md:col-end-5'
  }
]

const BottlesSlider = ({}: Props) => {
  const [focusBottle, setFocusBottle] = useState(2)

  return (
    <>
      <div
        className={`bg-gray-primary py-16 sm:py-24 grid md:grid-cols-4 justify-items-center gap-8 md:gap-0`}
      >
        {shopWines.map(({ key, imageUrl, name, type, title, position }) => {
          return (
            <div
              key={key}
              className={`max-w-[156px] lg:max-w-[226px] flex flex-col items-center md:row-start-1 md:row-end-2 ${position}`}
            >
              <Image src={imageUrl} alt={name} quality={100} />
              <p className="font-light text-lg lg:text-[22px]">
                <span className="font-bold text-primary uppercase">{name}</span>{' '}
                {type}
              </p>
              <p className="font-light text-xs text-primary uppercase">
                {title}
              </p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default BottlesSlider
