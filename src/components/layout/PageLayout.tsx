import React, { ReactNode } from 'react'

import BgLines from '../shared/BgLines'
import CartIcon from '../cart/CartIcon'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'
import Helmet from '../shared/Helmet'

type PageLayoutProps = {
  children: ReactNode
  title: string
  desc: string
}

const PageLayout = ({ children, title, desc }: PageLayoutProps) => {
  return (
    <Helmet title={title} desc={desc}>
      <div className="relative">
        <Navbar />
        <BgLines />
        <CartIcon />
        <main className="relative z-[2]">{children}</main>
        <Footer />
      </div>
    </Helmet>
  )
}

export default PageLayout
