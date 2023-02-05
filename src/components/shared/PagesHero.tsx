import Image, { ImageProps, StaticImageData } from 'next/image'
import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import Title from './Title'

type Props = ImageProps & {
  titleText: string
  titleHighlight?: string
  underTitleText?: string
  description: string
}

const PagesHero = ({
  titleText,
  titleHighlight,
  underTitleText,
  description,
  ...ImageProps
}: Props) => {
  const { scrollYProgress } = useScroll()
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])

  return (
    <div className="container">
      <div className="lg:p-20 bg-gray-primary-alfa relative flex flex-col lg:flex-row items-center border-b-1 border-primary overflow-hidden">
        <div className="p-5 sm:p-10 pb-0 lg:p-0 lg:max-w-[50%] overflow-hidden">
          <Title type="h1" text={titleText} highlightText={titleHighlight} />
          {underTitleText && (
            <motion.p
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 1.5, ease: 'anticipate' }}
              className="font-bold mt-9 text-xl sm:text-2xl"
            >
              {underTitleText}
            </motion.p>
          )}
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-10 h-[3px] bg-primary my-5"
          />
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3
            }}
            className="font-normal text-lg sm:text-xl w-full lg:max-w-[80%]"
          >
            {description}
          </motion.p>
        </div>
        <motion.div
          style={{ scale: imgScale }}
          className="relative lg:absolute lg:right-0 h-[400px] lg:h-full w-full lg:w-[80%]"
        >
          {ImageProps.alt.length > 0 && (
            <Image
              src={ImageProps.src}
              fill
              alt={ImageProps.alt}
              quality={100}
              style={{ objectFit: 'cover' }}
            />
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default PagesHero
