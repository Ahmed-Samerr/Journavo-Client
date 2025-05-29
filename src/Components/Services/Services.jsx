import { Link } from "react-router-dom";

const services = [
  {
    title: "Hotel Booking",
    desc: "Easily find and book top-rated hotels across Egypt for every budget comfort and convenience guaranteed",
    img: "src/assets/hotelbooking.avif",
    link: "/hotels",
  },
  {
    title: "Trips Booking",
    desc: "Plan your perfect trip with ease book unforgettable experiences across Egypt in just a few clicks.",
    img: "src/assets/tripsbook.avif",
    link: "/trips",
  },
  {
    title: "Transport Services",
    desc: "Enjoy smooth, hassle-free travel with our modern, air-conditioned transport services designed for your comfort and safety",
    img: "src/assets/transport.jpg",
    link: "/transports",
  },
];

export default function ServicesWithImages() {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-3 text-gray-900">Services</h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          We offer a wide range of high-quality travel services tailored to meet
          your needs whether you're looking for relaxation, adventure, or
          cultural exploration, we’ve got you covered.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ title, desc, img, link }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-xl">
                <img
                  src={img}
                  alt={title}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex-grow text-left">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{desc}</p>
              </div>

              {/* Button */}
              <div className="px-6 pb-6">
                <Link
                  to={link}
                  className="w-full inline-block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Click Here
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
