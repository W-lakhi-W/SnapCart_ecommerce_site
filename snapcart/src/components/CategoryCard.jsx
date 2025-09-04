import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <Link to={category.link}>
      <div className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h3 className="text-white text-xl font-bold">{category.name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
