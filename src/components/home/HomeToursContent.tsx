import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import ReadMoreBtn from 'src/components/shared/ReadMoreBtn'
import Title from 'src/components/shared/Title'

import glassOfWine from '/public/images/case-za-vino.png'
import roseWine from '/public/images/vina/Dumo Rose 2021.png'

const HomeToursContent = () => {
  const { scrollYProgress } = useScroll()

  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const yBottleValue = useTransform(scrollYProgress, [0, 0.6, 1], [0, 10, 50])

  return (
    <>
      <div className="container relative">
        <div className="grid lg:grid-cols-2 border-b-1 lg:border-b-0 border-primary">
          <div className="bg-gray-primary-alfa lg:border-b-1 border-primary px-5 sm:px-10 xl:px-20 py-10 sm:py-16 xl:py-24 flex flex-col sm:items-center justify-center gap-9 h-full xl-h-[900px]">
            <Title type="h2" text="Vinogradi" highlightText="Dumo" />

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
          <div className="relative xl:pl-[30%] h-full sm:px-10 lg:px-0 sm:pb-10 lg:pb-0 bg-gray-primary-alfa lg:bg-transparent">
            <div className="h-[400px] lg:h-full w-full relative">
              <motion.div
                initial={{ opacity: 0, marginBottom: '20px' }}
                whileInView={{ opacity: 1, marginBottom: '0px' }}
                viewport={{ margin: '-100px 0px 0px 0px' }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="max-w-[90px] lg:max-w-[114px] absolute left-4 sm:left-0 sm:translate-x-[-25%] bottom-0 z-[11]"
              >
                <motion.div style={{ y: yBottleValue }}>
                  <Image src={roseWine} alt="Slika vinove loze" quality={100} />
                </motion.div>
              </motion.div>
              <div className="overflow-hidden w-full h-full">
                <motion.div
                  style={{ scale: imgScale }}
                  className="h-[400px] lg:h-full w-full relative"
                >
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
