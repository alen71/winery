import { cva } from 'class-variance-authority'
import React from 'react'

import type { VariantProps } from 'class-variance-authority'

export type overlayStyleProps = VariantProps<typeof overlayStyle>

type OverlayProps = overlayStyleProps & {}

const overlayStyle = cva('absolute opacity-50 h-full', {
  variants: {
    image: {
      light: 'inset-0 bg-darker-primary opacity-50 mix-blend-color z-10',
      dark: 'inset-0 bg-gray-primary opacity-50 mix-blend-normal z-10'
    },
    videoLight: {
      light:
        'left-4 right-4 top-0 bg-darker-primary opacity-60 mix-blend-color',
      productPageLight: 'inset-0 bg-darker-primary opacity-90 mix-blend-color'
    },
    videoDark: {
      dark: 'left-4 right-4 top-0 bg-gray-primary opacity-60 mix-blend-normal',
      productPageDark: 'inset-0 bg-gray-overlay opacity-90 mix-blend-normal'
    },
    bottle: {
      light: 'inset-0 bg-darker-primary opacity-70 mix-blend-color z-10',
      dark: 'inset-0 bg-gray-primary opacity-0 mix-blend-normal z-10'
    }
  }
})

const Overlay = ({ image, videoLight, videoDark, bottle }: OverlayProps) => {
  return (
    <div className={overlayStyle({ image, videoLight, videoDark, bottle })} />
  )
}

export default Overlay
