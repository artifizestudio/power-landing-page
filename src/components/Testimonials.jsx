import React from "react";
import testimonialsBackground from "../assets/testimonials-background.png";
import quoteLeft from "../assets/quote-left.png";
import quoteRight from "../assets/quote-right.png";
import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <section
      className="py-16 lg:py-48 bg-cover bg-center"
      style={{ backgroundImage: `url(${testimonialsBackground})` }}
    >
      <div className="max-w-screen-2xl mx-auto px-6 flex flex-col items-center justify-center gap-8">
        <h1 className="text-4xl lg:text-6xl font-bold text-center lg:leading-relaxed">
          Let's Hear <br /> What They Says
        </h1>
        <div className="flex items-start justify-center gap-2 lg:gap-4">
          <img className="w-4 lg:w-16" src={quoteLeft} alt="quote" />
          <p className="text-xs lg:text-lg text-center leading-6 lg:leading-10 lg:tracking-wider text-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
            eligendi, pariatur eveniet impedit illum vitae necessitatibus ullam,
            corrupti enim deleniti doloremque earum? Ipsam culpa odit a
            repudiandae rerum quo, accusamus minus quaerat omnis enim, eligendi
            impedit dolorem quae consectetur dolor harum obcaecati. Tempora,
            nisi quo?
          </p>
          <img className="w-4 lg:w-16" src={quoteRight} alt="quote" />
        </div>
        <div className="overflow-x-hidden flex items-center justify-center gap-2 lg:gap-16">
          {testimonials.map((testimonial, index) => (
            <img
              className={`
                  ${
                    index == 2 &&
                    "p-1 rounded-full bg-white border-4 border-primary "
                  }
                  cursor-pointer
                  `}
              key={index}
              src={testimonial.image}
              alt={testimonial.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
