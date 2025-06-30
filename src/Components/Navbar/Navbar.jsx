import { useContext, useEffect, useState } from "react";
import logo from "../../assets/Logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import "./Navbar.css";
import { logout } from "../../connection/services";
import Chatbot from "../Chatbot/Chatbot"; // ✅ استيراد Chatbot

export default function Navbar() {
  const navigate = useNavigate();
  const { isLogin, setLogin, setLoading, setAnimate, user } = useContext(UserContext);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function SignOut() {
    setLoading(true);
    setAnimate(true);
    if (user.role === "admin") {
      logout("/admin/logout", setLogin, navigate, setLoading, setAnimate);
    } else {
      logout("/user/logout", setLogin, navigate, setLoading, setAnimate);
    }
  }

  const handleScrollToHome = () => {
    setTimeout(() => navigate("/"), 10);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 bg-white transition-all duration-500 ${scrolled ? "shadow-md" : ""}`}>
        <div className="flex items-end justify-between ml-auto -mr-50 p-4">
          {/* Logo + Hamburger */}
          <div className="flex justify-between items-center w-full md:w-auto">
            <img
              src={logo}
              onClick={handleScrollToHome}
              width="120px"
              className="h-20-auto cursor-pointer"
              alt="Logo"
            />

            <button
              className="relative z-50 w-6 h-5 flex flex-col justify-between md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block h-0.5 bg-gray-800 w-full transition-transform duration-300 ease-in-out ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-gray-800 w-full transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`block h-0.5 bg-gray-800 w-full transition-transform duration-300 ease-in-out ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-5 text-lg font-semibold -mr-30">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/Services">Services</Link></li>
            <li><Link to="/Wishlist">Wishlist</Link></li>
            <li><Link to="/Cart">Cart</Link></li>
          </ul>

          {/* Desktop Right Links + Icons + Chatbot */}
          <div className="hidden md:flex items-center space-x-3 mr-8">
            <div className="icons flex gap-2.5 text-lg items-center relative">
              <Chatbot /> {/* ✅ الأيقونة في أقصى اليمين */}
              <li className="fab fa-facebook"></li>
              <li className="fab fa-linkedin"></li>
              <li className="fab fa-youtube"></li>
              <li className="fab fa-tiktok"></li>
              <li className="fab fa-twitter"></li>
            </div>
            <div className="links flex gap-4 text-lg font-semibold">
              {isLogin ? (
                <span onClick={SignOut} className="cursor-pointer">SignOut</span>
              ) : (
                <>
                  <Link to="/login" style={{ display: isLogin === true ? "none" : "block" }}>Login</Link>
                  <Link to="/register" style={{ display: isLogin === true ? "none" : "block" }}>Register</Link>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`flex flex-col items-center -mr-20 justify-center fixed top-0 left-0 bg-white z-40 gap-8 text-lg font-semibold overflow-hidden md:hidden`}
          style={{
            listStyleType: "none",
            padding: 0,
            margin: 0,
            width: menuOpen ? "100vw" : "0",
            height: menuOpen ? "100vh" : "0",
            transition: "width 0.3s ease, height 0.3s ease",
          }}
        >
          {menuOpen && (
            <>
              <li onClick={() => setMenuOpen(false)}><Link to="/">Home</Link></li>
              <li onClick={() => setMenuOpen(false)}><Link to="/about">About</Link></li>
              <li onClick={() => setMenuOpen(false)}><Link to="/cart">Cart</Link></li>
              <li onClick={() => setMenuOpen(false)}><Link to="/Wishlist">Wishlist</Link></li>
              <li onClick={() => setMenuOpen(false)}><Link to="/Services">Services</Link></li>
              {isLogin !== null && (
                <li onClick={() => { SignOut(); setMenuOpen(false); }} className="cursor-pointer block md:hidden">SignOut</li>
              )}
            </>
          )}
        </ul>

        {/* Mobile Auth Links */}
        {menuOpen && (
          <div className="flex flex-col items-center justify-center fixed bottom-8 left-0 w-full z-40 gap-4 md:hidden text-lg font-semibold">
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="text-blue-600"
              style={{ display: isLogin !== null ? "none" : "block" }}
            >
              Login
            </Link>
            <Link
              to="/register"
              onClick={() => setMenuOpen(false)}
              className="text-blue-600"
              style={{ display: isLogin !== null ? "none" : "block" }}
            >
              Register
            </Link>
          </div>
        )}
      </nav>

      {/* ✅ زر الشات في الموبايل */}
      <div className="md:hidden fixed bottom-4 right-4 z-50">
        <Chatbot />
      </div>
    </>
  );
}
