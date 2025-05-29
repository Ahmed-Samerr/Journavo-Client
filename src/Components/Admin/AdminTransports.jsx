const AdminTransports = () => {
  // بيانات تجريبية لشركات المواصلات
  const transports = [
    {
      name: "Go Bus",
      rate: 4.2,
      logo: "/images/gobus.jpg",
      vehicles: 120,
    },
    {
      name: "Blue Bus",
      rate: 4.0,
      logo: "/images/bluebus.jpg",
      vehicles: 80,
    },
    {
      name: "West Delta Bus",
      rate: 3.8,
      logo: "/images/westdelta.jpg",
      vehicles: 60,
    },
    {
      name: "Super Jet",
      rate: 4.3,
      logo: "/images/superjet.jpg",
      vehicles: 100,
    },
    {
      name: "El Gouna Bus",
      rate: 4.1,
      logo: "/images/elgouna.jpg",
      vehicles: 50,
    },
    {
      name: "Sinai Bus",
      rate: 3.9,
      logo: "/images/sinai.jpg",
      vehicles: 40,
    },
    {
      name: "East Delta Travel",
      rate: 3.7,
      logo: "/images/eastdelta.jpg",
      vehicles: 55,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white py-12 px-4 md:px-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Manage Transport Companies
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-gray-100 text-gray-800">
            <tr>
              <th className="p-4 ">Name</th>
              <th className="p-4 ">Rate</th>
              <th className="p-4 ">Logo</th>
              <th className="p-4 ">Number of Vehicles</th>
            </tr>
          </thead>
          <tbody>
            {transports.map((company, index) => (
              <tr key={index} className="border-t border-gray-200 hover:bg-gray-50">
                <td className="p-4 font-semibold">{company.name}</td>
                <td className="p-4">{company.rate}</td>
                <td className="p-4">
                  <img
                    src={company.logo}
                    alt={`${company.name} Logo`}
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>
                <td className="p-4">{company.vehicles}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTransports;
