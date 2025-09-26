import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Hkb = () => {
  return (
    <section className="bg-amber-200 ">
      <Swiper  
      modules={[Autoplay]} 
      spaceBetween={20} 
       slidesPerView={1}
      autoplay={{delay:2500,disableOnInteraction:false,}}
     className="w-full h-100">


        <SwiperSlide>
          <div className=" flex bg-amber-300 text-bottom relative w-full h-100">         
            <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-bottom">Why Adopt</h3>
            </div>
          </div>
        </SwiperSlide>

         <SwiperSlide>
          <div className="bg-amber-300 text-bottom relative w-full h-100">
            <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-bottom">Save a Life</h3>
            <p>Give a loving home to a pet in need</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="bg-amber-300 text-bottom relative w-full h-100">          
            <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-bottom">Bring Happiness Home</h3>
            <p>Pets bring joy and companionship.</p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-amber-300 text-bottom relative w-full h-100">       
            <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-bottom">Healthy & Vaccinated</h3>
            <p>Most adoptable pets are vaccinated and ready for adoption</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Hkb