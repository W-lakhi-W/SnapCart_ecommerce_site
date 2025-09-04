import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Trash2 } from "lucide-react"; // icon for remove

import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItem, setCartItem } = useContext(CartContext);
  const { isSignedIn } = useAuth(); // check if user is logged in
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    if (isSignedIn) {
      navigate("/checkout"); // redirect to order page
    } else {
      navigate("/sign-in"); // redirect to Clerk login page
    }
  };

  // Increase quantity
  const increaseQty = (id) => {
    setCartItem(
      cartItem.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCartItem(
      cartItem.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCartItem(cartItem.filter((item) => item.id !== id));
  };

  // Calculate total price
  const totalPrice = cartItem.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 sm:p-6 md:p-8 bg-gray-50 min-h-screen">
      {/* Cart Items Section */}
      <div className="flex-1">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
          Shopping Bag
        </h2>

        {cartItem.length === 0 ? (
          <p className="text-gray-600">Your cart is empty 🛒</p>
        ) : (
          <div className="grid gap-4">
            {cartItem.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition"
              >
                {/* Product info */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded"
                  />
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold">
                      {item.name}
                    </h3>
                    <p className="text-gray-500 text-sm sm:text-base">
                      ₹{item.price}
                    </p>
                  </div>
                </div>

                {/* Quantity + Remove (stack on mobile, inline on desktop) */}
                <div className="flex sm:flex-row flex-col sm:items-center justify-end gap-3 w-full sm:w-auto">
                  {/* Quantity controls */}
                  <div className="flex items-center gap-3 justify-center">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="w-8 h-8 border border-gray-400 rounded flex items-center justify-center hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="w-8 h-8 border border-gray-400 rounded flex items-center justify-center hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="flex items-center justify-center text-gray-500 hover:text-red-600 transition"
                    title="Remove Item"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Order Summary Section */}
      {cartItem.length > 0 && (
        <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-4 sm:p-6 h-fit sticky top-6">
          <h3 className="text-lg font-semibold mb-4">Price Details</h3>

          {/* Price Breakdown */}
          <div className="space-y-2 text-sm sm:text-base text-gray-700 mb-4">
            <div className="flex justify-between">
              <span>Total MRP</span>
              <span>₹{totalPrice}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span className="text-green-600">-₹0</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Charges</span>
              <span className="text-green-600">FREE</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-base">
              <span>Total Amount</span>
              <span>₹{totalPrice}</span>
            </div>
          </div>

          {/* Checkout Button */}
          <button
            onClick={handlePlaceOrder}
            className="w-full bg-pink-600 text-white py-3 rounded-md font-semibold hover:bg-pink-700 transition"
          >
            PLACE ORDER
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
