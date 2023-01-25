import clsx from 'clsx'
import React from 'react'
import useWindowWidth from 'src/hooks/useWindowWidth'

const BgLines = () => {
  const width = useWindowWidth()

  return (
    <div className="fixed container left-[50%] w-screen translate-x-[-50%] top-0 h-full flex justify-between z-[1] pointer-events-none">
      {Array.from({ length: width < 640 ? 3 : 5 }, (_, i) => (
        <div
          key={i}
          className={clsx('h-full w-[1px] bg-gray-light opacity-[0.15]', {
            'ml-[-1px]': i === 0,
            'mr-[-1px]': i === 4
          })}
        />
      ))}
    </div>
  )
}

export default BgLines
