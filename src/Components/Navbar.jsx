import React from "react";
import Logo from "../images/storefont.png";
import { CiUser } from "react-icons/ci";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold flex">
            <img src={Logo} className="pr-4" alt="" />
            <a href="#">NFT MarketPlace</a>
          </div>

          <div className="hidden md:flex space-x-4 gap-5">
            <li href="#" className="text-white list-none mt-2">
              Marketplace
            </li>
            <li href="#" className="text-white list-none mt-2">
              Rankings
            </li>
            <li href="#" className="text-white list-none mt-2">
              Connect a wallet
            </li>
            <button className="text-white list-none bg-[#A259FF] p-2 px-5 flex gap-2 rounded-lg">
              <CiUser className="mt-1" />
              Sign Up
            </button>
          </div>

          <div className="md:hidden">
            <button
              id="mobile-menu-button"
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div id="mobile-menu" className="md:hidden bg-gray-800 p-4 hidden">
        <a href="#" className="block text-white mb-2">
          Home
        </a>
        <a href="#" className="block text-white mb-2">
          About
        </a>
        <a href="#" className="block text-white mb-2">
          Services
        </a>
        <a href="#" className="block text-white mb-2">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
