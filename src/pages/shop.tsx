import React from 'react'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar, Controller, Navigation } from 'swiper'

import Navbar from 'src/components/layout/navbar/Navbar'

import RoseWine from '/public/images/Rose-Kesten-boca-vina.png'
import MMXVIII from '/public/images/Pinot-Noir-Odsjaj-2.png'
import KestenWine from '/public/images/Crno-Kesten.png'

import Arrow from 'src/assets/sliderArrow.svg'
import Image from 'next/image'
import useWindowWidth from 'src/hooks/useWindowWidth'

const wineList = [
  {
    key: 1,
    imageUrl: RoseWine,
    name: 'Kesten',
    type: 'Rose',
    title: 'Pinot Noir'
  },
  {
    key: 2,
    imageUrl: MMXVIII,
    name: 'MMXVIII',
    type: 'Crno',
    title: 'Pinot Noir'
  },
  {
    key: 3,
    imageUrl: KestenWine,
    name: 'Kesten',
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

const Shop = () => {
  const windowWidth = useWindowWidth()

  return (
    <div className="relative h-screen w-screen bg-[url('../../public/images/shop/shop-background.png')] bg-center bg-cover bg-no-repeat overflow-hidden">
      <Navbar />
      <main className="h-full w-full pb-20">
        <Swiper
          direction="horizontal"
          breakpoints={{
            767: {
              spaceBetween: 100,
              slidesPerView: 2
            },
            1200: {
              spaceBetween: 50,
              slidesPerView: 3
            },
            1500: {
              spaceBetween: 0,
              slidesPerView: 3
            }
          }}
          modules={[Scrollbar, Navigation]}
          navigation={{
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev'
          }}
          allowSlideNext
          allowSlidePrev
          className="mySwiper"
          style={{ padding: windowWidth > 767 ? '0 150px' : '0' }}
        >
          {wineList.map(({ key, imageUrl, name, type, title }, i) => {
            return (
              <SwiperSlide
                key={key}
                className="flex items-center justify-center w-fit"
              >
                <div className="flex flex-col gap-2 items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 60,
                      duration: 0.3,
                      delay: (i * 1.3) / 2
                    }}
                    className="max-w-[200px] sm:max-w-[250px] md:max-w-[300px]"
                  >
                    <Image src={imageUrl} alt={name} />
                  </motion.div>
                  <motion.p
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.3,
                      type: 'spring',
                      stiffness: 50
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
              </SwiperSlide>
            )
          })}
        </Swiper>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="swiper-prev absolute top-[50%] translate-y-[-50%] left-5 md:left-10 rounded-full border-[1px] border-primary w-11 sm:w-20 lg:w-28 h-11 sm:h-20 lg:h-28 z-10 cursor-pointer grid place-content-center"
        >
          <Arrow className="sm:scale-[2]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="swiper-next absolute top-[50%] translate-y-[-50%] right-5 md:right-10 rounded-full border-[1px] border-primary w-11 sm:w-20 lg:w-28 h-11 sm:h-20 lg:h-28 z-10 cursor-pointer grid place-content-center"
        >
          <Arrow className="sm:scale-[2] rotate-180" />
        </motion.div>
      </main>
    </div>
  )
}

export default Shop
