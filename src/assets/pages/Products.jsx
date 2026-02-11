import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// https://api.escuelajs.co/api/v1/products

const Products = () => {
    const [products, setProducts] = useState([])
    const getProducts = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products')
            setProducts(response.data.products)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Our Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {
                        products.map((product) => (
                            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full" key={product.id}>
                                <Link to={`/products/${product.id}`} className="block h-full flex flex-col">
                                    <div className="h-48 p-4 bg-white flex items-center justify-center relative group">
                                        <img
                                            src={product.thumbnail || product.images[0]}
                                            alt={product.title}
                                            className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-5 flex flex-col flex-grow">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2 truncate" title={product.title}>{product.title}</h3>
                                        <div className="flex justify-between items-center mt-auto">
                                            <span className="text-xl font-bold text-blue-600">${product.price}</span>
                                            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{product.category}</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Products
