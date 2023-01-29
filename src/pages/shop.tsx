import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar, Navigation } from 'swiper'

import Navbar from 'src/components/layout/navbar/Navbar'

import RoseWine from '/public/images/Rose-Kesten-boca-vina.png'
import MMXVIII from '/public/images/Pinot-Noir-Odsjaj-2.png'
import KestenWine from '/public/images/Crno-Kesten.png'

import Arrow from 'src/assets/sliderArrow.svg'
import useWindowWidth from 'src/hooks/useWindowWidth'

const wineList = [
  {
    key: 1,
    imageUrl: RoseWine,
    name: 'Kesten',
    type: 'Rose',
    title: 'Pinot Noir',
    href: '#'
  },
  {
    key: 2,
    imageUrl: MMXVIII,
    name: 'MMXVIII',
    type: 'Crno',
    title: 'Pinot Noir',
    href: '#'
  },
  {
    key: 3,
    imageUrl: KestenWine,
    name: 'Kesten',
    type: 'Crno',
    title: 'Pinot Noir',
    href: '#'
  },
  {
    key: 4,
    imageUrl: KestenWine,
    name: 'Kesten',
    type: 'Crno',
    title: 'Pinot Noir',
    href: '#'
  },
  {
    key: 5,
    imageUrl: KestenWine,
    name: 'Kesten',
    type: 'Crno',
    title: 'Pinot Noir',
    href: '#'
  }
]

const Shop = () => {
  const windowWidth = useWindowWidth()

  return (
    <div className="relative h-screen w-screen bg-[url('../../public/images/shop/shop-background.png')] bg-center bg-cover bg-no-repeat overflow-hidden">
      <Navbar />
      <main className="h-[90%] pb-20">
        <Swiper
          direction="horizontal"
          speed={1000}
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
          scrollbar={{
            el: '.custom-swiper-scrollbar',
            dragClass: 'custom-swiper-scrollbar-drag',
            draggable: true
          }}
          navigation={{
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev'
          }}
          allowSlideNext
          allowSlidePrev
          className="mySwiper"
          style={{ padding: windowWidth > 767 ? '0 120px' : '0' }}
        >
          {wineList.map(({ key, imageUrl, name, type, title, href }, i) => {
            return (
              <SwiperSlide
                key={key}
                className="flex items-center justify-center w-fit"
              >
                <Link
                  href={href}
                  className="flex flex-col items-center justify-center"
                >
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      type: 'spring',
                      stiffness: 50,
                      delay: (i * 1.5) / 2
                    }}
                    className="max-w-[200px] sm:max-w-[250px] md:max-w-[300px] "
                  >
                    <Image src={imageUrl} alt={name} />
                  </motion.div>
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.3,
                      type: 'spring',
                      stiffness: 50,
                      delay: (i * 1.5) / 2
                    }}
                    className="mb-2"
                  >
                    <motion.p
                      initial={{ x: 50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.4,
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
                  </motion.div>

                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.3,
                      type: 'spring',
                      stiffness: 50,
                      delay: (i * 1.5) / 2
                    }}
                  >
                    <motion.p
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.4,
                        type: 'spring',
                        stiffness: 60
                      }}
                      className="font-light text-xs text-primary uppercase"
                    >
                      {title}
                    </motion.p>
                  </motion.div>
                </Link>
              </SwiperSlide>
            )
          })}
        </Swiper>

        <motion.div
          initial={{ opacity: 0, x: '-200%' }}
          animate={{ opacity: 1, x: '0%' }}
          transition={{ duration: 0.6, ease: 'easeIn' }}
          className="swiper-prev absolute top-[50%] translate-y-[-50%] left-5 md:left-10 rounded-full border-[1px] border-primary w-11 sm:w-20 lg:w-28 h-11 sm:h-20 lg:h-28 z-10 cursor-pointer grid place-content-center"
        >
          <Arrow className="sm:scale-[2]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: '200%' }}
          animate={{ opacity: 1, x: '0%' }}
          transition={{ duration: 0.6, ease: 'easeIn' }}
          className="swiper-next absolute top-[50%] translate-y-[-50%] right-5 md:right-10 rounded-full border-[1px] border-primary w-11 sm:w-20 lg:w-28 h-11 sm:h-20 lg:h-28 z-10 cursor-pointer grid place-content-center"
        >
          <Arrow className="sm:scale-[2] rotate-180" />
        </motion.div>

        <div className="absolute left-[50%] bottom-10 h-1 w-[80%] lg:w-[800px] translate-x-[-50%]">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="custom-swiper-scrollbar w-full h-full rounded-lg overflow-hidden bg-white/25"
          >
            <div className="custom-swiper-scrollbar-drag h-full w-[100px] bg-white rounded-lg" />
          </motion.div>
        </div>
      </main>
    </div>
  )
}

export default Shop
