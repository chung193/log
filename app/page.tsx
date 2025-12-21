import Header from '@/components/Header'
import HomeBanner from '@/components/HomeBanner'
import HomeAbout from '@/components/HomeAbout'
import HomeSolutions from '@/components/HomeSolutions'
import HomeWhy from '@/components/HomeWhy'
import HomeNews from '@/components/HomeNews'
import HomeContact from '@/components/HomeContact'
import Footer from '@/components/Footer'
import LogisticsCarousel from '@/components/LogisticsCarousel'
import Ecosystem from '@/components/Ecosystem'
import Solution from '@/components/Solution'
import LogisticsStats from '@/components/LogicsticsStats'
import WhyChooseVNP from '@/components/WhyChooseVNP'
import PartnersSection from '@/components/PartnersSection'
import NewsBlogSection from '@/components/NewsBlogSection'
import ContactFormSection from '@/components/ContactFormSection'
export default function Home() {
  return (
    <>
      <main className="main page-home">
        <HomeBanner />
        <HomeAbout />
        <LogisticsCarousel />
        <Ecosystem />
        <Solution />
        <LogisticsStats />
        <WhyChooseVNP />
        <PartnersSection />
        <NewsBlogSection />
        <ContactFormSection />
      </main>
      {/* <Footer /> */}
    </>
  )
}