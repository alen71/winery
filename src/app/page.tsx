'use client'

import HomeHeroContent from 'src/components/home/HomeHeroContent'
import HomeShopContent from 'src/components/home/HomeShopContent'
import HomeToursContent from 'src/components/home/HomeToursContent'
import HomeVineyard from 'src/components/home/HomeVineyard'
import PageLayout from 'src/components/layout/PageLayout'

export default function Home() {
  return (
    <PageLayout>
      <section className="relative z-[2] mb-20 md:mb-32">
        <HomeHeroContent />
      </section>

      <section className="relative z-[3] mb-20 md:mb-32">
        <HomeShopContent />
      </section>

      <section className="relative z-[2] mb-20 md:mb-32">
        <HomeVineyard />
      </section>

      <section className="relative z-[2] mb-20 md:mb-32">
        <HomeToursContent />
      </section>
    </PageLayout>
  )
}
