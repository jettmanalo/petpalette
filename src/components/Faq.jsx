import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqsData = [
    {
      question: "What kind of photos do I need to provide?",
      answer:
        "A clear, well-lit photo taken at your pet’s eye level works best. Don’t worry if the background is messy—our artists focus solely on your pet!",
    },
    {
      question: "Do you paint animals other than dogs and cats?",
      answer:
        "Absolutely! We have painted everything from horses and birds to bearded dragons and hamsters. If it’s a pet, we can paint it.",
    },
    {
      question: "How long does the process take?",
      answer:
        "Digital portraits are delivered within 3-5 business days. For physical oil-style canvases, please allow 2 weeks for painting and shipping.",
    },
    {
      question: "Can I see a preview before it’s shipped?",
      answer:
        "Yes! We send a digital proof for every order. You can request revisions to ensure we’ve captured your pet’s likeness perfectly.",
    },
    {
      question: "Do you offer multi-pet portraits?",
      answer:
        'We do! You can select the "Multi-Pet" option on our pricing page. You can even send separate photos, and our artists will combine them into one masterpiece.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
                #faq * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>

      <div className="flex flex-col items-center text-center text-slate-800 px-6">
        <p className="text-base font-medium text-pink-500 uppercase tracking-wide">
          Common Questions
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
          Frequently Asked Questions
        </h1>
        <p className="text-sm text-slate-500 mt-4 max-w-sm leading-relaxed">
          Everything you need to know about getting your custom PetPalette
          masterpiece.
        </p>

        <div className="max-w-2xl w-full mt-10 flex flex-col gap-4 items-start text-left">
          {faqsData.map((faq, index) => (
            <div key={index} className="flex flex-col items-start w-full">
              <div
                className={`flex items-center justify-between w-full cursor-pointer p-5 rounded-xl border transition-all duration-300 ${
                  openIndex === index
                    ? "bg-pink-50 border-pink-200"
                    : "bg-gray-50 border-gray-100 hover:border-pink-200"
                }`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h2
                  className={`text-base font-semibold ${
                    openIndex === index ? "text-pink-600" : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </h2>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  className={`transition-all duration-500 ease-in-out ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                    stroke={openIndex === index ? "#db2777" : "#1D293D"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-75 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm text-slate-600 p-5 pt-2 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
