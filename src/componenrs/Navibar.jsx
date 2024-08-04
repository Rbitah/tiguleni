import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const user = false;
const userr = true;
function Navibar() {
  return (
    <nav className="flex items-center justify-between h-20 px-6 bg-white border-b border-black shadow-md">
      <div className="text-3xl font-bold text-black">Tiguleni</div>
      <div className="hidden md:flex space-x-6">
        <a href="/" className="hover:text-red-600">Home</a>
        <a href="/contact" className="hover:text-red-600">Contact</a>
        <a href="/about" className="hover:text-red-600">About</a>
        <a href="/products" className="hover:text-red-600">Products</a>
        <a href="/services" className="hover:text-red-600">Services</a>
        {!user && <a href="/login" className="hover:text-red-600">Login</a>}
      </div>
      <div className="flex space-x-4">
        <button className="hover:text-red-600">
          <FontAwesomeIcon icon={farHeart} />
        </button>
        <button className="hover:text-red-600">
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
        {userr? 
          <button className="hover:text-red-600">
            <FontAwesomeIcon icon={faCircleUser} />
          </button> : <p className="opacity-0">-----</p>}
        
      </div>
    </nav>
  );
}

export default Navibar;
