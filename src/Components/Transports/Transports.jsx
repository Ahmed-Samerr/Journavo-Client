// import gobus from "../../assets/gobus.jpg"
// import bluebus from "../../assets/bluebus.jpg"
// import SuperJet from "../../assets/SuperJet.jpg"
// import westdelta from "../../assets/westdelta.jpg"
// import elgouna from "../../assets/elgouna.jpg"
// import upperegypt from "../../assets/upperegypt.jpg"


// const Transports = () => {
//   const transports = [
//     {
//       id: 1,
//       name: "Go Bus",
//       location: "Nationwide",
//       image: gobus,
//       price: "Starting from 100 EGP",
//     },
//     {
//       id: 2,
//       name: "Blue Bus",
//       location: "Cairo, Alexandria, Hurghada",
//       image: bluebus ,
//       price: "Starting from 120 EGP",
//     },
//     {
//       id: 3,
//       name: "Super Jet",
//       location: "Most Governorates",
//       image: SuperJet,
//       price: "Starting from 110 EGP",
//     },
//     {
//       id: 4,
//       name: "West Delta Bus",
//       location: "North Coast, Alexandria",
//       image: "/images/westdelta.jpg",
//       price: "From 90 EGP",
//     },
//     {
//       id: 5,
//       name: "El Gouna Bus",
//       location: "Red Sea Cities",
//       image: "/images/elgouna.jpg",
//       price: "From 150 EGP",
//     },
//     {
//       id: 6,
//       name: "Upper Egypt Transport",
//       location: "Luxor, Aswan, Sohag",
//       image: "/images/upperegypt.jpg",
//       price: "From 130 EGP",
//     },
//     {
//       id: 7,
//       name: "East Delta Travel",
//       location: "Sinai, Ismailia, Suez",
//       image: "/images/eastdelta.jpg",
//       price: "From 115 EGP",
//     },
//     {
//       id: 8,
//       name: "Misr Travel",
//       location: "Tourist Buses & Private Trips",
//       image: "/images/misrtravel.jpg",
//       price: "Custom Pricing",
//     },
//     {
//       id: 9,
//       name: "Jet Bus",
//       location: "Airport Transfers & Cities",
//       image: "/images/jetbus.jpg",
//       price: "From 140 EGP",
//     },
//   ];
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-gray-50 to-white py-12 px-4 md:px-20">
//       <h1 className="text-4xl font-bold text-gray-800 text-center mb-12 animate-fade-in">
//         Explore Transport Services in Egypt
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {transports.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 duration-300 animate-fade-in"
//           >
//             <img
//               src={item.image}
//               alt={item.name}
//               className="w-full h-52 object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
//               <p className="text-gray-600 mt-1">{item.location}</p>
//               <p className="text-gray-800 font-semibold mt-2">{item.price}</p>
//               <button className="mt-4 w-full bg-gray-700 text-white py-2 rounded hover:bg-gray-900 transition-all duration-300">
//                 View Schedule
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Transports;
