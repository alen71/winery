import Image, { ImageProps, StaticImageData } from 'next/image'
import React from 'react'
import Title from './Title'

type Props = ImageProps & {
  titleText: string
  titleHighlight?: string
  underTitleText?: string
  description: string
}

const PagesHero = ({
  titleText,
  titleHighlight,
  underTitleText,
  description,
  ...ImageProps
}: Props) => {
  return (
    <div className="container">
      <div className="lg:p-20 bg-gray-primary-alfa relative flex flex-col lg:flex-row items-center border-b-[1px] border-primary">
        <div className="p-5 sm:p-10 pb-0 lg:p-0 lg:max-w-[50%]">
          <Title type="h1" text={titleText} highlightText={titleHighlight} />
          {underTitleText && <p className="font-bold mt-9">{underTitleText}</p>}
          <div className="w-10 h-[3px] bg-primary my-5" />
          <p className="font-normal w-full lg:max-w-[80%]">{description}</p>
        </div>
        <div className="relative lg:absolute lg:right-0">
          <Image src={ImageProps.src} alt={ImageProps.alt} />
        </div>
      </div>
    </div>
  )
}

export default PagesHero
