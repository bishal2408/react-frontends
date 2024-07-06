import { StarIcon } from "@heroicons/react/24/outline"
import { HeartIcon, ArrowsRightLeftIcon } from "@heroicons/react/16/solid"
import { useState } from "react"

const productImages = [
    'https://preview.colorlib.com/theme/malefashion/img/shop-details/product-big.png.webp',
    'https://preview.colorlib.com/theme/malefashion/img/shop-details/product-big-2.png.webp',
    'https://preview.colorlib.com/theme/malefashion/img/shop-details/product-big-3.png.webp',
    'https://preview.colorlib.com/theme/malefashion/img/shop-details/product-big-4.png.webp',
]

const ProductDetail = () => {
    const stars = Array.from({ length: 5 }, (_, index) => (
        <StarIcon key={index} className="size-4 inline" />
    ))

    const [selectedProductImage, setSelectedProductImage] = useState(productImages[0])

    const [size, setSize] = useState('xl')

    return (
        <>
        <div className="my-10 md:flex md:w-[80%] md:m-auto">
            <div className="w-auto flex flex-wrap items-center justify-between px-4 md:block md:mr-44">
                {productImages.map((productImage, i) => (
                    <button onClick={() => setSelectedProductImage(productImage)} className="md:block">
                        <img key={i} src={productImage} alt="productImage" className="w-auto h-[160px] object-cover mr-2 mb-8 lg:h-[120px]" />
                    </button>
                ))}
            </div>

            <div className="flex justify-center items-center p-0"><img src={selectedProductImage} alt="selected image" /></div>
        </div>


        <div className="text-center py-8 px-2 lg:w-4/6 lg:m-auto">
            <h3 className="text-2xl font-semibold tracking-wide">Hooded thermal anorak</h3>
            <p className="mt-2 mb-3">{stars} <span className="text-gray-700"> - 5 Reviews</span></p>
            <p className="text-2xl font-semibold tracking-wider">$270.00 <s className="text-lg text-gray-700 font-normal">70.00</s></p>
            <p className="mt-4 text-base">Coat with quilted lining and an adjustable hood. Featuring long sleeves with adjustable cuff tabs, adjustable asymmetric hem with elastic side tabs and a front zip fastening with placket.</p>

            <form action="" className="my-5">
                <div className="mb-5">
                    <span className="mr-4 tracking-wider">Size:</span>
                    <label htmlFor="xxl" className={`text-black font-base font-semibold uppercase inline-block px-[8px] py-2 mb-0 mr-2 cursor-pointer border-[1px] border-solid ${size == 'xxl' ? ' bg-black text-white border-black' : ''}`}>
                        XXL  <input type="radio" name="size" id="xxl" value='xxl' className="absolute invisible" onClick={() => setSize('xxl')} />
                    </label>
                    <label htmlFor="xl" className={`text-black font-base font-semibold uppercase inline-block px-[8px] py-2 mb-0 mr-2 cursor-pointer border-[1px] border-solid ${size == 'xl' ? ' bg-black text-white border-black' : ''}`}>
                        XL  <input type="radio" name="size" id="xl" value='xl' className="absolute invisible" onClick={() => setSize('xl')} />
                    </label>
                    <label htmlFor="l" className={`text-black font-base font-semibold uppercase inline-block px-[8px] py-2 mb-0 mr-2 cursor-pointer border-[1px] border-solid ${size == 'l' ? ' bg-black text-white border-black' : ''}`}>
                        L  <input type="radio" name="size" id="l" value='l' className="absolute invisible" onClick={() => setSize('l')} />
                    </label>
                    <label htmlFor="s" className={`text-black font-base font-semibold uppercase inline-block px-[8px] py-2 mb-0 mr-2 cursor-pointer border-[1px] border-solid ${size == 's' ? ' bg-black text-white border-black' : ''}`}>
                        S  <input type="radio" name="size" id="s" value='s' className="absolute invisible" onClick={() => setSize('s')} />
                    </label>
                </div>

                <div className="my-7">
                    <p className="inline-block mr-4 tracking-wider">Color:</p>
                    <div className="inline-block bg-black w-7 h-7 rounded-full mr-1"></div>
                    <div className="inline-block bg-orange-500 w-7 h-7 rounded-full mr-1"></div>
                    <div className="inline-block bg-blue-500 w-7 h-7 rounded-full mr-1"></div>
                    <div className="inline-block bg-red-500 w-7 h-7 rounded-full"></div>
                </div>

                <div>
                    <input type="number" name="quantity" min="1" placeholder="1" required className="mr-2 px-1 py-3 text-base w-16 border-[1px] outline-none focus:border-gray-400" />
                    <button className='inline-block mb-5 mr-6 tracking-widest text-base font-semibold text-white bg-black py-3 px-8 border-[1px]'>
                        ADD TO CART
                    </button>
                </div>
            </form>

            <div className="my-5 mb-10">
                <a href="#" className="font-semibold tracking-widest text-sm text-gray-600 mr-7 hover:text-black">
                    <HeartIcon className="size-4 inline" /> <span>ADD TO WISHLIST</span>
                </a>
                <a href="#" className="font-semibold tracking-widest text-sm text-gray-600 hover:text-black">
                    <ArrowsRightLeftIcon className="size-4 inline" /> <span>ADD TO COMPARE</span>
                </a>
            </div>

            <div className="md:w-2/4 md:m-auto">
                <h3 className="text-base font-semibold tracking-wider mb-7">Guaranteed Safe Checkout</h3>
                <img src="https://preview.colorlib.com/theme/malefashion/img/shop-details/details-payment.png" alt="checkout options" className="w-full object-fill" />

                <div className="mt-10">
                    <p className="text-gray-400 my-2 text-base">SKU: <span className="text-black font-semibold">3812912</span></p>
                    <p className="text-gray-400 my-2 text-base">Categories: <span className="text-black font-semibold">Clothes</span></p>
                    <p className="text-gray-400 my-2 text-base">Tag: <span className="text-black font-semibold">Clothes, Skin, Body</span></p>
                </div>
            </div>
        </div>

    </>
    )
}

export default ProductDetail
