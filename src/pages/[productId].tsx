import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import clsx from 'clsx'

import { IWine } from 'src/type/wine.type'
import useProductList from 'src/store/useProductList'

import Logo from 'src/components/shared/Logo'
import XIcon from 'src/assets/XIcon.svg'

export default function Product() {
  // get slug from query
  const router = useRouter()
  const { productId } = router.query

  // get product from zustand by the slug
  const wines = useProductList(state => state.wines)

  // get product group from zustand by the current product group
  const [wine, setWine] = useState<IWine>({} as IWine)

  const [winesGroup, setWineGroup] = useState<IWine[]>([])

  useEffect(() => {
    if (!productId) return

    setWine(wines.find(wine => wine.slug === productId) as IWine)

    setWineGroup(
      wines.filter(productWine => productWine.group === wine.group) as IWine[]
    )
  }, [productId, wine.group, wines])

  const changeAge = (age: number) => {
    const newWine = winesGroup.find(w => w.age === age)
    if (newWine) {
      setWine(newWine)
    }
  }

  return (
    <div className="grid grid-cols-[1fr_77px_1fr] ">
      <div className="h-screen bg-[url('../../public/images/shop/shop-background.png')] bg-center bg-cover bg-no-repeat flex justify-start items-center relative">
        <div className="absolute top-5 left-5 text-primary">
          <Logo />
        </div>

        <div className="max-w-[25%] mx-auto">
          <Image
            src={wine.image}
            alt={`${wine.name} ${wine.type} ${wine.age}`}
            quality={100}
          />
        </div>

        <div className="absolute left-5 flex flex-col gap-2 pl-7">
          <div className="absolute left-0 top-[50%] translate-y-[-52%] h-[84%] flex flex-col justify-between items-center">
            <div className="absolute bg-primary w-[1px] h-full" />
            {winesGroup.map((w, i) => (
              <div key={i} className="relative flex duration-300">
                <div
                  className={clsx(
                    'rounded-full absolute left-0 translate-x-[-50%]',
                    {
                      'w-2 h-2 bg-primary': w.age !== wine.age,
                      'w-3 h-3 bg-white ': w.age === wine.age
                    }
                  )}
                />
              </div>
            ))}
          </div>
          {winesGroup.map((w, i) => (
            <div key={i} className="h-10 flex items-center">
              <p
                onClick={() => changeAge(w.age)}
                className={clsx('duration-300 cursor-pointer w-fit', {
                  'font-light text-[22px] text-primary': w.age !== wine.age,
                  'font-bold text-4xl text-white': w.age === wine.age
                })}
              >
                {w.age}
              </p>
            </div>
          ))}
        </div>

        <div className="absolute bottom-6 right-6 flex flex-col gap-4">
          {wine.medals &&
            wine.medals.map((medal, i) => {
              return (
                <Image
                  key={i}
                  src={medal}
                  alt="Dumo medal"
                  width={90}
                  height={90}
                />
              )
            })}
        </div>
      </div>

      <div className="bg-white border-r-1 border-primary py-12 flex flex-col justify-between items-center">
        <Link href="/shop" aria-label="Vratite se nazad u Shop">
          <XIcon />
        </Link>
      </div>

      <div className="h-screen overflow-y-scroll bg-white"></div>
    </div>
  )
}
