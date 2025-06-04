import { useContext, useState } from "react";
import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import { UserContext } from "../../Context/UserContext";
import { checkCredentials } from "../../connection/services";

export default function Login() {
  const { setUser, setLogin } = useContext(UserContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  function handleLogin(values) {
    setIsLoading(true);
    checkCredentials(
      `/user/clientType`,
      values,
      setUser,
      setIsLoading,
      navigate,
      setLogin,
      setIsLoading
    );
  }

  let validationSchema = Yup.object().shape({
    email: Yup.string().email("invalid email").required("email is required"),
    password: Yup.string()
      .matches(
        /^[A-Za-z0-9]{6,10}$/,
        "password should be between 6 to 10 chars"
      )
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
    <>
      <div className="py-32 px-10 sm:px-6 lg:px-8">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-emerald-600 mb-6 text-center">
          Login Now
        </h2>

        <form
          onSubmit={formik.handleSubmit}
          className="max-w-md mx-auto space-y-6"
        >
          {/* Email */}
          <div className="relative z-0 w-full group">
            <input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              type="email"
              name="email"
              id="email"
              className="block py-3 px-0 w-full text-base sm:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="absolute text-sm sm:text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:text-emerald-600"
            >
              Enter Your Email
            </label>
          </div>
          {formik.errors.email && formik.touched.email && (
            <div className="text-sm text-red-500">{formik.errors.email}</div>
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
              className="block py-3 px-0 w-full text-base sm:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="absolute text-sm sm:text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:text-emerald-600"
            >
              Enter Your Password
            </label>
          </div>
          {formik.errors.password && formik.touched.password && (
            <div className="text-sm text-red-500">{formik.errors.password}</div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <button
              type="submit"
              className="w-auto sm:w-auto text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base sm:text-lg px-10 py-1 text-center transition"
              disabled={isLoading}
            >
              {isLoading ? <i className="fas fa-spinner fa-spin"></i> : "Login"}
            </button>

            <Link to={"/register"} className="w-full sm:w-auto text-center">
              <span className="text-blue-500 underline text-sm sm:text-base cursor-pointer inline-block mt-1 sm:mt-0">
                Don’t have an account? Register Now
              </span>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
