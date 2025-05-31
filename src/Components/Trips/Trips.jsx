import { Link } from "react-router-dom";
import img1 from "../../assets/NileCruise.jpg";
import img2 from "../../assets/WhiteDesert.jpg";
import img3 from "../../assets/Snorkeling.jpg";
import img4 from "../../assets/SafariSiwa.jpg";
import img5 from "../../assets/AbuSimbel.jpg";
import img6 from "../../assets/MuseumTour.jpg";
import img7 from "../../assets/HistoricalTour.jpg";
import img8 from "../../assets/HoleDiving.jpg";
import img9 from "../../assets/HikingSunrise.jpg";

const trips = [
  {
    id: 1,
    name: "Luxor & Aswan Nile Cruise",
    location: "From Luxor to Aswan",
    image: img1,
    price: "4,200 EGP / person",
  },
  {
    id: 2,
    name: "White Desert Camping",
    location: "Farafra Oasis",
    image: img2,
    price: "2,800 EGP / person",
  },
  {
    id: 3,
    name: "Snorkeling in Giftun Island",
    location: "Hurghada",
    image: img3,
    price: "1,500 EGP / person",
  },
  {
    id: 4,
    name: "Safari in Siwa Oasis",
    location: "Siwa, Western Desert",
    image: img4,
    price: "3,000 EGP / person",
  },
  {
    id: 5,
    name: "Abu Simbel Day Trip",
    location: "Aswan to Abu Simbel",
    image: img5,
    price: "2,200 EGP / person",
  },
  {
    id: 6,
    name: "Cairo Pyramids & Museum Tour",
    location: "Giza & Downtown Cairo",
    image: img6,
    price: "1,300 EGP / person",
  },
  {
    id: 7,
    name: "Alexandria Historical Tour",
    location: "Alexandria",
    image: img7,
    price: "1,700 EGP / person",
  },
  {
    id: 8,
    name: "Blue Hole Diving Experience",
    location: "Dahab",
    image: img8,
    price: "2,500 EGP / person",
  },
  {
    id: 9,
    name: "St. Catherine Hiking & Sunrise",
    location: "South Sinai",
    image: img9,
    price: "1,900 EGP / person",
  },
];

const Trips = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-white py-12 px-4 sm:px-8 md:px-12 lg:px-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-800 text-center mb-12 animate-fade-in">
        Explore Top Trips in Egypt
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {trips.map((trip) => (
          <div
            key={trip.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 duration-300 animate-fade-in flex flex-col"
          >
            <img
              src={trip.image}
              alt={trip.name}
              className="w-full h-48 sm:h-56 md:h-64 object-cover"
            />
            <div className="p-4 sm:p-6 flex flex-col justify-between h-48 sm:h-52">
              <div className="">
                <h2 className="text-center text-lg sm:text-xl font-bold text-gray-800">
                  {trip.name}
                </h2>
                <p className="text-gray-600 text-center mt-1 text-sm sm:text-base">
                  {trip.location}
                </p>
                <p className="text-blue-600 text-center font-semibold mt-2 text-sm sm:text-base">
                  {trip.price}
                </p>
              </div>
              <Link
                to="/booking"
                className=" mt-4 w-full bg-blue-600 text-white text-center py-2 text-sm sm:text-base rounded-lg hover:bg-blue-700 transition-all duration-300"
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trips;
