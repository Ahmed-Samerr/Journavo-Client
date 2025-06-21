import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import Wishlist from "./Components/Wishlist/Wishlist";
import Services from "./Components/Services/Services";
import Loading from "./Components/Loading/loading";
import Login from "./Components/Login/Login";
import Notfound from "./Components/Notfound/Notfound";
import BookingSuccess from "./Components/BookingSuccess/BookingSuccess";
import Register from "./Components/Register/Register";
import CounterContextProvider from "./Context/CounterContext";
import UserContextprovider from "./Context/UserContext";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import About from "./Components/About/About";
import Booking from "./Components/Booking/Booking";
import Hotels from "./Components/Holtels/Hotels";
import Trips from "./Components/Trips/Trips";
import Transports from "./Components/Transports/Transports";
import Admin from "./Components/Admin/Admin";
import AdminHotels from "./Components/Admin/AdminHotels";
import AdminTrips from "./Components/Admin/AdminTrips";
import AdminTransports from "./Components/Admin/AdminTransports";

let query = new QueryClient();

let x = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "About", element: <About /> },
      { path: "Services", element: <Services /> },
      { path: "Trips", element: <Trips /> },
      { path: "Hotels", element: <Hotels /> },
      {
        path: "Transports",
        element: <Transports />,
      },
      {
        path: "Wishlist",
        element: (
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>
        ),
      },
      {
        path: "Cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },

      {
        path: "Booking",
        element: (
          <ProtectedRoute>
            <Booking />
          </ProtectedRoute>
        ),
      },

      // هُنا مسار صفحة نجاح الحجز لازم يكون هنا قبل مسار النجمة
      {
        path: "booking-success",
        element: <BookingSuccess />,
      },

      {
        path: "Admin",
        element: (
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        ),
      },
      {
        path: "AdminHotels",
        element: (
          <ProtectedRoute>
            <AdminHotels />
          </ProtectedRoute>
        ),
      },
      {
        path: "AdminTrips",
        element: (
          <ProtectedRoute>
            <AdminTrips />
          </ProtectedRoute>
        ),
      },
      {
        path: "AdminTransports",
        element: (
          <ProtectedRoute>
            <AdminTransports />
          </ProtectedRoute>
        ),
      },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },

      // هذا مسار 404
      { path: "*", element: <Notfound /> },
    ],
  },
]);

export default function App() {
  return (
    <section id="App" className="relative">
      <UserContextprovider>
        <CounterContextProvider>
          <QueryClientProvider client={query}>
            <RouterProvider router={x} />
            <Loading />
          </QueryClientProvider>
        </CounterContextProvider>
      </UserContextprovider>
    </section>
  );
}
