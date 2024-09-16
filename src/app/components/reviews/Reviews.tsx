import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
function Reviews() {
  const OPTIONS: EmblaOptionsType = {};
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <div id="reviews">
      <div className="w-full h-auto bg-white flex flex-col">
        <div className="w-full h-auto my-16 md:my-24 text-center text-rose-800  font-serif">
          <h1 className="text-4xl md:text-5xl wide:text-6xl font-playfair">
            Hear from Our Satisfied Clients
          </h1>
          <h1 className="text-xl md:text-2xl wide:text-3xl opacity-25 mt-4 font-playfair">
            Words from those who have tried our services
          </h1>
        </div>
        <div className="w-full h-auto pb-16 ">
          <div className="w-[90%] md:w-[60%] h-[100%] ml-[5%] md:ml-[20%] ">
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Reviews;
