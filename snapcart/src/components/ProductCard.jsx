import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { cartItem, setCartItem } = useContext(CartContext);

  const handlecart = (product) => {
    const existing = cartItem.find((item) => item.id === product.id);
    if (existing) return;
    setCartItem([...cartItem, product]);
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition duration-300 bg-white">
      {/* Product Image */}
      <div className="relative w-full h-64 bg-gray-100 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
        <button
          onClick={(e) => {e.preventDefault(); e.stopPropagation(); handlecart(product);}}
          className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-sm px-3 py-1 rounded hover:bg-opacity-90 hover:bg-gray-600"
        >
          Add to Cart
        </button>
      </div>

      {/* Product Info */}
      <div className="p-3">
        <h3 className="text-sm font-semibold text-gray-800 truncate">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm">{product.brand}</p>

        <div className="flex items-center gap-2 mt-1">
          <span className="text-base font-semibold text-gray-900">
            ₹{product.price}
          </span>
          {product.oldPrice && (
            <span className="text-sm line-through text-gray-400">
              ₹{product.oldPrice}
            </span>
          )}
          {product.discount && (
            <span className="text-sm text-green-600 font-medium">
              {product.discount}% OFF
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
