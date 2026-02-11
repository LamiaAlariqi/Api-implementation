import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails2 = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)

    const getProductDetails = async () => {
        try {
            const response = await axios.get(`https://dummyjson.com/products/${id}`)
            setProduct(response.data)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getProductDetails()
    }, [])

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            {product ? (
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-10">Product Details</h1>
                    <div className="bg-white shadow-lg rounded-xl overflow-hidden p-6 md:p-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="flex items-center justify-center bg-gray-100 rounded-lg p-6">
                                <img
                                    src={product.thumbnail || product.images?.[0]}
                                    alt={product.title}
                                    className="max-h-96 object-contain rounded-md"
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h2>
                                <p className="text-gray-600 text-lg mb-6 leading-relaxed">{product.description}</p>
                                <p className="text-3xl font-bold text-blue-600 mb-8">
                                    ${product.price}
                                </p>
                                <button className="w-full sm:w-auto bg-blue-600 text-white font-medium py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
                                    Buy Now
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

export default ProductDetails2