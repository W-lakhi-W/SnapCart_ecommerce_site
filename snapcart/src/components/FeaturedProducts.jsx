// src/components/FeaturedProducts.jsx
import React from "react";
import { Link } from "react-router-dom";

const FeaturedProducts = ({ products, title = "Featured Products" }) => {
  return (
    <section className="my-12 px-4">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
        {title}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            state={{ product }}
          >
            <div className="bg-white border rounded-lg shadow-sm hover:shadow-lg transition overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="h-56 w-full object-cover rounded-t-lg"
              />
              <div className="p-3">
                <h3 className="text-sm font-semibold">{product.name}</h3>
                <p className="text-xs text-gray-500">{product.brand}</p>
                <p className="text-blue-600 font-bold mt-1">₹{product.price}</p>
                <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
