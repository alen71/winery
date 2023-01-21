'use client'

import HomeMainContent from 'src/components/layout/home/HomeMainContent'
import HomeShopContent from 'src/components/layout/home/HomeShopContent'
import PageLayout from 'src/components/layout/PageLayout'

export default function Home() {
  return (
    <PageLayout>
      <main className="relative mb-20 md:mb-32">
        <HomeMainContent />
      </main>

      <section className="relative mb-20 md:mb-32">
        <HomeShopContent />
      </section>
    </PageLayout>
  )
}
