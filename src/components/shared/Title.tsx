import React from 'react'

type TitleProps = {
  type: 'h1' | 'h2'
  text?: string
  highlightText?: string
}

const Title = ({ type, text, highlightText }: TitleProps) => {
  return (
    <>
      {type === 'h1' ? (
        <h1 className="text-4xl sm:text-5xl font-semibold">
          {text} <span className="uppercase text-primary">{highlightText}</span>
        </h1>
      ) : (
        <h2 className="text-3xl sm:text-4xl font-semibold">
          {text} <span className="uppercase text-primary">{highlightText}</span>
        </h2>
      )}
    </>
  )
}

export default Title
