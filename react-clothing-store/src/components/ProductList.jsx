import Product from "./Product"

const ProductList = ({ products, isHomePage=false }) => {
    return (
        <div className={isHomePage ? "isolate px-4 pt-14 mt-4 md:flex md:justify-center md:flex-wrap md:gap-8" : "pt-14 md:flex md:justify-evenly md:flex-wrap"}>
            {products.map((item, i) => (
                    <Product
                        name={item.name}
                        rating={item.rating}
                        image={item.image}
                        price={item.price}
                        key={i}
                    />
            ))}

        </div>
    )
}

export default ProductList