import React, { useState } from 'react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    travelClass: 'Economy',
    requests: '',
  });

  const destinations = ['Cairo', 'Alexandria', 'Luxor', 'Aswan', 'Sharm El-Sheikh'];
  const travelClasses = ['Economy', 'Business', 'VIP'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Info:', formData);
    alert('Booking submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white py-12 px-4 md:px-16 animate-fade-in">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">Book Your Journey Now</h1>

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
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500"
              required
            />
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
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Destination</label>
            <select
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select a destination</option>
              {destinations.map((dest, index) => (
                <option key={index} value={dest}>
                  {dest}
                </option>
              ))}
            </select>
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
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Check-out Date</label>
            <input
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500"
              required
            />
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
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500"
              required
            />
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
