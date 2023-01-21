import React from 'react'

const BgLines = () => {
  return (
    <div className="fixed container left-[50%] translate-x-[-50%] top-0 h-full flex justify-between z-0 pointer-events-none">
      {Array.from({ length: 5 }, (_, i) => (
        <div
          key={i}
          className={`${i === 0 ? 'ml-[-1px]' : ''} ${
            i === 4 ? 'mr-[-1px]' : ''
          } h-full w-[1px] bg-gray-light opacity-40`}
        ></div>
      ))}
    </div>
  )
}

export default BgLines
