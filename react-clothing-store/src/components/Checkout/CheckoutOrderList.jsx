

const CheckoutOrderList = () => {
    return (
        <>
            <div className="bg-gray-50 shadow-md px-8 py-8">
                <h1 className="text-2xl font-semibold tracking-widest">YOUR ORDER</h1>
                <hr className="h-px my-4 border-0 dark:bg-gray-300" />

                <div>
                    <table className="table-auto w-full ">
                        <thead>
                            <tr>
                                <td className="py-6">PRODUCT</td>
                                <td className="text-right">TOTAL</td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className="py-3 text-gray-600">01. Vanilla salted caramel</td>
                                <td className="py-3 text-gray-800 text-right">$ 300.0</td>
                            </tr>
                            <tr>
                                <td className="py-3 text-gray-600">02. German chocolate </td>
                                <td className="py-3 text-gray-800 text-right">$ 170.0</td>
                            </tr>
                            <tr>
                                <td className="py-3 text-gray-600">03. Sweet autumn </td>
                                <td className="py-3 text-gray-800 text-right">$ 170.0</td>
                            </tr>
                            <tr>
                                <td className="py-3 text-gray-600">04. Cluten free mini dozen</td>
                                <td className="py-3 text-gray-800 text-right">$ 110.0</td>
                            </tr>
                        </tbody>
                    </table>
                    <hr className="h-px my-4 border-0 dark:bg-gray-300" />

                    <p className="font-medium tracking-wide mb-5">
                        Subtotal <span className="float-right text-red-600 font-bold">$750.99</span>
                    </p>

                    <p className="font-medium tracking-wide">
                        Total <span className="float-right text-red-600 font-bold">$750.99</span>
                    </p>

                    <hr className="h-px my-4 border-0 dark:bg-gray-300" />

                    <div className="mb-7">
                        <input type="checkbox" name="c_account" id="c_account" className="mr-2" />
                        <label htmlFor="c_account" className="text-base font-medium tracking-wider">
                            Create an account?
                        </label>
                        <p className="mt-3 text-base">Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="mb-2">
                        <input type="checkbox" name="payment" id="payment" className="mr-2" />
                        <label htmlFor="payment" className="text-base font-medium tracking-wider">
                            Check Payment
                        </label>
                    </div>

                    <div className="mb-10">
                        <input type="checkbox" name="paypal" id="paypal" className="mr-2" />
                        <label htmlFor="paypal" className="text-base font-medium tracking-wider">
                            Paypal
                        </label>
                    </div>

                    <button className="bg-black text-white w-full py-4 font-semibold tracking-widest">
                        PLACE ORDER
                    </button>
                </div>
            </div>
        </>
    )
}

export default CheckoutOrderList