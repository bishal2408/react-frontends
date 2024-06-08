import { XMarkIcon } from '@heroicons/react/16/solid'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const cartProducts = [
    { name: 'T-shirt Contrast Pocket', price: '$98.49', quantity: '1', total: '$30.00', image: 'https://preview.colorlib.com/theme/malefashion/img/shopping-cart/cart-1.jpg' },
    { name: 'T-shirt Contrast Pocket', price: '$98.49', quantity: '1', total: '$30.00', image: 'https://preview.colorlib.com/theme/malefashion/img/shopping-cart/cart-2.jpg' },
    { name: 'T-shirt Contrast Pocket', price: '$98.49', quantity: '1', total: '$30.00', image: 'https://preview.colorlib.com/theme/malefashion/img/shopping-cart/cart-3.jpg' },
    { name: 'T-shirt Contrast Pocket', price: '$98.49', quantity: '1', total: '$30.00', image: 'https://preview.colorlib.com/theme/malefashion/img/shopping-cart/cart-4.jpg' },
]


const Cart = () => {
    return (
        <div className='md:flex md:w-[90%] m-auto my-10'>
            <div className='p-5 w-full md:w-[85%]'>
                <table className="w-full text-left">
                    <thead >
                        <tr>
                            <th className='tracking-wider py-5'>PRODUCT</th>
                            <th className='tracking-wider py-5'>QUANTITY</th>
                            <th className='tracking-wider py-5'>TOTAL</th>
                            <th className='tracking-wider py-5'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartProducts.map((product) => (
                            <tr>
                                <td className='md:flex md:items-center py-5'>
                                    <img src={product.image} alt="cart product image" className='object-cover' />
                                    <div className='mt-2 text-base md:mt-0 md:ml-4'>
                                        <p className='font-medium'>{product.name}</p>
                                        <p className='font-semibold mt-1'>{product.price}</p>
                                    </div>
                                </td>
                                <td >
                                    <ChevronLeftIcon className='size-4 inline' />
                                    <span className='mx-2'>{product.quantity}</span>
                                    <ChevronRightIcon className='size-4 inline' />
                                </td>
                                <td className=''>{product.total}</td>
                                <td> <XMarkIcon className='size-6' /> </td>
                            </tr>
                        ))}
                    </tbody>

                </table>

                <div className='p-5 text-center my-6 md:p-0 md:flex md:justify-between'>
                    <Link to='/shop' className='inline-block mb-5 mr-6 tracking-widest text-base font-semibold bg-gray-50 p-3 border-[1px]'>CONTUNUE SHOPPING</Link>
                    <Link to='#' className='inline-block mb-5 mr-6 tracking-widest text-base font-semibold text-white bg-black p-3 border-[1px]'>
                        UPDATE CART
                    </Link>
                </div>

            </div>

            <div className='p-5 my-10 md:p-0 md:w-[40%] md:ml-5'>
                <h2 className='text-base font-bold tracking-wider mb-10'>DISCOUNT CODE</h2>
                <form className="mb-10 flex items-center" action="#">
                    <input type="text" placeholder="Coupon Code" className="text-base w-full rounded-sm border-[1px] border-gray-300 px-4 py-3 focus:border-gray-300 outline-none" />
                    <button className="bg-black text-white tracking-widest text-base font-semibold px-8 py-3 rounded-sm ">
                        APPLY
                    </button>
                </form>

                <div className='w-full p-3 shadow-sm md:p-0'>
                    <h3 className='text-lg font-medium'>CART TOTAL</h3>
                    <div className='my-5'>
                        <p className='text-base mb-4 text-gray-600'>Subtotal <span className='text-red-900 font-semibold float-right'>$169.50</span></p>
                        <p className='text-base mb-4 text-gray-600'>Total <span className='text-red-900 font-semibold float-right'>$169.50</span></p>
                    </div>

                    <Link to='/checkout' className='block text-center w-full text-base tracking-widest text-white bg-black py-3 font-semibold'>
                        PROCEED TO CHECKOUT
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Cart