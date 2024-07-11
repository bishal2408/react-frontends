import { useState } from "react"
import ProductList from "../ProductList"

const bestSellers = [
    { name: "Piqué Biker Jacket", rating: 5, price: "$67.24", image: "https://preview.colorlib.com/theme/malefashion/img/product/product-1.jpg" },
    { name: "Piqué Biker Jacket", rating: 5, price: "$67.24", image: "https://preview.colorlib.com/theme/malefashion/img/product/product-2.jpg" },
    { name: "Piqué Biker Jacket", rating: 5, price: "$67.24", image: "https://preview.colorlib.com/theme/malefashion/img/product/product-3.jpg" },
    { name: "Piqué Biker Jacket", rating: 5, price: "$67.24", image: "https://preview.colorlib.com/theme/malefashion/img/product/product-4.jpg" },
    { name: "Piqué Biker Jacket", rating: 5, price: "$67.24", image: "https://preview.colorlib.com/theme/malefashion/img/product/product-5.jpg" },
    { name: "Piqué Biker Jacket", rating: 5, price: "$67.24", image: "https://preview.colorlib.com/theme/malefashion/img/product/product-6.jpg" },
    { name: "Piqué Biker Jacket", rating: 5, price: "$67.24", image: "https://preview.colorlib.com/theme/malefashion/img/product/product-7.jpg" },
    { name: "Piqué Biker Jacket", rating: 5, price: "$67.24", image: "https://preview.colorlib.com/theme/malefashion/img/product/product-8.jpg" },
]

const newArrivals = [
    { name: "Biker Jacket", rating: 5, price: "$67.24", image: "https://preview.colorlib.com/theme/malefashion/img/product/product-10.jpg" },
    { name: "Biker Jacket", rating: 5, price: "$67.24", image: "https://preview.colorlib.com/theme/malefashion/img/product/product-12.jpg" },
    { name: "Biker Jacket", rating: 5, price: "$67.24", image: "https://preview.colorlib.com/theme/malefashion/img/product/product-13.jpg" },
    { name: "Biker Jacket", rating: 5, price: "$67.24", image: "https://preview.colorlib.com/theme/malefashion/img/product/product-9.jpg" },
    { name: "Biker Jacket", rating: 5, price: "$67.24", image: "https://preview.colorlib.com/theme/malefashion/img/product/product-6.jpg" },
    { name: "Biker Jacket", rating: 5, price: "$67.24", image: "https://preview.colorlib.com/theme/malefashion/img/product/product-1.jpg" },
]

const hotSales = [
    { name: "Jacket", rating: 5, price: "$67.24", image: "https://preview.colorlib.com/theme/malefashion/img/product/product-12.jpg" },
    { name: "Jacket", rating: 5, price: "$67.24", image: "https://preview.colorlib.com/theme/malefashion/img/product/product-11.jpg" },
    { name: "Jacket", rating: 5, price: "$67.24", image: "https://preview.colorlib.com/theme/malefashion/img/product/product-13.jpg" },
    { name: "Jacket", rating: 5, price: "$67.24", image: "https://preview.colorlib.com/theme/malefashion/img/product/product-9.jpg" },
    { name: "Jacket", rating: 5, price: "$67.24", image: "https://preview.colorlib.com/theme/malefashion/img/product/product-5.jpg" },
    { name: "Jacket", rating: 5, price: "$67.24", image: "https://preview.colorlib.com/theme/malefashion/img/product/product-2.jpg" },

]

const Sellers = () => {

    const [products, setProducts] = useState(bestSellers)
    const [activeButton, setActiveButton] = useState('bestSellers')

    const handleButtonClick = (category) => {
        setActiveButton(category)
        if (category == 'bestSellers') {setProducts(bestSellers)}
        if (category == 'newArrivals') {setProducts(newArrivals)}
        if (category == 'hotSales') {setProducts(hotSales)}
    }

    return (
        <div className="mt-28 mb-20">
            <div className="flex items-center flex-wrap justify-evenly sm:gap-4 md:gap-0">
                <button
                    className={`text-2xl inline-flex font-semibold hover:text-black ${activeButton === 'bestSellers' ? 'text-black' : 'text-gray-500'}`}
                    onClick={() => handleButtonClick('bestSellers')}
                >
                    Best Sellers
                </button>
                <button
                    className={`text-2xl inline-flex font-semibold hover:text-black ${activeButton === 'newArrivals' ? 'text-black' : 'text-gray-500'}`}
                    onClick={() => handleButtonClick('newArrivals')}
                >
                    New Arrivals
                </button>
                <button
                    className={`text-2xl inline-flex font-semibold hover:text-black ${activeButton === 'hotSales' ? 'text-black' : 'text-gray-500'}`}
                    onClick={() => handleButtonClick('hotSales')}
                >
                    Hot Sales
                </button>
            </div>

            <ProductList products={products} isHomePage={true}/>

        </div>
    )
}

export default Sellers