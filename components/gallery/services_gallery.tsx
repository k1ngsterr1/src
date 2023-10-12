import React from "react";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import "./styles/gallery_styles.css";

const pavel = require("../../assets/pavel_gallery.webp");

type Swiper = any;

SwiperCore.use([Navigation, Pagination]);

interface PhotoSource {
  imageSrc: any;
  imageSrcTwo?: any;
  imageSrcThree?: any;
  imageSrcFour?: any;
  imageSrcFive?: any;
  imageSrcSix?: any;
  imageSrcSeven?: any;
}

const Gallery: React.FC<PhotoSource> = ({
  imageSrc,
  imageSrcTwo,
  imageSrcThree,
  imageSrcFour,
  imageSrcFive,
  imageSrcSix,
  imageSrcSeven,
}) => {
  const swiperRef = React.useRef<Swiper | null>(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="gallery">
      <div className="gallery-nav">
        <button className="previous" onClick={handlePrev}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="next" onClick={handleNext}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <Swiper
        spaceBetween={-40}
        slidesPerView={1}
        threshold={0.5}
        navigation={false} // Disable Swiper navigation (we're using custom buttons)
        pagination={{ clickable: true }}
        direction="horizontal"
        className="mySwiper2"
        onSwiper={(swiper: any) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>
          <div className="dentist-card">
            <div className="button-image-container">
              <img src={imageSrc} alt="Doctor 1" className="doctor-image" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="dentist-card-2">
            <div className="button-image-container">
              <img src={imageSrcTwo} alt="Doctor 2" className="doctor-image" />
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="dentist-card-2">
            <div className="button-image-container">
              <img
                src={imageSrcThree}
                alt="Doctor 3"
                className="doctor-image"
              />
            </div>
          </div>
        </SwiperSlide> */}
        <SwiperSlide>
          <div className="dentist-card-2">
            <div className="button-image-container">
              <img src={imageSrcFour} alt="Doctor 3" className="doctor-image" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Gallery;
