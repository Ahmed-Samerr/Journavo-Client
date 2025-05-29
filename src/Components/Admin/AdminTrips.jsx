const AdminTrips = () => {
  const trips = [
    {
      id: 1,
      name: "Nile Cruise Luxor to Aswan",
      description: "A 5-day luxury cruise along the Nile River.",
      location: "Luxor to Aswan",
      rate: 4.9,
      imageList: ["/images/nilecruise1.jpg", "/images/nilecruise2.jpg"],
      guests: 50,
      duration: "5 days",
    },
    {
      id: 2,
      name: "Desert Safari Siwa Oasis",
      description: "Explore the beauty of Siwa with a thrilling safari.",
      location: "Siwa Oasis",
      rate: 4.7,
      imageList: ["/images/siwa1.jpg", "/images/siwa2.jpg"],
      guests: 20,
      duration: "3 days",
    },
    {
      id: 3,
      name: "Alexandria City Tour",
      description: "A day tour covering Alexandria's historical sites.",
      location: "Alexandria",
      rate: 4.5,
      imageList: ["/images/alexandria1.jpg", "/images/alexandria2.jpg"],
      guests: 30,
      duration: "1 day",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-white py-12 px-4 md:px-16">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-10">
        Manage Trips
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-green-100 text-green-800">
            <tr>
              <th className="p-4 ">ID</th>
              <th className="p-4">Name</th>
              <th className="p-4 ">Description</th>
              <th className="p-4 ">Rate</th>
              <th className="p-4 ">Image List</th>
              <th className="p-4 ">Guests</th>
              <th className="p-4 ">Duration</th>
            </tr>
          </thead>
          <tbody>
            {trips.map((trip) => (
              <tr key={trip.id} className="border-t border-gray-200 hover:bg-green-50">
                <td className="p-4">{trip.id}</td>
                <td className="p-4 font-semibold">{trip.name}</td>
                <td className="p-4">{trip.description}</td>
                <td className="p-4">{trip.rate}</td>
                <td className="p-4 flex gap-2">
                  {trip.imageList.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Image ${index + 1}`}
                      className="w-12 h-12 object-cover rounded"
                    />
                  ))}
                </td>
                <td className="p-4">{trip.guests}</td>
                <td className="p-4">{trip.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTrips;
