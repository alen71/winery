import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
  Zindex?: number
  className?: string
}

const SectionWrapper = ({ children, Zindex, className }: Props) => {
  return (
    <section className={`relative z-[${Zindex}] mb-20 md:mb-32 ${className}`}>
      {children}
    </section>
  )
}

export default SectionWrapper
