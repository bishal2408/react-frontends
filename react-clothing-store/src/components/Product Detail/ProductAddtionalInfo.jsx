import { useState } from "react"

const ProductAddtionalInfo = () => {
    const [activeTab, setActiveTab] = useState('description')

    return (

        <div className="my-10">
            <div className="flex items-center flex-wrap justify-evenly sm:gap-4 md:gap-0">
                <button className={`text-lg inline-flex font-semibold text-gray-400 leading-loose pb-1 mr-2 ${activeTab === 'description' && 'border-b-2 border-black'}`} onClick={() => setActiveTab('description')}>
                    Description
                </button>
                <button className={`text-lg inline-flex font-semibold text-gray-400 leading-loose pb-1 mr-2 ${activeTab === 'customer-preview' && 'border-b-2 border-black'}`} onClick={() => setActiveTab('customer-preview')}>
                    Customer Previews{"(5)"}
                </button>
                <button className={`text-lg inline-flex font-semibold text-gray-400 leading-loose pb-1 mr-2 ${activeTab === 'addtional-information' && 'border-b-2 border-black'}`} onClick={() => setActiveTab('addtional-information')}>
                    Addtional information
                </button>
            </div>

            {activeTab == 'description' &&
                <div className="px-5 text-justify">
                    <p className="font-semibold mt-7">Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.</p>
                    <div className="my-7">
                        <h3 className="text-lg font-semibold mb-2">Products Infomation</h3>
                        <p className="mb-3">A Pocket PC is a handheld computer, which features many of the same capabilities as a modern PC. These handy little devices allow individuals to retrieve and store e-mail messages, create a contact file, coordinate appointments, surf the internet, exchange text messages and more. Every product that is labeled as a Pocket PC must be accompanied with specific software to operate the unit and must feature a touchscreen and touchpad.</p>
                        <p>As is the case with any new technology product, the cost of a Pocket PC was substantial during it’s early release. For approximately $700.00, consumers could purchase one of top-of-the-line Pocket PCs in 2003. These days, customers are finding that prices have become much more reasonable now that the newness is wearing off. For approximately $350.00, a new Pocket PC can now be purchased.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Material used</h3>
                        <p>Polyester is deemed lower quality due to its none natural quality’s. Made from synthetic materials, not natural like wool. Polyester suits become creased easily and are known for not being breathable. Polyester suits tend to have a shine to them compared to wool and cotton suits, this can make the suit look cheap. The texture of velvet is luxurious and breathable. Velvet is a great choice for dinner party jacket and can be worn all year round.</p>
                    </div>
                </div>
            }

            {activeTab == 'customer-preview' &&
                <div className="px-5 text-justify">
                    <div className="my-7">
                        <h3 className="text-lg font-semibold mb-2">Products Infomation</h3>
                        <p className="mb-3">A Pocket PC is a handheld computer, which features many of the same capabilities as a modern PC. These handy little devices allow individuals to retrieve and store e-mail messages, create a contact file, coordinate appointments, surf the internet, exchange text messages and more. Every product that is labeled as a Pocket PC must be accompanied with specific software to operate the unit and must feature a touchscreen and touchpad.</p>
                        <p>As is the case with any new technology product, the cost of a Pocket PC was substantial during it’s early release. For approximately $700.00, consumers could purchase one of top-of-the-line Pocket PCs in 2003. These days, customers are finding that prices have become much more reasonable now that the newness is wearing off. For approximately $350.00, a new Pocket PC can now be purchased.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Material used</h3>
                        <p>Polyester is deemed lower quality due to its none natural quality’s. Made from synthetic materials, not natural like wool. Polyester suits become creased easily and are known for not being breathable. Polyester suits tend to have a shine to them compared to wool and cotton suits, this can make the suit look cheap. The texture of velvet is luxurious and breathable. Velvet is a great choice for dinner party jacket and can be worn all year round.</p>
                    </div>
                </div>
            }

            {activeTab == 'addtional-information' &&
                <div className="px-5 text-justify mt-7">
                    <p className="font-semibold">Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.</p>
                    <div className="my-7">
                        <h3 className="text-lg font-semibold mb-2">Products Infomation</h3>
                        <p className="mb-3">A Pocket PC is a handheld computer, which features many of the same capabilities as a modern PC. These handy little devices allow individuals to retrieve and store e-mail messages, create a contact file, coordinate appointments, surf the internet, exchange text messages and more. Every product that is labeled as a Pocket PC must be accompanied with specific software to operate the unit and must feature a touchscreen and touchpad.</p>
                        <p>As is the case with any new technology product, the cost of a Pocket PC was substantial during it’s early release. For approximately $700.00, consumers could purchase one of top-of-the-line Pocket PCs in 2003. These days, customers are finding that prices have become much more reasonable now that the newness is wearing off. For approximately $350.00, a new Pocket PC can now be purchased.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Material used</h3>
                        <p>Polyester is deemed lower quality due to its none natural quality’s. Made from synthetic materials, not natural like wool. Polyester suits become creased easily and are known for not being breathable. Polyester suits tend to have a shine to them compared to wool and cotton suits, this can make the suit look cheap. The texture of velvet is luxurious and breathable. Velvet is a great choice for dinner party jacket and can be worn all year round.</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default ProductAddtionalInfo