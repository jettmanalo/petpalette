import React from "react";

const Features = () => {
  const features = [
    {
      title: "Classic Oil Portraits",
      description:
        "Traditional, hand-painted oil techniques on canvas for a timeless, museum-quality heirloom of your pet.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="2"
            ry="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="7"
            y="7"
            width="10"
            height="10"
            rx="1"
            ry="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Digital Art Styles",
      description:
        "Vibrant pop-art or clean vector styles. Perfect for modern homes, social media avatars, and custom merchandise.",
      // Icon: Digital/Tablet vibe
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
          />
        </svg>
      ),
    },
    {
      title: "Expert Artist Review",
      description:
        "Every portrait undergoes a meticulous quality check to ensure we've captured your pet's true spirit and details.",
      // Icon: Quality/Check vibe
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-24">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Artistic <span className="text-pink-500">Excellence</span>
          </h2>
          <p className="text-base text-gray-500 mt-4 max-w-2xl mx-auto">
            Everything we do is designed to celebrate the bond between you and
            your pet through professional custom artwork.
          </p>
        </div>

        {/* Features Grid */}
        <div className="flex flex-wrap items-center justify-center gap-10 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="max-w-80 group p-8 rounded-2xl border border-gray-100 hover:border-pink-200 hover:bg-pink-50/30 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-pink-100 text-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
