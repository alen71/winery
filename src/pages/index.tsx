import HomeHeroContent from 'src/components/home/HomeHeroContent'
import HomeShopContent from 'src/components/home/HomeShopContent'
import HomeToursContent from 'src/components/home/HomeToursContent'
import HomeVineyard from 'src/components/home/HomeVineyard'
import PageLayout from 'src/components/layout/PageLayout'
import SectionWrapper from 'src/components/shared/SectionWrapper'

export default function Home() {
  return (
    <PageLayout>
      <SectionWrapper>
        <HomeHeroContent />
      </SectionWrapper>

      <SectionWrapper className="overflow-hidden pt-[13px]">
        <HomeShopContent />
      </SectionWrapper>

      <SectionWrapper>
        <HomeVineyard />
      </SectionWrapper>

      <SectionWrapper>
        <HomeToursContent />
      </SectionWrapper>
    </PageLayout>
  )
}
