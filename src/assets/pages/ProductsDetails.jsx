import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
//https://fakestoreapi.com/products
const ProductsDetails = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams()
    const getProductsDetails = async () => {
        try {
            const response = await axios.get(`https://dummyjson.com/products/${id}`)
            setProduct(response.data)
        }
        catch (error) {
            console.log("Error while fetching product details", error);
        }
    }
    useEffect(() => {
        getProductsDetails()
    }, [])

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            {product ? (
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Product Details</h1>
                    <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
                        <div className="md:flex">
                            <div className="md:flex-shrink-0 md:w-1/2 bg-gray-100 flex items-center justify-center p-8">
                                <img
                                    src={product.thumbnail || product.images?.[0]}
                                    alt={product.title}
                                    className="h-full w-full object-contain max-h-[500px]"
                                />
                            </div>
                            <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
                                <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold mb-2">{product.category}</div>
                                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">{product.title}</h2>
                                <p className="mt-4 text-lg text-gray-500 leading-relaxed mb-8">{product.description}</p>
                                <div className="flex items-center justify-between mb-8">
                                    <span className="text-4xl font-bold text-gray-900">${product.price}</span>
                                </div>
                                <button className="w-full bg-blue-600 border border-transparent rounded-xl py-4 px-8 text-lg font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors shadow-lg">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>
            )}
        </div>
    )
}

export default ProductsDetails
