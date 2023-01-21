'use client'

import HomeMainContent from 'src/components/layout/home/HomeMainContent'
import HomeShopContent from 'src/components/layout/home/HomeShopContent'
import HomeToursContent from 'src/components/layout/home/HomeToursContent'
import HomeVineyard from 'src/components/layout/home/HomeVineyard'
import PageLayout from 'src/components/layout/PageLayout'

export default function Home() {
  return (
    <PageLayout>
      <main className="relative z-[2] mb-20 md:mb-32">
        <HomeMainContent />
      </main>

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
