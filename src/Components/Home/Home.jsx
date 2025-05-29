import MainSlider from "../MainSlider/MainSlider";

export default function Home() {
  return (
    <div className="w-full">
      <section className="relative w-full h-screen overflow-hidden">
        {/* فيديو الخلفية */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
        >
          <source src="/videos/bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* طبقة تغميق خلف النص فقط */}
        <div className="absolute top-1/2 left-8 transform -translate-y-1/2 w-fit px-6 py-4 bg-black/30 rounded-lg z-10">
          {/* اسم الموقع مع أنيميشن بسيطة */}
          <h1 className="text-white text-4xl md:text-5xl font-bold animate-fade-in-left">
            JOURNAVO
          </h1>
        </div>
      </section>
      <div className="">
        <MainSlider />
        {/* <CategoriesSlider/> */}
      </div>
      {/* <About /> */}
    </div>
  );
}
