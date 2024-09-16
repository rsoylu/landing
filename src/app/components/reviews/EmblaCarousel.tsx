"use client";
import React from "react";

import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";

import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrows";
import Review from "./Review";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section>
      <div className="flex flex-row justify-center items-center gap-4">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <div className="overflow-hidden	" ref={emblaRef}>
          <div className="flex flex-none gap-14">
            <div>
              <Review
                imagesrc="/media/review-1.jpg"
                text="The bouquet was stunning, and the weekly seasonal flowers always brighten my home."
                name="James Thompson"
                title="Marketing Executive"
              />
            </div>
            <div>
              <Review
                imagesrc="/media/review-2.webp"
                text="Amazing service, flowers were delivered on time and looked beautiful!"
                name="Emily Smith"
                title="Event Planner"
              />
            </div>
            <div>
              <Review
                imagesrc="/media/review-3.avif"
                text="Great experience! The flowers are always fresh and vibrant, highly recommend."
                name="Sophia Patel"
                title="Wedding Coordinator"
              />
            </div>
            <div>
              <Review
                imagesrc="/media/review-5.jpg"
                text="Lovely flowers, but the arrangement could have been more creative."
                name="Flavio Zanoni"
                title="Business Owner"
              />
            </div>
            <div>
              <Review
                imagesrc="/media/review-4.webp"
                text="Absolutely fantastic! The flowers were perfect for my event, couldn't be happier."
                name="Danny DeVito"
                title="Actor & Director"
              />
            </div>
          </div>
        </div>
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </section>
  );
};

export default EmblaCarousel;
