import { useState } from "react"
import HeroNavigate from "../components/HeroNavigate"
import { StarIcon } from "@heroicons/react/24/outline"
import { HeartIcon, ArrowsRightLeftIcon } from "@heroicons/react/16/solid"
import ProductList from "../components/ProductList"

const productImages = [
    'https://preview.colorlib.com/theme/malefashion/img/shop-details/product-big.png.webp',
    'https://preview.colorlib.com/theme/malefashion/img/shop-details/product-big-2.png.webp',
    'https://preview.colorlib.com/theme/malefashion/img/shop-details/product-big-3.png.webp',
    'https://preview.colorlib.com/theme/malefashion/img/shop-details/product-big-4.png.webp',
]


const relatedProducts = [
    { name: "Piqué Biker Jacket", rating: 5, price: "$67.24", image: "https://preview.colorlib.com/theme/malefashion/img/product/product-1.jpg" },
    { name: "Piqué Biker Jacket", rating: 5, price: "$67.24", image: "https://preview.colorlib.com/theme/malefashion/img/product/product-2.jpg" },
    { name: "Piqué Biker Jacket", rating: 5, price: "$67.24", image: "https://preview.colorlib.com/theme/malefashion/img/product/product-3.jpg" },
    { name: "Piqué Biker Jacket", rating: 5, price: "$67.24", image: "https://preview.colorlib.com/theme/malefashion/img/product/product-4.jpg" },
]

const ProductDetailsPage = () => {

    const stars = Array.from({ length: 5 }, (_, index) => (
        <StarIcon key={index} className="size-4 inline" />
    ))

    const [selectedProductImage, setSelectedProductImage] = useState(productImages[0])

    const [size, setSize] = useState('xl')
    const [activeTab, setActiveTab] = useState('description')

    return (
        <>
            <HeroNavigate parentLink='/shop' hasChildLink={true} childLink='/product-details' />

            <div className="md:w-[90%] md:m-auto">

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



                <div className="my-10">
                    <div className="flex items-center flex-wrap justify-evenly sm:gap-4 md:gap-0">
                        <button className={`text-lg inline-flex font-semibold text-gray-400 leading-loose pb-1 mr-2 ${activeTab === 'description' && 'border-b-2 border-black'}`} onClick={() => setActiveTab('description')}>
                            Description
                        </button>
                        <button className={`text-lg inline-flex font-semibold text-gray-400 leading-loose pb-1 mr-2 ${activeTab === 'customer-preview' && 'border-b-2 border-black'}`} onClick={() => setActiveTab('customer-preview')}>
                            Customer Previews{"(5)"}
                        </button>
                        <button className={`text-lg inline-flex font-semibold text-gray-400 leading-loose pb-1 mr-2 ${activeTab === 'addtional-information' && 'border-b-2 border-black'}`} onClick={() => setActiveTab('addtional-information')}>
                            Addtional information
                        </button>
                    </div>

                    {activeTab == 'description' &&
                        <div className="px-5 text-justify">
                            <p className="font-semibold mt-7">Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.</p>
                            <div className="my-7">
                                <h3 className="text-lg font-semibold mb-2">Products Infomation</h3>
                                <p className="mb-3">A Pocket PC is a handheld computer, which features many of the same capabilities as a modern PC. These handy little devices allow individuals to retrieve and store e-mail messages, create a contact file, coordinate appointments, surf the internet, exchange text messages and more. Every product that is labeled as a Pocket PC must be accompanied with specific software to operate the unit and must feature a touchscreen and touchpad.</p>
                                <p>As is the case with any new technology product, the cost of a Pocket PC was substantial during it’s early release. For approximately $700.00, consumers could purchase one of top-of-the-line Pocket PCs in 2003. These days, customers are finding that prices have become much more reasonable now that the newness is wearing off. For approximately $350.00, a new Pocket PC can now be purchased.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Material used</h3>
                                <p>Polyester is deemed lower quality due to its none natural quality’s. Made from synthetic materials, not natural like wool. Polyester suits become creased easily and are known for not being breathable. Polyester suits tend to have a shine to them compared to wool and cotton suits, this can make the suit look cheap. The texture of velvet is luxurious and breathable. Velvet is a great choice for dinner party jacket and can be worn all year round.</p>
                            </div>
                        </div>
                    }

                    {activeTab == 'customer-preview' &&
                        <div className="px-5 text-justify">
                            <div className="my-7">
                                <h3 className="text-lg font-semibold mb-2">Products Infomation</h3>
                                <p className="mb-3">A Pocket PC is a handheld computer, which features many of the same capabilities as a modern PC. These handy little devices allow individuals to retrieve and store e-mail messages, create a contact file, coordinate appointments, surf the internet, exchange text messages and more. Every product that is labeled as a Pocket PC must be accompanied with specific software to operate the unit and must feature a touchscreen and touchpad.</p>
                                <p>As is the case with any new technology product, the cost of a Pocket PC was substantial during it’s early release. For approximately $700.00, consumers could purchase one of top-of-the-line Pocket PCs in 2003. These days, customers are finding that prices have become much more reasonable now that the newness is wearing off. For approximately $350.00, a new Pocket PC can now be purchased.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Material used</h3>
                                <p>Polyester is deemed lower quality due to its none natural quality’s. Made from synthetic materials, not natural like wool. Polyester suits become creased easily and are known for not being breathable. Polyester suits tend to have a shine to them compared to wool and cotton suits, this can make the suit look cheap. The texture of velvet is luxurious and breathable. Velvet is a great choice for dinner party jacket and can be worn all year round.</p>
                            </div>
                        </div>
                    }

                    {activeTab == 'addtional-information' &&
                        <div className="px-5 text-justify mt-7">
                            <p className="font-semibold">Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.</p>
                            <div className="my-7">
                                <h3 className="text-lg font-semibold mb-2">Products Infomation</h3>
                                <p className="mb-3">A Pocket PC is a handheld computer, which features many of the same capabilities as a modern PC. These handy little devices allow individuals to retrieve and store e-mail messages, create a contact file, coordinate appointments, surf the internet, exchange text messages and more. Every product that is labeled as a Pocket PC must be accompanied with specific software to operate the unit and must feature a touchscreen and touchpad.</p>
                                <p>As is the case with any new technology product, the cost of a Pocket PC was substantial during it’s early release. For approximately $700.00, consumers could purchase one of top-of-the-line Pocket PCs in 2003. These days, customers are finding that prices have become much more reasonable now that the newness is wearing off. For approximately $350.00, a new Pocket PC can now be purchased.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Material used</h3>
                                <p>Polyester is deemed lower quality due to its none natural quality’s. Made from synthetic materials, not natural like wool. Polyester suits become creased easily and are known for not being breathable. Polyester suits tend to have a shine to them compared to wool and cotton suits, this can make the suit look cheap. The texture of velvet is luxurious and breathable. Velvet is a great choice for dinner party jacket and can be worn all year round.</p>
                            </div>
                        </div>
                    }
                </div>

                <div className="mt-16 mb-20">
                    <h3 className="text-2xl text-center font-semibold tracking-wider">Related Products</h3>
                    <ProductList products={relatedProducts} />
                </div>
            </div>


        </>
    )
}

export default ProductDetailsPage