import React from "react";

const Pricing = () => {
  const plans = [
    {
      id: "digital",
      name: "Digital Portrait",
      price: "$49",
      unit: "per pet",
      description:
        "A high-resolution digital painting perfect for social media and DIY printing.",
      features: [
        "High-Res PNG & JPG files",
        "2 Style Revisions",
        "Digital Delivery (3 Days)",
        "Social Media License",
        "Custom Background Color",
      ],
    },
    {
      id: "oil-canvas",
      name: "Classic Canvas",
      price: "$129",
      unit: '12" x 12"',
      description:
        "Our most popular choice. Hand-painted oil style printed on premium gallery canvas.",
      features: [
        "Physical Canvas Print",
        "Traditional Oil Texture",
        "Free Tracked Shipping",
        "Unlimited Fur Revisions",
        "Ready to Hang",
      ],
    },
    {
      id: "royal",
      name: "Royal Suite",
      price: "$199",
      unit: "Large Format",
      description:
        "The ultimate tribute. A large-scale masterpiece featuring custom costumes and framing.",
      features: [
        '20" x 24" Premium Canvas',
        "Custom Regal Costumes",
        "Handcrafted Wood Frame",
        "Priority Artist Support",
        "Digital Copy Included",
      ],
    },
  ];

  const handlePurchase = (planId) => {
    console.log(`Purchasing plan: ${planId}`);
  };

  return (
    <section id="pricing" className="bg-pink-500 py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Transparent <span className="text-pink-100">Pricing</span>
          </h2>
          <p className="text-pink-100 mt-4 max-w-xl mx-auto">
            Choose the perfect medium to celebrate your pet. No hidden fees—just
            pure art.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="p-8 bg-white rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300 flex flex-col"
            >
              <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
              <div className="my-4">
                <span className="text-4xl font-black text-gray-900">
                  {plan.price}
                </span>
                <span className="text-gray-500 text-sm font-medium">
                  {" "}
                  / {plan.unit}
                </span>
              </div>

              <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                {plan.description}
              </p>

              <ul className="space-y-4 mb-10 grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className="h-5 w-5 text-pink-500 mr-3 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handlePurchase(plan.id)}
                className={`w-full py-4 px-6 rounded-2xl font-bold text-sm transition-all active:scale-95 ${
                  plan.id === "oil-canvas"
                    ? "bg-pink-500 text-white hover:bg-pink-600 shadow-lg shadow-pink-200"
                    : "bg-pink-50 text-pink-500 hover:bg-pink-100"
                }`}
              >
                {plan.id === "oil-canvas" ? "Order Most Popular" : "Order Now"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
