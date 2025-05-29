import React from 'react'
import style from "./Footer.module.css"


export default function Footer() {
  return <>
  
  <footer className="bg-black">
  <div className="  mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
    <div className=" end-4  sm:end-6  lg:end-8 ">
     
        <span className="sr-only">Back to top</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      
    </div>

    <div className="lg:flex lg:items-end lg:justify-between">
      <div>
        <div className="flex justify-center text-teal-600 lg:justify-start">
          
        <p className="mx-auto mt-6 max-w-md text-right leading-relaxed text-gray-500 lg:text-right">
         JOURNOVA
        </p>

        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa
          cum itaque neque.
        </p>
      </div>

      <ul
        className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
      >
        <li>
          <a className="text-white transition hover:text-white/75" href="#"> About </a>
        </li>

        <li>
          <a className="text-white transition hover:text-white/75" href="#"> Services </a>
        </li>

        <li>
          <a className="text-white transition hover:text-white/75" href="#"> Cart </a>
        </li>

        <li>
          <a className="text-white transition hover:text-white/75" href="#"> Booking </a>
        </li>

        <li>
          <a className="text-white transition hover:text-white/75" href="#"> Wishlist </a>
        </li>
      </ul>
    </div>

    <p className="mt-12 text-center text-sm text-white lg:text-right">
      JOURNOVA &copy; 2025. All rights reserved.
    </p>
  </div>
</footer>




  
  
  
  </>
}
