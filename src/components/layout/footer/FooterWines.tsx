import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import useProductList from 'src/store/useProductList'

const FooterWines = () => {
  const { wines } = useProductList()
  const [threeIndexes, setThreeIndexes] = useState<number[]>([])

  useEffect(() => {
    setInterval(() => {
      let threeRandomIndexes: number[] = []
      while (threeRandomIndexes.length < 3) {
        const generatedNumber = Math.floor(Math.random() * 10)

        if (threeRandomIndexes.includes(generatedNumber)) return

        threeRandomIndexes.push(generatedNumber)
      }

      setThreeIndexes([...threeRandomIndexes])
    }, 5000)
  }, [])

  const randomWines = threeIndexes.map(index => wines[index])

  return (
    <div className="text-center md:text-left">
      <p className="text-2xl font-light">Vina</p>
      <div className="h-[1px] w-5 my-5 bg-white mx-auto md:mx-0" />
      <div className="flex flex-col items-center md:items-start gap-9">
        {randomWines.map(({ name, type, slug, age, variety }, i) => {
          return (
            <div key={slug} className="font-light">
              <Link href={slug} className="text-xl sm:text-2xl">
                <span className="text-primary font-bold uppercase">{name}</span>{' '}
                {age} {variety && `| ${variety}`}
              </Link>
              <p className="text-primary text-sm uppercase">{type}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FooterWines
