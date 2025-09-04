// import React from "react";

// import Hero from "../components/Hero";
// import ProductCard from "../components/ProductCard";
// import products from "../data/product.js";
// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <>
//       <div>
//         <Hero />
//       </div>
//       <h2 className="text-4xl flex justify-center py-5">Featured Products</h2>
//       <div className="grid grid-cols-5 gap-4 p-4">
//         {products.map((product) => (
//           <Link
//             to={`/product/${product.id}`}
//             key={product.id}
//             state={{ product }}
//           >
//             <ProductCard product={product} />
//           </Link>
//         ))}
//       </div>
//       <h2 className="text-4xl flex justify-center py-5">Top Picks</h2>
//       <div className="flex gap-4 justify-around my-10"></div>
//       <h2 className="text-4xl flex justify-center py-5">Bestseller</h2>
//       <div className="flex gap-4 justify-around my-10"></div>
//     </>
//   );
// };

// export default Home;

import React from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import products from "../data/product.js";
import { Link } from "react-router-dom";
import CategoryCard from "../components/CategoryCard.jsx";
// {mockdata of category}
import categories from "../data/categories.js";
import FeaturedProducts from "../components/FeaturedProducts.jsx";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section>
        <Hero />
      </section>

      {/* Category Section */}
      <section className="my-12 px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      <FeaturedProducts products={products} title="New Arrivals" />

      {/* Featured Products */}
      <section className="my-12 px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              state={{ product }}
            >
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </section>

      {/* Optional: Top Picks */}
      {/* Uncomment and populate when you have data */}
      {/*
      <section className="my-12 px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
          Top Picks
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          // map top picks here
        </div>
      </section>
      */}

      {/* Optional: Bestseller */}
      {/*
      <section className="my-12 px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
          Bestseller
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          // map bestseller here
        </div>
      </section>
      */}
    </div>
  );
};

export default Home;
