import Image, { StaticImageData } from 'next/image'
import React from 'react'
import Title from './Title'

type Props = {
  titleText: string
  titleHighlight?: string
  underTitleText?: string
  description: string
  imgUrl: StaticImageData
  imgAlt: string
}

const PagesHero = ({
  titleText,
  titleHighlight,
  underTitleText,
  description,
  imgAlt,
  imgUrl
}: Props) => {
  return (
    <div className="container relative">
      <div className="p-20 bg-gray-primary-alfa relative flex items-center">
        <div className="max-w-[50%]">
          <Title type="h1" text={titleText} highlightText={titleHighlight} />
          {underTitleText && <p className="font-bold mt-9">{underTitleText}</p>}
          <div className="w-10 h-[3px] bg-primary my-5" />
          <p className="font-normal">{description}</p>
        </div>
        <div className="absolute right-0">
          <Image src={imgUrl} alt={imgAlt} />
        </div>
      </div>
    </div>
  )
}

export default PagesHero
