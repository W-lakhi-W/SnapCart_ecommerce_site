import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setModal] = useState(false);
  const { cartItem } = useContext(CartContext);

  return (
    <nav className="flex sticky top-0 z-50 justify-between items-center px-6 md:px-12 h-[10vh] shadow-md bg-white">
      {/* Brand */}
      <Link to="/" className="text-2xl font-bold text-blue-600">
        SnapCart
      </Link>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
        <li>
          <Link to="/men" className="hover:text-blue-600 transition">
            Men
          </Link>
        </li>
        <li>
          <Link to="/women" className="hover:text-blue-600 transition">
            Women
          </Link>
        </li>
        <li>
          <Link to="/kids" className="hover:text-blue-600 transition">
            Kids
          </Link>
        </li>
        <li>
          <Link to="/products" className="hover:text-blue-600 transition">
            Products
          </Link>
        </li>
      </ul>

      {/* Right Section (Desktop) */}
      <div className="hidden md:flex items-center gap-6">
        {/* <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn> */}
        <SignedOut>
          <SignInButton>
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <Link to="/cart" className="relative">
          <ShoppingCart
            size={26}
            className="text-gray-800 hover:text-blue-600 transition"
          />
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow">
            {cartItem.length}
          </span>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-[10vh] left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden z-50">
          <Link
            to="/men"
            className="hover:text-blue-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Men
          </Link>
          <Link
            to="/women"
            className="hover:text-blue-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Women
          </Link>
          <Link
            to="/kids"
            className="hover:text-blue-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Kids
          </Link>

          <Link
            onClick={() => setIsOpen(false)}
            to="/login"
            className="px-5 py-2 border-2 border-blue-600 text-blue-600 font-medium rounded-full 
             transition-all duration-300 hover:bg-blue-600 hover:text-white"
          >
            Login / Signup
          </Link>

          <Link
            to="/cart"
            className="relative"
            onClick={() => setIsOpen(false)}
          >
            <ShoppingCart
              size={26}
              className="text-gray-800 hover:text-blue-600 transition"
            />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow">
              {cartItem.length}
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
