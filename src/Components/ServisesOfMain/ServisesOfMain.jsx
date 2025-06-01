import { Link } from "react-router-dom";
import { Briefcase, Compass, Anchor } from "lucide-react"; // أيقونات مودرن

export default function ServisesOfMain() {
  const sampleServices = [
    {
      id: 1,
      title: "Safari Trips",
      desc: "Discover unforgettable adventures in the heart of the desert.",
      icon: <Compass className="h-8 w-8 text-blue-600" />,
    },
    {
      id: 2,
      title: "Sea Tours",
      desc: "Luxurious coastal journeys with breathtaking views.",
      icon: <Anchor className="h-8 w-8 text-teal-600" />,
    },
    {
      id: 3,
      title: "Historical Visits",
      desc: "Explore the world’s most iconic historical landmarks.",
      icon: <Briefcase className="h-8 w-8 text-yellow-600" />,
    },
  ];

  return (
    <>
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {sampleServices.map((service) => (
              <div
                key={service.id}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services">
              <button className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg">
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
