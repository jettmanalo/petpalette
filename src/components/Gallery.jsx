import React from "react";

const Gallery = () => {
  const petPortraits = [
    {
      name: "Golden Retriever",
      url: "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=500&auto=format&fit=crop",
    },
    {
      name: "Calico Cat",
      url: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=500&auto=format&fit=crop",
    },
    {
      name: "Holland Lop Rabbit",
      url: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?q=80&w=500&auto=format&fit=crop",
    },
    {
      name: "Curious Hedgehog",
      url: "https://images.unsplash.com/photo-1509005084666-3cbc75184cbb?q=80&w=500&auto=format&fit=crop",
    },
    {
      name: "Syrian Hamster",
      url: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?q=80&w=500&auto=format&fit=crop",
    },
    {
      name: "Arabian Horse",
      url: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=500&auto=format&fit=crop",
    },
    {
      name: "Bearded Dragon",
      url: "https://images.unsplash.com/photo-1504450874802-0ba2bcd9b5ae?q=80&w=500&auto=format&fit=crop",
    },
    {
      name: "Guinea Pig",
      url: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=500&auto=format&fit=crop",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-[#FFF5F7]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          Our Latest <span className="text-pink-500">Creations</span>
        </h2>
        <p className="text-base text-gray-500 text-center mt-4 max-w-lg mx-auto">
          A visual collection of our most recent works—each piece crafted with
          intention to capture the unique soul of every animal.
        </p>

        <div className="flex flex-wrap items-center justify-center mt-12 gap-6 max-w-6xl mx-auto">
          {petPortraits.map((pet, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-white"
            >
              <img
                src={pet.url}
                alt={pet.name}
                className="size-48 md:size-64 object-cover object-center"
              />
              {/* Note: Hover effect overlays removed per request */}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 italic">
            "We paint everything from paws to scales!"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
