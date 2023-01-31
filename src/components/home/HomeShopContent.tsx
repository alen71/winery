import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

import glassesOfWine from '/public/images/dvije-case-vina.png'

import Ornament from '../shared/Ornament'
import MobileBottlesSlider from '../shared/MobileBottleSlider'
import Title from '../shared/Title'
import ShopBtn from '../shared/ShopBtn'

const HomeShopContent = () => {
  return (
    <div className="container relative z-[1] ">
      <div className="grid gap-20 xl:gap-0 xl:grid-cols-2">
        <motion.div
          initial={{ x: '-100%' }}
          whileInView={{ x: '0%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: 'anticipate' }}
          className="relative bg-gray-primary border-b-1 border-primary pb-16 sm:pb-0"
        >
          <Ornament />
          <MobileBottlesSlider />
          <div className="absolute bottom-[-10.5%] left-[50%] translate-x-[-50%] sm:translate-x-0 sm:static w-fit mx-auto my-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ margin: '-100px 0px 0px 0px' }}
              transition={{ duration: 0.5 }}
            >
              <ShopBtn />
            </motion.div>
          </div>
        </motion.div>
        <div className="h-[700px] xl:h-full">
          <motion.div
            initial={{ x: '100%' }}
            whileInView={{ x: '0%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: 'anticipate' }}
            className="xl:ml-28 flex flex-col h-full bg-gray-primary"
          >
            <div className="group relative overflow-hidden w-full h-full">
              <Image
                src={glassesOfWine}
                alt="Burad vinarije dumo"
                fill
                className="group-hover:scale-105 duration-300"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="px-5 sm:px-16 py-10 sm:py-10 flex flex-col justify-center">
              <Title type="h2" text="NAJNOVIJI ČLANKA" />

              <motion.div
                initial={{ opacity: 0, x: 400 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                  type: 'spring',
                  stiffness: 50
                }}
                className="w-10 h-[3px] bg-primary my-5"
              />
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-3"
              >
                Finished her are its honoured drawings nor. Pretty see mutual
                thrown all not edward ten. Particular an boisterous up he
                reasonably frequently. Several any had enjoyed shewing studied
                two.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default HomeShopContent
