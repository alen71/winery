import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState, useRef, useLayoutEffect } from 'react'
import clsx from 'clsx'

import { IWine } from 'src/type/wine.type'
import useProductList from 'src/store/useProductList'
import { productsData } from 'src/data/products'

import Logo from 'src/components/shared/Logo'
import XIcon from 'src/assets/XIcon.svg'
import Arrow from 'src/assets/arrow.svg'

import ArchivedOrnament from '/public/images/archived.png'
import { GetStaticPaths, GetStaticProps } from 'next'
import { convertToSlug } from 'src/utils/helper'
import { ParsedUrlQuery } from 'querystring'
import useCartItems from 'src/store/useCartItems'
import CartIcon from 'src/components/cart/CartIcon'
import useFindPrevOrNextGroup from 'src/hooks/useFindPrevOrNextGroup'
import WinesTransition from 'src/components/layout/WinesTransition'
import { PAGE_TRANSITION_OPEN_TIME } from 'src/utils/const'
import Overlay from 'src/components/shared/Overlay'
import VineyardVideo from 'src/components/shared/VineyardVideo'

export default function Product() {
  const [quantity, setQuantity] = useState(1)
  const { cartWines, updateCartWines, addToCart } = useCartItems()
  const [animation, setAnimation] = useState(false)
  const [cartAddedAnimation, setCartAddedAnimation] = useState(false)

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
      setAnimation(true)
      setTimeout(() => {
        setWine(newWine)
        setAnimation(false)
      }, PAGE_TRANSITION_OPEN_TIME)
    }
  }

  const { findNextGroup, findPrevGroup, uniqueGroups, currentGroupIndex } =
    useFindPrevOrNextGroup({
      wines,
      wine
    })

  const toNewWineCategory = (href: string) => {
    setAnimation(true)

    setTimeout(() => {
      router.push(href)
    }, PAGE_TRANSITION_OPEN_TIME)
  }

  router.events?.on('routeChangeComplete', () => setAnimation(false))

  //bg-[url('../../public/images/shop/shop-background.png')]
  return (
    <>
      <WinesTransition animation={animation} />
      <CartIcon />
      <div className="grid lg:grid-cols-[1fr_77px_1fr] ">
        <div className="flex flex-col gap-12 sm:gap-0 min-h-screen sm:min-h-fit sm:flex-row justify-start items-center relative pb-12 sm:pb-0">
          <div className="absolute left-0 top-0 w-full h-full">
            <VineyardVideo
              videoLightOverlay="productPageLight"
              videoDarkOverlay="productPageDark"
            />
          </div>

          <div className="pt-28 sm:pt-0 min-h-fit sm:h-screen w-full flex justify-start items-center relative">
            <div className="absolute top-5 left-0 w-full px-5 flex justify-between items-center">
              <div className=" text-primary flex items-center gap-8 lg:gap-14">
                <Logo />
                <p className="font-black">
                  <span className="font-light">Est.</span> 2016
                </p>
              </div>

              <Link
                href="/shop"
                aria-label="Vratite se nazad u Shop"
                className="block lg:hidden"
              >
                <XIcon />
              </Link>
            </div>

            <div className="max-w-[35%] sm:max-w-[25%] lg:max-w-[35%] xl:max-w-[25%] mx-auto">
              <Image
                src={wine.image}
                alt={`${wine.name} ${wine.type} ${wine.age}`}
                quality={100}
              />
            </div>

            <div className="absolute lg:bottom-8 right-5 sm:right-8 flex flex-col gap-4">
              {wine.medals &&
                wine.medals.map((medal, i) => {
                  return (
                    <div
                      key={i}
                      className="h-14 sm:h-20 xl:h-[90px] w-14 sm:w-20 xl:w-[90px]"
                    >
                      <Image src={medal} alt="Dumo medal" />
                    </div>
                  )
                })}
            </div>
          </div>

          <div className="relative sm:absolute sm:left-8 flex flex-col gap-2 pl-7">
            <div
              className={clsx(
                'absolute left-0 top-[50%] translate-y-[-52%] flex flex-col justify-between items-center',
                {
                  'h-[54%]': winesGroup.length === 2,
                  'h-[84%]': winesGroup.length > 2,
                  'h-[50px] top-[100%]': winesGroup.length === 1
                }
              )}
            >
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
                    onClick={() => age !== currWineAge && changeAge(age)}
                    className={clsx('duration-300 cursor-pointer w-fit', {
                      'font-light text-[22px] text-primary':
                        age !== currWineAge,
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
        </div>

        <div className="bg-white border-b-1 lg:border-r-1 border-primary sm:px-12 lg:px-0 lg:py-12 flex flex-row lg:flex-col justify-center lg:justify-between items-center relative">
          <Link
            href="/shop"
            aria-label="Vratite se nazad u Shop"
            className="hidden lg:block"
          >
            <XIcon />
          </Link>

          <div className="text-primary flex lg:flex-col items-center gap-5 lg:gap-2 text-2xl py-5 lg:py-0">
            <span>0{currentGroupIndex + 1}</span>
            <span className="bg-primary h-[1px] w-7 lg:w-full" />
            <span>0{uniqueGroups.length}</span>
          </div>

          <div className="absolute left-8 sm:left-12 right-8 sm:right-12 flex items-center lg:block lg:static">
            <Link
              href={`/${findNextGroup()}`}
              onClick={(e: any) => {
                e.preventDefault()
                toNewWineCategory(findNextGroup() as string)
              }}
              aria-label="Idite na sljedeće vino"
              className="absolute right-0 lg:static block cursor-pointer scale-125"
            >
              <Arrow />
            </Link>
            <Link
              href={`/${findPrevGroup()}`}
              onClick={(e: any) => {
                e.preventDefault()
                toNewWineCategory(findPrevGroup() as string)
              }}
              aria-label="Idite na prethodno vino"
              className="absolute left-0 lg:static block rotate-180 lg:mt-6 cursor-pointer scale-125"
            >
              <Arrow />
            </Link>
          </div>
        </div>

        <div className="h-fit lg:h-screen lg:overflow-y-scroll overflow-x-hidden text-gray-primary bg-white py-10 xl:py-14 px-7 sm:px-10 xl:px-20 flex flex-col gap-10 md:gap-16 relative">
          <h1 className="text-center lg:text-left">
            <span className="font-medium text-xl sm:text-3xl">
              {wine.name} {wine.age} {wine.variety ? `| ${wine.variety}` : ''}
            </span>
            <br />
            <span className="text-primary font-black text-4xl sm:text-6xl ">
              {wine.type}
            </span>
          </h1>

          {wine.archived && (
            <div className="relative lg:absolute flex items-center justify-center max-w-[210px] xl:max-w-[294px] lg:right-[-4%] mx-auto lg:mx-0">
              <Image src={ArchivedOrnament} alt="Arhivirano" />
              <p className="absolute text-white font-bold text-xl xl:text-3xl">
                Arhiva
              </p>
            </div>
          )}

          <p className="text-base sm:text-xl">{wine.description}</p>

          <div className="flex gap-8 flex-col xl:flex-row text-base xl:items-center">
            <button
              className={clsx(
                'text-white font-black relative w-60 h-10 flex justify-center items-center duration-300 overflow-hidden',
                {
                  'rounded-full': !wine.sold,
                  'bg-gray-primary rounded-md  pointer-events-none': wine.sold,
                  'bg-primary hover:bg-darker-primary':
                    !cartAddedAnimation && !wine.sold,
                  'bg-gray-primary': cartAddedAnimation
                }
              )}
              onClick={() => {
                if (wine.sold || cartAddedAnimation) return

                setCartAddedAnimation(true)
                setQuantity(1)
                addToCart(cartWines, wine, quantity)

                setTimeout(() => setCartAddedAnimation(false), 800)
              }}
            >
              <span
                className={clsx('absolute duration-300', {
                  'translate-y-[-120%]': !cartAddedAnimation,
                  'translate-y-0': cartAddedAnimation
                })}
              >
                Dodato
              </span>
              <span
                className={clsx('absolute duration-300', {
                  'translate-y-[120%]': cartAddedAnimation
                })}
              >
                {wine.sold ? 'Rasprodato' : `${wine.price} RSD | Dodaj u korpu`}
              </span>
            </button>

            {wine.sold && (
              <div>
                <span className="font-semibold mr-2">Količina</span>
                <input
                  value={quantity}
                  type="number"
                  min="1"
                  onChange={e => setQuantity(+e.target.value)}
                  placeholder="1"
                  className="w-16 h-8 border-1 border-gray-primary rounded-lg pl-2"
                />
              </div>
            )}
          </div>

          <div className="font-semibold">
            <p className="text-2xl sm:text-[32px] mb-6 sm:mb-9">
              Specifikacije
            </p>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 sm:gap-y-10">
              {wine.specs &&
                Object.entries(wine.specs).map(spec => {
                  const key = spec[0]
                  const value = spec[1]

                  return (
                    <div key={key} className="border-b-1 border-primary pb-2">
                      <p className="text-primary text-lg sm:text-xl mb-2 first-letter:capitalize">
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
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = productsData.map((wine, i) => {
    const isVariety = wine.variety
      ? `${wine.name} ${wine.age} ${wine.type} ${wine.variety}`
      : `${wine.name} ${wine.age} ${wine.type}`
    return convertToSlug(isVariety)
  })

  const paths = slugs.map(slug => {
    return {
      params: {
        productId: slug
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }: any) {
  return {
    props: {}
  }
}
