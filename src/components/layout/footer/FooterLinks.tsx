import Link from 'next/link'
import React from 'react'
import clsx from 'clsx'

import Logo from '../../shared/Logo'

const links = [
  {
    text: 'Vinarija',
    href: '#'
  },
  {
    text: 'Vinograd',
    href: '#'
  },
  {
    text: 'Novosti',
    href: '#'
  },
  {
    text: 'Shop',
    href: '#'
  },
  {
    text: 'Politika privatnosti',
    href: '#',
    thin: true
  },
  {
    text: 'Uslovi koriscenja',
    href: '#',
    thin: true
  }
]

const FooterLinks = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-8">
        <Logo />
        <p className="font-light">Vinarija</p>
      </div>
      <div className="flex flex-col gap-4">
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
