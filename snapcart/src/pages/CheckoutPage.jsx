import React, { useState } from "react";

const CheckoutPage = () => {
  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  });

  const handleChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Shipping Info:", shippingInfo);
    alert("Order placed successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-6">Checkout</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Shipping Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={shippingInfo.fullName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={shippingInfo.address}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={shippingInfo.city}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={shippingInfo.state}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                name="zip"
                placeholder="ZIP Code"
                value={shippingInfo.zip}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={shippingInfo.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded"
                required
              />
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Product 1</span>
                <span>$49.99</span>
              </div>
              <div className="flex justify-between">
                <span>Product 2</span>
                <span>$29.99</span>
              </div>
              <div className="border-t border-gray-300 pt-2 flex justify-between font-semibold">
                <span>Total</span>
                <span>$79.98</span>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Payment Method</h3>
              <select className="w-full p-3 border border-gray-300 rounded mb-4">
                <option>Credit/Debit Card</option>
                <option>UPI</option>
                <option>Net Banking</option>
                <option>Cash on Delivery</option>
              </select>

              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
