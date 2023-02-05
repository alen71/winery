import React from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

import Arrow from 'src/assets/sliderArrow.svg'

type Props = {
  side: 'left' | 'right'
  action: () => void
  color: 'primary' | 'white'
  className?: string
}

const WinesSliderButton = ({ side, action, color, className }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: '-50%' }}
      whileInView={{ opacity: 1, y: '-50%' }}
      transition={{ duration: 0.4 }}
      viewport={{ margin: '-100px 0px 0px 0px' }}
      className={`absolute top-[50%] ${side}-0 w-[52px] sm:w-[72px] h-32 sm:h-44 overflow-hidden flex items-center z-10 ${className}`}
    >
      <div
        className={clsx('absolute rotate-45 h-32 w-32  flex items-center', {
          'right-5 rounded-tr-3xl': side === 'left',
          'left-5 rounded-bl-3xl': side === 'right',
          'bg-gray-bg': color !== 'white',
          'bg-white/25': color === 'white'
        })}
      >
        <div
          className={clsx(
            `absolute w-7 sm:w-9 h-7 sm:h-9 border-[1px] border-${color} text-${color} rounded-full flex justify-center items-center cursor-pointer`,
            {
              '-rotate-45 right-3 sm:right-4 top-3 sm:top-4': side === 'left',
              'rotate-[135deg] left-3 sm:left-4 bottom-3 sm:bottom-4':
                side === 'right'
            }
          )}
          onClick={action}
        >
          <Arrow />
        </div>
      </div>
    </motion.div>
  )
}

export default WinesSliderButton
