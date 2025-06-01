import { useContext, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import { UserContext } from "../../Context/UserContext";

export default function Login() {
  const { setuserLogin } = useContext(UserContext);
  const navigate = useNavigate();
  const [ApiError, setApiError] = useState("");
  const [isLoading, setisLoading] = useState(false);

  function handleLogin(values) {
    setisLoading(true);
    axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/signin", values)
      .then((res) => {
        setisLoading(false);
        if (res.data.message == "success") {
          localStorage.setItem("userToken", res.data.token);
          setuserLogin(res.data.token);
          navigate("/");
        }
      })
      .catch((res) => {
        setisLoading(false);
        setApiError(res.response.data.message);
      });
  }

  let validationSchema = Yup.object().shape({
    email: Yup.string().email("invalid email").required("email is required"),
    password: Yup.string()
      .matches(/^[A-Za-z0-9]{6,10}$/, "password should be between 6 to 10 char")
      .required("password is required"),
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: handleLogin,
  });

  return (
    <section className="h-[60dvh] flex items-center justify-center bg-gradient-to-r from-emerald-50 to-white py-32 px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        {ApiError ? (
          <div className="bg-red-600 text-white font-bold rounded p-3 mb-4 text-center">
            {ApiError}
          </div>
        ) : null}

        <h2 className="font-bold text-2xl text-emerald-600 mb-6 text-center">
          Login Now
        </h2>

        <form onSubmit={formik.handleSubmit}>
          <div className="relative z-0 w-full mb-5 group">
            <input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              type="email"
              name="email"
              id="email"
              className="block mb-7 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:border-emerald-600 focus:outline-none peer"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Enter Your Email
            </label>
          </div>
          {formik.errors.email && formik.touched.email ? (
            <div className="p-2 mb-4 text-sm text-red-500" role="alert">
              {formik.errors.email}
            </div>
          ) : null}

          <div className="relative z-0 w-full mb-5 group">
            <input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
              type="password"
              name="password"
              id="password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:border-emerald-600 focus:outline-none peer"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Enter Your Password
            </label>
          </div>
          {formik.errors.password && formik.touched.password ? (
            <div className="p-2 mb-4 text-sm text-red-500" role="alert">
              {formik.errors.password}
            </div>
          ) : null}

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <button
              type="submit"
              className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              {isLoading ? <i className="fas fa-spinner fa-spin"></i> : "Login"}
            </button>
            <Link to="/register" className="text-blue-500 underline text-sm">
              Don’t have an account? Register Now
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
