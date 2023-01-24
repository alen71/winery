import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

import whiteGrape from '/public/images/belo-grožđe.png'
import Ornament from '../shared/Ornament'
import BottlesSlider from '../shared/BottlesSlider'

const HomeShopContent = () => {
  return (
    <>
      <div className="container relative">
        <Ornament />
        <BottlesSlider />
      </div>
      <motion.div
        initial={{ x: '-100%' }}
        whileInView={{ x: '0%' }}
        viewport={{ once: true, margin: '0px 0px -500px 0px' }}
        transition={{ duration: 0.8, ease: 'anticipate' }}
        className="absolute bottom-[-15%] md:bottom-[-40%] left-0 w-[40%] md:w-[30%] z-10"
      >
        <Image src={whiteGrape} alt="Belo grožđe" quality={100} />
      </motion.div>
    </>
  )
}

export default HomeShopContent
