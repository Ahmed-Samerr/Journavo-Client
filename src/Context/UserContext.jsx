import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [details, setDetails] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 425);
  const [loading, setLoading] = useState(true);
  const [animate, setAnimate] = useState(true);
  const [isLogin, setLogin] = useState(false);

  const handleBooking = (dataDetails) => {
    localStorage.setItem("details", JSON.stringify(dataDetails));
    setDetails(dataDetails);
  };

  // Handle window resize for mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 425);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-disable loading and animation after timeout
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
      setAnimate(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
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
