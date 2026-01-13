import Header from '@/components/Header'
import HomeBanner from '@/components/HomeBanner'
import HomeAbout from '@/components/HomeAbout'
import Footer from '@/components/Footer'
import LogisticsCarousel from '@/components/LogisticsCarousel'
import Ecosystem from '@/components/Ecosystem'
import Container from '@/components/Container'
import Solution from '@/components/Solution'
import LogisticsStats from '@/components/LogicsticsStats'
import WhyChooseVNP from '@/components/WhyChooseVNP'
import PartnersSection from '@/components/PartnersSection'
import ContactFormSection from '@/components/ContactFormSection'

export default function Home() {
  return (
    <>
      <main className="main page-home">
        <HomeBanner />
        <HomeAbout />
        <LogisticsCarousel />
        <Ecosystem />
        <Container />
        <Solution />
        <LogisticsStats />
        <WhyChooseVNP />
        <PartnersSection />
        <ContactFormSection />
      </main>
    </>
  )
}