import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive
      ? "text-blue-600 bg-blue-50"
      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
    }`;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a className="flex-shrink-0 flex items-center" href="#">
              <span className="text-2xl font-bold text-blue-600">ShopZone</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <div className="flex space-x-4">
              <NavLink className={linkClasses} to="/">Home</NavLink>
              <NavLink className={linkClasses} to="/about">About Us</NavLink>
              <NavLink className={linkClasses} to="/products">Products</NavLink>
              <NavLink className={linkClasses} to="/contact">Contact</NavLink>
            </div>
            <div className="ml-4 flex items-center">
              <NavLink to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Login
              </NavLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
            <NavLink
              className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"}`}
              to="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"}`}
              to="/about"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink
              className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"}`}
              to="/products"
              onClick={() => setIsOpen(false)}
            >
              Products
            </NavLink>
            <NavLink
              className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"}`}
              to="/contact"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
            <div className="pt-4 pb-2">
              <NavLink
                to="/login"
                className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md text-base font-medium hover:bg-blue-700"
                onClick={() => setIsOpen(false)}
              >
                Login
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
