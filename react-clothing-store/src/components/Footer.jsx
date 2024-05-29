import { EnvelopeIcon } from "@heroicons/react/24/outline"

const Footer = () => {
    return (
        <div className="bg-black text-white block w-full mt-52 py-8 px-4 md:px-16 md:-mt-0">
            <div className="mb-16  md:flex md:flex-wrap md:justify-between">
                <div className="my-11 md:w-[30%]">
                    <a href="/"><img src="https://preview.colorlib.com/theme/malefashion/img/footer-logo.png.webp" alt="brand logo" /></a>
                    <p className="my-8 w-full text-gray-400">The customer is at the heart of our unique business model, which includes design.</p>
                    <img src="https://preview.colorlib.com/theme/malefashion/img/payment.png.webp" alt="paymnets" />
                </div>

                <div className="my-11 md:mx-8">
                    <h3 className="text-md tracking-widest mb-5 font-semibold">SHOPPING</h3>
                    <li className="list-none">
                        <ul className="mb-3 text-md text-gray-400"><a href="">Clothing Store</a></ul>
                        <ul className="mb-3 text-md text-gray-400"><a href="">Trending Shoes</a></ul>
                        <ul className="mb-3 text-md text-gray-400"><a href="">Accessories</a></ul>
                        <ul className="mb-3 text-md text-gray-400"><a href="">Sale</a></ul>
                    </li>
                </div>

                <div className="my-11 md:mx-8">
                    <h3 className="text-md tracking-widest mb-5 font-semibold">SHOPPING</h3>
                    <li className="list-none">
                        <ul className="mb-3 text-md text-gray-400"><a href="">Contact Us</a></ul>
                        <ul className="mb-3 text-md text-gray-400"><a href="">Payment Methods</a></ul>
                        <ul className="mb-3 text-md text-gray-400"><a href="">Delivery</a></ul>
                        <ul className="mb-3 text-md text-gray-400"><a href="">Return & Exchange</a></ul>
                    </li>
                </div>

                <div className="my-11 md:w-[30%] ">
                    <h3 className="text-md tracking-widest mb-5 font-semibold">NEWSLETTER</h3>
                    <p className="mb-3 text-md text-gray-400">Be the first to know about new arrivals, look books, sales & promos!</p>
                    <form action="#" className="flex items-center">

                        <input
                            type="text"
                            className="bg-black w-full text-md py-2 border-b-2 border-gray-500 focus:border-blue-500 outline-none transition duration-300 ease-in-out"
                            placeholder="Your email"
                        />

                        <button type="submit">
                            <EnvelopeIcon className="w-5 h-5 ml-2 text-gray-500" />
                        </button>
                    </form>
                </div>
            </div>

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>

            <div className="w-full text-center">
                <p className="text-gray-400">Copyright © 2024 All rights reserved | This template is made with by Mr Bishal</p>
            </div>
        </div>
    )
}

export default Footer