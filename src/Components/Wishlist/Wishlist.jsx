import { useState } from "react";
import { useNavigate } from "react-router-dom";
import alex from "../../assets/alex.jpg";
import siwa from "../../assets/siwa.jpg";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      title: "Alexandria Beach Resort",
      price: 1500,
      date: "2025-07-20",
      image: alex,
    },
    {
      id: 2,
      title: "Safari Adventure in Siwa",
      price: 2200,
      date: "2025-08-10",
      image: siwa,
    },
  ]);

  const navigate = useNavigate();

  const handleRemove = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
  };

  const handleAddToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white py-10 px-4 sm:px-8 md:px-16 animate-fade-in">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-700 text-center mb-8">
        Your Wishlist
      </h1>

      {wishlist.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          Your wishlist is empty.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-xl overflow-hidden text-sm sm:text-base">
            <thead>
              <tr className="bg-pink-100 text-pink-800">
                <th className="p-3 sm:p-4">Image</th>
                <th className="p-3 sm:p-4">Title</th>
                <th className="p-3 sm:p-4">Available Date</th>
                <th className="p-3 sm:p-4">Price (EGP)</th>
                <th className="p-3 sm:p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map((item) => (
                <tr
                  key={item.id}
                  className="border-t border-gray-200 hover:bg-pink-50"
                >
                  <td className="p-3 sm:p-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className=" w-16 h-12 sm:w-20 sm:h-16 object-cover rounded"
                    />
                  </td>
                  <td className="text-center p-3 sm:p-4 font-medium text-gray-800">
                    {item.title}
                  </td>
                  <td className=" text-center p-3 sm:p-4 text-gray-600">
                    {item.date}
                  </td>
                  <td className="text-center p-3 sm:p-4 font-semibold text-pink-600">
                    {item.price}
                  </td>
                  <td className="p-3 sm:p-4 text-center ">
                    <div>
                      <button
                        onClick={handleAddToCart}
                        className="bg-green-100 hover:bg-green-200 text-green-700 w-3/5 mb-2 px-2 py-2 rounded text-xs sm:text-sm font-medium transition-all duration-200"
                      >
                        Add to Cart
                      </button>
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="bg-red-100 hover:bg-red-200 text-red-600 w-3/5 px-2 py-2 rounded text-xs sm:text-sm font-medium transition-all duration-200"
                      >
                        Remove
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
