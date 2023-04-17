import Link from 'next/link'
import React from 'react'
import clsx from 'clsx'

import Logo from '../../shared/Logo'

const links = [
  {
    text: 'Vinarija',
    href: '/vinarija-dumo'
  },
  {
    text: 'Vinogradi',
    href: '/vinogradi'
  },
  {
    text: 'Novosti',
    href: '/novosti'
  },
  {
    text: 'Shop',
    href: '/shop'
  },
  {
    text: 'Politika privatnosti',
    href: '#',
    thin: true
  },
  {
    text: 'Uslovi koriscenja',
    href: '/terms-of-use',
    thin: true
  }
]

const FooterLinks = () => {
  return (
    <div className="flex flex-col gap-8 items-center md:items-start">
      <div className="flex items-center gap-0 md:gap-8">
        <span className="scale-75 sm:scale-100">
          <Logo />
        </span>
        <p className="font-light hidden md:block">Vinarija</p>
      </div>
      <div className="flex flex-col items-center md:items-start gap-4">
        {links.map(({ text, href, thin }) => (
          <Link
            key={text}
            href={href}
            className={clsx('w-fit hover:underline', {
              'font-light text-sm opacity-60': thin,
              'font-bold text-base': !thin
            })}
          >
            {text}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default FooterLinks
