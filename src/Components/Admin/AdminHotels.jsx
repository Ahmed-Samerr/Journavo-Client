import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

const AdminHotels = () => {
  const { users } = useContext(UserContext);
  return (
    <div className=" min-h-screen bg-gradient-to-br from-gray-100 to-white py-32 px-4 md:px-16 animate-fade-in">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
        Manage Hotels
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-[900px] w-full bg-white border border-gray-300 rounded-lg shadow-lg">
          <thead className="bg-gray-200 text-gray-700 text-sm sm:text-base">
            <tr>
              <th className="p-2 sm:p-3 text-center w-12">ID</th>
              <th className="p-2 sm:p-3 text-center w-40">Name</th>
              <th className="p-2 sm:p-3 text-center w-64">Price</th>
              <th className="p-2 sm:p-3 text-center w-32">Location</th>
              <th className="p-2 sm:p-3 text-center w-20">Rate</th>
              <th className="p-2 sm:p-3 text-center w-64">Images</th>
              <th className="p-2 sm:p-3 text-center w-20">Guests</th>
              <th className="p-2 sm:p-3 text-center w-20">Travel Class</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) =>
              u.cart
                .filter((uc) => uc.category === "Hotels")
                .map((hotel, id) => (
                  <tr
                    key={id}
                    className="text-center border-t border-gray-200 hover:bg-blue-50 transition duration-300 text-sm sm:text-base"
                  >
                    <td className="p-2 sm:p-3 text-gray-600">{id}</td>
                    <td className="p-2 sm:p-3 font-semibold text-gray-800">
                      {hotel.title}
                    </td>
                    <td className="p-2 sm:p-3 text-gray-600">{hotel.price}</td>
                    <td className="p-2 sm:p-3 text-gray-700">
                      {hotel.location}
                    </td>
                    <td className="p-2 sm:p-3 text-yellow-600 font-semibold">
                      4.5 ⭐
                    </td>
                    <td className="p-2 sm:p-3">
                      <div className="flex gap-2 justify-center flex-wrap">
                        <img
                          key={id}
                          src={hotel.image}
                          alt="img"
                          className="w-24 h-16 object-cover rounded-md shadow-sm hover:scale-105 transition duration-300"
                        />
                      </div>
                    </td>
                    {hotel.details.map((d, i) => (
                      <React.Fragment key={i}>
                        <td className="p-2 sm:p-3 text-gray-700">{d.guests}</td>
                        <td className="p-2 sm:p-3 text-gray-700">
                          {d.travelClass}
                        </td>
                      </React.Fragment>
                    ))}
                  </tr>
                ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminHotels;
