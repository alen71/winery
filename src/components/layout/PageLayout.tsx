import React, { ReactNode } from 'react'

import BgLines from '../shared/BgLines'
import ScrollUpButton from '../shared/ScrollUpButton'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'

type PageLayoutProps = {
  children: ReactNode
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <BgLines />
      <ScrollUpButton />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default PageLayout
