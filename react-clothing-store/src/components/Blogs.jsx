import BlogCard from "./BlogCard"

const blogs = [
    { date: '16 February 2020', title: 'What Curling Irons Are The Best Ones', image: 'https://preview.colorlib.com/theme/malefashion/img/blog/blog-1.jpg.webp' },
    { date: '16 February 2020', title: 'What Curling Irons Are The Best Ones', image: 'https://preview.colorlib.com/theme/malefashion/img/blog/blog-2.jpg.webp' },
    { date: '16 February 2020', title: 'What Curling Irons Are The Best Ones', image: 'https://preview.colorlib.com/theme/malefashion/img/blog/blog-3.jpg.webp' },
]

const News = () => {
    return (
        <div className="px-6 my-16">
            <p className="text-md tracking-widest font-semibold text-red-500 text-center mb-6">Latest News</p>
            <h1 className="text-4xl font-semibold text-center leading-normal mb-10">Fashion New Trends</h1>

            <div className="md:flex md:flex-wrap md:justify-evenly">
                {blogs.map((blog, index) => (
                    <BlogCard
                        key={index}
                        date={blog.date}
                        title={blog.title}
                        image={blog.image}
                    />
                ))}
            </div>

        </div>
    )
}

export default News