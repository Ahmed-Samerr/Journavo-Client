import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { removeItemFromWishlist } from "../../connection/services";
import { useNavigate } from "react-router-dom";

const WishlistPage = () => {
  const { user, setLoading, setUser, setAnimate, isLogin, setDetails } =
    useContext(UserContext);
 
    const navigate = useNavigate

  const handleRemove = (id) => {
    setLoading(true);
    setAnimate(true);
    removeItemFromWishlist(
      `/user/removeItemFromwishlist/${id}`,
      setUser,
      setLoading,
      setAnimate
    );
  };

  const handleAddToCart = async (item , navigate) => {
    localStorage.setItem("details", JSON.stringify(item));
    await setDetails(item);
    navigate ("/booking")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white py-28 px-4 sm:px-8 md:px-12 lg:px-24 flex flex-col items-center animate-fade-in">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 text-center mb-8">
        Your Wishlist
      </h1>

      {isLogin ? (
        user.wishlist.length <= 0 ? (
          <p className="text-center text-gray-500 text-lg">
            Your wishlist is empty.
          </p>
        ) : (
          <div className="overflow-x-auto mb-10 w-full">
            <table className="w-full bg-white border border-gray-200 shadow-md rounded-xl overflow-hidden text-sm md:text-base text-center">
              <thead>
                <tr className="bg-blue-100 text-blue-800">
                  <th className="p-4">Image</th>
                  <th className="p-4">Title</th>
                  <th className="p-4">Available Date</th>
                  <th className="p-4">Price (EGP)</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {user.wishlist.map((item, id) => (
                  <tr
                    key={id}
                    className="border-t border-gray-200 hover:bg-pink-50"
                  >
                    <td className="p-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-12 sm:w-20 sm:h-16 object-cover rounded"
                      />
                    </td>
                    <td className="p-4 font-medium text-gray-800">
                      {item.title}
                    </td>
                    <td className="p-4 text-gray-600">{item.date}</td>
                    <td className="p-4 font-semibold text-pink-600">
                      {item.price}
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
                        <button
                          onClick={() => handleAddToCart(item, navigate)}
                          className="
                          w-36 sm:w-32 md:w-40
                          bg-green-100 hover:bg-green-200
                          text-green-600
                          px-5 py-2
                          rounded
                          text-xs sm:text-sm font-medium
                          transition-colors duration-200
                          focus:outline-none focus:ring-2 focus:ring-green-300
                        "
                        >
                          Add to Cart
                        </button>

                        <button
                          onClick={() => handleRemove(item._id)}
                          className="
                          w-36 sm:w-32 md:w-40
                          bg-red-100 hover:bg-red-200
                          text-red-600
                          px-5 py-2
                          rounded
                          text-xs sm:text-sm font-medium
                          transition-colors duration-200
                          focus:outline-none focus:ring-2 focus:ring-red-300
                        "
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
        )
      ) : (
        ""
      )}
    </div>
  );
};
export default WishlistPage;
