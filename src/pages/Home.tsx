import CTASection from '../components/sections/CTASection'
import FeatureGrid from '../components/sections/FeatureGrid'
import HeroSection from '../components/sections/HeroSection'
import HowItWorksSteps from '../components/sections/HowItWorksSteps'
import LifestyleSection from '../components/sections/LifestyleSection'
import PackagingSection from '../components/sections/PackagingSection'
import ProductShowcase from '../components/sections/ProductShowcase'
import Testimonials from '../components/sections/Testimonials'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureGrid />
      <ProductShowcase />
      <HowItWorksSteps />
      <LifestyleSection />
      <PackagingSection />
      <Testimonials />
      <CTASection />
    </>
  )
}
