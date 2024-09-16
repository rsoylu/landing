"use client";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="w-full h-20 bg-rose-900 sticky top-0 font-playfair uppercase z-50">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Link href="#home">
              <Logo />
            </Link>
            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="#about">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="#shopflowers">
                  <p>Shop Flowers</p>
                </Link>
              </li>
              <li>
                <Link href="#plans">
                  <p>Plans</p>
                </Link>
              </li>
              <li>
                <Link href="#reviews">
                  <p>Reviews</p>
                </Link>
              </li>
              <li>
                <Link href="#event">
                  <p>Events</p>
                </Link>
              </li>
              <li>
                <Link href="#seasonalofferings">
                  <p>Seasonal Offerings</p>
                </Link>
              </li>
            </ul>

            {/* Sign Up Button */}
            <button className="hidden md:block bg-white text-rose-900 px-4 py-2 rounded-lg">
              Sign up
            </button>

            {/* Hamburger Icon */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="flex flex-col justify-between w-6 h-6 focus:outline-none"
              >
                <span
                  className={`block w-full h-1 bg-white transition-transform duration-300 ease-in-out ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`block w-full h-1 bg-white transition-opacity duration-300 ease-in-out ${
                    isOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block w-full h-1 bg-white transition-transform duration-300 ease-in-out ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-20 left-0 w-full bg-rose-900 transition-transform duration-300 ease-in-out ${
          isOpen ? "transform translate-x-0" : "transform -translate-x-full"
        } md:hidden z-40`}
      >
        <ul className="flex flex-col gap-y-6 text-white text-center py-6">
          <li>
            <Link href="#about">
              <p onClick={toggleMenu}>Home</p>
            </Link>
          </li>
          <li>
            <Link href="#shopflowers">
              <p onClick={toggleMenu}>Shop Flowers</p>
            </Link>
          </li>
          <li>
            <Link href="#plans">
              <p onClick={toggleMenu}>Plans</p>
            </Link>
          </li>
          <li>
            <Link href="#reviews">
              <p onClick={toggleMenu}>Reviews</p>
            </Link>
          </li>
          <li>
            <Link href="#event">
              <p onClick={toggleMenu}>Events</p>
            </Link>
          </li>
          <li>
            <Link href="#seasonalofferings">
              <p onClick={toggleMenu}>Seasonal Offerings</p>
            </Link>
          </li>
          <li>
            <button className="bg-white text-rose-900 px-4 py-2 rounded-lg mx-auto">
              Sign up
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
