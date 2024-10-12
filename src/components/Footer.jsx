import React from "react";
import logoWhite from "../assets/logo-white.png";
import { socialMediaLogos, navItems } from "../constants";
import { showAlert } from "./UseSweetAlert";

const Footer = () => {
  return (
    <footer className="bg-blue-950 py-8">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="py-8 border-b border-gray-700 flex flex-col lg:flex-row items-start justify-between gap-10">
          <img className="h-12 cursor-pointer" src={logoWhite} alt="logo" />
          <div className="flex items-center justify-center gap-4 lg:gap-8">
            {socialMediaLogos.map((socialMediaLogo, index) => (
              <a
                onClick={showAlert}
                className="p-2 rounded-full bg-primary hover:bg-opacity-80 cursor-pointer"
                key={index}
              >
                <img
                  className="w-4"
                  src={socialMediaLogo.image}
                  alt={socialMediaLogo.title}
                />
              </a>
            ))}
          </div>
        </div>
        <div className="py-8">
          <h1 className="text-xl font-bold text-white mb-4">Company</h1>
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
            <nav className="flex flex-col lg:flex-row gap-4 lg:gap-8">
              {navItems.map((navItem, index) => (
                <a
                  className="text-white hover:underline"
                  key={index}
                  href={navItem.href}
                >
                  {navItem.label}
                </a>
              ))}
            </nav>
            <button
              onClick={showAlert}
              className="py-2 px-4 rounded-md bg-primary text-white hover:bg-opacity-80 hover:shadow-md"
            >
              Contact Us
            </button>
          </div>
        </div>
        <p className="text-xs text-white text-center mt-16">
          © power 2021 - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
