import MainSlider from "../MainSlider/MainSlider";
import Video from "../../../public/videos/bg-video.mp4";

export default function Home() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full">
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
        >
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10 flex flex-col items-center justify-center p-6 sm:p-12">
          <div className="flex flex-col max-w-2xl text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white animate-fade-in-left mb-6 tracking-wide">
              JOURNAVO
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 animate-fade-in">
              Discover the beauty of Egypt with seamless hotel bookings, trips,
              and transport options. Plan your perfect journey today!
            </p>
          </div>

          {/* Scroll Down Indicator */}
          <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            onClick={scrollToContent}
          >
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start p-1">
              <div className="w-2 h-2 bg-white rounded-full animate-scroll-down"></div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <MainSlider />
      </div>
    </div>
  );
}
