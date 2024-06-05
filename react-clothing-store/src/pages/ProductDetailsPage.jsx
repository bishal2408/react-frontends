import HeroNavigate from "../components/HeroNavigate"


const productImages = [
    'https://preview.colorlib.com/theme/malefashion/img/shop-details/product-big.png.webp',
    'https://preview.colorlib.com/theme/malefashion/img/shop-details/product-big-2.png.webp',
    'https://preview.colorlib.com/theme/malefashion/img/shop-details/product-big-3.png.webp',
    'https://preview.colorlib.com/theme/malefashion/img/shop-details/product-big-4.png.webp',
]

const ProductDetailsPage = () => {
    return (
        <>
            <HeroNavigate parentLink='/shop' hasChildLink={true} childLink='/product-details' />

            <div>
                <div className="flex flex-wrap">
                    {productImages.map((productImage, i) => (
                        <div className="p-5 h-44 w-44"><img src={productImage} alt="Product Image" className="w-full h-auto object-cover"/></div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProductDetailsPage