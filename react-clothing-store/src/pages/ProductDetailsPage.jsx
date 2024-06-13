import { useState } from "react"
import HeroNavigate from "../components/HeroNavigate"
import { StarIcon } from "@heroicons/react/24/outline"

const productImages = [
    'https://preview.colorlib.com/theme/malefashion/img/shop-details/product-big.png.webp',
    'https://preview.colorlib.com/theme/malefashion/img/shop-details/product-big-2.png.webp',
    'https://preview.colorlib.com/theme/malefashion/img/shop-details/product-big-3.png.webp',
    'https://preview.colorlib.com/theme/malefashion/img/shop-details/product-big-4.png.webp',
]

const ProductDetailsPage = () => {

    const stars = Array.from({ length: 5 }, (_, index) => (
        <StarIcon key={index} className="size-4 inline" />
    ))

    const [size, setSize] = useState('xl')

    return (
        <>
            <HeroNavigate parentLink='/shop' hasChildLink={true} childLink='/product-details' />

            <div>
                <div className="flex flex-wrap">
                    {productImages.map((productImage, i) => (
                        <div className="p-3" key={i}><img src={productImage} alt="Product Image" className="w-24 h-24 object-contain mr-2" /></div>
                    ))}
                </div>
                <div className="my-16"><img src="https://preview.colorlib.com/theme/malefashion/img/shop-details/product-big.png.webp" alt="selected image" /></div>

                <div className="text-center py-8 px-2">
                    <h3 className="text-2xl font-semibold tracking-wide">Hooded thermal anorak</h3>
                    <p className="mt-2 mb-3">{stars} <span className="text-gray-700"> - 5 Reviews</span></p>
                    <p className="text-2xl font-semibold tracking-wider">$270.00 <s className="text-lg text-gray-700 font-normal">70.00</s></p>
                    <p className="mt-4 text-base">Coat with quilted lining and an adjustable hood. Featuring long sleeves with adjustable cuff tabs, adjustable asymmetric hem with elastic side tabs and a front zip fastening with placket.</p>

                    <form action="" className="my-10">
                        <div className="mb-5">
                            <span className="mr-4 tracking-wider">Size:</span> 
                            <label htmlFor="xxl" className={`text-black font-base font-semibold uppercase inline-block px-[8px] py-2 mb-0 mr-2 cursor-pointer border-[1px] border-solid ${size == 'xxl' ? ' bg-black text-white border-black' : ''}`}>
                                XXL  <input type="radio" name="size" id="xxl" value='xxl' className="absolute invisible" onClick={() => setSize('xxl')}/>
                            </label>
                            <label htmlFor="xl" className={`text-black font-base font-semibold uppercase inline-block px-[8px] py-2 mb-0 mr-2 cursor-pointer border-[1px] border-solid ${size == 'xl' ? ' bg-black text-white border-black' : ''}`}>
                                XL  <input type="radio" name="size" id="xl" value='xl' className="absolute invisible" onClick={() => setSize('xl')}/>
                            </label>
                            <label htmlFor="l" className={`text-black font-base font-semibold uppercase inline-block px-[8px] py-2 mb-0 mr-2 cursor-pointer border-[1px] border-solid ${size == 'l' ? ' bg-black text-white border-black' : ''}`}>
                                L  <input type="radio" name="size" id="l" value='l' className="absolute invisible" onClick={() => setSize('l')}/>
                            </label>
                            <label htmlFor="s" className={`text-black font-base font-semibold uppercase inline-block px-[8px] py-2 mb-0 mr-2 cursor-pointer border-[1px] border-solid ${size == 's' ? ' bg-black text-white border-black' : ''}`}>
                                S  <input type="radio" name="size" id="s" value='s' className="absolute invisible" onClick={() => setSize('s')}/>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ProductDetailsPage