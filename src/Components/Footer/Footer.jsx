export default function Footer() {
  return (
    <>
      <footer className="bg-blue-800">
        <div className="  mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className=" end-4  sm:end-6  lg:end-8 ">
            <span className="sr-only">Back to top</span>
          </div>

          <div className="lg:flex lg:items-center lg:justify-between">
            <div>
              <div className="flex justify-center text-teal-600 lg:justify-center">
                <p
                  className="mt-6 w-full text-center leading-relaxed text-white font-bold
"
                >
                  JOURNOVA
                </p>
              </div>

              <p className="mx-auto mt-2 max-w-md text-center leading-relaxed text-white ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt consequuntur amet culpa cum itaque neque.
              </p>
            </div>

            <ul className="mt-12 mt-lg-5 flex flex-wrap justify-center gap-5 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
              <li>
                <a
                  className="text-white transition hover:text-white/75"
                  href="/About"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-white/75"
                  href="/Services"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-white/75"
                  href="/Cart"
                >
                  Cart
                </a>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-white/75"
                  href="/Booking"
                >
                  Booking
                </a>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-white/75"
                  href="/Wishlist"
                >
                  Wishlist
                </a>
              </li>
            </ul>
          </div>

          <p className="mt-10 text-center text-sm text-white lg:text-center">
            JOURNOVA &copy; 2025. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
