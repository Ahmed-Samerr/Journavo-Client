import { useEffect } from "react";
import { motion } from "framer-motion";
import egypt from "../../assets/egypt.jpg";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-white py-16">
      {/* Hero Section */}
      <motion.div
        className="bg-blue-100 py-16 px-4 sm:px-6 md:px-12 lg:px-24 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Discover Egypt with Ease
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Experience the beauty of Egypt like never before. We make travel
          simple, convenient, and memorable.
        </p>
        <div>
          <motion.img
            src={egypt}
            alt="Egypt"
            className="w-full max-w-5xl h-64 md:h-96 lg:h-[450px] mt-5 mx-auto rounded-2xl shadow-lg object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          />
        </div>
      </motion.div>

      {/* Stylish Info Section */}
      <div className="py-20 px-4 sm:px-6 md:px-12 lg:px-24 text-center">
        <motion.div
          className="mb-14 max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-blue-800 mb-6">Who We Are</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            We are a digital tourism platform dedicated to making travel within
            Egypt easier than ever. Our goal is to connect travelers with
            unforgettable experiences through trusted services, smart tools, and
            a modern booking system — all in one place.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              className="bg-blue-50 p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              {i === 0 ? (
                <>
                  <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                    🎯 Our Mission
                  </h3>
                  <p className="text-gray-600 text-md leading-relaxed">
                    To simplify domestic travel in Egypt by offering a seamless
                    digital booking experience that empowers users to explore
                    the country confidently.
                  </p>
                </>
              ) : (
                <>
                  <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                    💡 What We Offer
                  </h3>
                  <ul className="text-gray-600 text-md list-disc list-inside text-left space-y-2">
                    <li>Hotel and tour reservations</li>
                    <li>User-friendly design</li>
                    <li>Responsive layout for mobile & desktop</li>
                    <li>Reliable support and updates</li>
                  </ul>
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* Vision Section */}
        <motion.div
          className="py-20 px-4 sm:px-6 md:px-12 lg:px-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-600 mb-3">
              🚀 Our Vision
            </h3>
            <p className="text-gray-600 text-md leading-relaxed">
              We envision a future where local travel is effortless and
              enjoyable for everyone. Whether your planning a weekend getaway or
              a full vacation, our platform is here to help you every step of
              the way.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        className="bg-white text-black py-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4">
          Ready to start your journey?
        </h2>
        <p className="mb-6">
          Explore the best of Egypt and book your next adventure now.
        </p>
        <Link to="/Services">
          <motion.button
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Booking
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default About;
