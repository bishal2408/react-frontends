import HeroNavigate from "../components/HeroNavigate"
import { TagIcon } from "@heroicons/react/24/outline"
import InputField from "../components/Checkout/InputField"

const CheckoutPage = () => {
    return (
        <>
            <HeroNavigate
                parentLink='/shop'
                hasChildLink={true}
                childLink='/checkout'
            />

            <div className="mt-16 mb-20 px-5 md:w-[90%] md:m-auto md:flex">
                <div className="my-14 md:w-[100%] md:mr-5">
                    <p className="bg-gray-100 px-2 mb-6 py-4 border-t-2 border-green-500">
                        <TagIcon className="size-5 inline rotate-90 mr-4" />
                        <span>Have a coupon? Click here to enter your code</span>
                    </p>
                    <h3 className="text-base tracking-wider font-bold">BILLING DETAILS</h3>

                    <hr className="h-px my-6 border-0 dark:bg-gray-400" />

                    <InputField name='firstname' type='text' isRequired={true} />
                    <InputField name='lastname' type='text' isRequired={true} />
                    <InputField name='country' type='text' isRequired={true} />
                    <InputField name='address' type='text' isRequired={true} />
                    <InputField name='town/city' type='text' isRequired={true} />
                    <InputField name='postcode/zip' type='text' isRequired={true} />
                    <InputField name='phone' type='text' isRequired={true} />
                    <InputField name='email' type='email' isRequired={true} />

                    <div className="mb-7">
                        <input type="checkbox" name="account" id="account" className="mr-2" />
                        <label htmlFor="account" className="text-base font-medium tracking-wider">
                            Create an account?
                        </label>
                        <p className="mt-3 text-sm">Create an account by entering the information below. If you are a returning customer please login at the top of the page</p>
                    </div>

                    <InputField name='Account Password' type='password' isRequired={true} />

                    <div className="mb-7">
                        <input type="checkbox" name="note" id="note" className="mr-2" />
                        <label htmlFor="note" className="text-base font-medium tracking-wide">
                            Note about your order, e.g, special now for delivery
                        </label>
                    </div>

                    <InputField name='Order notes' type='text' isRequired={true} />

                </div>

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
            </div>
        </>
    )
}

export default CheckoutPage