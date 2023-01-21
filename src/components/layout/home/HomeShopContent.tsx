import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

import LeftOrnament from '../../assets/leftOrnament.svg'
import RightOrnament from '../../assets/rightOrnament.svg'
import ShopOrnament from '../../assets/ShopRectangle.svg'

import RoseWine from '/public/images/Rose-Kesten-boca-vina.png'
import MMXVIII from '/public/images/Pinot-Noir-Odsjaj-2.png'
import KestenWine from '/public/images/Crno-Kesten.png'
import whiteGrape from '/public/images/belo-grožđe.png'

const ShopWines = [
  {
    key: 1,
    imageUrl: RoseWine,
    name: 'Kesten',
    type: 'Rose',
    title: 'Pinot Noir',
    position: 'col-start-1 col-end-3'
  },
  {
    key: 1,
    imageUrl: MMXVIII,
    name: 'MMXVIII',
    type: 'Crno',
    title: 'Pinot Noir',
    position: 'col-start-2 col-end-4'
  },
  {
    key: 1,
    imageUrl: KestenWine,
    name: 'Kesten',
    type: 'Crno',
    title: 'Pinot Noir',
    position: 'col-start-3 col-end-5'
  }
]

const HomeShopContent = () => {
  return (
    <>
      <div className="container relative">
        <div className="absolute left-8 right-8 top-[-4.5%] flex items-center justify-between">
          <div className="w-[123px]">
            <LeftOrnament />
          </div>
          <span className="h-[1px] w-full bg-primary" />
          <div className="w-[288px]">
            <ShopOrnament />
          </div>
          <span className="h-[1px] w-full bg-primary" />
          <div className="w-[123px]">
            <RightOrnament />
          </div>
        </div>
        <div className="bg-gray-primary-alfa py-24 grid grid-cols-4 justify-items-center ">
          {ShopWines.map(({ key, imageUrl, name, type, title, position }) => {
            return (
              <div
                key={key}
                className={`max-w-[226px] flex flex-col items-center row-start-1 row-end-2 ${position}`}
              >
                <Image src={imageUrl} alt={name} quality={100} />
                <p className="font-light text-[22px]">
                  <span className="font-bold text-primary">{name}</span> {type}
                </p>
                <p className="font-light text-sm text-primary uppercase">
                  {title}
                </p>
              </div>
            )
          })}
        </div>
      </div>
      <motion.div
        initial={{ x: '-100%' }}
        whileInView={{ x: '0%' }}
        viewport={{ once: true, margin: '0px 0px -500px 0px' }}
        transition={{ duration: 0.8, ease: 'anticipate' }}
        style={{
          position: 'absolute',
          bottom: '-40%',
          left: '0',
          width: '30%',
          zIndex: '10'
        }}
      >
        <Image src={whiteGrape} alt="Belo grožđe" quality={100} />
      </motion.div>
    </>
  )
}

export default HomeShopContent
