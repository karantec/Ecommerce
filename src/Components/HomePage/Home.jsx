

import Features from "./Bottom"
import ContactSection from "./Contact"
import DiamondRingHero from "./Diamond"
import JewelryShowcase from "./EveryDay"
import FeatureProducts from "./Feaur"
import HeroSection from "./Hero"
import InstagramGallery from "./Instagallery"
import JewelryGrid from "./JewelleyGrid"
import ProductSelling from "./ProductSelling"
import FeaturesSection from "./Lower"
import CategoryShowcase from "./Shop"
import BlogSection from "./BlogSection"
import WhyChooseUs from "../AboutPage/WhyChooseus"
import TestimonialsComponent from "./Testimonial"
import GoldPrices from "./GoldPrices"


const Home = () => {
  return (
    <div>
      <HeroSection/>
      <FeaturesSection/>
      <GoldPrices/>
      <WhyChooseUs/>
     
      <JewelryGrid/>
      <CategoryShowcase/>
      <JewelryShowcase/>
      <FeatureProducts/>
      <TestimonialsComponent/>
      <DiamondRingHero/>
     <ProductSelling/>
     {/* <JewelryShowcases/> */}
     <BlogSection/>
      <InstagramGallery/>
      <Features/>
      <ContactSection/>
    </div>
  )
}

export default Home