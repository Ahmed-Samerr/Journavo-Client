import { Link } from "react-router-dom";
import MarriottMena from "../../assets/MarriottMena.jpg"
import FourSeasons from "../../assets/FourSeasons.jpg"
import Steigenberger from "../../assets/Steigenberger.jpg"
import SavoyHotel from "../../assets/SavoyHotel.jpg"
import BaronPalace from "../../assets/BaronPalace.jpg"
import SofitelLegend from "../../assets/SofitelLegend.jpg"
import HiltonAlexandria from "../../assets/HiltonAlexandria.jpg"
import RixosSeagate from "../../assets/RixosSeagate.jpg"
import KempinskiNile from "../../assets/KempinskiNile.jpg"

const hotels = [
  {
    id: 1,
    name: "Marriott Mena House, Cairo",
    location: "Giza, Cairo",
    image: MarriottMena,
    price: "3,200 EGP / night",
  },
  {
    id: 2,
    name: "Four Seasons Hotel Alexandria",
    location: "Alexandria, Egypt",
    image: FourSeasons,
    price: "4,500 EGP / night",
  },
  {
    id: 3,
    name: "Steigenberger Nile Palace, Luxor",
    location: "Luxor, Egypt",
    image: Steigenberger,
    price: "2,700 EGP / night",
  },
  {
    id: 4,
    name: "Savoy Hotel Sharm El Sheikh",
    location: "Sharm El Sheikh",
    image: SavoyHotel,
    price: "3,800 EGP / night",
  },
  {
    id: 5,
    name: "Baron Palace Sahl Hasheesh",
    location: "Hurghada",
    image: BaronPalace ,
    price: "5,000 EGP / night",
  },
  {
    id: 6,
    name: "Sofitel Legend Old Cataract",
    location: "Aswan",
    image: SofitelLegend,
    price: "4,200 EGP / night",
  },
  {
    id: 7,
    name: "Hilton Alexandria Corniche",
    location: "Alexandria",
    image: HiltonAlexandria ,
    price: "3,000 EGP / night",
  },
  {
    id: 8,
    name: "Rixos Premium Seagate",
    location: "Sharm El Sheikh",
    image: RixosSeagate,
    price: "5,800 EGP / night",
  },
  {
    id: 9,
    name: "Kempinski Nile Hotel",
    location: "Garden City, Cairo",
    image: KempinskiNile,
    price: "3,900 EGP / night",
  },
];

const Hotels = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-white py-10 px-4 sm:px-8 md:px-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 text-center mb-10 animate-fade-in">
        Explore Top Hotels in Egypt
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 duration-300 animate-fade-in"
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-48 sm:h-52 object-cover"
            />
            <div className="p-4 sm:p-6 flex flex-col justify-between h-48 sm:h-52">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-800">{hotel.name}</h2>
                <p className="text-gray-600 text-sm sm:text-base">{hotel.location}</p>
                <p className="text-blue-600 font-semibold text-sm sm:text-base mt-2">{hotel.price}</p>
              </div>
              <Link
                to="/booking"
                className="mt-4 w-full bg-blue-600 text-white text-center py-2 text-sm sm:text-base rounded-lg hover:bg-blue-700 transition-all duration-300"
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

export default Hotels;