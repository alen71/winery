import Image, { ImageProps } from 'next/image'
import Link from 'next/link'
import React from 'react'
import ReadMoreBtn from './ReadMoreBtn'
import Title from './Title'

type Props = ImageProps & {
  title?: string
  titleHighlight?: string
  description: string
}

const NewsRow = ({
  title,
  titleHighlight,
  description,
  ...ImageProps
}: Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-gray-primary">
      <div className="group relative overflow-hidden w-full h-72 lg:h-full">
        <Image
          src={ImageProps.src}
          alt={ImageProps.alt}
          fill
          className="group-hover:scale-105 duration-300"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="px-5 sm:px-20 py-5 flex flex-col justify-center">
        <Title type="h2" text={title} highlightText={titleHighlight} />
        <div className="w-10 h-[3px] bg-primary my-5" />
        <p className="mb-3">{description}</p>
      </div>
    </div>
  )
}

export default NewsRow
