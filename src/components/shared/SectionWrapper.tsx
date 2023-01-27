import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
  Zindex?: number
}

const SectionWrapper = ({ children, Zindex }: Props) => {
  return (
    <section className={`relative z-[${Zindex}] mb-20 md:mb-32`}>
      {children}
    </section>
  )
}

export default SectionWrapper
