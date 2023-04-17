import React from 'react'
import { cva, VariantProps } from 'class-variance-authority'

import InstaIcon from 'src/assets/instagramIcon.svg'
import FbIcon from 'src/assets/fbIcon.svg'

type contactStyleProps = VariantProps<typeof socialStyle>

type Props = contactStyleProps & {}

const socialStyle = cva('font-light text-sm flex flex-col items-center', {
  variants: {
    place: {
      menu: 'text-black text-center items-center',
      footer: 'text-white md:items-start'
    }
  }
})

const lineStyle = cva('h-[1px] w-5 my-5 ', {
  variants: {
    place: {
      menu: 'bg-black mx-auto',
      footer: 'bg-white'
    }
  }
})

const titleStyle = cva('text-2xl', {
  variants: {
    place: {
      menu: 'text-primary text-center',
      footer: 'text-white'
    }
  }
})

const FooterSocial = ({ place }: Props) => {
  return (
    <div className={socialStyle({ place })}>
      <p className={titleStyle({ place })}>Zapratite Nas</p>
      <div className={lineStyle({ place })} />
      <a
        href="https://www.instagram.com/vinarija_dumo/"
        rel="nofollow noreferrer"
        target="_blank"
        className="mb-4 flex gap-[10px] items-center cursor-pointer hover:underline w-fit"
      >
        <InstaIcon />
        <p className="font-light text-base">Instagram</p>
      </a>
      <a
        rel="nofollow noreferrer"
        target="_blank"
        className="flex gap-[10px] items-center cursor-pointer hover:underline w-fit"
      >
        <FbIcon />
        <p className="font-light text-base">Facebook</p>
      </a>
    </div>
  )
}

export default FooterSocial
