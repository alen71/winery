import Link from 'next/link'
import React from 'react'

import LogoDumo from 'src/assets/Logo.svg'

const Logo = () => {
  return (
    <Link href="/">
      <LogoDumo />
    </Link>
  )
}

export default Logo
