import BlogCard from "./BlogCard"

const News = ({blogs}) => {
    return (
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
    )
}

export default News