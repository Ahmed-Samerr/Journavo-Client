import { motion } from "framer-motion";

// استيراد صور مناسبة (غير الأسماء حسب صورك)
import hotelsImg from "../../assets/hotels.jpg";
import tripsImg from "../../assets/trips.jpg";
import transportsImg from "../../assets/transports.jpg";

const Admin = () => {
  const sections = [
    {
      id: 1,
      title: "Hotels",
      description:
        "Manage hotel listings, availability, and bookings across Egypt.",
      image: hotelsImg,
      link: "/admin/hotels",
    },
    {
      id: 2,
      title: "Trips",
      description:
        "Organize and promote exciting trips and tours for customers.",
      image: tripsImg,
      link: "/admin/trips",
    },
    {
      id: 3,
      title: "Transports",
      description:
        "Manage transport options including buses, trains, and more.",
      image: transportsImg,
      link: "/admin/transports",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white py-12 px-4 md:px-16 animate-fade-in">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Admin Dashboard
      </h1>

      <div className="grid gap-8 md:grid-cols-3">
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
              className="h-48 object-cover w-full"
            />
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {section.title}
                </h2>
                <p className="text-gray-600 mt-2">{section.description}</p>
              </div>
              <a
                href={section.link}
                className="mt-6 inline-block w-fit bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-all"
              >
                See More
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
