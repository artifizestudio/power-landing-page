import React, { useState } from "react";
import logoBlack from "../assets/logo-black.png";
import { navItems } from "../constants";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const toggleNavMenu = () => setIsNavMenuOpen((prev) => !prev);

  return (
    <div className="z-50 w-full bg-white bg-opacity-80 backdrop-blur-sm shadow-sm fixed top-0 right-0">
      {/* Dekstop Navbar */}
      <div className="max-w-screen-2xl mx-auto px-6 hidden lg:block">
        <div className="py-4 flex items-center justify-between">
          <a href="#">
            <img className="cursor-pointer" src={logoBlack} alt="logo" />
          </a>
          <ul className="flex items-center justify-center gap-8">
            {navItems.map((navItem, index) => (
              <li key={index} className="hover:text-primary">
                <a href={navItem.href}>{navItem.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="block lg:hidden">
        <div className="py-4 px-4 flex items-center justify-between">
          <a href="#">
            <img src={logoBlack} alt="logo" />
          </a>
          {isNavMenuOpen ? (
            <HiX onClick={toggleNavMenu} className="text-2xl cursor-pointer" />
          ) : (
            <HiOutlineMenu
              onClick={toggleNavMenu}
              className="text-2xl cursor-pointer"
            />
          )}
          <div
            className={`fixed top-0 right-0 w-screen h-screen bg-white transition-transform ease-in-out 
            ${isNavMenuOpen ? "translate-x-0" : "translate-x-full"}`}
            style={{ zIndex: -10 }}
          >
            <ul className="h-full flex flex-col justify-center items-center gap-8">
              {navItems.map((navItem, index) => (
                <li
                  onClick={toggleNavMenu}
                  className="hover:text-primary"
                  key={index}
                >
                  <a href={navItem.href}>{navItem.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
