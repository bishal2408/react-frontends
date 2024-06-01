
import { Link } from "react-router-dom";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const filters = [
    { name: 'categories', sub: ['Men (20)', 'Women (20)', 'Bags (20)', 'Clothing (20)', 'Shoes (20)', 'Accessories (20)', 'Kids (20)'] },
    { name: 'branding', sub: ['Louis Vuitton', 'Chanel', 'Hermes', 'Gucci'] },
    { name: 'filter price', sub: ['$0.00 - $50.00', '$50.00 - $100.00', '$100.00 - $150.00', '$150.00 - $200.00', '$200.00 - $250.00', '250.00+'] },
    { name: 'size', sub: ['XS', 'S', 'M', 'XL', '2XL', '3XL', '4XL', '5XL'] },
    { name: 'tags', sub: ['PRODUCT', 'BAGS', 'SHOES', 'FASHINO', 'CLOTHING', 'HATS', "ACCESSORIES"] }
];

const ShopSideBar = () => {
    return (

        <div className="h-full lg:shadow-lg w-full md:mr-8 md:px-2">
            <form className="mb-10 flex items-center" action="#">
                <input type="text" placeholder="Search" className="text-base w-full rounded-sm border-[1px] border-gray-300 px-4 py-2 focus:border-gray-500 outline-none" />
                <button className="border-[1px] border-gray-300 px-2 py-2.5 rounded-sm hover:bg-gray-300/50">
                    <MagnifyingGlassIcon className="size-5" />
                </button>
            </form>

            {filters.map((filter, i) => (
                <Disclosure as="div" key={i} className='my-6' defaultOpen={true}>
                    <DisclosureButton
                        className="group flex w-full items-center justify-between"
                    >
                        <span className="text-md font-semibold text-black group-hover:text-black/80 tracking-widest">
                            {filter.name.toUpperCase()}
                        </span>
                        <ChevronDownIcon className="size-5 fill-black group-data-[open]:rotate-180" />
                    </DisclosureButton>


                    <DisclosurePanel className="mt-2 text-sm/5 text-black/50">
                        {filter.name == 'size' || filter.name == 'tags'
                            ? <div className="flex flex-wrap">
                                {filter.sub.map((subCategory, j) => (
                                    <Link className="block tracking-wide text-base mt-2 hover:text-black mr-3 px-3 py-1 border-[1px] border-gray-300 bg-gray-100" key={j}>{subCategory}</Link>
                                ))}
                            </div>

                            : <>
                                {filter.sub.map((subCategory, j) => (
                                    <Link className="block text-base mt-2 hover:text-black tracking-wide" key={j}>{subCategory}</Link>
                                ))}
                            </>}


                    </DisclosurePanel>

                </Disclosure>
            ))}
        </div>
    )
}

export default ShopSideBar