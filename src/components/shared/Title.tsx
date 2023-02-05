import React from 'react'
import { motion } from 'framer-motion'

type TitleProps = {
  type: 'h1' | 'h2'
  text?: string
  highlightText?: string
}

const Title = ({ type, text, highlightText }: TitleProps) => {
  return (
    <>
      {type === 'h1' ? (
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-100px 0px 0px 0px' }}
          transition={{ duration: 0.3 }}
          className="text-4xl sm:text-5xl font-black"
        >
          {text} <span className="uppercase text-primary">{highlightText}</span>
        </motion.h1>
      ) : (
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-100px 0px 0px 0px' }}
          transition={{ duration: 0.3 }}
          className="text-3xl sm:text-4xl font-black"
        >
          {text} <span className="uppercase text-primary">{highlightText}</span>
        </motion.h2>
      )}
    </>
  )
}

export default Title
