import Image, { ImageProps } from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

import Title from './Title'

type Props = ImageProps & {
  title?: string
  titleHighlight?: string
  description: string
}

const NewsRow = ({
  title,
  titleHighlight,
  description,
  ...ImageProps
}: Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-gray-primary">
      <div className="group relative overflow-hidden w-full h-72 lg:h-full">
        <Image
          src={ImageProps.src}
          alt={ImageProps.alt}
          fill
          className="group-hover:scale-105 duration-300"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="px-5 sm:px-20 py-10 flex flex-col justify-center">
        <Title type="h2" text={title} highlightText={titleHighlight} />
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-10 h-[3px] bg-primary my-5"
        />
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3
          }}
          className="mb-3"
        >
          {description}
        </motion.p>
      </div>
    </div>
  )
}

export default NewsRow
