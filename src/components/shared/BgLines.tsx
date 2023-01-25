import clsx from 'clsx'
import React from 'react'

const BgLines = () => {
  return (
    <div className="fixed container left-[50%] translate-x-[-50%] top-0 h-full flex justify-between z-[1] pointer-events-none">
      {Array.from({ length: 5 }, (_, i) => (
        <div
          key={i}
          className={clsx('h-full w-[1px] bg-gray-light opacity-15', {
            'ml-[-1px]': i === 0,
            'mr-[-1px]': i === 4
          })}
        />
      ))}
    </div>
  )
}

export default BgLines
