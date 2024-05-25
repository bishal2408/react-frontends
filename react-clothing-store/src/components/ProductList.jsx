import Product from "./Product"

const ProductList = ({ products }) => {
    return (
        <div className="isolate px-4 pt-14 mt-4 md:flex md:justify-center md:flex-wrap md:gap-8">
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