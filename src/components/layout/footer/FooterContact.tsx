import { cva } from 'class-variance-authority'
import React from 'react'

import type { VariantProps } from 'class-variance-authority'

type contactStyleProps = VariantProps<typeof contactStyle>

type Props = contactStyleProps & {}

const contactStyle = cva('font-light text-sm text-center md:text-left', {
  variants: {
    place: {
      menu: 'text-black text-center flex flex-col items-center',
      footer: 'text-white'
    }
  }
})

const lineStyle = cva('h-[1px] w-5 my-5', {
  variants: {
    place: {
      menu: 'bg-black mx-auto',
      footer: 'bg-white mx-auto md:mx-0'
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

const FooterContact = ({ place }: Props) => {
  return (
    <div className={contactStyle({ place })}>
      <p className={titleStyle({ place })}>Kontakt</p>
      <div className={lineStyle({ place })} />
      <a
        rel="nofollow"
        href="tel:+381601662158"
        className="hover:underline block"
      >
        Telefon: +381 60 16 62 158
      </a>
      <a
        rel="nofollow"
        href="mailto:office@vinarijaduno.rs"
        className="hover:underline block"
      >
        e-mail: office@vinarijaduno.rs
      </a>
      <p className="mt-4 font-semibold">Popovica, Fruska Gora</p>
    </div>
  )
}

export default FooterContact
