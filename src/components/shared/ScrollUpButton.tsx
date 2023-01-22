import React, { useEffect, useState } from 'react'

import ArrowUp from 'src/assets/arrowUp.svg'

const ScrollUpButton = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const pageOffset = window?.pageYOffset

      setIsScrolled(pageOffset > 0)
    })
  }, [])

  const toggleButton = isScrolled
    ? 'opacity-60'
    : 'opacity-0 pointer-events-none'

  return (
    <div
      aria-label="Vrati se na vrh stranice"
      className={`${toggleButton} fixed bottom-9 right-9 w-[73px] h-[73px] flex items-center justify-center bg-darker-primary z-20 rounded-full cursor-pointer duration-300`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ArrowUp />
    </div>
  )
}

export default ScrollUpButton
