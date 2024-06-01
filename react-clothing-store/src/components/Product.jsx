import { StarIcon, ArrowsRightLeftIcon, MagnifyingGlassIcon, HeartIcon, PlusIcon } from "@heroicons/react/24/outline"

const Product = ({ name, image, rating, price }) => {

    const stars = Array.from({ length: rating }, (_, index) => (
        <StarIcon key={index} className="w-4 h-4" />
    ));

    return (
        <div className="group block shadow-xl mb-8 md:w-[15rem] lg:w-[17rem] xl:[20rem]">
            <div className="relative">
                <img src={image} alt="product image" loading="lazy" className="min-w-full object-cover min-h-52" />

                <div className="absolute top-5 right-0 flex flex-col transform translate-x-0 opacity-0 group-hover:opacity-100 group-hover:-translate-x-[70%] transition-transform duration-500 ">
                    <button className="bg-white p-1 shadow-md mb-4">
                        <HeartIcon className="w-5 h-5"/>
                    </button>
                    <button className="bg-white p-1 shadow-md mb-4">
                        <ArrowsRightLeftIcon className="w-5 h-5"/>

                    </button>
                    <button className="bg-white p-1 shadow-md mb-4">
                        <MagnifyingGlassIcon className="w-5 h-5"/>
                    </button>
                </div>

                <div className="absolute px-4 bg-white font-semibold w-full opacity-0 transform translate-y-0 group-hover:opacity-100 group-hover:-translate-y-[-100%] transition-transform duration-100 ">
                    <a href="#" className="text-red-500 flex items-center">
                        <PlusIcon className="w-4 h-4 mr-2"/>
                        <p className="text-md">Add to cart</p>
                    </a>
                </div>
            </div>

            <div className="px-4 mt-6 mb-2">
                <p className="font-medium">{name}</p>
                <p className="py-2 flex">{stars}</p>
                <p className="text-lg font-semibold">{price}</p>
            </div>
        </div>
    )
}

export default Product