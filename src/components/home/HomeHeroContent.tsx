import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import ShopBtn from 'src/components/shared/ShopBtn'
import Title from 'src/components/shared/Title'
import ReadMoreBtn from 'src/components/shared/ReadMoreBtn'

import blackGrape from '/public/images/Crno-grožđe.png'
import mainWineBottle from '/public/images/Pinot Noir-Odsjaj 1.png'
import vinograd from '/public/images/Vinograd.png'
import roseVineBottle from '/public/images/Rose-Kesten-boca-vina.png'
import Overlay from 'src/components/shared/Overlay'

const HomeHeroContent = () => {
  return (
    <>
      <div className="absolute right-0 top-[300px] md:top-0 w-[50%] sm:w-[40%] z-10 overflow-hidden">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: '0%' }}
          transition={{ duration: 1.5, ease: 'anticipate' }}
        >
          <Image
            src={blackGrape}
            alt="Crno Grožđe vinarije DUMO"
            quality={100}
            style={{ marginLeft: 'auto' }}
          />
        </motion.div>
      </div>
      <div className="container relative">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 hidden xl:block">
          <Image
            src={mainWineBottle}
            alt="Flaša vina pinot noir"
            quality={100}
          />
        </div>
        <Overlay video="light" />
        <Overlay video="dark" />
        <video
          src={require('/public/vinarija-dumo-video.mp4')}
          className="w-full h-[480px] sm:h-[580px] object-cover"
          autoPlay
          loop
        />

        <div className="absolute left-4 top-0 h-full pl-5 sm:pl-20 flex justify-center flex-col gap-5">
          <h1 className="text-4xl sm:text-5xl font-black">
            <span>Dobrodošli</span> <br />u vinariju
            <span className="uppercase text-primary"> DUMO</span>
          </h1>
          <p className="pl-[14px] text-sm sm:text-base md:text-lg border-l-[3px] border-primary max-w-[279px] leading-6">
            Naručite sada uz besplatnu i bezbednu dostavu!
          </p>
          <ShopBtn />
        </div>
      </div>
      <div className="container">
        <div className="bg-gray-primary-alfa px-5 sm:px-10 xl:px-20 py-10 lg:py-16 xl:py-24 grid lg:grid-cols-2 gap-10 lg:gap-20 xl:gap-40 h-fit border-b-[1px] border-primary">
          <div className="flex flex-col gap-9 h-fit">
            <Title type="h2" text="O vinariji" highlightText="Dumo" />
            <div className="text-justify">
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
            </div>
            <ReadMoreBtn href="/" />
          </div>
          <div className="flex justify-center h-fit">
            <div className="relative max-w-[391px]">
              <Overlay image="light" />
              <div className="absolute left-0 sm:left-[-100px] bottom-[-8%] sm:top-[50%] sm:translate-y-[-50%] w-[132px] sm:w-[200px] z-[11]">
                <Image src={roseVineBottle} alt="Vinograd" quality={100} />
              </div>
              <Image
                src={vinograd}
                alt="Vinograd"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeHeroContent
