import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import banner1 from '../../../assets/Home/Banner/banner1.jpg'
import banner2 from '../../../assets/Home/Banner/banner2.jpg'
import banner3 from '../../../assets/Home/Banner/banner3.jpg'
import banner4 from '../../../assets/Home/Banner/banner4.jpg'
import banner5 from '../../../assets/Home/Banner/banner5.jpg'

const Banner = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="w-full">
            <img src={banner1} className='object-cover w-full md:h-[700px]' alt="banner-photo" />
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="w-full">
            <img src={banner2} className='object-cover w-full md:h-[700px]' alt="banner-photo" />
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="w-full">
            <img src={banner3} className='object-cover w-full md:h-[700px]' alt="banner-photo" />
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="w-full">
            <img src={banner4} className='object-cover w-full md:h-[700px]' alt="banner-photo" />
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="w-full">
            <img src={banner5} className='object-cover w-full md:h-[700px]' alt="banner-photo" />
        </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
