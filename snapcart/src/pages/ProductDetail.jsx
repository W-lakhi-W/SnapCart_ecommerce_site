import React from "react";
import { useParams, useLocation } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const product = location.state?.product;
  if (!product) {
    // fallback if no product is passed
    product = {
      id: 1,
      name: "iPhone 15",
      price: 80000,
      description:
        "The latest iPhone with A16 Bionic chip, stunning design, and advanced camera system.",
      image:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    };
  }

  return (
    <div className="p-8 flex flex-col md:flex-row gap-10">
      {/* Left side - Image */}
      <div className="flex-1 flex justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-80 h-80 object-contain rounded-lg shadow-lg"
        />
      </div>

      {/* Right side - Info */}
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          {product.name}
        </h2>
        <p className="text-xl text-green-600 font-semibold mb-4">
          ₹{product.price}
        </p>
        <p className="text-gray-600 mb-6">{product.description}</p>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
            Add to Cart
          </button>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
