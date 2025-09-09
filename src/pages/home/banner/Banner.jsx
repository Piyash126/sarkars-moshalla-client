import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader\\
import bannerImg1 from "../../../assets/banner/banner1.jpg";
import bannerImg2 from "../../../assets/banner/banner2.jpg";
import bannerImg3 from "../../../assets/banner/banner3.jpg";
import bannerImg4 from "../../../assets/banner/banner4.jpg";
import bannerImg5 from "../../../assets/banner/banner5.jpg";
import bannerImg6 from "../../../assets/banner/banner6.jpg";

const Banner = () => {
  const images = [
    bannerImg1,
    bannerImg2,
    bannerImg3,
    bannerImg4,
    bannerImg5,
    bannerImg6,
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("forward");

  useEffect(() => {
    const timer = setInterval(() => {
      if (direction === "forward") {
        if (index === images.length - 1) {
          setDirection("backward"); // শেষ হলে উল্টো যাবে
          setIndex(index - 1);
        } else {
          setIndex(index + 1);
        }
      } else {
        if (index === 0) {
          setDirection("forward"); // প্রথম হলে আবার সামনে যাবে
          setIndex(index + 1);
        } else {
          setIndex(index - 1);
        }
      }
    }, 3000); // ৩ সেকেন্ডে পরিবর্তন

    return () => clearInterval(timer);
  }, [index, direction, images.length]);

  return (
    <Carousel
      stopOnHover={true}
      showStatus={false}
      //   showThumbs={false}
      infiniteLoop={true}
      interval={3000}
      autoPlay={true}
      selectedItem={index}
    >
      {images.map((img, i) => (
        <div key={i}>
          <img src={img} alt={`Banner ${i + 1}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
