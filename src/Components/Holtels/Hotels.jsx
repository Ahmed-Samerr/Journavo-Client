import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { addToWishList, getImages } from "../../connection/services";
import { UserContext } from "../../Context/UserContext";

const Hotels = () => {
  const navigate = useNavigate();
  const { handleBooking, setUser, setLoading, setAnimate } =
    useContext(UserContext);
  //Data holder from the backend
  const [category, setCategory] = useState([]);

  const handleWishList = (id) => {
    addToWishList(`/user/wishList/${id}`, setUser, setLoading, setAnimate);
  };
  useEffect(() => {
    getImages("/data/all", setCategory);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-white py-32 px-4 sm:px-8 md:px-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 text-center mb-10 animate-fade-in">
        Explore Top Hotels in Egypt
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {category.length > 0
          ? category
              .filter((d) => d.category === "Hotels")
              .map((hotel, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 duration-300 animate-fade-in"
                >
                  <img
                    src={hotel.image}
                    alt={hotel.image}
                    className="w-full h-48 sm:h-52 object-cover"
                  />
                  {/* زر القلب على شكل دايرة */}
                  <button
                    onClick={() => handleWishList(hotel._id)}
                    className="absolute right-4 top-4 bg-gray-200 text-gray-600 rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-100 hover:text-red-600 transition duration-300 shadow"
                    title="Add to Wishlist"
                  >
                    ♥
                  </button>
                  <div className="p-4 sm:p-6 flex flex-col justify-between h-48 sm:h-52 relative">
                    <div>
                      <h2 className="text-center text-lg sm:text-xl font-bold text-gray-800">
                        {hotel.title}
                      </h2>
                      <p className="text-center text-gray-600 text-sm sm:text-base">
                        {hotel.location}
                      </p>
                      <p className="text-blue-600 text-center font-semibold text-sm sm:text-base mt-2">
                        {hotel.price} EGP / Night
                      </p>
                    </div>

                    {/* زر Book Now */}
                    <button
                      onClick={() => {
                        handleBooking(hotel);
                        navigate("/booking");
                      }}
                      className="mt-4 w-full bg-blue-600 text-white text-center py-2 text-sm sm:text-base rounded-lg hover:bg-blue-700 transition-all duration-300"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              ))
          : ""}
      </div>
    </div>
  );
};

export default Hotels;
