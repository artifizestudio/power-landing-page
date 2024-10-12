import React from "react";
import { clients } from "../constants";

const ClientSection = () => {
  return (
    <section id="About Us" className="bg-accent py-16 lg:py-24">
      <div className="max-w screen-2xl mx-auto px-8">
        <div className="flex flex-col items-center justify-center gap-10">
          <h1 className="text-lg lg:text-2xl font-semibold">
            Trusted By Greatest Companies
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {clients.map((client, index) => (
              <img
                className="h-6 lg:h-10"
                key={index}
                src={client.image}
                alt={client.name}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
