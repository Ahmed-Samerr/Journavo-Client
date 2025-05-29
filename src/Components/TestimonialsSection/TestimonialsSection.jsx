import React from 'react'

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ahmed Ali",
      text: "Amazing experience! The trip was very well organized and the team was extremely professional.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sarah Mohamed",
      text: "I really enjoyed the sea tour! Everything was perfect, I highly recommend them.",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Marwan Hassan",
      text: "The best company I've dealt with. Booking was easy and support was very fast.",
      image: "https://randomuser.me/api/portraits/men/74.jpg",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          What Our Customers Say
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="flex items-center mb-4 space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{item.name}</h4>
                  <span className="text-sm text-gray-500">Verified Customer</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                “{item.text}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


