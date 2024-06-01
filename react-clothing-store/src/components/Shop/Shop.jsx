import { useState } from "react";
import ProductList from "../ProductList"
import Pagination from "../Pagination";
import ShopSideBar from "./ShopSideBar";

const products = [
    { name: "Piqué Biker Jacket", rating: 5, price: "$67.24", image: "https://preview.colorlib.com/theme/malefashion/img/product/product-1.jpg" },
    { name: "Piqué Biker Jacket", rating: 5, price: "$67.24", image: "https://preview.colorlib.com/theme/malefashion/img/product/product-2.jpg" },
    { name: "Piqué Biker Jacket", rating: 5, price: "$67.24", image: "https://preview.colorlib.com/theme/malefashion/img/product/product-3.jpg" },
    { name: "Piqué Biker Jacket", rating: 5, price: "$67.24", image: "https://preview.colorlib.com/theme/malefashion/img/product/product-4.jpg" },
    { name: "Piqué Biker Jacket", rating: 5, price: "$67.24", image: "https://preview.colorlib.com/theme/malefashion/img/product/product-5.jpg" },
    { name: "Piqué Biker Jacket", rating: 5, price: "$67.24", image: "https://preview.colorlib.com/theme/malefashion/img/product/product-6.jpg" },
    { name: "Piqué Biker Jacket", rating: 5, price: "$67.24", image: "https://preview.colorlib.com/theme/malefashion/img/product/product-3.jpg" },
    { name: "Piqué Biker Jacket", rating: 5, price: "$67.24", image: "https://preview.colorlib.com/theme/malefashion/img/product/product-4.jpg" },
    { name: "Piqué Biker Jacket", rating: 5, price: "$67.24", image: "https://preview.colorlib.com/theme/malefashion/img/product/product-5.jpg" },
    { name: "Piqué Biker Jacket", rating: 5, price: "$67.24", image: "https://preview.colorlib.com/theme/malefashion/img/product/product-6.jpg" },
    { name: "Piqué Biker Jacket", rating: 5, price: "$67.24", image: "https://preview.colorlib.com/theme/malefashion/img/product/product-7.jpg" },
    { name: "Piqué Biker Jacket", rating: 5, price: "$67.24", image: "https://preview.colorlib.com/theme/malefashion/img/product/product-8.jpg" },
  ]

const Shop = () => {
    const [selectedValue, setSelectedValue] = useState("Low To High")

    const handleSelectChange = (event) => {
      setSelectedValue(event.target.value)
    }

    return (

        <div className="px-6 my-24 lg:flex w-[95%] m-auto">

            <ShopSideBar />

            <div className="w-auto">
                <div className="md:flex md:justify-between">
                    <p className="mt-12 mb-8 md:m-0 ">Showing 1{"-"}12 of 126 results</p>
                    <div>
                        <label htmlFor="sort-by">Sort by Price:{"  "}</label>
                        <select
                            name="sort-by"
                            id="sort-by"
                            className="bg-transparent font-semibold"
                            value={selectedValue}
                            onChange={handleSelectChange}
                        >
                            <option value="Low To High" className={selectedValue == 'Low To High' ? 'font-semibold' : 'font-normal'}>Low To High</option>
                            <option value="$0 - $55" className={selectedValue == '$0 - $55' ? 'font-semibold' : 'font-normal'}>$0 - $55</option>
                            <option value="$55 - $100" className={selectedValue == '$55 - $100' ? 'font-semibold' : 'font-normal'}>$55 - $100</option>
                        </select>
                    </div>
                </div>

                <ProductList products={products} />

                <Pagination />

            </div>
        </div>
    )
}

export default Shop