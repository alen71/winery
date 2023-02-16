import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar, Navigation } from 'swiper'
import { useRouter } from 'next/router'

import Navbar from 'src/components/layout/navbar/Navbar'

import Arrow from 'src/assets/sliderArrow.svg'
import useProductList from 'src/store/useProductList'
import WinesSliderButton from 'src/components/shared/WinesSliderButton'
import WinesTransition from 'src/components/layout/WinesTransition'

const Shop = () => {
  const router = useRouter()
  const [animation, setAnimation] = useState(false)
  const [curSlide, setCurSlide] = useState(1)
  const { wines } = useProductList()

  const prevBottle = () => {
    const decreaseSlide = curSlide - 1
    setCurSlide(decreaseSlide === 0 ? 1 : decreaseSlide)
  }

  const nextBottle = () => {
    const increaseSlide = curSlide + 1
    if (increaseSlide > wines.length) return
    setCurSlide(increaseSlide)
  }

  const prevSlideBtnVariants = {
    hidden: { opacity: 0, x: '-200%', scale: 0.9 },
    visible: {
      opacity: 1,
      x: '0%',
      scale: 0.9,
      transition: { duration: 0.6, ease: 'easeIn' }
    },
    hover: { scale: 1, transition: { duration: 0.3 } }
  }

  const nextSlideBtnVariants = {
    hidden: { opacity: 0, x: '200%', scale: 0.9 },
    visible: {
      opacity: 1,
      x: '0%',
      scale: 0.9,
      transition: { duration: 0.6, ease: 'easeIn' }
    },
    hover: { scale: 1, transition: { duration: 0.3 } }
  }

  return (
    <>
      <WinesTransition animation={animation} initialClosed />
      <div className="relative h-screen w-screen bg-[url('../../public/images/shop/shop-background.png')] bg-center bg-cover bg-no-repeat overflow-hidden">
        <Navbar wide />
        <main className="h-[90%] pb-20">
          <Swiper
            direction="horizontal"
            // loop
            speed={1000}
            slidesPerView={1}
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
          >
            {wines.map(
              ({ image, name, type, description, age, variety, slug }, i) => {
                return (
                  <SwiperSlide
                    key={i}
                    className="flex items-center justify-center w-full"
                  >
                    <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 md:gap-0 lg:gap-32">
                      <div className="max-w-[430px]">
                        <motion.p
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.5 }}
                          className="font-medium text-center lg:text-left text-primary uppercase text-lg sm:text-4xl lg:text-5xl"
                        >
                          {name} {age} {variety && `| ${variety}`}
                        </motion.p>

                        <motion.p
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.5 }}
                          className="font-black text-2xl sm:text-5xl lg:text-7xl uppercase mb-5 lg:mb-0 text-center lg:text-left"
                        >
                          {type}
                        </motion.p>

                        <motion.p
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.5
                          }}
                          className="my-8 hidden lg:block text-base lg:text-lg"
                        >
                          {description}
                        </motion.p>

                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.5 }}
                        >
                          <Link
                            href={`/${slug}`}
                            onClick={(e: any) => {
                              e.preventDefault()
                              setAnimation(true)

                              setTimeout(() => {
                                router.push(slug)
                              }, 800)
                            }}
                            aria-label={`Pogledajte detalje o nasem ${name} ${age} ${type} ${
                              variety ? variety : ''
                            }`}
                            className="block w-fit mx-auto lg:mx-0 uppercase border-[3px] border-primary text-primary font-black py-2 px-4 sm:px-8 rounded-xl hover:bg-primary hover:text-white duration-200 text-base lg:text-lg"
                          >
                            Detaljnije o vinu
                          </Link>
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          type: 'spring',
                          stiffness: 50,
                          delay: (i * 1.5) / 2
                        }}
                        className="max-w-[100px] sm:max-w-[140px] lg:max-w-[180px]"
                      >
                        <Image
                          src={image}
                          alt={name}
                          className="duration-300 hover:translate-y-[-5%]"
                        />
                      </motion.div>
                    </div>
                  </SwiperSlide>
                )
              }
            )}
          </Swiper>

          <motion.div
            variants={prevSlideBtnVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="swiper-prev absolute top-[50%] translate-y-[-50%] left-5 md:left-20 rounded-full border-2 border-white w-11 sm:w-20 lg:w-28 h-11 sm:h-20 lg:h-28 z-10 cursor-pointer hidden sm:grid place-content-center"
            onClick={prevBottle}
          >
            <Arrow className="sm:scale-[2.5]" />
          </motion.div>

          <WinesSliderButton
            side="left"
            action={prevBottle}
            color="white"
            className="swiper-prev block sm:hidden"
          />
          <WinesSliderButton
            side="right"
            action={nextBottle}
            color="white"
            className="swiper-next block sm:hidden"
          />

          <motion.div
            variants={nextSlideBtnVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="swiper-next absolute top-[50%] translate-y-[-50%] right-5 md:right-20 rounded-full border-2 border-white w-11 sm:w-20 lg:w-28 h-11 sm:h-20 lg:h-28 z-10 cursor-pointer hidden sm:grid place-content-center"
            onClick={nextBottle}
          >
            <Arrow className="sm:scale-[2.5] rotate-180" />
          </motion.div>

          <div className="absolute left-[50%] sm:bottom-10 h-1 w-[60%] sm:w-[80%] lg:w-[800px] translate-x-[-50%] flex items-center">
            <p className="pagination absolute -left-10 text-[22px]">
              {curSlide.toString().padStart(2, '0')}
            </p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="custom-swiper-scrollbar w-full h-full rounded-lg overflow-hidden bg-white/25"
            >
              <div className="custom-swiper-scrollbar-drag h-full w-[100px] bg-white rounded-lg" />
            </motion.div>
            <p className="absolute -right-10 text-[22px]">{wines.length}</p>
          </div>
        </main>
      </div>
    </>
  )
}

export default Shop
