import img1 from "../../assets/NileCruise.jpg";
import img2 from "../../assets/WhiteDesert.jpg";
import img3 from "../../assets/Snorkeling.jpg";
import img4 from "../../assets/SafariSiwa.jpg";
import img5 from "../../assets/AbuSimbel.jpg";
import img6 from "../../assets/MuseumTour.jpg";

const AdminTrips = () => {
  const trips = [
    {
      id: 1,
      name: "Nile Cruise Luxor to Aswan",
      description: "A 5-day luxury cruise along the Nile River.",
      location: "Luxor to Aswan",
      rate: 4.9,
      imageList: [img1, img2],
      guests: 50,
      duration: "5 days",
    },
    {
      id: 2,
      name: "Desert Safari Siwa Oasis",
      description: "Explore the beauty of Siwa with a thrilling safari.",
      location: "Siwa Oasis",
      rate: 4.7,
      imageList: [img3, img4],
      guests: 20,
      duration: "3 days",
    },
    {
      id: 3,
      name: "Alexandria City Tour",
      description: "A day tour covering Alexandria's historical sites.",
      location: "Alexandria",
      rate: 4.5,
      imageList: [img5, img6],
      guests: 30,
      duration: "1 day",
    },
  ];

  return (
    <div className="mt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white py-11 px-4 md:px-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Manage Trips
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-white border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              {[
                "ID",
                "Name",
                "Description",
                "Rate",
                "Image List",
                "Guests",
                "Duration",
              ].map((title) => (
                <th
                  key={title}
                  className="p-3 text-center text-sm md:text-base whitespace-nowrap"
                >
                  {title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {trips.map((trip) => (
              <tr
                key={trip.id}
                className="border-t border-gray-200 hover:bg-green-50 transition"
              >
                <td className="p-3 text-center text-sm md:text-base">
                  {trip.id}
                </td>
                <td className="p-3 text-center font-semibold text-sm md:text-base">
                  {trip.name}
                </td>
                <td className="p-3 max-w-xs text-center text-sm md:text-base whitespace-normal break-words">
                  {trip.description}
                </td>
                <td className="p-3 text-center text-sm md:text-base">
                  {trip.rate}
                </td>
                <td className="p-3 flex flex-wrap justify-center gap-3">
                  {trip.imageList.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Image ${index + 1}`}
                      className="max-w-[80px] max-h-[80px] object-cover rounded"
                    />
                  ))}
                </td>
                <td className="p-3 text-center text-sm md:text-base">
                  {trip.guests}
                </td>
                <td className="p-3 text-center text-sm md:text-base">
                  {trip.duration}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTrips;
