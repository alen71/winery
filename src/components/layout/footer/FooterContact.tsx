import { cva } from 'class-variance-authority'
import React from 'react'

import type { VariantProps } from 'class-variance-authority'

type contactStyleProps = VariantProps<typeof contactStyle>

type Props = contactStyleProps & {}

const contactStyle = cva('font-light text-sm', {
  variants: {
    place: {
      menu: 'text-black text-center',
      footer: 'text-white'
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
      menu: 'text-primary',
      footer: 'text-white'
    }
  }
})

const FooterContact = ({ place }: Props) => {
  return (
    <div className={contactStyle({ place })}>
      <p className={titleStyle({ place })}>Kontakt</p>
      <div className={lineStyle({ place })} />
      <p>Telefon: +381 60 16 62 158</p>
      <a
        rel="nofollow"
        href="mailto:office@vinarijaduno.rs"
        className="hover:underline"
      >
        e-mail: office@vinarijaduno.rs
      </a>
      <p className="mt-4 font-semibold">Popovica, Fruska Gora</p>
    </div>
  )
}

export default FooterContact
