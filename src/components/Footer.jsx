import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-10 pb-6 mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">

                    <div className="col-span-1">
                        <h5 className="uppercase mb-4 font-bold text-yellow-500 tracking-wider">Company Name</h5>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit.
                        </p>
                    </div>

                    <div className="col-span-1">
                        <h5 className="uppercase mb-4 font-bold text-yellow-500 tracking-wider">Products</h5>
                        <div className="flex flex-col space-y-2">
                            <Link to="/products" className="text-gray-300 hover:text-white transition-colors duration-200">All Products</Link>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Electronics</a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Clothing</a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Accessories</a>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <h5 className="uppercase mb-4 font-bold text-yellow-500 tracking-wider">Useful links</h5>
                        <div className="flex flex-col space-y-2">
                            <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">Home</Link>
                            <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</Link>
                            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</Link>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Help</a>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <h5 className="uppercase mb-4 font-bold text-yellow-500 tracking-wider">Contact</h5>
                        <div className="flex flex-col space-y-2 text-sm text-gray-300">
                            <p className="flex items-center justify-center md:justify-start">
                                <i className="bi bi-house-door-fill mr-3"></i> New York, NY 10012, US
                            </p>
                            <p className="flex items-center justify-center md:justify-start">
                                <i className="bi bi-envelope-fill mr-3"></i> info@example.com
                            </p>
                            <p className="flex items-center justify-center md:justify-start">
                                <i className="bi bi-telephone-fill mr-3"></i> + 01 234 567 88
                            </p>
                            <p className="flex items-center justify-center md:justify-start">
                                <i className="bi bi-printer-fill mr-3"></i> + 01 234 567 89
                            </p>
                        </div>
                    </div>

                </div>

                <hr className="my-8 border-gray-700" />

                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-4 md:mb-0">
                        <p className="text-sm text-gray-400">
                            © 2024 Copyright:
                            <a href="#" className="ml-1 text-white font-bold hover:text-yellow-500 transition-colors">
                                TheProviders
                            </a>
                        </p>
                    </div>

                    <div className="flex space-x-4">
                        <a href="#" className="text-white hover:text-blue-500 transition-colors duration-200 text-xl"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="text-white hover:text-blue-400 transition-colors duration-200 text-xl"><i className="bi bi-twitter"></i></a>
                        <a href="#" className="text-white hover:text-red-500 transition-colors duration-200 text-xl"><i className="bi bi-google"></i></a>
                        <a href="#" className="text-white hover:text-blue-700 transition-colors duration-200 text-xl"><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
