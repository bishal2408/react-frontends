import Collections from "../components/Collections"
import Hero from "../components/Hero"
import Blogs from "../components/Blogs"
import Sale from "../components/Sale"
import Sellers from "../components/Sellers"
import SocialAd from '../components/SocialAd'


const HomePage = () => {
  return (
    <>
        <Hero />
        <Collections />
        <Sellers />
        <Sale />
        <SocialAd />
        <Blogs />
    </>
  )
}

export default HomePage