import React from "react";
import heroImages from "../assets/hero-images.png";
import { HiMiniPlay } from "react-icons/hi2";
import { showAlert } from "./UseSweetAlert";

const HeroSection = () => {
  return (
    <section>
      <div className="max-w-screen-2xl mx-auto py-24 px-4 lg:px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8">
          <div className="flex flex-col items-start justify-between gap-8">
            <h1 className="text-4xl lg:text-7xl font-bold lg:leading-normal">
              We Design Impactful Digital{" "}
              <span className="text-primary">Products</span>
            </h1>
            <div className="lg:w-8/12">
              <p className="text-md text-text tracking wide">
                Help find solutions with intitutive and in accordance with
                client business goals. We provide a high-quality services.
              </p>
            </div>
            <div className="flex items-center justify-center gap-8">
              <button
                onClick={showAlert}
                className="text-xs lg:text-lg py-4 px-4 lg:px-8 bg-primary text-white rounded-md hover:bg-opacity-90 hover:shadow-lg"
              >
                Contact Us
              </button>
              <div
                onClick={showAlert}
                className="flex items-center gap-2 cursor-pointer"
              >
                <HiMiniPlay className="text-5xl p-4 bg-gray-200 rounded-full text-primary" />
                <a className="text-text text-xs lg:text-md" href="#">
                  Watch our <br />
                  introduction video
                </a>
              </div>
            </div>
          </div>
          <img className="w-full h-auto" src={heroImages} alt="hero-images" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
