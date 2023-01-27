import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

import whiteGrape from '/public/images/belo-grožđe.png'
import WineBarrels from '/public/images/vinarija/david-goldman-27G8PF-fjrs-unsplash 1.jpg'

import Ornament from '../shared/Ornament'
import BottlesSlider from '../shared/BottlesSlider'
import MobileBottlesSlider from '../shared/MobileBottleSlider'
import NewsRow from '../shared/NewsRow'
import Title from '../shared/Title'
import ShopBtn from '../shared/ShopBtn'

const HomeShopContent = () => {
  return (
    <div className="container relative z-[1] ">
      <div className="grid gap-20 sm:gap-0 xl:grid-cols-2">
        <div className="relative bg-gray-primary border-b-[1px] border-primary pb-16 sm:pb-0">
          <Ornament />
          <MobileBottlesSlider />
          <div className="absolute bottom-[-10.5%] left-[50%]  sm:translate-x-0 sm:static w-fit mx-auto my-10">
            <ShopBtn />
          </div>
        </div>
        <div>
          <div className="xl:ml-28 flex flex-col h-96 xl:h-full bg-gray-primary">
            <div className="group relative overflow-hidden w-full h-72 lg:h-full">
              <Image
                src={WineBarrels}
                alt="Burad vinarije dumo"
                fill
                className="group-hover:scale-105 duration-300"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="px-5 sm:px-20 py-10 sm:py-16 flex flex-col justify-center">
              <Title type="h2" text="NAJNOVIJI ČLANKA" />
              <div className="w-10 h-[3px] bg-primary my-5" />
              <p className="mb-3">
                Finished her are its honoured drawings nor. Pretty see mutual
                thrown all not edward ten. Particular an boisterous up he
                reasonably frequently. Several any had enjoyed shewing studied
                two.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeShopContent
