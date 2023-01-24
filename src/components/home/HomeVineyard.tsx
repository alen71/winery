import Image from 'next/image'
import React from 'react'

import Overlay from 'src/components/shared/Overlay'
import ReadMoreBtn from 'src/components/shared/ReadMoreBtn'
import Title from 'src/components/shared/Title'

import Lineage from '/public/images/dumo-lineage.png'
import BlackWine from '/public/images/Pinot-Noir-Odsjaj-2.png'

const HomeVineyard = () => {
  return (
    <>
      <div className="container relative">
        <div className="grid lg:grid-cols-2">
          <div className="relative xl:pr-28 h-full px-5 sm:px-10 lg:px-0 pb-10 lg:pb-0 bg-gray-primary-alfa lg:bg-transparent row-start-2 lg:row-start-1">
            <div className="h-[400px] lg:h-full w-full relative">
              <Overlay image="light" />
              <Image
                src={Lineage}
                fill
                alt="Slika vinove loze"
                quality={100}
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div className="max-w-[136px] sm:max-w-[236px] absolute right-0 xl:right-[112px] bottom-[-2%] sm:bottom-[-15%] z-[11]">
              <Image src={BlackWine} alt="Slika vinove loze" quality={100} />
            </div>
          </div>
          <div className="bg-gray-primary-alfa lg:border-b-[1px] border-primary px-5 sm:px-10 xl:px-20 py-10 sm:py-16 xl:py-24 flex flex-col items-center justify-center gap-9 h-full">
            <Title type="h2" text="Vinogradi" highlightText="Dumo" />
            <div className="text-justify">
              <p>
                Finished her are its honoured drawings nor. Pretty see mutual
                thrown all not edward ten. Particular an boisterous up he
                reasonably frequently. Several any had enjoyed shewing studied
                two. Up intention remainder sportsmen behaviour ye happiness.
                Few again any alone style added abode ask. Nay projecting
                unpleasing boisterous eat discovered solicitude. Own six moments
                produce elderly pasture far arrival. Hold our year they ten
                upon. Gentleman contained so intention sweetness in on
                resolving.
              </p>
              <br />
              <p>
                John draw real poor on call my from. May she mrs furnished
                discourse extremely. Ask doubt noisy shade guest did built her
                him. Ignorant repeated hastened it do.
              </p>
            </div>
            <ReadMoreBtn href="/" />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeVineyard
