import { CalendarDaysIcon } from "@heroicons/react/24/outline"


const BlogCard = ({date, title, image}) => {
    return (
        <div className="relative mb-40">
            <img
                src={image}
                alt="news image"
                className="w-full object-cover"
            />
            <div className="bg-white shadow-xl w-[80%] p-7 absolute top-[80%] left-8">
                <p className="text-gray-600 text-sm mb-1">
                    <CalendarDaysIcon className="w-5 h-5 inline" />
                    <span>{date}</span>
                </p>

                <p className="text-lg font-semibold leading-normal mb-3">{title}</p>
                <a href="#" className="text-sm tracking-widest underline underline-offset-[10px]">READ MORE</a>
            </div>
        </div>
    )
}

export default BlogCard