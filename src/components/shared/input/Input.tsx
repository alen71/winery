import clsx from 'clsx'
import React, { HTMLInputTypeAttribute, InputHTMLAttributes, FC } from 'react'
import { HTMLMotionProps, motion } from 'framer-motion'

type inputProps = HTMLMotionProps<'input'> & {
  label?: string
  border?: 'primary' | 'gray-primary'
  error?: string | undefined
}

const Input: FC<inputProps> = ({
  label,
  border = 'gray-primary',
  error,
  ...inputProps
}) => {
  const inputVariants = {
    open: {},
    close: {}
  }

  const labelVariants = {
    close: {
      x: 20,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.2
      }
    }
  }

  return (
    <div className="flex flex-col gap-2 relative">
      {label && (
        <motion.label
          variants={labelVariants}
          initial="close"
          animate={true ? 'open' : 'close'}
          className={clsx('text-primary font-semibold', {
            'text-red-700': error
          })}
        >
          {label}
        </motion.label>
      )}
      <motion.input
        variants={inputVariants}
        initial="close"
        animate={true ? 'open' : 'close'}
        exit="close"
        {...inputProps}
        className={clsx(
          `w-full border-1 border-${border} rounded-lg px-6 py-1 placeholder:text-gray-light placeholder:text-base placeholder:font-sans placeholder:font-normal`,
          { 'border-red-700': error }
        )}
      />

      {error && (
        <p className="absolute -bottom-5 left-6 text-red-700 text-sm font-bold">
          {error}
        </p>
      )}
    </div>
  )
}

export default Input
