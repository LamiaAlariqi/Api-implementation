import React from 'react'

const Contact = () => {
    return (
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Contact Us</h1>
                    <p className="mt-4 text-xl text-gray-500">
                        Have any questions? We'd love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in touch</h3>
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                    <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" id="name" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" id="email" placeholder="name@example.com" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" id="message" rows="5" placeholder="Your Message"></textarea>
                                </div>
                                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Send Message</button>
                            </form>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="p-8 h-full flex flex-col">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                            <div className="space-y-6 flex-grow">
                                <div className="flex items-start">
                                    <i className="bi bi-geo-alt-fill text-2xl text-blue-600 mr-4"></i>
                                    <div>
                                        <h5 className="text-lg font-medium text-gray-900">Address</h5>
                                        <p className="mt-1 text-gray-500">123 E-commerce St, Digital City, 10001</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <i className="bi bi-envelope-fill text-2xl text-blue-600 mr-4"></i>
                                    <div>
                                        <h5 className="text-lg font-medium text-gray-900">Email</h5>
                                        <p className="mt-1 text-gray-500">support@example.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <i className="bi bi-telephone-fill text-2xl text-blue-600 mr-4"></i>
                                    <div>
                                        <h5 className="text-lg font-medium text-gray-900">Phone</h5>
                                        <p className="mt-1 text-gray-500">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184133446051!2d-73.98773192426682!3d40.7579689347895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c8fb31ed%3A0x73df012dfc46218d!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1709923456789!5m2!1sen!2sus"
                                    width="100%"
                                    height="250"
                                    style={{ border: 0, borderRadius: '8px' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
