import React from "react";

const AdminHotels = () => {
  // بيانات تجريبية للفنادق
  const hotels = [
    {
      id: 1,
      name: "Steigenberger Nile Palace",
      description: "Luxury hotel with Nile view in Luxor.",
      location: "Luxor",
      rate: 4.5,
      imageList: ["/images/nile.jpg", "/images/luxor.jpg"],
      guests: 2,
      rooms: 50,
    },
    {
      id: 2,
      name: "Four Seasons Alexandria",
      description: "5-star resort by the sea.",
      location: "Alexandria",
      rate: 4.8,
      imageList: ["/images/alex1.jpg", "/images/alex2.jpg"],
      guests: 4,
      rooms: 100,
    },
    {
      id: 3,
      name: "Savoy Sharm El Sheikh",
      description: "Luxury beachfront hotel in Sharm El Sheikh.",
      location: "Sharm El Sheikh",
      rate: 4.7,
      imageList: ["/images/sharm1.jpg", "/images/sharm2.jpg"],
      guests: 3,
      rooms: 70,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white py-12 px-4 md:px-16 animate-fade-in">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Manage Hotels
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Description</th>
              <th className="p-4 text-left">Location</th>
              <th className="p-4 text-left">Rate</th>
              <th className="p-4 text-left">Image List</th>
              <th className="p-4 text-left">Guests</th>
              <th className="p-4 text-left">Rooms</th>
            </tr>
          </thead>
          <tbody>
            {hotels.map((hotel) => (
              <tr key={hotel.id} className="border-t border-gray-200 hover:bg-blue-50 transition duration-300">
                <td className="p-4">{hotel.id}</td>
                <td className="p-4 font-semibold text-gray-800">{hotel.name}</td>
                <td className="p-4 text-gray-600">{hotel.description}</td>
                <td className="p-4 text-gray-700">{hotel.location}</td>
                <td className="p-4 text-yellow-600 font-semibold">{hotel.rate}⭐</td>
                <td className="p-4">
                  <div className="flex gap-2 overflow-x-auto">
                    {hotel.imageList.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Hotel ${index + 1}`}
                        className="w-16 h-16 object-cover rounded-lg shadow-md hover:scale-105 transition duration-300"
                      />
                    ))}
                  </div>
                </td>
                <td className="p-4 text-gray-700">{hotel.guests}</td>
                <td className="p-4 text-gray-700">{hotel.rooms}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminHotels;
