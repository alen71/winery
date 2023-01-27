import React from 'react'
import PageLayout from 'src/components/layout/PageLayout'
import NewsRow from 'src/components/shared/NewsRow'
import PagesHero from 'src/components/shared/PagesHero'
import SectionWrapper from 'src/components/shared/SectionWrapper'

import WineBarrels from '/public/images/vinarija/david-goldman-27G8PF-fjrs-unsplash 1.jpg'

const News = () => {
  return (
    <PageLayout>
      <SectionWrapper Zindex={2}>
        <PagesHero
          titleText="Vinarija"
          titleHighlight="Dumo"
          description="Finished her are its honoured drawings nor. Pretty see mutual thrown all not edward ten. Particular an boisterous up he reasonably frequently. Several any had enjoyed shewing studied two. Up intention remainder sportsmen behaviour ye happiness. Few again any alone style added abode ask. Nay projecting unpleasing boisterous eat discovered solicitude. Own six moments produce elderly pasture far arrival."
          underTitleText="Naš rad i naše vino je ono sto svi vole, a ovo je priča o nama."
          src=""
          alt=""
        />
      </SectionWrapper>
      <div className="container relative flex flex-col gap-32 mb-32">
        <NewsRow
          titleHighlight="NASLOV ČLANKA"
          description="Finished her are its honoured drawings nor. Pretty see mutual thrown all not edward ten. Particular an boisterous up he reasonably frequently. Several any had enjoyed shewing studied two."
          src={WineBarrels}
          alt="Vinska burad vinarije Dumo"
        />
        <NewsRow
          titleHighlight="NASLOV ČLANKA"
          description="Finished her are its honoured drawings nor. Pretty see mutual thrown all not edward ten. Particular an boisterous up he reasonably frequently. Several any had enjoyed shewing studied two."
          src={WineBarrels}
          alt="Vinska burad vinarije Dumo"
        />
        <NewsRow
          titleHighlight="NASLOV ČLANKA"
          description="Finished her are its honoured drawings nor. Pretty see mutual thrown all not edward ten. Particular an boisterous up he reasonably frequently. Several any had enjoyed shewing studied two."
          src={WineBarrels}
          alt="Vinska burad vinarije Dumo"
        />
      </div>
    </PageLayout>
  )
}

export default News
