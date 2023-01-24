import React from 'react'

import FooterContact from './FooterContact'
import FooterLinks from './FooterLinks'
import FooterRights from './FooterRights'
import FooterSocial from './FooterSocial'
import FooterWines from './FooterWines'

import DIcon from 'src/assets/DIcon.svg'

const footerColumns = [
  {
    col: <FooterLinks />
  },
  {
    col: <FooterContact place="footer" />
  },
  {
    col: <FooterWines />
  },
  {
    col: <FooterSocial place="footer" />
  }
]

const Footer = () => {
  return (
    <div className="container relative">
      <div className="absolute left-8 right-8 top-[-4%] flex items-center">
        <span className="w-full h-[1px] bg-primary"></span>
        <div className="w-[27px]">
          <DIcon />
        </div>
        <span className="w-full h-[1px] bg-primary"></span>
      </div>
      <div className="py-12 border-b-[1px] border-primary grid gap-y-20 lg:gap-y-0 justify-items-center lg:justify-items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {footerColumns.map(({ col }, i) => {
          return (
            <div key={i} className="lg:pl-10 xl:pl-20">
              {col}
            </div>
          )
        })}
      </div>

      <FooterRights />
    </div>
  )
}

export default Footer
