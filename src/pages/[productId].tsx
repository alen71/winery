import { useRouter } from 'next/router'
import React, { useState } from 'react'
import useProductList from 'src/store/useProductList'
import { IWine } from 'src/type/wine.type'

type Props = {}

export default function Product({}: Props) {
  // get slug from query
  const router = useRouter()
  const { productId } = router.query

  // get product from zustand by the slug
  const wines = useProductList(state => state.wines)

  // get product group from zustand by the current product group
  const [wine, setWine] = useState(
    wines.find(wine => wine.slug === productId) as IWine
  )
  const winesGroup = wines.filter(wine => wine.group === wine.group) as IWine[]

  const changeAge = (age: number) => {
    const newWine = winesGroup.find(w => w.age === age)
    if (newWine) {
      setWine(newWine)
    }
  }

  return (
    <div>
      {winesGroup.map(w => (
        <h1 key={w.age} onClick={() => changeAge(w.age)}>
          {w.age}
        </h1>
      ))}
    </div>
  )
}
