import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

import ShopBtn from 'src/components/shared/ShopBtn'
import Title from 'src/components/shared/Title'
import ReadMoreBtn from 'src/components/shared/ReadMoreBtn'

import blackGrape from '/public/images/Crno-grožđe.png'
import mainWineBottle from '/public/images/Pinot Noir-Odsjaj 1.png'
import dumoHouse from '/public/images/dumo-house.png'
import roseVineBottle from '/public/images/vina/Rose-Kesten-boca-vina.png'
import Overlay from 'src/components/shared/Overlay'

const HomeHeroContent = () => {
  const { scrollYProgress } = useScroll()

  const yValue = useTransform(scrollYProgress, [0, 1], [0, 500])
  const yBottleValue = useTransform(scrollYProgress, [0, 1], [0, 200])
  const yGrapesValue = useTransform(scrollYProgress, [0, 1], [0, 500])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.4])

  return (
    <>
      <motion.div
        style={{ y: yGrapesValue }}
        className="absolute right-0 top-[250px] md:top-0 w-[50%] sm:w-[40%] z-[11] overflow-hidden"
      >
        <motion.div
          initial={{ x: '100%' }}
          whileInView={{ x: '0%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'anticipate' }}
        >
          <Image
            src={blackGrape}
            alt="Crno Grožđe vinarije DUMO"
            quality={100}
            style={{ marginLeft: 'auto' }}
          />
        </motion.div>
      </motion.div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, top: '-32%', x: '-50%' }}
          whileInView={{ opacity: 1, top: '-22%', x: '-50%' }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 50, duration: 0.3 }}
          style={{ y: yValue }}
          className="absolute left-[50%] z-10 hidden xl:block"
        >
          <Image
            src={mainWineBottle}
            alt="Flaša vina pinot noir"
            quality={100}
          />
        </motion.div>
        <Overlay video="light" />
        <Overlay video="dark" />
        <video
          src={require('/public/vinarija-dumo-video.mp4')}
          className="w-full h-[480px] sm:h-[580px] object-cover"
          autoPlay
          loop
        />

        <div className="absolute left-4 top-0 h-full pl-5 sm:pl-20">
          <div className="flex justify-center flex-col gap-5 h-full overflow-hidden">
            <motion.h1
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{
                duration: 0.7,
                delay: 0.5,
                type: 'spring',
                stiffness: 35
              }}
              className="text-4xl sm:text-5xl font-black"
            >
              <span>Dobrodošli</span> <br />u vinariju
              <span className="uppercase text-primary"> DUMO</span>
            </motion.h1>

            <div className="relative pl-[14px] max-w-[279px]">
              <motion.div
                initial={{ y: '-200%' }}
                animate={{ y: '0%' }}
                transition={{
                  duration: 0.6,
                  delay: 1,
                  type: 'spring',
                  stiffness: 80
                }}
                className="absolute left-0 top-0 h-full w-[3px] bg-primary"
              />
              <motion.p
                initial={{ x: '-110%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 0.7, ease: 'anticipate', delay: 1.7 }}
                className="w-fit text-sm sm:text-base md:text-lg  leading-6 "
              >
                Naručite sada uz besplatnu i bezbednu dostavu!
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ShopBtn />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="bg-gray-primary-alfa sm:px-10 xl:px-20 pt-10  sm:py-10 lg:py-16 xl:py-24 grid lg:grid-cols-2 gap-10 lg:gap-20 xl:gap-40 h-fit border-b-1 border-primary">
          <div className="flex flex-col gap-9 h-fit px-5 sm:px-0">
            <Title type="h2" text="O vinariji" highlightText="Dumo" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3
              }}
              className="text-justify"
            >
              <p>
                Finished her are its honoured drawings nor. Pretty see mutual
                thrown all not edward ten. Particular an boisterous up he
                reasonably frequently. Several any had enjoyed shewing studied
                two. Up intention remainder sportsmen behaviour ye happiness.
                Few again any alone style added abode ask. Nay projecting
                unpleasing boisterous eat discovered solicitude. Own six moments
                produce elderly pasture far arrival. Hold our year they ten
                upon. Gentleman contained so intention sweetness in on
                resolving.
              </p>
              <br />
              <p>
                John draw real poor on call my from. May she mrs furnished
                discourse extremely. Ask doubt noisy shade guest did built her
                him. Ignorant repeated hastened it do.
              </p>
            </motion.div>

            <ReadMoreBtn href="/" />
          </div>

          <div className="flex justify-center h-fit">
            <div className="relative w-full sm:max-w-[391px]">
              <motion.div
                initial={{ opacity: 0, marginBottom: '20px' }}
                whileInView={{ opacity: 1, marginBottom: '0px' }}
                viewport={{ margin: '-100px 0px 0px 0px' }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 sm:translate-x-[-50%] bottom-[-17%] sm:top-[50%] sm:translate-y-[-50%] w-[162px] sm:w-[200px] z-[11]"
              >
                <motion.div style={{ y: yBottleValue }}>
                  <Image src={roseVineBottle} alt="Vinograd" quality={100} />
                </motion.div>
              </motion.div>

              <div className="overflow-hidden">
                <motion.div
                  style={{ scale: imgScale }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={dumoHouse}
                    alt="Vinograd"
                    style={{ objectFit: 'cover' }}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeHeroContent
