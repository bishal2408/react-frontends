import { useEffect, useState } from "react";
import saleImage from "../assets/homepage/sale.png.webp";

const Sale = () => {
    
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    // setting deadline to 30 days from the current date 
    const currentDate = new Date();
    const deadlineDate = new Date(currentDate.getTime() + 30 * 24 * 60 * 60 * 1000);
    const deadline = deadlineDate.toISOString().slice(0, 10);

    // for static deadline you can do the following
    // const deadline = "July, 21, 2025" 

    // deadline to date object and calculating remmaining time
    const getTime = () => {
        const time = Date.parse(deadline) - Date.now()

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)))
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24))
        setMinutes(Math.floor((time / 1000 / 60) % 60))
        setSeconds(Math.floor((time / 1000) % 60))
    }

    // useEffect for setting and clearing time interval every second
    useEffect(() => {
        const interval = setInterval(() => getTime(deadline, 1000))

        return () => clearInterval(interval)
    }, [])


    return (
        <div className="bg-red-50 py-28 px-4 lg:flex lg:items-center lg:px-20 my-20">
            <div className="w-full my-12 md:w-auto">
                <h2 className="text-3xl text-gray-400 my-4 font-semibold md:my-6">
                    Clothings Hot
                </h2>
                <h2 className="text-3xl text-black my-4 font-semibold md:my-6">
                    Shoe Collection
                </h2>
                <h2 className="text-3xl text-gray-400 my-4 font-semibold md:my-6">
                    Accessories
                </h2>
            </div>

            <div className="my-12 relative md:mx-20">
                <img
                    src={saleImage}
                    alt="Sale Image"
                    className="w-full object-cover h-full"
                />
                <div className="absolute w-24 h-24 bg-gray-900 rounded-full top-0 right-2">
                    <p className="text-white px-5 py-5">
                        {" "}
                        Sale Of <span className="font-semibold text-lg">$29.99</span>
                    </p>
                </div>
            </div>

            <div className="my-12">
                <p className="text-sm text-red-500 font-bold tracking-widest my-4">
                    DEAL OF THE WEEK
                </p>
                <h1 className="text-4xl text-gray-900 font-semibold my-4">
                    Multi-pocket Chest Bag Black
                </h1>

                <div class="flex my-8 items-center">
                    <div class="w-1/4 text-center float-left relative">
                        <span className="text-4xl font-semibold">{days}</span> <p className="mt-4">Days</p>
                        <span className="absolute text-4xl font-semibold top-0 right-0">:</span>
                    </div>
                    <div class="w-1/4 text-center float-left relative">
                        <span className="text-4xl font-semibold">{hours}</span> <p className="mt-4">Hours</p>
                        <span className="absolute text-4xl font-semibold top-0 right-0">:</span>
                    </div>
                    <div class="w-1/4 text-center float-left relative">
                        <span className="text-4xl font-semibold">{minutes}</span> <p className="mt-4">Minutes</p>
                        <span className="absolute text-4xl font-semibold top-0 right-0">:</span>
                    </div>
                    <div class="w-1/4 text-center float-left relative">
                        <span className="text-4xl font-semibold">{seconds}</span> <p className="mt-4">Seconds</p>
                    </div>
                </div>
                <button className="bg-black md:w-1/3 px-3.5 py-2.5 my-4 text-sm tracking-widest font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                    SHOP NOW
                </button>
            </div>
        </div>
    );
};

export default Sale;
