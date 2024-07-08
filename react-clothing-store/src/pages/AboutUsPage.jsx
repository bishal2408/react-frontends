import AboutDetails from "../components/About/AboutDetails"
import HeroNavigate from "../components/HeroNavigate"
import TestimonialImage from "../assets/aboutpage/testimonial.jpg.webp"
import MemberSection from "../components/About/MemberSection"
import ClientSection from "../components/About/ClientSection"
 



const AboutUsPage = () => {
    return (
        <>
            <HeroNavigate parentLink='/about' />
            <AboutDetails />

            <div className="my-24 lg:flex lg:items-center bg-gray-100 -mx-4 ">
                <div className="py-14 px-10 text-center text-[20px] pt-3 mb-6">
                    <span className="text-red-600 font-semibold text-6xl"> ”</span>
                    <p className="italic lg:w-8/12 lg:m-auto">
                        “Going out after work? Take your butane curling iron with you to the office, heat it up,
                        style your hair before you leave the office and you won't have to make a trip back home.”
                    </p>

                    <div className="inline-block my-6">
                        <div className="float-left mr-[20px]">
                            <img src="https://preview.colorlib.com/theme/malefashion/img/about/testimonial-author.jpg" className="h-14 w-14 rounded-full" alt="testimonial aurthor" />
                        </div>

                        <div className="overflow-hidden pt-1">
                            <h5 className="text-base font-semibold tracking-wide">Augusta Schultz</h5>
                            <p className="text-base text-gray-400 mt-1">Fashion Design</p>
                        </div>
                    </div>
                </div>

                <div className="p-0 relative w-full">
                    <div className="bg-no-repeat bg-cover h-[600px]" style={{ backgroundImage: `url(${TestimonialImage})`, backgroundPosition: 'top center' }}>
                    </div>
                </div>
            </div>

            <div className="md:flex md:flex-wrap md:justify-evenly md:items-center mt-28 mb-32">
                <div className="relative px-4">
                    <div className="mb-7 overflow-hidden">
                        <div className="float-left mr-4"> <h2 className="text-black font-semibold text-6xl inline-block leading-10">102</h2> </div>
                        <span className="block text-gray-700 text-base font-semibold leading-6 overflow-hidden">Our <br /> Clients</span>
                    </div>
                </div>
                <div className="relative px-4">
                    <div className="mb-7 overflow-hidden">
                        <div className="float-left mr-4"> <h2 className="text-black font-semibold text-6xl inline-block leading-10">30</h2> </div>
                        <span className="block text-gray-700 text-base font-semibold leading-6 overflow-hidden">Total <br /> Categories</span>
                    </div>
                </div>
                <div className="relative px-4">
                    <div className="mb-7 overflow-hidden">
                        <div className="float-left mr-4"> <h2 className="text-black font-semibold text-6xl inline-block leading-10">102</h2> </div>
                        <span className="block text-gray-700 text-base font-semibold leading-6 overflow-hidden">In <br /> Country</span>
                    </div>
                </div>
                <div className="relative px-4">
                    <div className="mb-7 overflow-hidden">
                        <div className="float-left mr-4"> <h2 className="text-black font-semibold text-6xl inline-block leading-10">98%</h2> </div>
                        <span className="block text-gray-700 text-base font-semibold leading-6 overflow-hidden">Happy <br /> Customer</span>
                    </div>
                </div>
            </div>

            <MemberSection />
            <ClientSection />
        </>
    )
}

export default AboutUsPage