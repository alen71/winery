import React from 'react'
import { motion } from 'framer-motion'

import LeftOrnament from 'src/assets/leftOrnament.svg'
import RightOrnament from 'src/assets/rightOrnament.svg'
import ShopOrnament from 'src/assets/ShopRectangle.svg'

import ShopOrnamentMobile from 'src/assets/ShopRectangleMobile.svg'
import RightOrnamentMobile from 'src/assets/rightOrnamentMobile.svg'
import LeftOrnamentMobile from 'src/assets/leftOrnamentMobile.svg'

import useWindowWidth from 'src/hooks/useWindowWidth'

const Ornament = () => {
  const width = useWindowWidth()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 1.5 }}
      className="absolute left-0 right-0 top-0 translate-y-[-50%] flex items-center justify-between z-[2]"
    >
      <p className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] uppercase text-primary font-semibold ">
        Shop
      </p>
      <div className="w-[31px] ">
        <LeftOrnamentMobile />
      </div>
      <span className="h-[1px] w-full bg-primary" />
      <div className="w-[116px] ">
        <ShopOrnamentMobile />
      </div>
      <span className="h-[1px] w-full bg-primary" />
      <div className="w-[31px] ">
        <RightOrnamentMobile />
      </div>
    </motion.div>
  )
}

export default Ornament
