import HeroNavigate from "../components/HeroNavigate"
import breadcrumbImage from "../assets/blog page/breadcrumb-bg.jpg.webp"
import Blogs from "../components/Blogs"


const blogs = [
    { date: '16 February 2020', title: 'What Curling Irons Are The Best Ones', image: 'https://preview.colorlib.com/theme/malefashion/img/blog/blog-1.jpg.webp' },
    { date: '16 February 2020', title: 'What Curling Irons Are The Best Ones', image: 'https://preview.colorlib.com/theme/malefashion/img/blog/blog-2.jpg.webp' },
    { date: '16 February 2020', title: 'What Curling Irons Are The Best Ones', image: 'https://preview.colorlib.com/theme/malefashion/img/blog/blog-3.jpg.webp' },
    { date: '16 February 2020', title: 'What Curling Irons Are The Best Ones', image: 'https://preview.colorlib.com/theme/malefashion/img/blog/blog-1.jpg.webp' },
    { date: '16 February 2020', title: 'What Curling Irons Are The Best Ones', image: 'https://preview.colorlib.com/theme/malefashion/img/blog/blog-2.jpg.webp' },
    { date: '16 February 2020', title: 'What Curling Irons Are The Best Ones', image: 'https://preview.colorlib.com/theme/malefashion/img/blog/blog-3.jpg.webp' },
    { date: '16 February 2020', title: 'What Curling Irons Are The Best Ones', image: 'https://preview.colorlib.com/theme/malefashion/img/blog/blog-1.jpg.webp' },
    { date: '16 February 2020', title: 'What Curling Irons Are The Best Ones', image: 'https://preview.colorlib.com/theme/malefashion/img/blog/blog-2.jpg.webp' },
    { date: '16 February 2020', title: 'What Curling Irons Are The Best Ones', image: 'https://preview.colorlib.com/theme/malefashion/img/blog/blog-3.jpg.webp' },
  ]

const BlogPage = () => {
    return (
        <>
            <HeroNavigate parentLink="/blog" />
            <div className="text-center flex items-center justify-center bg-no-repeat bg-cover h-[350px] mb-16" style={{ backgroundImage: `url(${breadcrumbImage})`, backgroundPosition: 'top center' }}>
                <div className="w-full-px-4 mx-auto">
                    <div className="flex flex-wrap -mx-4">
                        <h2 className="text-white text-6xl font-semibold tracking-tight">Our Blog</h2>
                    </div>
                </div>
            </div>

            <div className="px-5">
                <Blogs blogs={blogs}/>
            </div>
        </>
    )
}

export default BlogPage