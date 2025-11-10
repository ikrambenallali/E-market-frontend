import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
    const baseURL = import.meta.env.VITE_API_URL;


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const token = localStorage.getItem('token');

      const response = await axios.get(`http://127.0.0.1:3000/products/${id}`, {
          headers: token ? { Authorization: `Bearer ${token}` } : {}
        });

        setProduct(response.data.data.product);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Chargement...</p>;
  if (!product) return <p>Produit non trouvé</p>;

  return (
    <div className="p-10 flex flex-col items-center">
      
      <img
        src={
                  product.images && product.images.length > 0
                    ? `${baseURL}${product.images[0]}`
                    : '/src/assets/product-placeholder.png'
                }
        alt={product.title}
        className="w-64 h-64 object-cover rounded-xl mb-6"
      />

      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

      <p className="text-xl text-gray-700 mb-4">
        Prix : {product.price} €
      </p>

      <p className="text-gray-600 mb-6">
        {product.description}
      </p>

      <button className="px-6 py-3 bg-[#D58E8E] text-white rounded-full">
        Ajouter au panier
      </button>
    </div>
  );
}
