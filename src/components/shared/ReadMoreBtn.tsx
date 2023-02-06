import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

import Arrow from 'src/assets/arrow.svg'

type ReactMoreBtnProps = {
  href: string
  text?: string
}

const ReadMoreBtn = ({ href, text = 'Pročitaj više' }: ReactMoreBtnProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href={href}
        className="group relative text-primary flex items-center w-fit font-semibold text-sm sm:text-base md:text-lg rounded-full border-[1px] border-primary px-6 py-[2px]"
      >
        {text}
        <span className="ml-0 group-hover:ml-3 w-0 group-hover:w-4 opacity-0 group-hover:opacity-100 duration-300">
          <Arrow />
        </span>
      </Link>
    </motion.div>
  )
}

export default ReadMoreBtn
