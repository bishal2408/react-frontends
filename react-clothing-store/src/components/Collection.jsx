import { Link } from "react-router-dom"

const Collection = ({ name, image, imagePos}) => {
    return (
        <div className={imagePos == 'left' ? "lg:flex md:flex justify-center items-center" : "lg:flex lg:flex-row-reverse md:flex md:flex-row-reverse justify-center items-center"} >
            <img src={image} alt="collection image" loading="lazy" className="w-full h-auto lg:w-auto md:w-auto"/>
            <div className="my-8">
                <p className="text-3xl text-dark-700 font-semibold my-4">{name}</p>
                <Link to='shop' className="underline underline-offset-8 ">SHOP NOW</Link>
            </div>
        </div>
    )
}

export default Collection