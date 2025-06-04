import img1 from "../../assets/LuxuryHotel1.jpg";
import img2 from "../../assets/LuxuryHotel2.jpg";
import img3 from "../../assets/FourSeasons1.jpg";
import img4 from "../../assets/FourSeasons2.jpg";

const AdminHotels = () => {
  const hotels = [
    {
      id: 1,
      name: "Steigenberger Nile Palace",
      description: "Luxury hotel with Nile view in Luxor.",
      location: "Luxor",
      rate: 4.5,
      imageList: [img1, img2],
      guests: 2,
      rooms: 50,
    },
    {
      id: 2,
      name: "Four Seasons Alexandria",
      description: "5-star resort by the sea.",
      location: "Alexandria",
      rate: 4.8,
      imageList: [img3, img4],
      guests: 4,
      rooms: 100,
    },
  ];

  return (
    <div className=" min-h-screen bg-gradient-to-br from-gray-100 to-white py-32 px-4 md:px-16 animate-fade-in">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
        Manage Hotels
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-[900px] w-full bg-white border border-gray-300 rounded-lg shadow-lg">
          <thead className="bg-gray-200 text-gray-700 text-sm sm:text-base">
            <tr>
              <th className="p-2 sm:p-3 text-center w-12">ID</th>
              <th className="p-2 sm:p-3 text-center w-40">Name</th>
              <th className="p-2 sm:p-3 text-center w-64">Description</th>
              <th className="p-2 sm:p-3 text-center w-32">Location</th>
              <th className="p-2 sm:p-3 text-center w-20">Rate</th>
              <th className="p-2 sm:p-3 text-center w-64">Images</th>
              <th className="p-2 sm:p-3 text-center w-20">Guests</th>
              <th className="p-2 sm:p-3 text-center w-20">Rooms</th>
            </tr>
          </thead>
          <tbody>
            {hotels.map((hotel) => (
              <tr
                key={hotel.id}
                className="text-center border-t border-gray-200 hover:bg-blue-50 transition duration-300 text-sm sm:text-base"
              >
                <td className="p-2 sm:p-3 text-gray-600">{hotel.id}</td>
                <td className="p-2 sm:p-3 font-semibold text-gray-800">
                  {hotel.name}
                </td>
                <td className="p-2 sm:p-3 text-gray-600">
                  {hotel.description}
                </td>
                <td className="p-2 sm:p-3 text-gray-700">{hotel.location}</td>
                <td className="p-2 sm:p-3 text-yellow-600 font-semibold">
                  {hotel.rate}⭐
                </td>
                <td className="p-2 sm:p-3">
                  <div className="flex gap-2 justify-center flex-wrap">
                    {hotel.imageList?.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Hotel ${index + 1}`}
                        className="w-24 h-16 object-cover rounded-md shadow-sm hover:scale-105 transition duration-300"
                      />
                    ))}
                  </div>
                </td>
                <td className="p-2 sm:p-3 text-gray-700">{hotel.guests}</td>
                <td className="p-2 sm:p-3 text-gray-700">{hotel.rooms}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminHotels;
