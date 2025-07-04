import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { addToWishList, getAllUsers } from "../connection/services";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [details, setDetails] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 425);
  const [loading, setLoading] = useState(true);
  const [animate, setAnimate] = useState(true);
  const [isLogin, setLogin] = useState(false);
  const [users, setUsers] = useState([]);

  const handleBooking = (dataDetails) => {
    localStorage.setItem("details", JSON.stringify(dataDetails));
    setDetails(dataDetails);
  };

  const checkUser = async () => {
    if (localStorage.getItem("user")) {
      await setUser(JSON.parse(localStorage.getItem("user")));
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  const handleWishList = (wishId) => {
    setLoading(true);
    setAnimate(true);
    addToWishList(`/user/wishList/${wishId}`, setUser, setLoading, setAnimate);
  };

  // Auto-disable loading and animation after timeout
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
      setAnimate(false);
    }, 3000);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 425);
    };
    getAllUsers("/admin/all", setUsers);
    checkUser();
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []); // added [] to avoid running on every render
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isMobile,
        setIsMobile,
        loading,
        animate,
        isLogin,
        setLogin,
        details,
        setDetails,
        handleBooking,
        setLoading,
        setAnimate,
        handleWishList,
        setUsers,
        users,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserContextProvider;
