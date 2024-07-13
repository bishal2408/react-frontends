import React from 'react'

const ContactPage = () => {
    return (
        <>
            <div className='w-full mb-20'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1564721551795!2d85.31519597448862!3d27.71245472526793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19016c9d9fcb%3A0xd2291eee6917d60a!2sDurbar%20Marg%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1720869708502!5m2!1sen!2snp"
                    className="w-full"
                    height="450"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ border: 0 }}
                >
                </iframe>
            </div>

            <div className='my-24 px-4 md:flex md:justify-evenly md:items-start md:w-11/12 md:m-auto'>
                <div className='mb-12 md:w-1/2'>
                    <div className='mb-7'>
                        <span className='text-red-600 font-semibold text-sm tracking-widest'>INFORMATION</span>
                        <h2 className='text-4xl font-semibold my-3'>Contact Us</h2>
                        <p className=' text-base tracking-tight text-gray-500'>As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.</p>
                    </div>

                    <div className='mb-7'>
                        <h3 className='text-2xl font-semibold mb-3 tracking-wide'>America</h3>
                        <p className='text-base tracking-tight text-gray-500 mb-1'>195 E Parker Square Dr, Parker, CO 801 </p>
                        <p className='text-base tracking-tight text-gray-500'>+43 982-314-0958</p>
                    </div>

                    <div>
                        <h3 className='text-2xl font-semibold mb-3 tracking-wide'>France</h3>
                        <p className='text-base tracking-tight text-gray-500 mb-1'>109 Avenue Léon, 63 Clermont-Ferrand </p>
                        <p className='text-base tracking-tight text-gray-500'>+12 345-423-9893</p>
                    </div>
                </div>

                <div className='md:w-1/2 md:ml-10'>

                    <div className='lg:flex '>
                        <div className="mb-5 lg:mr-2 lg:w-full">
                            <input
                                type='text'
                                placeholder='Name'
                                name='name'
                                id='name'
                                className="p-3 text-base w-full border-2 outline-none focus:border-black"
                                required
                            />
                        </div>

                        <div className="mb-5 lg:w-full">
                            <input
                                type='text'
                                placeholder='Email'
                                name='email'
                                id='email'
                                className="p-3 text-base w-full border-2 outline-none focus:border-black"
                                required
                            />
                        </div>
                    </div>


                    <div className='mb-5'>
                        <textarea
                            name="message"
                            id="message"
                            placeholder='Message'
                            className="p-3 text-base w-full border-2 outline-none focus:border-black"
                            rows='4'
                        />
                    </div>

                    <button
                        className='bg-black px-3.5 py-2.5 text-sm tracking-widest font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'>SEND MESSAGE
                    </button>
                </div>
            </div>
        </>
    )
}

export default ContactPage