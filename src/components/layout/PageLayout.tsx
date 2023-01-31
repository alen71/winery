import React, { ReactNode } from 'react'

import BgLines from '../shared/BgLines'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'

type PageLayoutProps = {
  children: ReactNode
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="relative">
      <Navbar />
      <BgLines />
      <main className="relative z-[2]">{children}</main>
      <Footer />
    </div>
  )
}

export default PageLayout
