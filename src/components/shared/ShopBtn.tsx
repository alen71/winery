import Link from 'next/link'
import React from 'react'

const ShopBtn = () => {
  return (
    <Link
      aria-label="Pogledajte naše proizvode"
      href="/shop"
      className={
        'uppercase w-32 sm:w-36 h-8 flex items-center justify-center bg-primary hover:bg-darker-primary text-sm sm:text-base font-black rounded-full'
      }
    >
      Shop
    </Link>
  )
}

export default ShopBtn
