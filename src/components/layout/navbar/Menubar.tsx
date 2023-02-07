import Link from 'next/link'
import clsx from 'clsx'
import React, { Dispatch, SetStateAction, useEffect } from 'react'

import XIcon from 'src/assets/XIcon.svg'
import SquareIcon from 'src/assets/squareIcon.svg'
import FooterContact from '../footer/FooterContact'
import FooterSocial from '../footer/FooterSocial'
import { useRouter } from 'next/router'

type Props = {
  open?: boolean
  toggleOpen: () => void
}

const links = [
  {
    text: 'Početna',
    href: '/'
  },
  {
    text: 'Vinarija',
    href: '/vinarija-dumo'
  },
  {
    text: 'Vinograd',
    href: '/vinogradi'
  },
  {
    text: 'Obilasci',
    href: '/obilasci'
  },
  {
    text: 'Članci',
    href: '/novosti'
  },
  {
    text: 'Shop',
    href: '/shop'
  }
]

const Menubar = ({ open, toggleOpen }: Props) => {
  const { pathname } = useRouter()

  return (
    <div
      className={clsx(
        'w-0 bg-white fixed z-50 top-0 right-0 h-screen overflow-y-scroll overflow-x-hidden duration-500  ',
        { 'w-full sm:w-[500px]': open }
      )}
    >
      <div className="w-full sm:w-[500px] px-10 sm:px-16 pt-12 bg-white absolute z-50 top-0 right-0 h-screen overflow-y-scroll pb-32">
        <div className="mb-11 relative">
          <div onClick={toggleOpen} className="cursor-pointer">
            <XIcon />
          </div>
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <SquareIcon />
          </div>
        </div>
        <div className="flex flex-col border-t-1 border-primary mb-14">
          {links.map(({ text, href }) => (
            <Link
              key={text}
              href={href}
              className={clsx(
                'py-5 border-b-1 border-primary text-primary font-semibold text-xl w-full text-center uppercase hover:text-black',
                { 'text-black': pathname === href }
              )}
              onClick={toggleOpen}
            >
              {text}
            </Link>
          ))}
        </div>
        <FooterContact place="menu" />
        <br />
        <FooterSocial place="menu" />
      </div>
    </div>
  )
}

export default Menubar
