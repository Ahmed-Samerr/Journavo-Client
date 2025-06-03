import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    travelClass: "Economy",
    requests: "",
  });

  const [errors, setErrors] = useState({}); // لتخزين الأخطاء

  const destinations = ["Cairo", "Alexandria", "Luxor", "Aswan", "Sharm El-Sheikh"];
  const travelClasses = ["Economy", "Business", "VIP"];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // بمجرد ما يكتب صح، نمسح رسالة الخطأ للـ input ده
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.includes("@")) newErrors.email = "Enter a valid email.";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required.";
    if (!formData.destination) newErrors.destination = "Select a destination.";
    if (!formData.checkIn) newErrors.checkIn = "Check-in date is required.";
    if (!formData.checkOut) newErrors.checkOut = "Check-out date is required.";
    if (new Date(formData.checkIn) > new Date(formData.checkOut)) {
      newErrors.checkOut = "Check-out must be after check-in.";
    }
    if (formData.guests < 1) newErrors.guests = "At least 1 guest is required.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/booking-success");
    } else {
      alert("Please fix the errors in the form.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white py-32 px-4 md:px-16 animate-fade-in">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
        Book Your Journey Now
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 space-y-6"
      >
        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded px-4 py-2 focus:ring-2 focus:ring-blue-500`}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded px-4 py-2 focus:ring-2 focus:ring-blue-500`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
        </div>

        {/* Phone & Destination */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } rounded px-4 py-2 focus:ring-2 focus:ring-blue-500`}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Destination</label>
            <select
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className={`w-full border ${
                errors.destination ? "border-red-500" : "border-gray-300"
              } rounded px-4 py-2 focus:ring-2 focus:ring-blue-500`}
            >
              <option value="">Select a destination</option>
              {destinations.map((dest, index) => (
                <option key={index} value={dest}>
                  {dest}
                </option>
              ))}
            </select>
            {errors.destination && <p className="text-red-500 text-sm">{errors.destination}</p>}
          </div>
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
            {errors.checkIn && <p className="text-red-500 text-sm">{errors.checkIn}</p>}
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
            {errors.checkOut && <p className="text-red-500 text-sm">{errors.checkOut}</p>}
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
            {errors.guests && <p className="text-red-500 text-sm">{errors.guests}</p>}
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
            className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500"
          ></textarea>
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
