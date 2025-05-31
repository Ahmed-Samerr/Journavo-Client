import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Import your images
import hotelsImg from "../../assets/hotels.jpg";
import transportsImg from "../../assets/transports.jpg";
import tripsImg from "../../assets/trips.jpg";

const Admin = () => {
  const sections = [
    {
      id: 1,
      title: "Hotels",
      description:
        "Manage hotel listings, availability, and bookings across Egypt.",
      image: hotelsImg,
      link: "/AdminHotels",
    },
    {
      id: 2,
      title: "Transports",
      description:
        "Manage transport options including buses, trains, and more.",
      image: transportsImg,
      link: "/AdminTransports",
    },
    {
      id: 3,
      title: "Trips",
      description:
        "Organize and promote exciting trips and tours for customers.",
      image: tripsImg,
      link: "/AdminTrips",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white py-12 px-4 sm:px-8 md:px-16 animate-fade-in">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10 sm:mb-12">
        Admin Dashboard
      </h1>

      <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
          <motion.div
            key={section.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white shadow-2xl rounded-xl overflow-hidden flex flex-col transition-transform duration-300"
          >
            <img
              src={section.image}
              alt={section.title}
              className="h-40 sm:h-48 md:h-56 lg:h-60 object-cover w-full"
            />
            <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-center text-xl sm:text-2xl font-bold text-gray-800">
                  {section.title}
                </h2>
                <p className="text-center text-gray-600 mt-2 text-sm sm:text-base">
                  {section.description}
                </p>
              </div>
              <Link
                to={section.link}
                className="mt-4 w-full bg-blue-600 text-white text-center py-2 text-sm sm:text-base rounded-lg hover:bg-blue-700 transition-all duration-300"
              >
                See More
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
