import { cva } from 'class-variance-authority'
import React from 'react'

import type { VariantProps } from 'class-variance-authority'

type overlayStyleProps = VariantProps<typeof overlayStyle>

type OverlayProps = overlayStyleProps & {}

const overlayStyle = cva('absolute opacity-50 h-full', {
  variants: {
    image: {
      light: 'inset-0 bg-darker-primary opacity-50 mix-blend-color z-10',
      dark: 'inset-0 bg-gray-primary opacity-50 mix-blend-normal z-10'
    },
    video: {
      light:
        'left-8 right-8 top-0 bg-darker-primary opacity-60 mix-blend-color',
      dark: 'left-8 right-8 top-0 bg-gray-primary opacity-60 mix-blend-normal'
    }
  }
})

const Overlay = ({ image, video }: OverlayProps) => {
  return <div className={overlayStyle({ image, video })} />
}

export default Overlay
