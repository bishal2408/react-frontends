import { Link } from "react-router-dom"

const HeroNavigate = ({ hasChildLink = false, parentLink, childLink = null }) => {

    const getDisplayText = (link) => {
        const linkTextMap = {
            '/shop' : 'Shop',
            '/cart' : 'Shopping Cart',
            '/blog' : 'Blog',
            '/contact' : 'Contact Us',
            '/about' : 'About Us',
            '/shop-details' : 'Shop Details',
            '/checkout' : 'Checkout',
        }

        return linkTextMap[link] || 'Unknown Link'
    }

    return (
        <div className=" px-16 py-10 bg-gray-100">
            <h3 className="text-2xl font-semibold tracking-wide mb-1">{getDisplayText(parentLink)}</h3>
            <Link to="/" className="text-md tracking-wider">Home {">"}</Link>

            {hasChildLink ?
                <div className="inline">
                    <Link to={parentLink} className="inline text-md tracking-wider"> {getDisplayText(parentLink)} {'>'} </Link>
                    <Link to={childLink} className="inline text-grey-300 tracking-wider">{getDisplayText(childLink)} </Link>
                </div>

                :
                <Link to={parentLink} className="inline text-grey-300 tracking-wider"> {getDisplayText(parentLink)}</Link>}

        </div>
    )
}

export default HeroNavigate