import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [details, setDetails] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 425);
  const [loading, setLoading] = useState(true);
  const [animate, setAnimate] = useState(true);
  const [isLogin, setLogin] = useState();

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

  const handleWishList = (id) => {
    addToWishList(`/user/wishList/${id}`, setUser, setLoading, setAnimate);
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
