import Collection from "./Collection"

const collections = [
    { name: 'Clothing Collections 2030', image: 'https://preview.colorlib.com/theme/malefashion/img/banner/banner-1.jpg.webp', imagePos: 'right'},
    { name: 'Shoes Spring 2030', image: 'https://preview.colorlib.com/theme/malefashion/img/banner/banner-2.jpg', imagePos: 'left'},
    { name: 'Accessories', image: 'https://preview.colorlib.com/theme/malefashion/img/banner/banner-3.jpg', imagePos: 'right'},
]

const Collections = () => {
    return (
        <section className="relative px-6 pt-14 lg:px-8 mt-4 ">
            {collections.map((item) => (
                <Collection name={item.name} key={item.name} image={item.image} imagePos={item.imagePos}/>
            ))}
        </section>
    )
}

export default Collections