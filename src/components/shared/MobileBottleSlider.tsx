import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

import { BOTTLES_SLIDER_DEGREE } from 'src/utils/const'
import Overlay from './Overlay'
import useProductList from 'src/store/useProductList'
import WinesSliderButton from './WinesSliderButton'
import useWindowWidth from 'src/hooks/useWindowWidth'

const MobileBottlesSlider = () => {
  const { wines } = useProductList()
  const width = useWindowWidth()
  const [currDeg, setCurrDeg] = useState(BOTTLES_SLIDER_DEGREE)
  const [rotateBottle, setRotateBottle] = useState(0)
  const [focusedBottle, setFocusedBottle] = useState(0)

  const wineBottles = wines.length

  const prevBottle = () => {
    setCurrDeg(currDeg + BOTTLES_SLIDER_DEGREE)
    setRotateBottle(rotateBottle - BOTTLES_SLIDER_DEGREE)

    let newFocusedBottle = focusedBottle - 1

    if (newFocusedBottle === wineBottles) {
      newFocusedBottle = 0
    }
    if (newFocusedBottle < 0) {
      newFocusedBottle = wineBottles - 1
    }
    setFocusedBottle(newFocusedBottle)
  }

  const nextBottle = () => {
    setCurrDeg(currDeg - BOTTLES_SLIDER_DEGREE)
    setRotateBottle(rotateBottle + BOTTLES_SLIDER_DEGREE)

    let newFocusedBottle = focusedBottle + 1

    if (newFocusedBottle === wineBottles) {
      newFocusedBottle = 0
    }
    if (newFocusedBottle < 0) {
      newFocusedBottle = wineBottles
    }
    setFocusedBottle(newFocusedBottle)
  }

  return (
    <>
      <div
        className={`pt-36 relative h-[430px] sm:h-[400px] flex justify-center items-center z-[1]`}
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
            {wines.map(({ image, name, type, age, variety }, i) => {
              return (
                <div
                  key={`${name} ${type} ${age} ${variety && variety}`}
                  className="w-fit relative"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: `rotateY(${
                      BOTTLES_SLIDER_DEGREE * i
                    }deg) translateZ(${
                      width < 641 ? '120px' : '150px'
                    }) rotateY(-${BOTTLES_SLIDER_DEGREE * i}deg)`
                  }}
                >
                  <div
                    className={clsx(
                      `w-[126px] sm:w-[156px] absolute duration-1000 flex flex-col items-center`
                    )}
                    style={{ transform: `rotateY(${rotateBottle}deg)` }}
                  >
                    <div
                      className={clsx('duration-[800ms]', {
                        'opacity-100': focusedBottle !== i,
                        'opacity-0': focusedBottle === i
                      })}
                    >
                      <Overlay bottle="dark" />
                    </div>
                    <div className=" max-w-[55px] sm:max-w-[70px]">
                      <Image src={image} alt={name} quality={100} />
                    </div>
                    <div
                      className={clsx(
                        'absolute -bottom-20 sm:-bottom-14 text-center duration-500',
                        {
                          'opacity-100': focusedBottle === i,
                          'opacity-0 pointer-events-none': focusedBottle !== i
                        }
                      )}
                    >
                      <motion.p
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.3,
                          type: 'spring',
                          stiffness: 80
                        }}
                        className="font-light text-base sm:text-lg lg:text-[22px]"
                      >
                        <span className="font-bold text-primary uppercase">
                          {name}
                        </span>{' '}
                        {age}
                      </motion.p>
                      <motion.p
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.3,
                          type: 'spring',
                          stiffness: 80
                        }}
                        className="font-light text-[10px] sm:text-xs text-primary uppercase"
                      >
                        {type}
                      </motion.p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <WinesSliderButton side="left" action={prevBottle} color="primary" />
      <WinesSliderButton side="right" action={nextBottle} color="primary" />
    </>
  )
}

export default MobileBottlesSlider
