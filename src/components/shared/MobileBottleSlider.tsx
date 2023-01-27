import Image from 'next/image'
import React, { useState } from 'react'

import RoseWine from '/public/images/Rose-Kesten-boca-vina.png'
import MMXVIII from '/public/images/Pinot-Noir-Odsjaj-2.png'
import KestenWine from '/public/images/Crno-Kesten.png'

import Arrow from 'src/assets/sliderArrow.svg'

type Props = {}

const shopWines = [
  {
    key: 1,
    imageUrl: RoseWine,
    name: 'Kesten',
    type: 'Rose',
    title: 'Pinot Noir'
  },
  {
    key: 2,
    imageUrl: KestenWine,
    name: 'Kesten',
    type: 'Crno',
    title: 'Pinot Noir'
  },
  {
    key: 3,
    imageUrl: MMXVIII,
    name: 'MMXVIII',
    type: 'Crno',
    title: 'Pinot Noir'
  },
  {
    key: 4,
    imageUrl: KestenWine,
    name: 'Kesten',
    type: 'Crno',
    title: 'Pinot Noir'
  },
  {
    key: 5,
    imageUrl: KestenWine,
    name: 'Kesten',
    type: 'Crno',
    title: 'Pinot Noir'
  }
]

const MobileBottlesSlider = ({}: Props) => {
  const [currDeg, setCurrDeg] = useState(72)
  const [rotateBottle, setRotateBottle] = useState(0)

  const test = (e: any) => {
    console.log(e)
  }

  return (
    <>
      <div
        className={`bg-gray-primary pb-16 pt-28 sm:py-24 relative h-[500px] overflow-hidden flex justify-center items-center z-[1]`}
      >
        <div
          className="relative w-[156px] h-full"
          style={{ perspective: '500px' }}
        >
          <div
            className={`absolute duration-1000 w-full`}
            style={{
              transformStyle: 'preserve-3d',
              transform: `rotateY(${currDeg - 72}deg)`
            }}
          >
            {shopWines.map(({ key, imageUrl, name, type, title }, i) => {
              const index = i + 1
              return (
                <div
                  key={key}
                  className="w-fit"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: `rotateY(${
                      72 * i
                    }deg) translateZ(60px) rotateY(-${72 * i}deg)`
                  }}
                >
                  <div
                    className={`w-[156px] absolute duration-1000`}
                    style={{ transform: `rotateY(${rotateBottle}deg)` }}
                  >
                    <Image src={imageUrl} alt={name} quality={100} />
                    {/* <p className="font-light text-lg lg:text-[22px]">
                      <span className="font-bold text-primary uppercase">
                        {name}
                      </span>{' '}
                      {type}
                    </p>
                    <p className="font-light text-xs text-primary uppercase">
                      {title}
                    </p> */}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div
          className="absolute left-5 w-9 h-9 bg-gray-bg rounded-full flex justify-center items-center"
          onClick={() => {
            setCurrDeg(currDeg + 72)
            setRotateBottle(rotateBottle - 72)
          }}
        >
          <Arrow />
        </div>
        <div
          className="absolute right-5 w-9 h-9 bg-gray-bg rounded-full rotate-180 flex justify-center items-center"
          onClick={() => {
            setCurrDeg(currDeg - 72)
            setRotateBottle(rotateBottle + 72)
          }}
        >
          <Arrow />
        </div>
      </div>
    </>
  )
}

export default MobileBottlesSlider
