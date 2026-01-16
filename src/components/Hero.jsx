import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-gradient-to-b from-[#FFF5F7] via-white to-[#FDF2F8] min-h-screen"
    >
      <Navbar />

      <main className="flex flex-col md:flex-row items-center max-md:text-center justify-between mt-12 lg:mt-20 pb-16 px-6 sm:px-10 md:px-24 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center md:items-start">
          <button
            className="mb-6 flex items-center space-x-2 border border-pink-500 text-pink-500 text-xs rounded-full px-4 pr-1.5 py-1.5 hover:bg-pink-50 transition"
            type="button"
          >
            <span>Hand-painted with love from your photos</span>
            <span className="flex items-center justify-center size-6 p-1 rounded-full bg-pink-500">
              <svg
                width="14"
                height="11"
                viewBox="0 0 16 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 6.5h14M9.5 1 15 6.5 9.5 12"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>

          <h1 className="text-gray-900 font-bold text-4xl sm:text-5xl md:text-6xl max-w-xl leading-tight">
            Turn your pet's photo into a
            <span className="text-pink-500 block">Work of Art.</span>
          </h1>

          <p className="mt-6 text-gray-600 max-w-md text-base sm:text-lg leading-relaxed">
            From classic oil paintings to vibrant digital illustrations, we
            capture the unique personality of your furry best friend.
          </p>

          <div className="flex flex-col md:flex-row items-center mt-10 gap-4">
            <button
              className="bg-pink-500 text-white px-8 py-3.5 rounded-full text-sm font-semibold flex items-center space-x-2 hover:bg-pink-600 transition shadow-lg shadow-pink-200"
              type="button"
            >
              <span>Browse Styles</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.821 11.999h13.43m0 0-6.714-6.715m6.715 6.715-6.715 6.715"
                  stroke="#fff"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <a
              className="text-pink-600 bg-pink-100 px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-pink-200 transition"
              href="#gallery"
            >
              View Gallery
            </a>
          </div>
        </div>

        {/* Pet Image Grid */}
        <div
          aria-label="Portraits of pets"
          className="mt-16 md:mt-0 grid grid-cols-2 gap-4 pb-6"
        >
          <img
            alt="Oil painting of a Golden Retriever"
            className="w-36 h-48 md:w-44 md:h-56 rounded-2xl hover:scale-105 transition duration-500 object-cover shadow-xl border-4 border-white"
            src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=800&auto=format&fit=crop"
          />
          <img
            alt="Digital art of a cat"
            className="w-36 h-48 md:w-44 md:h-56 rounded-2xl hover:scale-105 transition duration-500 object-cover shadow-xl border-4 border-white translate-y-8"
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800&auto=format&fit=crop"
          />
          <img
            alt="Portrait of a Frenchie"
            className="w-36 h-48 md:w-44 md:h-56 rounded-2xl hover:scale-105 transition duration-500 object-cover shadow-xl border-4 border-white"
            src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop"
          />
          <img
            alt="Regal dog portrait"
            className="w-36 h-48 md:w-44 md:h-56 rounded-2xl hover:scale-105 transition duration-500 object-cover shadow-xl border-4 border-white translate-y-8"
            src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=800&auto=format&fit=crop"
          />
        </div>
      </main>
    </section>
  );
};

export default Hero;
