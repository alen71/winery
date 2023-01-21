import Link from 'next/link'
import React from 'react'

import Arrow from '../assets/arrow.svg'

type ReactMoreBtnProps = {
  href: string
  text?: string
}

const ReadMoreBtn = ({ href, text = 'Pročitaj više' }: ReactMoreBtnProps) => {
  return (
    <Link
      href={href}
      className="group relative text-primary flex items-center w-fit font-semibold"
    >
      {text}
      <span className="absolute right-[-25px] opacity-0 translate-x-[-30px] group-hover:opacity-100 group-hover:translate-x-0 duration-300">
        <Arrow />
      </span>
    </Link>
  )
}

export default ReadMoreBtn
