import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomeHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [current, setCurrent] = useState(0);

  // Hero background slides
  const slides = [
    "/uploads/home/hero.jpeg",
    "/uploads/gallery/img1.jpg",
    "/uploads/gallery/img2.jpg",
  ];

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Auto-slide every 6s
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <section className="relative overflow-hidden mx-3 md:mx-6 mt-2 rounded-4xl">
        <div className="relative min-h-[90vh]">
          {/* Background Carousel Section */}
          <div
            className={`absolute inset-0 transition-transform duration-1000 ease-out ${
              isVisible ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <div className="relative inset-0 min-h-[90vh] overflow-hidden">
              {slides.map((src, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === current ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url(${src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    minHeight: "90vh",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="absolute inset-0 flex items-center justify-center px-6 md:px-12">
            <div className="max-w-6xl w-full">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left Side - Text Content */}
                <div
                  className={`text-white transition-all duration-1000 ease-out delay-300 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-20 opacity-0"
                  }`}
                >
                  <div className="text-xl inline-block rounded-full">
                    Train - Deal - Succeed
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                    <span className="text-primary">Become a Professional </span>
                    Casino Dealer.
                  </h1>

                  <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-lg">
                    Nepal's #1 Casino Dealer Training Center since 2014 – Get
                    job-ready in weeks with expert training and industry
                    connections.
                  </p>
                </div>

                {/* Right Side - CTA Button */}
                <div
                  className={`flex justify-center md:justify-end transition-all duration-1000 ease-out delay-500 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-20 opacity-0"
                  }`}
                >
                  <Link to="/contact">
                    <button className="group relative bg-primary py-6 px-8 text-xl font-bold text-white rounded-2xl shadow-2xl  hover:scale-105 hover:shadow-3xl">
                      <span className="relative z-10">Start Training Now</span>
                      <div className="absolute inset-0 bg-white opacity-20 rounded-2xl transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  current === index ? "bg-primary scale-125" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
