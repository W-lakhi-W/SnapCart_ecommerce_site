import React, { useState } from "react";

const mockWomenProducts = [
  {
    id: 1,
    name: "Floral Dress",
    brand: "Zara",
    price: 2500,
    category: "Dresses",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 2,
    name: "Casual Top",
    brand: "H&M",
    price: 1200,
    category: "Tops",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 3,
    name: "Skinny Jeans",
    brand: "Levis",
    price: 2200,
    category: "Jeans",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 4,
    name: "Heeled Sandals",
    brand: "Steve Madden",
    price: 3500,
    category: "Footwear",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 5,
    name: "Blazer",
    brand: "Mango",
    price: 2800,
    category: "Outerwear",
    image: "https://via.placeholder.com/200",
  },
];

const WomenPage = () => {
  const [products, setProducts] = useState(mockWomenProducts);
  const [sortOption, setSortOption] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  // Sorting
  const handleSort = (option) => {
    setSortOption(option);
    let sorted = [...products];
    if (option === "low-high") sorted.sort((a, b) => a.price - b.price);
    if (option === "high-low") sorted.sort((a, b) => b.price - a.price);
    setProducts(sorted);
  };

  // Filtering
  const filteredProducts = products.filter(
    (p) => categoryFilter === "All" || p.category === categoryFilter
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <div className="h-60 bg-gradient-to-r from-pink-600 to-purple-600 flex items-center justify-center text-white text-3xl font-bold">
        Women’s Fashion
      </div>

      <div className="flex p-6 gap-6">
        {/* Sidebar Filters */}
        <aside className="w-1/4 hidden md:block bg-white rounded-lg shadow p-4 h-fit">
          <h2 className="font-bold text-lg mb-4">Filters</h2>

          {/* Category */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Category</h3>
            {["All", "Dresses", "Tops", "Jeans", "Footwear", "Outerwear"].map(
              (cat) => (
                <label key={cat} className="block text-sm mb-1">
                  <input
                    type="radio"
                    name="category"
                    checked={categoryFilter === cat}
                    onChange={() => setCategoryFilter(cat)}
                    className="mr-2"
                  />
                  {cat}
                </label>
              )
            )}
          </div>
        </aside>

        {/* Main Products Section */}
        <main className="flex-1">
          {/* Header Controls */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Women’s Products</h1>
            <select
              value={sortOption}
              onChange={(e) => handleSort(e.target.value)}
              className="border p-2 rounded"
            >
              <option value="">Sort By</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((p) => (
                <div
                  key={p.id}
                  className="bg-white border rounded-lg shadow-sm hover:shadow-lg transition"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-56 w-full object-cover rounded-t-lg"
                  />
                  <div className="p-3">
                    <h3 className="text-sm font-semibold">{p.name}</h3>
                    <p className="text-xs text-gray-500">{p.brand}</p>
                    <p className="text-pink-600 font-bold mt-1">₹{p.price}</p>
                    <button className="mt-3 w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition">
                      Add to Bag
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No products found.</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default WomenPage;
