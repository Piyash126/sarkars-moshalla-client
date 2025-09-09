// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import slide1 from "../../../assets/banner/banner1.jpg";
import slide2 from "../../../assets/banner/banner2.jpg";
import slide3 from "../../../assets/banner/banner3.jpg";
import slide4 from "../../../assets/banner/banner4.jpg";
import slide5 from "../../../assets/banner/banner5.jpg";
import slide6 from "../../../assets/banner/banner6.jpg";
import SectionTitle from "../../../components/shared/sectionTitle/SectionTitle";

const Category = () => {
  return (
    <div>
      <SectionTitle
        subHeading="From 11.00am to 10.00pm"
        heading="Order Online"
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500, // প্রতি 2.5 সেকেন্ডে স্লাইড পরিবর্তন হবে
          disableOnInteraction: false, // ইউজার টাচ করলেও autoplay বন্ধ হবে না
          pauseOnMouseEnter: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper mb-20"
      >
        <SwiperSlide>
          <img src={slide1} alt="" className="h-[400px] w-[300px]" />
          <h3 className="text-3xl uppercase -mt-16 text-center text-white">
            তেজপাতা
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" className="h-[400px] w-[300px]" />
          <h3 className="text-3xl uppercase -mt-16 text-center text-white">
            হলুদ
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" className="h-[400px] w-[300px]" />
          <h3 className="text-3xl uppercase -mt-16 text-center text-white">
            রসুন
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" className="h-[400px] w-[300px]" />
          <h3 className="text-3xl uppercase -mt-16 text-center text-white">
            পেঁয়াজ
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" className="h-[400px] w-[300px]" />
          <h3 className="text-3xl uppercase -mt-16 text-center text-white">
            ধনে
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide6} alt="" className="h-[400px] w-[300px]" />
          <h3 className="text-3xl uppercase -mt-16 text-center text-white">
            মশলা
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
