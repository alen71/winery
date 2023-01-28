import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import Overlay from 'src/components/shared/Overlay'
import ReadMoreBtn from 'src/components/shared/ReadMoreBtn'
import Title from 'src/components/shared/Title'

import glassOfWine from '/public/images/casa-crnog-vina.png'

const HomeToursContent = () => {
  const { scrollYProgress } = useScroll()
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.5])

  return (
    <>
      <div className="container relative">
        <div className="grid lg:grid-cols-2">
          <div className="bg-gray-primary-alfa lg:border-b-[1px] border-primary px-5 sm:px-10 xl:px-20 py-10 sm:py-16 xl:py-24 flex flex-col items-center justify-center gap-9 h-full">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: '-100px 0px 0px 0px' }}
              transition={{ duration: 0.3 }}
            >
              <Title type="h2" text="Vinogradi" highlightText="Dumo" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: '-100px 0px 0px 0px' }}
              transition={{ duration: 0.3 }}
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
          <div className="relative xl:pl-28 h-full px-5 sm:px-10 lg:px-0 pb-5 sm:pb-10 lg:pb-0 bg-gray-primary-alfa lg:bg-transparent">
            <div className="h-[400px] lg:h-full w-full relative">
              <div className="overflow-hidden w-full h-full">
                <motion.div
                  // initial={{ x: '100%' }}
                  // whileInView={{ x: '0%' }}
                  // viewport={{ margin: '-100px 0px 0px 0px' }}
                  // transition={{ duration: 0.5, ease: 'easeIn' }}
                  style={{ scale: imgScale }}
                  className="h-[400px] lg:h-full w-full relative"
                >
                  <Overlay image="light" />
                  <Image
                    src={glassOfWine}
                    fill
                    alt="Slika čaše crnog vina"
                    quality={100}
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

export default HomeToursContent
