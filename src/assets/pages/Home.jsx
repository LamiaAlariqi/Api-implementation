import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([])
    const [category, setCategory] = useState("all")
    const [maxPrice, setMaxPrice] = useState("")
    const [search, setSearch] = useState("")
    const [searchDescription, setSearchDescription] = useState("")

    const getAllProducts = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products');
            setProducts(response.data.products)
            setFilteredProducts(response.data.products)
        } catch (error) {
            console.log(error);
        }
    }

    const categories = ["all", "beauty", "fragrances", "furniture", "groceries", "home-decoration", "kitchen-accessories", "laptops", "mens-shirts", "mens-shoes"]

    useEffect(() => {
        getAllProducts()
    }, [])

    useEffect(() => {
        let updatedProducts = products

        if (search.trim() !== "") {
            updatedProducts = updatedProducts.filter((product) => {
                return product.title.toLowerCase().includes(search.toLowerCase())
            })
        }

        // New search filter for description
        if (searchDescription.trim() !== "") {
            updatedProducts = updatedProducts.filter((product) => {
                return product.description.toLowerCase().includes(searchDescription.toLowerCase())
            })
        }

        if (category !== "all") {
            updatedProducts = updatedProducts.filter((product) => {
                return product.category === category
            })
        }

        if (maxPrice !== "") {
            updatedProducts = updatedProducts.filter((product) => {
                return product.price <= maxPrice
            })
        }

        setFilteredProducts(updatedProducts)
    }, [search, searchDescription, products, category, maxPrice])

    const scrollToProducts = () => {
        const element = document.getElementById('products-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Hero Section */}
            <div className="relative bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block xl:inline">Discover the Best</span>{' '}
                                    <span className="block text-blue-600 xl:inline">Products for You</span>
                                </h1>
                                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    Shop the latest trends in fashion, technology, and home decor. Quality products at unbeatable prices, delivered straight to your door.
                                </p>
                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-md shadow">
                                        <button onClick={scrollToProducts} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg">
                                            Shop Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img
                        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        alt="Shopping"
                    />
                </div>
            </div>

            {/* Featured Categories */}
            <div className="bg-gray-100 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Featured Categories</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {['beauty', 'furniture', 'laptops', 'mens-shoes'].map((cat) => (
                            <div key={cat} onClick={() => { setCategory(cat); scrollToProducts(); }} className="cursor-pointer bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 text-center transform hover:-translate-y-1 duration-200">
                                <div className="text-4xl mb-2 text-blue-500">
                                    <i className={`bi bi-${cat === 'laptops' ? 'laptop' : cat === 'furniture' ? 'lamp' : cat === 'mens-shoes' ? 'bag' : 'gem'}`}></i>
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 capitalize">{cat.replace('-', ' ')}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Product Section */}
            <div id="products-section" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Our Collection</h2>

                {/* Filters */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 bg-white p-6 rounded-lg shadow-sm">
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                        <select
                            className="w-full p-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            {
                                categories.map((category) => (
                                    <option key={category} value={category}>{category}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Max Price</label>
                        <input
                            className="w-full p-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            type="number"
                            placeholder='Enter max price'
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                        />
                    </div>

                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Search Title</label>
                        <input
                            className="w-full p-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            type="search"
                            placeholder="Enter title..."
                            aria-label="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Search Description</label>
                        <input
                            className="w-full p-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            type="search"
                            placeholder="Enter description..."
                            aria-label="Search Description"
                            value={searchDescription}
                            onChange={(e) => setSearchDescription(e.target.value)}
                        />
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {
                        filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-gray-100" key={product.id}>
                                    <div className="h-48 p-4 bg-white flex items-center justify-center relative group">
                                        <span className="absolute top-2 right-2 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">{product.category}</span>
                                        <img
                                            src={product.thumbnail}
                                            className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
                                            alt={product.title}
                                        />
                                    </div>
                                    <div className="p-5 flex flex-col flex-grow">
                                        <h5 className="text-lg font-bold text-gray-900 mb-1 truncate" title={product.title}>{product.title}</h5>
                                        <div className="flex items-center mb-2">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className={`w-4 h-4 ${i < Math.round(product.rating || 0) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">{product.rating}</span>
                                        </div>
                                        <div className="flex justify-between items-center mb-3">
                                            <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                                            {product.discountPercentage > 0 && (
                                                <span className="text-sm text-green-600 font-medium">-{product.discountPercentage}%</span>
                                            )}
                                        </div>
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow" title={product.description}>{product.description}</p>
                                        <button className="w-full bg-blue-600 text-white font-medium py-2.5 px-4 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-auto flex items-center justify-center">
                                            <i className="bi bi-cart-plus mr-2"></i> Add To Cart
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-20 bg-white rounded-lg shadow-sm">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                                    <i className="bi bi-search text-gray-400 text-2xl"></i>
                                </div>
                                <h4 className="text-xl font-medium text-gray-900">No products found</h4>
                                <p className="text-gray-500 mt-2">Try adjusting your search or filters to find what you're looking for.</p>
                                <button onClick={() => { setCategory('all'); setSearch(''); setSearchDescription(''); setMaxPrice('') }} className="mt-4 text-blue-600 hover:text-blue-800 font-medium">Clear all filters</button>
                            </div>
                        )
                    }
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="bg-blue-600 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        <span className="block">Want product news and updates?</span>
                        <span className="block text-blue-200">Sign up for our newsletter.</span>
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-blue-100">
                        Subscribe to get latest updates about our products and special offers.
                    </p>
                    <div className="mt-8 flex justify-center">
                        <form className="sm:flex">
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
                                placeholder="Enter your email"
                            />
                            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
