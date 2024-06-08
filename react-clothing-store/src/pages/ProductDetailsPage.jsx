import InputField from "../components/Checkout/InputField"
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
                        <div className="p-3"><img src={productImage} alt="Product Image" className="w-24 h-24 object-contain mr-2"/></div>
                    ))}
                </div>
                <div className="my-16"><img src="https://preview.colorlib.com/theme/malefashion/img/shop-details/product-big.png.webp" alt="selected image" /></div>

                <div>
                    <h3>Hooded thermal anorak</h3>
                    <p>5 reviews</p>
                    <h4>$270.00 <s>70.00</s></h4>
                    <p>Coat with quilted lining and an adjustable hood. Featuring long sleeves with adjustable cuff tabs, adjustable asymmetric hem with elastic side tabs and a front zip fastening with placket.</p>

                    <form action="">
                       
                        <div>
                            <InputField name='xxl' type='radio'/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ProductDetailsPage