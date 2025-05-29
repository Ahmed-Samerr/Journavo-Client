import { Link } from "react-router-dom";

export default function AboutOfMain() {
  return (
    <>
      <section className="bg-gray-100 py-16 relative z-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="src/assets/aboutphoto.avif" // استبدله بصورة مناسبة
              alt="Discover Egypt"
              className="rounded-2xl shadow-lg"
            />
          </div>

          <div className="md:w-1/2 md:pl-12 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Discover Egypt with Ease
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Experience Egypt like you’ve never seen it before! Whether you’re
              into ancient pyramids, sunny beaches, or bustling city life we’ve
              got you covered. We’re here to make your journey smooth, fun, and
              full of memories. Curious about who we are and why we do what we
              do? Check out our story on the About page!
            </p>

            <Link
              to="/about"
              className=" px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg"
            >
              Click Here
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
