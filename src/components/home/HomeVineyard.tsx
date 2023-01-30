import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

import Overlay from 'src/components/shared/Overlay'
import ReadMoreBtn from 'src/components/shared/ReadMoreBtn'
import Title from 'src/components/shared/Title'

import Lineage from '/public/images/dumo-lineage.png'
import BlackWine from '/public/images/Pinot-Noir-Odsjaj-2.png'
import bgImage from '/public/images/Slika-Pozadina-Vinograd 1 (2).png'

const HomeVineyard = () => {
  const { scrollYProgress } = useScroll()
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.7])
  const yBottleValue = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    [0, -10, -100]
  )

  return (
    <>
      <div className="absolute left-0 top-[-20%] md:top-[-40%] lg:top-[-70%] w-full z-0">
        <Image src={bgImage} alt="Pozadinska slika vinograda" />
      </div>
      <div className="container relative">
        <div className="grid lg:grid-cols-2">
          <div className="relative xl:pr-28 h-full w-full sm:px-10 lg:px-0 sm:pb-10 lg:pb-0 bg-gray-primary-alfa lg:bg-transparent row-start-2 lg:row-start-1">
            <div className="overflow-hidden w-full h-full">
              <motion.div
                style={{ scale: imgScale }}
                className="h-[400px] lg:h-full w-full relative"
              >
                <Overlay image="light" />
                <Image
                  src={Lineage}
                  fill
                  alt="Slika vinove loze"
                  quality={100}
                  style={{ objectFit: 'cover' }}
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, marginBottom: '20px' }}
              whileInView={{ opacity: 1, marginBottom: '0px' }}
              viewport={{ margin: '-100px 0px 0px 0px' }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="max-w-[166px] sm:max-w-[200px] lg:max-w-[236px] absolute right-0 xl:right-[112px] bottom-0 translate-y-[15%] sm:translate-y-[10%] lg:translate-y-[17%] z-[11]"
            >
              <motion.div style={{ y: yBottleValue }}>
                <Image src={BlackWine} alt="Slika vinove loze" quality={100} />
              </motion.div>
            </motion.div>
          </div>
          <div className="bg-gray-primary-alfa lg:border-b-[1px] border-primary px-5 sm:px-10 xl:px-20 py-10 sm:py-16 xl:py-24 flex flex-col items-center justify-center gap-9 h-full">
            <Title type="h2" text="Vinogradi" highlightText="Dumo" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
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
        </div>
      </div>
    </>
  )
}

export default HomeVineyard
