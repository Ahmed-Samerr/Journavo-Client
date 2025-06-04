import img1 from "../../assets/gobus.jpg";
import img2 from "../../assets/bluebus.jpg";
import img3 from "../../assets/WestDelta.jpg";
import img4 from "../../assets/SuperJet.jpg";

const AdminTransports = () => {
  const transports = [
    {
      name: "Go Bus",
      rate: 4.2,
      logo: img1,
      vehicles: 120,
    },
    {
      name: "Blue Bus",
      rate: 4.0,
      logo: img2,
      vehicles: 80,
    },
    {
      name: "West Delta Bus",
      rate: 3.8,
      logo: img3,
      vehicles: 60,
    },
    {
      name: "Super Jet",
      rate: 4.3,
      logo: img4,
      vehicles: 100,
    },
  ];

  return (
    <div className="mt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white py-11 px-4 sm:px-6 lg:px-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
        Manage Transport Companies
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md text-center">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3 sm:p-4 text-sm sm:text-base">Name</th>
              <th className="p-3 sm:p-4 text-sm sm:text-base">Rate</th>
              <th className="p-3 sm:p-4 text-sm sm:text-base">Logo</th>
              <th className="p-3 sm:p-4 text-sm sm:text-base">
                Number of Vehicles
              </th>
            </tr>
          </thead>
          <tbody>
            {transports.map((company, index) => (
              <tr
                key={index}
                className="border-t border-gray-200 hover:bg-gray-50 transition"
              >
                <td className="p-3 sm:p-4 font-medium text-gray-800">
                  {company.name}
                </td>
                <td className="p-3 sm:p-4 text-gray-600">{company.rate}</td>
                <td className="p-3 sm:p-4">
                  <div className="w-32 h-32 mx-auto">
                    <img
                      src={company.logo}
                      alt={`${company.name} Logo`}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                </td>
                <td className="p-3 sm:p-4 text-gray-600">{company.vehicles}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTransports;
