import Hero from "../components/Home/Hero"
import Collections from "../components/Home/Collections"
import Sellers from "../components/Home/Sellers"
import Sale from "../components/Home/Sale"
import SocialAd from "../components/Home/SocialAd"
import Blogs from "../components/Blogs"


const homeBlogs = [
  { date: '16 February 2020', title: 'What Curling Irons Are The Best Ones', image: 'https://preview.colorlib.com/theme/malefashion/img/blog/blog-1.jpg.webp' },
  { date: '16 February 2020', title: 'What Curling Irons Are The Best Ones', image: 'https://preview.colorlib.com/theme/malefashion/img/blog/blog-2.jpg.webp' },
  { date: '16 February 2020', title: 'What Curling Irons Are The Best Ones', image: 'https://preview.colorlib.com/theme/malefashion/img/blog/blog-3.jpg.webp' },
]


const HomePage = () => {
  return (
    <>
      <Hero />
      <Collections />
      <Sellers />
      <Sale />
      <SocialAd />

      <div className="px-6 my-16">
        <p className="text-md tracking-widest font-semibold text-red-500 text-center mb-6">Latest News</p>
        <h1 className="text-4xl font-semibold text-center leading-normal mb-10">Fashion New Trends</h1>
        <Blogs blogs={homeBlogs} />
      </div>

    </>
  )
}

export default HomePage