import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Hkb = () => {
  return (
    <section className="w-full h-[50vh] md:h-auto bg-amber-200 overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="w-full h-full"
      >
        <SwiperSlide>
          <div className="bg-amber-300 mt-3 p-3 w-full h-full relative text-bottom">
            <img src="/images/hkbfirst.jpg" alt="" />
            <h3 className="bottom-6 left-6 text-white text-bottom">Why </h3>
            <p className="bg-amber-300cbottom-6 left-6 text-white text-bottom">Adopt </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-amber-300 mt-3 p-3 w-full h-full relative text-bottom">
            <img src="/images/hkcsecond.jpg" alt="" />
            <h3 className="bottom-6 left-6 text-white text-bottom">Save a Life</h3>
            <p className="bottom-6 left-6 text-white text-bottom">Give a loving home to a pet in need</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-amber-300 mt-3 p-3 w-full h-full relative text-bottom">
            <img src="/images/hkbthird.jpg" alt="" />
            <h3 className="bottom-6 left-6 text-white text-bottom">Bring Happiness Home</h3>
            <p className="bottom-6 left-6 text-white text-bottom">Pets are Joyful companions</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-amber-300 mt-3 p-3 w-full h-full relative text-bottom">
            <img src="/images/hkbfourth.jpg" alt="" />
            <h3 className="bottom-6 left-6 text-white text-bottom">Healthy & Vaccinated</h3>
            <p className="bottom-6 left-6 text-white text-bottom">Most adoptable pets are vaccinated</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hkb;
