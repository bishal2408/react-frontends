import { Link } from "react-router-dom"
import heroImage from "../assets/homepage/hero.jpg.webp"


const Hero = () => {
    return (
        <div className="isolate px-6 pt-14 lg:px-16 mt-4 h-full bg-cover bg-no-repeat"  style={{ backgroundImage: `url(${heroImage})`, backgroundPosition: 'top center' }}>
            <div className="max-w-2xl py-32 sm:py-48 lg:py-32">
                <div className="mx-auto">
                    <p className="text-md text-orange-600 font-semibold tracking-widest my-4">SUMMER COLLECTION</p>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 lg:text-6xl">
                        Fall - Winter Collections 2030
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        A special label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.
                    </p>
                    <div className="mt-10 gap-x-6 w-40">
                        <Link
                            to="/shop"
                            className="flex items-center bg-black px-3.5 py-2.5 text-sm tracking-widest font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                        >
                            <p className="mr-2">SHOP NOW</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>

                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero