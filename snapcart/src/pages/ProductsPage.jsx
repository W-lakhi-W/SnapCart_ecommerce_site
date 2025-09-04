import React, { useState } from "react";
import product from "../data/product";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

// Mock data (can replace with API later)
const mockProducts = [
  { id: 1, name: "T-Shirt", category: "Men", price: 500, type: "Clothing" },
  { id: 2, name: "Sneakers", category: "Men", price: 2500, type: "Footwear" },
  { id: 3, name: "Dress", category: "Women", price: 1500, type: "Clothing" },
  { id: 4, name: "Heels", category: "Women", price: 3000, type: "Footwear" },
  { id: 5, name: "Toy Car", category: "Kids", price: 700, type: "Toys" },
];

const ProductsPage = () => {
  const [products, setProducts] = useState(product);
  const [sortOption, setSortOption] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterType, setFilterType] = useState("All");

  // Handle Sorting
  const handleSort = (option) => {
    setSortOption(option);
    let sortedProducts = [...products];

    if (option === "price-low-high") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (option === "price-high-low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (option === "name-asc") {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    }
    setProducts(sortedProducts);
  };

  // Handle Filtering
  const filteredProducts = products.filter((p) => {
    return (
      (filterCategory === "All" || p.category === filterCategory) &&
      (filterType === "All" || p.type === filterType)
    );
  });

  return (
    <div className="flex p-6 gap-6">
      {/* Left Sidebar Filters */}
      <aside className="w-1/4 hidden md:block border-r pr-4">
        <h2 className="text-lg font-bold mb-4">Filters</h2>

        {/* Category Filter */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Category</h3>
          {["All", "Men", "Women", "Kids"].map((cat) => (
            <label key={cat} className="block text-sm mb-1 cursor-pointer">
              <input
                type="radio"
                name="category"
                value={cat}
                checked={filterCategory === cat}
                onChange={() => setFilterCategory(cat)}
                className="mr-2"
              />
              {cat}
            </label>
          ))}
        </div>

        {/* Type Filter */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Type</h3>
          {["All", "Clothing", "Footwear", "Toys"].map((type) => (
            <label key={type} className="block text-sm mb-1 cursor-pointer">
              <input
                type="radio"
                name="type"
                value={type}
                checked={filterType === type}
                onChange={() => setFilterType(type)}
                className="mr-2"
              />
              {type}
            </label>
          ))}
        </div>
      </aside>

      {/* Right Content Area */}
      <div className="flex-1">
        {/* Header Controls */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Products</h1>

          {/* Sort Dropdown */}
          <select
            value={sortOption}
            onChange={(e) => handleSort(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="">Sort By</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="name-asc">Name: A-Z</option>
          </select>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Link to={`/product/${product.id}`} state={{ product }}>
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
