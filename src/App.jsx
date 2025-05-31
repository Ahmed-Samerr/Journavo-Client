import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import Wishlist from "./Components/Wishlist/Wishlist";
import Services from "./Components/Services/Services";
import Loading from "./Components/Loading/loading";
import Login from "./Components/Login/Login ";
import Notfound from "./Components/Notfound/Notfound";
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
      // Open to all users, no token required
      { index: true, element: <Home /> },
      { path: "About", element: <About /> },
      { path: "Services", element: <Services /> },
      { path: "Trips", element: <Trips /> },
      { path: "Hotels", element: <Hotels /> },
      {
        path: "Wishlist",
        element: (
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>
        ),
      },

      // Pages that require authentication (token)
      {
        path: "Cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: "Transports",
        element: (
          <ProtectedRoute>
            <Transports />
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

      // Admin pages require auth too
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

      // Public pages for login and register
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },

      // Catch-all 404
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
