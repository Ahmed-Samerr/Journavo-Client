import { useState } from "react";
import { useNavigate } from "react-router-dom"; // استيراد useNavigate
import Nile from "../../assets/NileCruise.jpg";
import NewMuseum from "../../assets/NewMuseum.jpg";
import sharm from "../../assets/sharm.jpg";
import BalloonRide from "../../assets/BalloonRide.jpg";
import Dahab from "../../assets/Dahab.jpg";

const CartPage = () => {
  const navigate = useNavigate(); // تهيئة useNavigate

  const initialCartItems = [
    {
      id: 1,
      title: "3-Day Nile Cruise - Luxor to Aswan",
      price: 2500,
      date: "2025-06-10",
      image: Nile,
    },
    {
      id: 2,
      title: "Pyramids & Museum Day Tour - Cairo",
      price: 800,
      date: "2025-06-12",
      image: NewMuseum,
    },
    {
      id: 3,
      title: "Snorkeling Adventure - Sharm El-Sheikh",
      price: 1800,
      date: "2025-07-01",
      image: sharm,
    },
    {
      id: 4,
      title: "Hot Air Balloon Ride - Luxor",
      price: 1200,
      date: "2025-07-15",
      image: BalloonRide,
    },
    {
      id: 5,
      title: "Relaxing Retreat - Dahab",
      price: 2000,
      date: "2025-08-05",
      image: Dahab,
    },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  // دالة التوجيه للصفحة
  const handleConfirmBooking = () => {
    navigate("/Booking");
  };

  return (
    <div className="pt-32 min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 sm:px-8 md:px-12 lg:px-24 animate-fade-in">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-8">
        Your Booking Cart
      </h1>

      <div className="overflow-x-auto mb-10">
        <table className="w-full bg-white border border-gray-200 shadow-md rounded-xl overflow-hidden text-sm md:text-base">
          <thead>
            <tr className="bg-blue-100 text-blue-800 text-center">
              <th className="p-4">Image</th>
              <th className="p-4">Title</th>
              <th className="p-4">Date</th>
              <th className="p-4">Price (EGP)</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {cartItems.map((item) => (
              <tr
                key={item.id}
                className="border-t border-gray-200 hover:bg-blue-50"
              >
                <td className="p-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-12 sm:w-20 sm:h-16 object-cover rounded"
                  />
                </td>
                <td className="p-4 font-medium text-gray-800">{item.title}</td>
                <td className="p-4 text-gray-600">{item.date}</td>
                <td className="p-4 font-semibold text-blue-700">
                  {item.price}
                </td>
                <td className="p-4">
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="bg-red-100 hover:bg-red-200 text-red-600 px-5 py-2  rounded text-xs sm:text-sm font-medium"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-md p-6 text-center space-y-4 hover:scale-105 transition-transform duration-300">
        <h3 className="text-xl font-bold text-gray-700">Total: {total} EGP</h3>
        <button
          onClick={handleConfirmBooking}
          className="
            w-full
            max-w-xs
            md:max-w-sm
            mx-auto
            py-3
            sm:py-4
            bg-blue-600
            text-white
            font-semibold
            rounded-lg
            hover:bg-blue-700
            focus:outline-none
            focus:ring-4
            focus:ring-blue-300
            transition-all
            duration-300
            block
          "
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default CartPage;
