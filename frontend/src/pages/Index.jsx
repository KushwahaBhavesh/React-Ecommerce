import Hero from "../Components/Home/Hero"
import HeroSlider from "../Components/Home/HeroSlider"
import KidsWear from "../Components/Home/KidsWear"
import LatestProduct from "../Components/Home/LatestProduct"
import MensWear from "../Components/Home/MensWear"
import WomensWear from "../Components/Home/WomensWear"
import Layout from "../Components/Layouts/Layout"



const Index = () => {
  return <>
    <Layout>
      <Hero />
      <HeroSlider />
      <LatestProduct />
      <KidsWear />
      <WomensWear />
      <MensWear />
    </Layout>
  </>
}

export default Index
