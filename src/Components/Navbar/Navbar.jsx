import { useContext, useEffect, useState } from "react";
import logo from "../../assets/Logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const { userLogin, setuserLogin } = useContext(UserContext);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function SignOut() {
    localStorage.removeItem("userToken");
    setuserLogin(null);
    navigate("/login");
  }

  const handleScrollToHome = () => {
    setTimeout(() => {
      navigate("/");
    }, 10);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white transition-all duration-500 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="flex items-end justify-between mx-auto  p-4">
        {/* Logo + hamburger container */}
        <div className="flex justify-between items-center w-full md:w-auto">
          <img
            src={logo}
            onClick={handleScrollToHome}
            width="120px"
            className="h-20-auto"
            alt="Logo"
          />

          {/* Hamburger Button */}
          <button
            className="relative z-50 w-6 h-5 flex flex-col justify-between md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 bg-gray-800 w-full transition-transform duration-300 ease-in-out ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-gray-800 w-full transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-gray-800 w-full transition-transform duration-300 ease-in-out ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Desktop Menu */}
        {userLogin != null && !menuOpen && (
          <ul className="hidden md:flex gap-6 text-lg font-semibold">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/Wishlist">Wishlist</Link>
            </li>
            <li>
              <Link to="/Services">Services</Link>
            </li>
          </ul>
        )}

        {/* Desktop right links + icons */}
        <div className=" hidden md:flex items-center space-x-6">
          <div className="icons flex gap-4 text-xl">
            <li className="fab fa-facebook"></li>
            <li className="fab fa-linkedin"></li>
            <li className="fab fa-youtube"></li>
            <li className="fab fa-tiktok"></li>
            <li className="fab fa-twitter"></li>
          </div>
          <div className="links flex gap-4 text-lg font-semibold">
            {userLogin !== null ? (
              <span onClick={SignOut} className="cursor-pointer">
                SignOut
              </span>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu with animation */}
      <ul
        className={`flex flex-col items-center justify-center fixed top-0 left-0 bg-white z-40 gap-8 text-lg font-semibold overflow-hidden md:hidden`}
        style={{
          listStyleType: "none",
          padding: 0,
          margin: 0,
          width: menuOpen ? "100vw" : "0",
          height: menuOpen ? "100vh" : "0",
          transition: "width 0.3s ease, height 0.3s ease",
        }}
      >
        {menuOpen && userLogin != null && (
          <>
            <li onClick={() => setMenuOpen(false)}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <Link to="/about">About</Link>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <Link to="/cart">Cart</Link>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <Link to="/Wishlist">Wishlist</Link>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <Link to="/Services">Services</Link>
            </li>

            {/* This SignOut will only appear in mobile */}
            <li
              onClick={() => {
                SignOut();
                setMenuOpen(false);
              }}
              className="cursor-pointer block md:hidden"
            >
              <Link to="/">SignOut</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
