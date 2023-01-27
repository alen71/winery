import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

import RoseWine from '/public/images/Rose-Kesten-boca-vina.png'
import MMXVIII from '/public/images/Pinot-Noir-Odsjaj-2.png'
import KestenWine from '/public/images/Crno-Kesten.png'

import Arrow from 'src/assets/sliderArrow.svg'
import clsx from 'clsx'
import { BOTTLES_SLIDER_DEGREE } from 'src/utils/const'
import Overlay from './Overlay'

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
  const [currDeg, setCurrDeg] = useState(BOTTLES_SLIDER_DEGREE)
  const [rotateBottle, setRotateBottle] = useState(0)
  const [focusedBottle, setFocusedBottle] = useState(1)

  const wineBottles = shopWines.length + 1

  const prevBottle = () => {
    setCurrDeg(currDeg + BOTTLES_SLIDER_DEGREE)
    setRotateBottle(rotateBottle - BOTTLES_SLIDER_DEGREE)

    let newFocusedBottle = focusedBottle - 1

    if (newFocusedBottle === wineBottles) {
      newFocusedBottle = 1
    }

    if (newFocusedBottle < 1) {
      newFocusedBottle = wineBottles - 1
    }

    setFocusedBottle(newFocusedBottle)
  }

  const nextBottle = () => {
    setCurrDeg(currDeg - BOTTLES_SLIDER_DEGREE)
    setRotateBottle(rotateBottle + BOTTLES_SLIDER_DEGREE)

    let newFocusedBottle = focusedBottle + 1

    if (newFocusedBottle === wineBottles) {
      newFocusedBottle = 1
    }

    if (newFocusedBottle < 1) {
      newFocusedBottle = wineBottles - 1
    }

    setFocusedBottle(newFocusedBottle)
  }

  return (
    <>
      <div
        className={`pt-28 relative h-[430px] sm:h-[500px] overflow-hidden flex justify-center items-center z-[1]`}
      >
        <div
          className="relative w-[126px] sm:w-[156px] h-full"
          style={{ perspective: '450px' }}
        >
          <div
            className={`absolute duration-1000 w-full flex`}
            style={{
              transformStyle: 'preserve-3d',
              transform: `rotateY(${currDeg - BOTTLES_SLIDER_DEGREE}deg)`
            }}
          >
            {shopWines.map(({ key, imageUrl, name, type, title }, i) => {
              const index = i + 1
              return (
                <div
                  key={key}
                  className="w-fit relative"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: `rotateY(${
                      BOTTLES_SLIDER_DEGREE * i
                    }deg) translateZ(100px) rotateY(-${
                      BOTTLES_SLIDER_DEGREE * i
                    }deg)`
                  }}
                >
                  <div
                    className={clsx(
                      `w-[126px] sm:w-[156px] absolute duration-1000 flex flex-col items-center`
                    )}
                    style={{ transform: `rotateY(${rotateBottle}deg)` }}
                  >
                    <div
                      className={`${
                        focusedBottle !== key ? 'opacity-100' : 'opacity-0'
                      } duration-[800ms]`}
                    >
                      <Overlay bottle="dark" />
                    </div>
                    <Image src={imageUrl} alt={name} quality={100} />
                    <div
                      className={clsx(
                        'absolute -bottom-7 text-center duration-500',
                        {
                          'opacity-100': focusedBottle === key,
                          'opacity-0': focusedBottle !== key
                        }
                      )}
                    >
                      <motion.p
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.3,
                          type: 'spring',
                          stiffness: 60
                        }}
                        className="font-light text-lg lg:text-[22px]"
                      >
                        <span className="font-bold text-primary uppercase">
                          {name}
                        </span>{' '}
                        {type}
                      </motion.p>
                      <motion.p
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.3,
                          type: 'spring',
                          stiffness: 60
                        }}
                        className="font-light text-xs text-primary uppercase"
                      >
                        {title}
                      </motion.p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <motion.div
          initial={{ x: '-100%' }}
          whileInView={{ x: '0%' }}
          transition={{ duration: 0.4, type: 'spring' }}
          viewport={{ margin: '-100px 0px 0px 0px' }}
          className="absolute left-0 w-[52px] sm:w-[72px] h-32 sm:h-44 overflow-hidden flex items-center"
        >
          <div className="absolute right-5 rotate-45 bg-gray-bg h-32 w-32 rounded-tr-3xl flex items-center">
            <div
              className="absolute top-3 sm:top-4 -rotate-45 right-3 sm:right-4 w-7 sm:w-9 h-7 sm:h-9 border-[1px] border-primary rounded-full flex justify-center items-center cursor-pointer"
              onClick={prevBottle}
            >
              <Arrow />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: '100%' }}
          whileInView={{ x: '0%' }}
          transition={{ duration: 0.4, type: 'spring' }}
          viewport={{ margin: '-100px 0px 0px 0px' }}
          className="absolute right-0 w-[52px] sm:w-[72px] h-44 overflow-hidden flex items-center"
        >
          <div className="absolute left-5 rotate-45 bg-gray-bg h-32 w-32 rounded-bl-3xl flex items-center">
            <div
              className="absolute bottom-3 sm:bottom-4 rotate-[135deg] left-3 sm:left-4 w-7 sm:w-9 h-7 sm:h-9 border-[1px] border-primary rounded-full  flex justify-center items-center cursor-pointer"
              onClick={nextBottle}
            >
              <Arrow />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default MobileBottlesSlider
