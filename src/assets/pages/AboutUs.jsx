import React from 'react'

const AboutUs = () => {
    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">About Us</h1>
                    <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
                        Welcome to our store! We are passionate about providing the best products at the most affordable prices.
                    </p>
                </div>

                <div className="mt-16 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
                                alt="Our Team"
                                className="w-full rounded-lg shadow-lg object-cover object-center"
                            />
                        </div>
                        <div className="mt-8 lg:mt-0 lg:ml-8">
                            <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Our Mission</h3>
                            <p className="mt-3 text-lg text-gray-500">
                                Our mission is to simplify your shopping experience. We believe in quality, transparency, and exceptional customer service.
                                Whether you are looking for the latest tech gadgets, stylish accessories, or everyday essentials, we have got you covered.
                            </p>
                            <p className="mt-3 text-lg text-gray-500">
                                Founded in 2024, we started with a small team and a big dream. Today, we serve customers all over the world,
                                delivering happiness one package at a time.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-24">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-extrabold text-gray-900">Why Choose Us?</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="pt-6">
                            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                                <div className="-mt-6">
                                    <div className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                                        <i className="bi bi-truck text-white text-2xl"></i>
                                    </div>
                                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Fast Delivery</h3>
                                    <p className="mt-5 text-base text-gray-500">
                                        We ensure your orders reach you as quickly as possible.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                                <div className="-mt-6">
                                    <div className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                                        <i className="bi bi-shield-check text-white text-2xl"></i>
                                    </div>
                                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Secure Payments</h3>
                                    <p className="mt-5 text-base text-gray-500">
                                        Your security is our priority. Shop with confidence.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                                <div className="-mt-6">
                                    <div className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                                        <i className="bi bi-headset text-white text-2xl"></i>
                                    </div>
                                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">24/7 Support</h3>
                                    <p className="mt-5 text-base text-gray-500">
                                        Our support team is always here to assist you.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
