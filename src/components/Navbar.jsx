import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Gallery", href: "#gallery" },
    { name: "About", href: "#about" },
    { name: "Pricing", href: "#pricing" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-6 w-full relative z-50">
      {/* Logo */}
      <a href="#" className="flex items-center gap-2">
        <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-xl">P</span>
        </div>
        <span className="text-gray-900 font-bold text-xl tracking-tight">
          PetPalette
        </span>
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-0 text-gray-600 text-sm font-medium">
        {navLinks.map((link) => (
          <a
            key={link.name}
            className="hover:text-pink-500 transition-colors"
            href={link.href}
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Auth Buttons */}
      <div className="hidden md:flex space-x-4">
        <a
          className="text-pink-500 bg-pink-50 px-5 py-2 rounded-full text-sm font-medium hover:bg-pink-100 transition"
          href="#"
        >
          Login
        </a>
        <a
          className="bg-pink-500 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-pink-600 transition"
          href="#"
        >
          Order Now
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden text-gray-600"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            d="M4 6h16M4 12h16M4 18h16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-60 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-12">
            <span className="font-bold text-pink-500 text-xl">PetPalette</span>
            <button onClick={() => setIsOpen(false)} className="text-gray-600">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col gap-8 text-center text-lg font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                onClick={() => setIsOpen(false)}
                className="text-gray-900 hover:text-pink-500"
                href={link.href}
              >
                {link.name}
              </a>
            ))}
            <hr className="border-gray-100" />
            <a
              className="bg-pink-500 text-white px-5 py-3 rounded-full text-center"
              href="#"
            >
              Order Now
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
