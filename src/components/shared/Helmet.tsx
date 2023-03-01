import Head from 'next/head'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
  title: string
  desc: string
}

const BASE_URL = ''

const Helmet = ({ children, title, desc }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta content={title} property="og:title" />
        <meta content={desc} property="og:description" />
        <meta content="website" property="og:type" />
        {/* <meta content={BASE_URL} property="og:url" /> */}
        <meta content="Vinarija DUMO" property="og:site_name" />
      </Head>
      {children}
    </>
  )
}

export default Helmet
