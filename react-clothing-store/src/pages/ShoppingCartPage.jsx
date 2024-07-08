import React from 'react'
import HeroNavigate from '../components/HeroNavigate'
import Cart from '../components/Shopping Cart/Cart'

const ShoppingCartPage = () => {
    return (
        <>
            <HeroNavigate
                parentLink='/shop'
                hasChildLink={true}
                childLink='/cart'
            />
            <Cart />
        </>
    )
}

export default ShoppingCartPage