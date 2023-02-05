import Image, { ImageProps } from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

import Title from './Title'

type Props = ImageProps & {
  title?: string
  titleHighlight?: string
  description: string
}

const PageDescriptionRow = ({
  title,
  titleHighlight,
  description,
  ...ImageProps
}: Props) => {
  return (
    <div className="grid lg:grid-cols-2 gap-5 lg:gap-14 xl:gap-44 px-5 sm:px-7 py-7 xl:px-20 items-center">
      <div>
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
        >
          {description}
        </motion.p>
      </div>
      <div className="lg:px-5">
        <div className="relative overflow-hidden">
          <Image
            src={ImageProps.src}
            alt={ImageProps.alt}
            className="hover:scale-105 duration-300"
          />
        </div>
      </div>
    </div>
  )
}

export default PageDescriptionRow
