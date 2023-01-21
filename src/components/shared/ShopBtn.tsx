import Link from 'next/link'
import React from 'react'

const ShopBtn = () => {
  return (
    <Link
      aria-label="Pogledajte naše proizvode"
      href="/shop"
      className="uppercase w-28 h-8 flex items-center justify-center bg-primary text-sm font-semibold rounded-full"
    >
      Shop
    </Link>
  )
}

export default ShopBtn
