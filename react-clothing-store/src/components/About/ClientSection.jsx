
const clientImages = [
    'https://preview.colorlib.com/theme/malefashion/img/clients/client-1.png',
    'https://preview.colorlib.com/theme/malefashion/img/clients/client-2.png',
    'https://preview.colorlib.com/theme/malefashion/img/clients/client-3.png',
    'https://preview.colorlib.com/theme/malefashion/img/clients/client-4.png',
    'https://preview.colorlib.com/theme/malefashion/img/clients/client-5.png',
    'https://preview.colorlib.com/theme/malefashion/img/clients/client-6.png',
    'https://preview.colorlib.com/theme/malefashion/img/clients/client-7.png',
    'https://preview.colorlib.com/theme/malefashion/img/clients/client-8.png',
]

const ClientSection = () => {
    return (
        <div className="md:w-[90%] md:mx-auto my-12">
            <div className="text-center mb-10">
                <span className="text-red-600 text-base font-semibold tracking-widest">Partner</span>
                <h2 className="text-black font-semibold text-3xl tracking-wide mt-3">Happy Clients</h2>
            </div>

            <div className="flex flex-wrap justify-center my-10">
                {clientImages.map((clientImage, i) => (
                    <a href="#" key={i} className="w-1/2 md:w-1/4 flex justify-center">
                        <img src={clientImage} alt="partner logo" className="mb-20 object-cover" />
                    </a>
                ))}
            </div>
        </div>
    )
}

export default ClientSection