import SwiperCore from "swiper/core";
import { Autoplay, EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BANNER_IMAGES, SlideItem } from "@components/Partials/components/Header";
import "swiper/swiper-bundle.css";
import "./swiper.style.css";

export const Banner = () => {
  SwiperCore.use([EffectCards, Autoplay]);
  return (
    <div className="z-10 h-[calc(100%-62px)] relative p-10 flex items-center gap-5 max-lg:flex-col max-lg:pt-5">
      <div className="flex-[1] z-20 max-lg:w-full max-lg:text-center max-lg:flex-[0]  ">
        <h1 className="text-white text-wrap text-responsive-xl font-bold leading-20 max-md:text-responsive-lg max-md:leading-relaxed">
          Enjoy your favorite movies in one place!!
        </h1>
      </div>
      <div className="flex-[2] flex h-full max-lg:w-full max-lg:h-full relative overflow-hidden ">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Autoplay]}
          slidesPerView={1}
          spaceBetween={5}
          loop
          speed={1000}
          autoplay={{ delay: 1000, disableOnInteraction: false, waitForTransition: true }}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          className="max-w-lg w-full h-full mySwiper"
        >
          {BANNER_IMAGES.map((image, index) => (
            <SwiperSlide key={index}>
              <SlideItem path={image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};


