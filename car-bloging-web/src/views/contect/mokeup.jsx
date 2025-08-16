import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Mokeup = ({ data }) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data?.slice(1, 5).map((page) => {
          return (
            <SwiperSlide
              key={page?.id}
              className="max-w-[1280px] mx-auto bg-cover bg-center font-poppins"
              style={{ backgroundImage: `url(${page?.img})` }}
            >
              <h2 className="font-bold text-[25px] md:text-[50px] max-w-[450px] mx-[90px] my-[150px] text-white ">
                {page?.title}
              </h2>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Mokeup;
