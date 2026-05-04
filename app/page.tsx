import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WorkInAction from '@/components/WorkInAction'
import WhyUs from '@/components/WhyUs'
import Testimonials from '@/components/Testimonials'
import Services from '@/components/Services'
import Mission from '@/components/Mission'
import FAQ from '@/components/FAQ'
import FooterSection from '@/components/FooterSection'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WorkInAction />
      <WhyUs />
      <Testimonials />
      <Services />
      <Mission />
      <FAQ />
      <FooterSection />
    </main>
  )
}
