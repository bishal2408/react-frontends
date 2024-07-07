
const aboutDeatils = [
    { topic: "Who We Are ?", message: "Contextual advertising programs sometimes have strict policies that need to be adhered too. Let's take Google as an example." },
    { topic: "Who We Do ?", message: "In this digital generation where information can be easily obtained within seconds, business cards still have retained their importance." },
    { topic: "Why Choose Us ?", message: "A two or three storey house is the ideal way to maximise the piece of earth on which our home sits, but for older or infirm people." },
]

const AboutDetails = () => {
    return (
        <div className="px-3 md:w-[90%] md:m-auto md:flex md:flex-col">
            <img src="https://preview.colorlib.com/theme/malefashion/img/about/about-us.jpg.webp" alt="about image" />

            <div className="my-8  md:flex">
                {aboutDeatils.map((detail, i) => (
                    <div key={i} className="my-7 mr-4 text-justify">
                        <h4 className="text-2xl font-semibold mb-3">{detail.topic}</h4>
                        <p className="text-[0.92rem]">{detail.message}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default AboutDetails