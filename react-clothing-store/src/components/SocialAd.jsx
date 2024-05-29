

const SocialAd = () => {

    const imageArray = Array(6).fill(null)

    return (
        <div className="px-8 md:px-14 lg:flex lg:items-center">
            <div className="mb-6 md:flex md:flex-wrap md:justify-center">
                {imageArray.map((_, index) => (
                    <img src={`https://preview.colorlib.com/theme/malefashion/img/instagram/instagram-${index + 1}.jpg.webp`}
                        alt="Instagram Image"
                        loading="lazy"
                        className="w-full object-cover md:w-auto"
                        key={index}
                    />
                ))}
            </div>
            
            <div className="lg:ml-8">
                <h3 className="text-4xl font-semibold text-gray-900 tracking-wider my-8">Instagram</h3>
                <p className="mb-12 font-sm w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <h3 className="text-3xl text-red-600 font-semibold tracking-wider">#Male_Fashion</h3>
            </div>

        </div>
    )
}

export default SocialAd