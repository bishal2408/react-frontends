import { TagIcon } from "@heroicons/react/24/outline"
import InputField from "./InputField"

const CheckoutForm = () => {
    return (
        <>
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
        </>
    )
}

export default CheckoutForm