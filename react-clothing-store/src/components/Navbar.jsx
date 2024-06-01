import { useState } from "react"
import { Dialog, Menu, MenuItem, MenuItems, MenuButton } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid"
import { NavLink } from "react-router-dom"

const navigation = [ 
    { name: 'Home', to: '/' },
    { name: 'Shop', to: 'shop' },
    { name: 'Pages', to: '#' },
    { name: 'Blog', to: 'blog' },
    { name: 'Contacts', to: 'contact' },
]

const pages = [
    { name: 'About', to: 'about' },
    { name: 'Shop Details', to: 'shop-details' },
    { name: 'Shopping Cart', to: 'cart' },
    { name: 'Check Out', to: 'checkout' },

]

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const linkClass = ({ isActive }) =>
        isActive ? 'underline underline-offset-3 text-lg font-semibold leading-6 text-gray-900 hover:underline hover:underline-offset-4'
        : ''


    return (
        <header className="inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <NavLink to="/" className="-m-1.5 p-1.5">
                        <img src="https://preview.colorlib.com/theme/malefashion/img/logo.png.webp" alt="Brand Logo" />
                    </NavLink>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item, i) => (
                        <NavLink key={i} to={item.to} className={({isActive}) => isActive ? 'underline underline-offset-[12px] text-lg leading-6 text-gray-900 hover:underline hover:underline-offset-[12px]' : 'text-lg leading-6 text-gray-900 hover:underline hover:underline-offset-[12px]'}>
                            {item.name == 'Pages' ? 
                                <div className="text-right">
                                    <Menu>
                                        <MenuButton>
                                           {item.name}
                                        </MenuButton>

                                            <MenuItems
                                                anchor="bottom middle"
                                                className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-4 text-sm/6  [--anchor-gap:var(--spacing-1)] focus:outline-none"
                                            >
                                                {pages.map((subPage, j) => (
                                                    <MenuItem className="bg-gray-900 text-white text-base">
                                                        <NavLink key={j} to={subPage.to} className="group flex w-full items-center gap-2 py-1.5 px-3 data-[focus]:bg-gray-800">
                                                            {subPage.name}
                                                        </NavLink>
                                                    </MenuItem>
                                                ))}

                                            </MenuItems>
                                      

                                    </Menu>
                                </div>
                                : item.name}

                        </NavLink>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <NavLink to="login" className={({isActive}) => isActive ? 'underline underline-offset-[12px] text-lg leading-6 text-gray-900 hover:underline hover:underline-offset-[12px]' : 'text-lg leading-6 text-gray-900 hover:underline hover:underline-offset-[12px]'}>
                        Log in <span aria-hidden="true">&rarr;</span>
                    </NavLink>
                </div>
            </nav>

            <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <NavLink to="#" className="-m-1.5 p-1.5">
                            <p className="text-lg tracking-wider font-medium">Male Fashion</p>

                            {/* <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            /> */}
                        </NavLink>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item, i) => (
                                    <NavLink
                                        key={i}
                                        to={item.to}
                                        className={({isActive})=> isActive ? 'underline underline-offset-[12px] -mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text-gray-900 hover:bg-gray-50' : '-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50'}
                                    >
                                        {item.name == 'Pages' ?
                                            <Menu>
                                                <MenuButton>{item.name}</MenuButton>
                                                <MenuItems className="flex flex-col p-2">
                                                    {pages.map((subPage, j) => (
                                                        <MenuItem className="my-2" key={j}>
                                                            <NavLink to={subPage.to} >
                                                                {subPage.name}
                                                            </NavLink>
                                                        </MenuItem>
                                                    ))}
                                                    
                                                </MenuItems>
                                            </Menu>
                                            : item.name}

                                    </NavLink>
                                ))}
                            </div>
                            <div className="py-6">
                                <NavLink
                                    to="login"
                                    className='-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50'
                                >
                                    Log in
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}

export default Navbar