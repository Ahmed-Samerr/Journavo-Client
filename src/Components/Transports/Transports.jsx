import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getImages } from "../../connection/services";
import { UserContext } from "../../Context/UserContext";

const Transports = () => {
  const navigate = useNavigate();
  const { handleBooking } = useContext(UserContext);
  //Data holder from the backend
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getImages("/data/all", setCategory);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-white py-32 px-4 md:px-20">
      <h1 className="text-4xl font-bold text-blue-800 text-center mb-12 animate-fade-in">
        Explore Transport Services in Egypt
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.length > 0
          ? category
              .filter((d) => d.category === "Transportation")
              .map((Transportation, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 duration-300 animate-fade-in"
                >
                  <img
                    src={Transportation.image}
                    alt={Transportation.image}
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-center text-xl font-bold text-gray-800">
                      {Transportation.title}
                    </h2>
                    <p className="text-gray-600 text-center mt-1">
                      {Transportation.location}
                    </p>
                    <p className="text-gray-800 text-center font-semibold mt-2">
                      {Transportation.price}
                    </p>
                    <div className="mt-10 w-full bg-blue-600 text-white text-center py-2 text-sm sm:text-base rounded-lg hover:bg-blue-700 transition-all duration-300">
                      <button
                        onClick={() => {
                          handleBooking(Transportation);
                          navigate("/booking");
                        }}
                      >
                        View Schedule
                      </button>
                    </div>
                  </div>
                </div>
              ))
          : ""}
      </div>
    </div>
  );
};

export default Transports;
