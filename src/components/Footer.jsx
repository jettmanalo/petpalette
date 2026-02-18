import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        id="footer-section"
        className="flex flex-col items-center justify-center w-full py-20 bg-gradient-to-b from-pink-500 to-pink-700 text-white/90"
      >
        {/* Matched Logo from Navbar */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-pink-600 font-bold text-2xl">P</span>
          </div>
          <span className="text-white font-bold text-2xl tracking-tight">
            PetPalette
          </span>
        </div>

        <p className="text-center px-6 max-w-md text-pink-100">
          Capturing the unique spirit of your pets through custom digital and
          oil masterpieces.
        </p>

        <p className="mt-8 text-center text-sm text-pink-200">
          Copyright © 2026{" "}
          <a
            href="#"
            className="font-semibold hover:text-white transition-colors"
          >
            PetPalette
          </a>
          . All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-6 mt-8">
          <a
            href="#"
            className="hover:-translate-y-1 transition-all duration-300"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#"
            className="hover:-translate-y-1 transition-all duration-300"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 11.37a4 4 0 1 1-7.914 1.173A4 4 0 0 1 16 11.37m1.5-4.87h.01"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#"
            className="hover:-translate-y-1 transition-all duration-300"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6M6 9H2v12h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className="mt-12 text-[10px] uppercase tracking-[0.2em] text-pink-300 font-medium">
          Hand-crafted with love for every fur-baby
        </div>
      </footer>
    </>
  );
};

export default Footer;
