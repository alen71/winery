import React, { ReactNode } from 'react'
import BgLines from '../shared/BgLines'
import ScrollUpButton from '../shared/ScrollUpButton'
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
      {children}
    </div>
  )
}

export default PageLayout
