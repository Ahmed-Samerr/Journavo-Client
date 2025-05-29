import React from "react";
import { FaSuitcase, FaGlobe, FaThumbsUp } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <>
      <section
        className="bg-cover bg-center text-white py-auto "
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1350&q=80)",
        }}
      >
        <div className="bg-black bg-opacity-60  py-12">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">WHY CHOOSE US?</h2>
            <p className="text-lg mb-12">
              YOUR GATEWAY TO SAFE AND MEMORABLE ADVENTURES IN EGYPT
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5c p-5">
              {/* Box 1 */}
              <div className="flex flex-col items-center">
                <div className="bg-white text-orange-500 p-4 rounded-full mb-4">
                  <FaSuitcase className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2 w-100">
                  AFFORDABLE PRICE GUARANTEE
                </h3>
                <p className="text-sm text-gray-300 font-medium">
                  Discover the magic of Egypt without breaking the bank! From
                  the majestic Pyramids to the stunning Red Sea shores, we offer
                  unforgettable experiences at unbeatable prices with no hidden
                  fees.
                </p>
              </div>
              {/* Box 2 */}
              <div className="flex flex-col items-center">
                <div className="bg-white text-orange-500 p-4 rounded-full mb-4">
                  <FaGlobe className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2 ">
                  WIDE VARIETY OF DESTINATIONS
                </h3>
                <p className="text-sm text-gray-300 font-medium">
                  Whether you dream of the vibrant streets of Cairo, the ancient
                  temples of Luxor and Aswan, or the relaxing beaches of
                  Hurghada and Sharm El Sheikh Egypt has it all. Every corner
                  tells a story, and we’ll take you there.
                </p>
              </div>
              {/* Box 3 */}
              <div className="flex flex-col items-center">
                <div className="bg-white text-orange-500 p-4 rounded-full mb-4">
                  <FaThumbsUp className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  HIGHLY QUALIFIED SERVICE
                </h3>
                <p className="text-sm text-gray-300 font-medium">
                  Our expert local team ensures your trip through Egypt is
                  smooth, safe, and filled with unforgettable memories. From
                  professional tour guides to 24/7 support, we’re with you every
                  step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
