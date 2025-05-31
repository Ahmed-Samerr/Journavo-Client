import { useContext, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import { UserContext } from "../../Context/UserContext";

export default function Register() {
  let { userLogin, setuserLogin } = useContext(UserContext);
  const navigate = useNavigate();
  const [ApiError, setApiError] = useState("");
  const [isLoading, setisLoading] = useState(false);

  function handleRegister(values) {
    setisLoading(true);
    axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/signup", values)
      .then((res) => {
        setisLoading(false);

        if (res.data.message === "success") {
          localStorage.setItem("userToken", res.data.token);
          setuserLogin(res.data.token);
          navigate("/");
        }
      })
      .catch((res) => {
        setisLoading(false);
        setApiError(res.response?.data?.message || "An error occurred");
      });
  }

  let validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "min length is 3")
      .max(10, "max length is 10")
      .required("name is required"),
    email: Yup.string().email("invalid email").required("email is required"),
    phone: Yup.string()
      .matches(/^01[0125][0-9]{8}$/, "invalid phone number")
      .required("phone is required"),
    password: Yup.string()
      .matches(
        /^[A-Za-z0-9]{6,10}$/,
        "password should be between 6 to 10 chars"
      )
      .required("password is required"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "rePassword and password is not the same")
      .required("rePassword is required"),
  });

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    },
    validationSchema,
    onSubmit: handleRegister,
  });

  return (
    <>
      {ApiError && (
        <div className="max-w-md mx-auto bg-red-600 text-white font-bold rounded-lg p-3 my-4 text-center">
          {ApiError}
        </div>
      )}

      <div className="py-8 px-10 sm:px-6 lg:px-8">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-emerald-600 mb-6 text-center">
          Register Now
        </h2>

        <form
          onSubmit={formik.handleSubmit}
          className="max-w-md mx-auto space-y-6"
        >
          {/* Name */}
          <div className="relative z-0 w-full group">
            <input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
              type="text"
              name="name"
              id="name"
              className="block py-3 px-0 w-full text-base sm:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="name"
              className="absolute text-sm sm:text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500"
            >
              Enter Your Name
            </label>
          </div>
          {formik.errors.name && formik.touched.name && (
            <div className="text-sm text-red-500">{formik.errors.name}</div>
          )}

          {/* Email */}
          <div className="relative z-0 w-full group">
            <input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              type="email"
              name="email"
              id="email"
              className="block py-3 px-0 w-full text-base sm:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="absolute text-sm sm:text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500"
            >
              Enter Your Email
            </label>
          </div>
          {formik.errors.email && formik.touched.email && (
            <div className="text-sm text-red-500">{formik.errors.email}</div>
          )}

          {/* Phone */}
          <div className="relative z-0 w-full group">
            <input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.phone}
              type="tel"
              name="phone"
              id="phone"
              className="block py-3 px-0 w-full text-base sm:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="phone"
              className="absolute text-sm sm:text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500"
            >
              Enter Your Phone
            </label>
          </div>
          {formik.errors.phone && formik.touched.phone && (
            <div className="text-sm text-red-500">{formik.errors.phone}</div>
          )}

          {/* Password */}
          <div className="relative z-0 w-full group">
            <input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
              type="password"
              name="password"
              id="password"
              className="block py-3 px-0 w-full text-base sm:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="absolute text-sm sm:text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500"
            >
              Enter Your Password
            </label>
          </div>
          {formik.errors.password && formik.touched.password && (
            <div className="text-sm text-red-500">{formik.errors.password}</div>
          )}

          {/* RePassword */}
          <div className="relative z-0 w-full group">
            <input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.rePassword}
              type="password"
              name="rePassword"
              id="rePassword"
              className="block py-3 px-0 w-full text-base sm:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="rePassword"
              className="absolute text-sm sm:text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500"
            >
              Enter Your rePassword
            </label>
          </div>
          {formik.errors.rePassword && formik.touched.rePassword && (
            <div className="text-sm text-red-500">
              {formik.errors.rePassword}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <button
              type="submit"
              className="w-auto sm:w-auto text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base sm:text-lg px-10 py-1 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800 transition"
              disabled={isLoading}
            >
              {isLoading ? (
                <i className="fas fa-spinner fa-spin"></i>
              ) : (
                "Register"
              )}
            </button>

            <Link to={"/login"} className="w-full sm:w-auto text-center">
              <span className="text-blue-500 underline text-sm sm:text-base cursor-pointer inline-block mt-1 sm:mt-0">
                Do you have an account? Login Now
              </span>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
