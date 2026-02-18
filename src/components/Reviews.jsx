import React from "react";

export default function Reviews() {
  const reviews = [
    {
      name: "Donald Jackman",
      role: "Dog Owner",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100",
      text: "I ordered an oil portrait of my Golden Retriever, and the detail is breathtaking. PetPalette captured his eyes perfectly. It's now the centerpiece of our living room!",
    },
    {
      name: "Richard Nelson",
      role: "Cat Lover",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100",
      text: "The digital illustration of my tabby is vibrant and fun. I love how they captured her sassy personality! The turnaround time was much faster than I expected.",
    },
    {
      name: "James Washington",
      role: "Bird Enthusiast",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
      text: "I was worried about getting a portrait of my Macaw, but PetPalette did an amazing job with the feathers. The colors are spot on. Highly recommend for any pet parent!",
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        What Our <span className="text-pink-500">Pet Parents</span> Say
      </h2>

      <div className="flex flex-nowrap items-center justify-center gap-6 px-4">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="text-sm w-80 border border-gray-200 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden transition-transform hover:-translate-y-1"
          >
            {/* Header with Pink Branding */}
            <div className="flex items-center gap-4 px-5 py-4 bg-pink-50">
              <img
                className="h-12 w-12 rounded-full border-2 border-white object-cover"
                src={review.image}
                alt={review.name}
              />
              <div>
                <h1 className="text-lg font-medum text-gray-800">
                  {review.name}
                </h1>
                <p className="text-gray-800/80">{review.role}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 pb-7">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z"
                      fill="#EC4899"
                    />
                  </svg>
                ))}
              </div>
              <p className="text-gray-500 mt-5 leading-relaxed">
                "{review.text}"
              </p>
            </div>

            <a
              href="#"
              className="text-pink-500 font-semibold underline px-5 hover:text-pink-600 transition-colors"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
