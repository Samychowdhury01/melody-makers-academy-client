/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Rating } from "@smastrom/react-rating";

const Reviews = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
  });
  return (
    <div className="my-24 p-5 md:p-0 text-white">
      <h1 className="text-[#86E5DC] text-3xl md:text-5xl font-semibold text-center mt-16">
        Student Reviews
      </h1>

      <div className="border-b border-[#30CD8E] pb-5 w-2/3 mx-auto mb-10"></div>
      <div
        ref={sliderRef}
        className="keen-slider md:h-96 bg-transparent  mb-24 p-2 rounded-xl shadow-2xl"
      >
        <div className="keen-slider__slide number-slide1 flex items-center justify-center text-center">
          <div className="md:w-1/2 p-8 md:p-0">
            <p className="mb-2">
              "MelodyMakers Academy offers guitar lessons that are simply
              exceptional. The instructors possess remarkable talent and
              expertise, guiding students with patience and enthusiasm. The
              practice rooms are well-equipped with high-quality instruments,
              creating an ideal learning environment."
            </p>

            <h3 className="font-bold">- Sarah</h3>
          </div>
        </div>
        <div className="keen-slider__slide number-slide2 flex items-center justify-center text-center">
          <div className="md:w-1/2 p-8 md:p-0">
            <p className="mb-2">
              "At MelodyMakers Academy, the piano lessons are nothing short of
              perfection. The instructors' knowledge and dedication ensure
              students receive comprehensive guidance and develop their skills
              effectively. The Academy's commitment to excellence is evident in
              the well-maintained practice rooms and top-tier instruments."
            </p>
            <h3 className="font-bold">- Maya</h3>
          </div>
        </div>
        <div className="keen-slider__slide number-slide3 flex items-center justify-center text-center">
          <div className="md:w-1/2 p-8 md:p-0">
            <p className="mb-2">
              "For flute enthusiasts, MelodyMakers Academy is a haven of
              excellence. The instructors' attention to detail and their ability
              to nurture talent make the learning experience truly delightful.
              The Academy's supportive atmosphere enhances musical growth and
              fosters a love for the flute."
            </p>
            <h3 className="font-bold">- Alex</h3>
          </div>
        </div>
        <div className="keen-slider__slide number-slide4 flex items-center justify-center text-center">
          <div className="md:w-1/2 p-8 md:p-0">
            <p className="mb-2">
              "Drummers will find their rhythm at MelodyMakers Academy. The
              instructors' passion and expertise create an inspiring environment
              for learning. The well-designed drum rooms and quality equipment
              make the drumming experience truly rewarding."
            </p>
            <h3 className="font-bold">- Jake</h3>
          </div>
        </div>
        <div className="keen-slider__slide number-slide5 flex items-center justify-center text-center">
          <div className="md:w-1/2 p-8 md:p-0">
            <p className="mb-2">
              "MelodyMakers Academy offers an enchanting violin journey. The
              instructors' dedication and the Academy's commitment to quality
              instruments provide a solid foundation for violinists to flourish.
              Students are guided with care and precision, ensuring a memorable
              musical adventure."
            </p>
            <h3 className="font-bold">- Emily</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
