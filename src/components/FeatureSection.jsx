import React from "react";
import { products } from "../constants";
import { showAlert } from "./UseSweetAlert";

const FeatureSection = () => {
  return (
    <section id="Services">
      <div className="max-w-screen-2xl px-4 lg:px-6 py-24 mx-auto">
        <div className="flex flex-col items-start justify-center gap-4">
          <h1 className="text-2xl font-bold">
            We Create World Class Digital Products
          </h1>
          <p className="text-text">
            By information about design the world to the best instructors, heatc
            helping By information
          </p>
          <div className="my-8 grid lg:grid-cols-2 gap-8">
            <div className="flex flex-col items-start justify-center gap-2">
              <img
                className="w-full mb-4"
                src={products[0].image}
                alt={products[0].title}
              />
              <p className="text-xs text-text">
                App Design - {products[0].date}
              </p>
              <h1
                onClick={showAlert}
                className="text-lg font-bold hover:text-primary cursor-pointer"
              >
                {products[0].title}
              </h1>
              <p className="text-xs text-text">{products[0].description}</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {products.map(
                (product, index) =>
                  index > 0 && (
                    <div
                      key={index}
                      className="mt-8 flex flex-col items-start justify-center gap-2"
                    >
                      <img
                        className="w-full mb-4"
                        src={product.image}
                        alt={product.title}
                      />
                      <p className="text-xs text-text">
                        App Design - {product.date}
                      </p>
                      <h1
                        onClick={showAlert}
                        className="text-lg font-bold hover:text-primary cursor-pointer"
                      >
                        {product.title}
                      </h1>
                      <p className="text-xs text-text">{product.description}</p>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
