import React from 'react'

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
    <div className="absolute left-4 right-4 top-[-1%] md:top-[-6%] lg:top-[-4.5%] flex items-center justify-between">
      <p className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] uppercase text-primary font-semibold md:text-4xl">
        Shop
      </p>
      <div className="w-[31px] md:w-[123px]">
        {width > 768 ? <LeftOrnament /> : <LeftOrnamentMobile />}
      </div>
      <span className="h-[1px] w-full bg-primary" />
      <div className="w-[116px] md:w-[288px]">
        {width > 768 ? <ShopOrnament /> : <ShopOrnamentMobile />}
      </div>
      <span className="h-[1px] w-full bg-primary" />
      <div className="w-[31px] md:w-[123px]">
        {width > 768 ? <RightOrnament /> : <RightOrnamentMobile />}
      </div>
    </div>
  )
}

export default Ornament
