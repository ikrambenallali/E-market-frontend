import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default function ProductList() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const baseURL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem('token')
        const response = await axios.get('http://localhost:3000/products', {
          headers: token ? { Authorization: `Bearer ${token}` } : {}
        })

        setProducts(response.data.data.products)
      } catch (err) {
        console.error(err)
        setError('Erreur lors de la récupération des produits')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading)
    return (
      <p className="text-center mt-20 text-xl text-[#D58E8E]">
        Chargement...
      </p>
    )
  if (error)
    return (
      <p className="text-center mt-20 text-xl text-red-500">{error}</p>
    )

  return (
    <div className="min-h-screen bg-[#FBF4FA] flex flex-col items-center p-10">


      {/* 🔥 Titre central */}
      <h1 className="text-4xl font-bold text-[#561E29] mb-10">
        Products
      </h1>

      {/* 🔥 Filtres (design amélioré) */}
      <div className="flex gap-6 mb-12">
        <button className="px-4 py-2 bg-[#D58E8E] text-white font-semibold rounded-full">
          All
        </button>
        <button className="px-4 py-2 text-[#561E29] font-semibold hover:text-[#D58E8E]">
          For Body
        </button>
        <button className="px-4 py-2 text-[#561E29] font-semibold hover:text-[#D58E8E]">
          For Hair
        </button>
      </div>

      {/* ✅ PRODUIT GRID DESIGN STYLE */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {products.map((product) => (
              <Link to={`/products/${product._id}`} key={product._id}>

          <div
            key={product._id}
            className="bg-[#EDCAC8] p-6 rounded-3xl flex flex-col items-center shadow-lg transition transform hover:scale-105"
          >
            {/* 🔥 Image dans un carré rose clair */}
            <div className=" w-48 h-48 rounded-xl flex items-center justify-center mb-4">
              <img
                src={
                  product.images && product.images.length > 0
                    ? `${baseURL}${product.images[0]}`
                    : '/src/assets/product-placeholder.png'
                }
                alt={product.title}
                className="w-32 h-32 object-contain"
              />
            </div>

            {/* ✅ Titre */}
            <h2 className="text-xl font-bold text-[#561E29] mb-1">
              {product.title}
            </h2>

            {/* ✅ Prix */}
            <p className="text-[#561E29] font-semibold mb-3">
              {product.price} €
            </p>

            {/* ✅ Bouton Ajouter au panier */}
            <button className="w-full bg-[#D58E8E] text-white py-2 rounded-full font-semibold hover:bg-[#D58E8E] transition">
              Add to Cart
            </button>
          </div>
           </Link>
        ))}
      </div>
    </div>
  )
}
