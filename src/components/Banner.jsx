import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const Banner = () => {
  const slides = [
    {
      img: "https://images.pexels.com/photos/6925361/pexels-photo-6925361.jpeg?_gl=1*14yl5f4*_ga*MTIyMTQ0NjIwNi4xNzUzNTQ5MDE2*_ga_8JE65Q40S6*czE3NjExMzMwMDAkbzkkZzEkdDE3NjExMzMwMTMkajQ3JGwwJGgw",
      title: "Master New Skills.",
      subtitle: "Share Your Talents.",
    },
    {
      img: "https://images.pexels.com/photos/4145355/pexels-photo-4145355.jpeg?_gl=1*fzco7h*_ga*MTIyMTQ0NjIwNi4xNzUzNTQ5MDE2*_ga_8JE65Q40S6*czE3NjExMzMwMDAkbzkkZzEkdDE3NjExMzMwNzkkajQ4JGwwJGgw",
      title: "Learn Anytime.",
      subtitle: "Grow Everywhere.",
    },
    {
      img: "https://images.pexels.com/photos/5676744/pexels-photo-5676744.jpeg?_gl=1*1aibmk3*_ga*MTIyMTQ0NjIwNi4xNzUzNTQ5MDE2*_ga_8JE65Q40S6*czE3NjExMzMwMDAkbzkkZzEkdDE3NjExMzMwOTMkajM0JGwwJGgw",
      title: "Connect Creatively.",
      subtitle: "Inspire Others.",
    },
    {
      img: "https://images.pexels.com/photos/6914346/pexels-photo-6914346.jpeg?_gl=1*rqmj2*_ga*MTIyMTQ0NjIwNi4xNzUzNTQ5MDE2*_ga_8JE65Q40S6*czE3NjExMzU3MTMkbzEwJGcxJHQxNzYxMTM1NzM0JGozOSRsMCRoMA..",
      title: "Master New Skills.",
      subtitle: "Share Your Talents.",
    },
  ];

  return (
    <div className="w-full mx-auto rounded-2xl overflow-hidden shadow-xl">
      <Swiper
        modules={[Pagination, EffectFade, Autoplay]}
        effect="fade"
        loop={true}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-gray-300 !opacity-70 ",
          bulletActiveClass: "!opacity-100",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-[350px] flex items-center justify-start bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative z-10 text-white px-8">
                <div className="line mb-3"></div>
                <h2 className="text-3xl md:text-4xl font-bold ">
                  {slide.title}
                </h2>
                <h2 className="text-3xl md:text-4xl font-bold">
                  {slide.subtitle}
                </h2>
                <button className="btn mt-6 rounded-full border-none shadow-none btn-gradient text-white px-8">
                  Explore Skills
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
