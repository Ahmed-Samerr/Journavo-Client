import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom"; // ✅ استيراد useNavigate
import { UserContext } from "../../Context/UserContext";
import { booking } from "../../connection/services";

const Booking = () => {
  const { details, setDetails, setUser, setLoading, setAnimate } =
    useContext(UserContext);

  const navigate = useNavigate(); // ✅ تهيئة useNavigate

  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    guests: "",
    travelClass: "",
    requests: "",
  });

  const [errors, setErrors] = useState({});
  const travelClasses = ["Economy", "Business", "VIP"];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    const isValidDateFormat = (dateStr) => {
      const regex = /^(1\d{3}|2\d{3})-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
      return regex.test(dateStr);
    };

    const isRealDate = (dateStr) => {
      if (!isValidDateFormat(dateStr)) return false;
      const [year, month, day] = dateStr.split("-").map(Number);
      const date = new Date(dateStr);
      return (
        date.getFullYear() === year &&
        date.getMonth() + 1 === month &&
        date.getDate() === day
      );
    };

    if (!formData.checkIn) {
      newErrors.checkIn = "Check-in date is required.";
    } else if (!isRealDate(formData.checkIn)) {
      newErrors.checkIn = "Check-in date format is invalid or not a real date.";
    }

    if (!formData.checkOut) {
      newErrors.checkOut = "Check-out date is required.";
    } else if (!isRealDate(formData.checkOut)) {
      newErrors.checkOut =
        "Check-out date format is invalid or not a real date.";
    }

    if (
      isRealDate(formData.checkIn) &&
      isRealDate(formData.checkOut) &&
      new Date(formData.checkIn) > new Date(formData.checkOut)
    ) {
      newErrors.checkOut = "Check-out must be after check-in.";
    }

    const guests = Number(formData.guests);
    if (!formData.guests) {
      newErrors.guests = "Number of guests is required.";
    } else if (isNaN(guests) || guests < 1 || !Number.isInteger(guests)) {
      newErrors.guests = "Please enter a valid number of guests.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ تم تعديل handleSubmit هنا
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      setAnimate(true);
      booking(
        `/user/booking/${details._id}`,
        formData,
        setUser,
        setLoading,
        setAnimate,
        navigate
      ).then(() => {
        // ✅ التوجيه بعد نجاح الحجز
        navigate("/booking-success");
      });
    } else {
      alert("Please fix the errors in the form.");
    }
  };

  useEffect(() => {
    setDetails(JSON.parse(localStorage.getItem("details")));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white py-32 px-4 md:px-16 animate-fade-in">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
        Book Your Journey Now
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 space-y-6"
      >
        <div>
          <img
            src={details.image}
            alt="img"
            className="w-full h-auto object-cover rounded-2xl shadow-lg border-4 border-gray-200"
          />
          <h3 className="mb-10 mt-4 text-blue-800 text-2xl font-bold text-center tracking-wide">
            {details.title}
          </h3>
        </div>
        {/* Dates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 mb-2">Check-in Date</label>
            <input
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              className={`w-full border ${
                errors.checkIn ? "border-red-500" : "border-gray-300"
              } rounded px-4 py-2 focus:ring-2 focus:ring-blue-500`}
            />
            {errors.checkIn && (
              <p className="text-red-500 text-sm">{errors.checkIn}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Check-out Date</label>
            <input
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              className={`w-full border ${
                errors.checkOut ? "border-red-500" : "border-gray-300"
              } rounded px-4 py-2 focus:ring-2 focus:ring-blue-500`}
            />
            {errors.checkOut && (
              <p className="text-red-500 text-sm">{errors.checkOut}</p>
            )}
          </div>
        </div>

        {/* Guests & Class */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 mb-2">Number of Guests</label>
            <input
              type="number"
              name="guests"
              min="1"
              value={formData.guests}
              onChange={handleChange}
              className={`w-full border ${
                errors.guests ? "border-red-500" : "border-gray-300"
              } rounded px-4 py-2 focus:ring-2 focus:ring-blue-500`}
            />
            {errors.guests && (
              <p className="text-red-500 text-sm">{errors.guests}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Travel Class</label>
            <select
              name="travelClass"
              value={formData.travelClass}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500"
            >
              {travelClasses.map((cls, index) => (
                <option key={index} value={cls}>
                  {cls}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Special Requests */}
        <div>
          <label className="block text-gray-700 mb-2">Special Requests</label>
          <textarea
            name="requests"
            value={formData.requests}
            onChange={handleChange}
            rows="4"
            placeholder="Anything else we should know?"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500 resize-none overflow-y-scroll"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 transition duration-300"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default Booking;
