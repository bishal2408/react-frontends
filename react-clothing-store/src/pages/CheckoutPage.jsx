import CheckoutForm from "../components/Checkout/CheckoutForm"
import HeroNavigate from "../components/HeroNavigate"
import CheckoutOrderList from "../components/Checkout/CheckoutOrderList"

const CheckoutPage = () => {
    return (
        <>
            <HeroNavigate
                parentLink='/shop'
                hasChildLink={true}
                childLink='/checkout'
            />

            <div className="mt-16 mb-20 px-5 md:w-[90%] md:m-auto md:flex">
                <CheckoutForm />
                <CheckoutOrderList />
            </div>
            
        </>
    )
}

export default CheckoutPage