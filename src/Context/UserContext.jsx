import { createContext, useEffect, useState } from "react";

export let UserContext = createContext();

export default function UserContextprovider(props) {
  const [userLogin, setuserLogin] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 425);
  const [loading, setLoading] = useState(true);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    // Check for login
    if (localStorage.getItem("userToken")) {
      setuserLogin(localStorage.getItem("userToken"));
    }

    // Handle screen resize
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 425);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const toggleLoading = setTimeout(() => {
      setLoading(false);
      setAnimate(false);
    }, 3000); // 10 seconds

    return () => clearTimeout(toggleLoading);
  });

  return (
    <UserContext.Provider
      value={{
        userLogin,
        setuserLogin,
        isMobile,
        setIsMobile,
        loading,
        animate,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
