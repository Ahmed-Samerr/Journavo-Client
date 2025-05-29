import React from "react";

const Trips = () => {
  const trips = [
    {
      id: 1,
      name: "Luxor & Aswan Nile Cruise",
      location: "From Luxor to Aswan",
      image: "/images/nile-cruise.jpg",
      price: "4,200 EGP / person",
    },
    {
      id: 2,
      name: "White Desert Camping",
      location: "Farafra Oasis",
      image: "/images/white-desert.jpg",
      price: "2,800 EGP / person",
    },
    {
      id: 3,
      name: "Snorkeling in Giftun Island",
      location: "Hurghada",
      image: "/images/giftun.jpg",
      price: "1,500 EGP / person",
    },
    {
      id: 4,
      name: "Safari in Siwa Oasis",
      location: "Siwa, Western Desert",
      image: "/images/siwa-safari.jpg",
      price: "3,000 EGP / person",
    },
    {
      id: 5,
      name: "Abu Simbel Day Trip",
      location: "Aswan to Abu Simbel",
      image: "/images/abu-simbel.jpg",
      price: "2,200 EGP / person",
    },
    {
      id: 6,
      name: "Cairo Pyramids & Museum Tour",
      location: "Giza & Downtown Cairo",
      image: "/images/pyramids.jpg",
      price: "1,300 EGP / person",
    },
    {
      id: 7,
      name: "Alexandria Historical Tour",
      location: "Alexandria",
      image: "/images/library.jpg",
      price: "1,700 EGP / person",
    },
    {
      id: 8,
      name: "Blue Hole Diving Experience",
      location: "Dahab",
      image: "/images/blue-hole.jpg",
      price: "2,500 EGP / person",
    },
    {
      id: 9,
      name: "St. Catherine Hiking & Sunrise",
      location: "South Sinai",
      image: "/images/st-catherine.jpg",
      price: "1,900 EGP / person",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-50 to-white py-12 px-4 md:px-20">
      <h1 className="text-4xl font-bold text-yellow-800 text-center mb-12 animate-fade-in">
        Explore Top Trips in Egypt
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {trips.map((trip) => (
          <div
            key={trip.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 duration-300 animate-fade-in"
          >
            <img
              src={trip.image}
              alt={trip.name}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800">{trip.name}</h2>
              <p className="text-gray-600 mt-1">{trip.location}</p>
              <p className="text-yellow-600 font-semibold mt-2">{trip.price}</p>
              <button className="mt-4 w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition-all duration-300">
                Book Trip
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trips;
