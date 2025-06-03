import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getImages } from "../../connection/services";

const Trips = () => {
  //Data holder from the backend
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getImages("/data/all", setCategory);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-white py-32 px-4 sm:px-8 md:px-12 lg:px-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-800 text-center mb-12 animate-fade-in">
        Explore Top Trips in Egypt
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {category.length > 0
          ? category
              .filter((d) => d.category === "Trips")
              .map((Trips, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 duration-300 animate-fade-in flex flex-col"
                >
                  <img
                    src={Trips.image}
                    alt={Trips.image}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover"
                  />
                  <div className="p-4 sm:p-6 flex flex-col justify-between h-48 sm:h-52">
                    <div className="">
                      <h2 className="text-center text-lg sm:text-xl font-bold text-gray-800">
                        {Trips.title}
                      </h2>
                      <p className="text-gray-600 text-center mt-1 text-sm sm:text-base">
                        {Trips.location}
                      </p>
                      <p className="text-blue-600 text-center font-semibold mt-2 text-sm sm:text-base">
                        {Trips.price} EGP / person
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
              ))
          : ""}
      </div>
    </div>
  );
};

export default Trips;
