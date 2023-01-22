import React from 'react'
import FooterContact from './FooterContact'
import FooterLinks from './FooterLinks'
import FooterRights from './FooterRights'
import FooterSocial from './FooterSocial'
import FooterWines from './FooterWines'

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
      <div className="py-12 border-y-[1px] border-primary grid grid-cols-4">
        {footerColumns.map(({ col }, i) => {
          return (
            <div key={i} className="pl-20">
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
