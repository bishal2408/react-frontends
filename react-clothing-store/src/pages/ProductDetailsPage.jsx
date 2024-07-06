
import HeroNavigate from "../components/HeroNavigate"
import ProductList from "../components/ProductList"
import ProductDetail from "../components/Product Detail/ProductDetail"
import ProductAddtionalInfo from "../components/Product Detail/ProductAddtionalInfo"

const relatedProducts = [
    { name: "Piqué Biker Jacket", rating: 5, price: "$67.24", image: "https://preview.colorlib.com/theme/malefashion/img/product/product-1.jpg" },
    { name: "Piqué Biker Jacket", rating: 5, price: "$67.24", image: "https://preview.colorlib.com/theme/malefashion/img/product/product-2.jpg" },
    { name: "Piqué Biker Jacket", rating: 5, price: "$67.24", image: "https://preview.colorlib.com/theme/malefashion/img/product/product-3.jpg" },
    { name: "Piqué Biker Jacket", rating: 5, price: "$67.24", image: "https://preview.colorlib.com/theme/malefashion/img/product/product-4.jpg" },
]


const ProductDetailsPage = () => {
    return (
        <>
            <HeroNavigate parentLink='/shop' hasChildLink={true} childLink='/product-details' />

            <div className="md:w-[90%] md:m-auto">

                <ProductDetail />
                <ProductAddtionalInfo />

                <div className="mt-16 mb-20">
                    <h3 className="text-2xl text-center font-semibold tracking-wider">Related Products</h3>
                    <ProductList products={relatedProducts} />
                </div>

            </div>
        </>
    )
}

export default ProductDetailsPage