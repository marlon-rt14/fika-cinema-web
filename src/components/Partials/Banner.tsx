import SwiperCore from "swiper/core";
import { Autoplay, EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
// import "./styles/swiper.css";

const BANNER_IMAGES = [
  "https://lumiere-a.akamaihd.net/v1/images/eu_avr-3_showcase_hero_v2_m_5acaf64a.jpeg?region=0,0,750,668",
  "https://m.media-amazon.com/images/M/MV5BN2U4OTdmM2QtZTkxYy00ZmQyLTg2N2UtMDdmMGJmNDhlZDU1XkEyXkFqcGc@._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMWY0NWE0ZjUtNjRlOS00ZDViLTgxNTQtMGMwN2FhNDY1YTg2XkEyXkFqcGc@._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BNmQxNjZlZTctMWJiMC00NGMxLWJjNTctNTFiNjA1Njk3ZDQ5XkEyXkFqcGc@._V1_.jpg",
  "https://m.media-amazon.com/images/S/pv-target-images/c0eb11e88e680bf8b1ddf3e475ca5a62f825cacad62ccb43f434c4de65302d9c.jpg",
  "https://lumiere-a.akamaihd.net/v1/images/tidalwave_payoff_poster_las_0a47c6a2.jpeg",
];

export const Banner = () => {
  SwiperCore.use([EffectCards, Autoplay]);
  return (
    <div className="z-10 h-[75vh] relative p-10 flex items-center gap-5">
      <div className="flex-[1] z-20">
        <h1 className="text-white text-wrap text-responsive-xl font-bold leading-20">Enjoy your favorite movies in one place!!</h1>
      </div>
      <div className="flex-[2] flex h-full  ">
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
          // onInit={(swiper) => {
          //   swiper.slides.forEach((slide, index) => {
          //     slide.style.opacity = "1";
          //     slide.style.transition = "all 0.5s ease-in-out";
          //     slide.style.transform = index === 0 ? "scale(1)" : "scale(0.8)";
          //   });
          // }}
          // onSlideChangeTransitionStart={(swiper) => {
          //   swiper.slides[swiper.activeIndex].style.opacity = "0";
          // }}
          // onSlideChangeTransitionEnd={(swiper) => {
          //   swiper.slides[swiper.activeIndex].style.opacity = "1";
          // }}
          className="max-w-lg w-full mySwiper"
        >
          {BANNER_IMAGES.map((image, index) => (
            <SwiperSlide key={index}>
              <Slide path={image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const Slide = ({ path }: { path: string }) => {
  return (
    <div className="h-full w-full !rounded-2xl overflow-hidden">
      <img src={path} alt="banner-img" className="banner-img !rounded-2xl" />
    </div>
  );
};
