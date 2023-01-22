import Link from 'next/link'
import React from 'react'

const wines = [
  {
    key: 1,
    name: 'Kesten',
    type: 'Rose',
    title: 'Pinot Noir',
    href: '#'
  },
  {
    key: 2,
    name: 'MMXVIII',
    type: 'Crno',
    title: 'Pinot Noir',
    href: '#'
  },
  {
    key: 3,
    name: 'Kesten',
    type: 'Crno',
    title: 'Pinot Noir',
    href: '#'
  }
]

const FooterWines = () => {
  return (
    <div>
      <p className="text-2xl font-light">Vina</p>
      <div className="h-[1px] w-5 my-5 bg-white" />
      <div className="flex flex-col gap-9">
        {wines.map(({ key, name, type, title, href }) => {
          return (
            <div key={key} className="font-light">
              <Link href={href} className="text-2xl">
                <span className="text-primary font-bold uppercase">{name}</span>{' '}
                {type}
              </Link>
              <p className="text-primary text-sm uppercase">{title}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FooterWines
