import saleImage from "../assets/homepage/sale.png.webp";

const Sale = () => {
    return (
        <div className="bg-red-50 py-28 px-4 md:flex md:items-center md:px-20">
            <div className="w-full my-12 md:w-auto">
                <h2 className="text-3xl text-gray-400 my-4 font-semibold md:my-6">
                    Clothings Hot
                </h2>
                <h2 className="text-3xl text-black my-4 font-semibold md:my-6">
                    Shoe Collection
                </h2>
                <h2 className="text-3xl text-gray-400 my-4 font-semibold md:my-6">
                    Accessories
                </h2>
            </div>

            <div className="my-12 relative md:mx-20">
                <img
                    src={saleImage}
                    alt="Sale Image"
                    className="w-full object-cover h-full"
                />
                <div className="absolute w-24 h-24 bg-gray-900 rounded-full top-0 right-2">
                    <p className="text-white px-5 py-5">
                        {" "}
                        Sale Of <span className="font-semibold text-lg">$29.99</span>
                    </p>
                </div>
            </div>

            <div className="my-12">
                <p className="text-sm text-red-500 font-bold tracking-widest my-4">
                    DEAL OF THE WEEK
                </p>
                <h1 className="text-4xl text-gray-900 font-semibold my-4">
                    Multi-pocket Chest Bag Black
                </h1>

                <div class="flex my-8 items-center">
                    <div class="w-1/4 text-center float-left relative">
                        <span className="text-4xl font-semibold">30</span> <p className="mt-4">Days</p>
                        <span className="absolute text-4xl font-semibold top-0 right-0">:</span>
                    </div>
                    <div class="w-1/4 text-center float-left relative">
                        <span className="text-4xl font-semibold">02</span> <p className="mt-4">Hours</p>
                        <span className="absolute text-4xl font-semibold top-0 right-0">:</span>
                    </div>
                    <div class="w-1/4 text-center float-left relative">
                        <span className="text-4xl font-semibold">42</span> <p className="mt-4">Minutes</p>
                        <span className="absolute text-4xl font-semibold top-0 right-0">:</span>
                    </div>
                    <div class="w-1/4 text-center float-left relative">
                        <span className="text-4xl font-semibold">50</span> <p className="mt-4">Seconds</p>
                    </div>
                </div>
                <button className="bg-black px-3.5 py-2.5 my-4 text-sm tracking-widest font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                    SHOP NOW
                </button>
            </div>
        </div>
    );
};

export default Sale;
