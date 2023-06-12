import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import banner1 from "../../../assets/Home/Banner/banner1.jpg";
import banner2 from "../../../assets/Home/Banner/banner2.jpg";
import banner3 from "../../../assets/Home/Banner/banner3.jpg";
import banner4 from "../../../assets/Home/Banner/banner4.jpg";
import banner5 from "../../../assets/Home/Banner/banner5.jpg";
import "./Banner.css";



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
          <div className="w-full banner-slide">
            <img
              src={banner1}
              className="object-cover md:object-fill w-full h-[400px] md:h-[500px]"
              alt="banner-photo"
            />
            <div className="banner-overlay">
              <div className="md:w-2/3 md:ml-20">
                <h2 className="text-xl md:text-5xl text-[#86E5DC] font-bold mb-4">
                  Unlock Your Musical Potential
                </h2>
                <p className="md:text-xl">
                  Experience the joy of playing an instrument with our expert
                  instructors. Join our music school and embark on a journey of
                  musical discovery.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full banner-slide">
            <img
              src={banner2}
              className="object-cover md:object-fill w-full h-[400px] md:h-[500px]"
              alt="banner-photo"
            />
            <div className="banner-overlay">
              <div className="md:w-2/3 md:ml-20">
                <h2 className="text-xl md:text-5xl text-[#86E5DC] font-bold mb-4">
                  Discover the Joy of Music
                </h2>
                <p className="md:text-xl">
                  At our music school, we offer comprehensive lessons for all
                  skill levels. Whether you are a beginner or an advanced
                  musician, we have the perfect program to help you achieve your
                  musical goals.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full banner-slide">
            <img
              src={banner3}
              className="object-cover md:object-fill w-full h-[400px] md:h-[500px]"
              alt="banner-photo"
            />
            <div className="banner-overlay">
              <div className="md:w-2/3 md:ml-20">
                <h2 className="text-xl md:text-5xl text-[#86E5DC] font-bold mb-4">
                  Ignite Your Passion for Music
                </h2>
                <p className="md:text-xl">
                  Immerse yourself in the world of music and let your creativity
                  soar. Learn to play your favorite instruments from our
                  passionate instructors and unleash your musical talent.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full banner-slide">
            <img
              src={banner4}
              className="object-cover md:object-fill w-full h-[400px] md:h-[500px]"
              alt="banner-photo"
            />
            <div className="banner-overlay">
              <div className="md:w-2/3 md:ml-20">
                <h2 className="text-xl md:text-5xl text-[#86E5DC] font-bold mb-4">
                  Music Education at Its Finest
                </h2>
                <p className="md:text-xl">
                  Experience top-quality music education in a supportive and
                  inspiring environment. Our school is dedicated to providing
                  exceptional instruction that nurtures a lifelong love of
                  music.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full banner-slide">
            <img
              src={banner5}
              className="object-cover md:object-fill w-full h-[400px] md:h-[500px]"
              alt="banner-photo"
            />
            <div className="banner-overlay">
              <div className="md:w-2/3 md:ml-20">
                <h2 className="text-xl md:text-5xl text-[#86E5DC] font-bold mb-4">
                  Master the Art of Music
                </h2>
                <p className="md:text-xl">
                  Take your musical skills to new heights with our professional
                  music lessons. Our experienced teachers will guide you through
                  a personalized curriculum designed to maximize your potential.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
