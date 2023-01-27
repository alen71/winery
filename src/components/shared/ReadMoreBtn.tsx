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
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href={href}
        className="group relative text-primary flex items-center w-fit font-semibold text-sm sm:text-base md:text-lg"
      >
        {text}
        <span className="absolute right-[-25px] opacity-0 translate-x-[-30px] group-hover:opacity-100 group-hover:translate-x-0 duration-300">
          <Arrow />
        </span>
      </Link>
    </motion.div>
  )
}

export default ReadMoreBtn
