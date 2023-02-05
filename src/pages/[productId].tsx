import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import clsx from 'clsx'

import { IWine } from 'src/type/wine.type'
import useProductList from 'src/store/useProductList'

import Logo from 'src/components/shared/Logo'
import XIcon from 'src/assets/XIcon.svg'
import Arrow from 'src/assets/arrow.svg'

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

  const changeAge = (age: string) => {
    const newWine = winesGroup.find(
      w => `${w.age} ${w.variety ? `| ${w.variety}` : ''}` === age
    )
    if (newWine) {
      setWine(newWine)
    }
  }

  const uniqueGroups = Array.from(new Set(wines.map(wine => wine.group)))
  const currentGroupIndex = uniqueGroups.indexOf(wine.group)

  const findPrevGroup = () => {
    let prevIndex = currentGroupIndex - 1

    if (prevIndex < 0) {
      prevIndex = uniqueGroups.length - 1
    }

    const prevGroup = uniqueGroups[prevIndex]
    const wineFromPrevGroup = wines.find(wine => wine.group === prevGroup)

    return wineFromPrevGroup?.slug
  }

  const findNextGroup = () => {
    let nextIndex = currentGroupIndex + 1

    if (nextIndex > uniqueGroups.length - 1) {
      nextIndex = 0
    }

    const nextGroup = uniqueGroups[nextIndex]
    const wineFromNextGroup = wines.find(wine => wine.group === nextGroup)

    return wineFromNextGroup?.slug
  }

  console.log(findNextGroup())

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
            {winesGroup.map((w, i) => {
              const age = `${w.age} ${w.variety ? `| ${w.variety}` : ''}`

              const currWineAge = `${wine.age} ${
                wine.variety ? `| ${wine.variety}` : ''
              }`
              return (
                <div key={i} className="relative flex duration-300">
                  <div
                    className={clsx(
                      'rounded-full absolute left-0 translate-x-[-50%]',
                      {
                        'w-2 h-2 bg-primary': age !== currWineAge,
                        'w-3 h-3 bg-white ': age === currWineAge
                      }
                    )}
                  />
                </div>
              )
            })}
          </div>
          {winesGroup.map((w, i) => {
            const age = `${w.age} ${w.variety ? `| ${w.variety}` : ''}`

            const currWineAge = `${wine.age} ${
              wine.variety ? `| ${wine.variety}` : ''
            }`
            return (
              <div key={i} className="h-10 flex items-center">
                <p
                  onClick={() => changeAge(age)}
                  className={clsx('duration-300 cursor-pointer w-fit', {
                    'font-light text-[22px] text-primary': age !== currWineAge,
                    'font-bold text-4xl text-white': age === currWineAge
                  })}
                  aria-label={`Pogledajte naše ${w.name} ${w.type} ${
                    w.variety ? `| ${w.variety}` : ''
                  } vino proizvedeno ${w.age}-te godine`}
                >
                  {age}
                </p>
              </div>
            )
          })}
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

        <div className="text-primary flex flex-col gap-2 text-2xl">
          <span>0{currentGroupIndex + 1}</span>
          <span className="bg-primary h-[1px] w-full" />
          <span>0{uniqueGroups.length}</span>
        </div>

        <div>
          <Link
            href={`/${findNextGroup()}`}
            aria-label="Idite na sljedeće vino"
            className="block cursor-pointer scale-125"
          >
            <Arrow />
          </Link>
          <Link
            href={`/${findPrevGroup()}`}
            aria-label="Idite na prethodno vino"
            className="block rotate-180 mt-4 cursor-pointer scale-125"
          >
            <Arrow />
          </Link>
        </div>
      </div>

      <div className="h-screen overflow-y-scroll text-gray-primary bg-white py-14 px-20 flex flex-col gap-16">
        <div>
          <p className="font-medium text-3xl">
            {wine.name} {wine.age}
          </p>

          <p className="text-primary font-black text-6xl">{wine.type}</p>
        </div>

        <p className="text-xl">{wine.description}</p>

        <div className="flex gap-8 text-base items-center">
          <button className="bg-primary hover:bg-darker-primary text-white py-2 px-6 rounded-full font-black ">
            {wine.price} RSD | Dodaj u korpu
          </button>

          <div>
            <span className="font-semibold mr-2">Količina</span>
            <input
              type="number"
              min="1"
              placeholder="1"
              className="w-16 h-8 border-1 border-gray-primary rounded-lg pl-2"
            />
          </div>
        </div>

        <div className="font-semibold">
          <p className="text-[32px] mb-9">Specifikacije</p>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10">
            {wine.specs &&
              Object.entries(wine.specs).map(spec => {
                const key = spec[0]
                const value = spec[1]

                return (
                  <div key={key} className="border-b-1 border-primary pb-2">
                    <p className="text-primary text-xl mb-2 first-letter:capitalize">
                      {key}
                    </p>

                    <p className="font-medium text-base">{value}</p>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}
