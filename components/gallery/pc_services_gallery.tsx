import React from "react";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import "./styles/pc_gallery_styles.css";

type Swiper = any;

interface PhotoSource {
  imageSrc?: any;
  imageSrc2?: any;
  imageSrc3?: any;
  imageSrc4?: any;
  imageSrc5?: any;
  imageSrc6?: any;
  imageSrc7?: any;
  imageSrc8?: any;
  imageSrc9?: any;
  openModal?: any;
}

const PcServiceGallery: React.FC<PhotoSource> = ({
  imageSrc,
  imageSrc2,
  imageSrc3,
  imageSrc4,
  imageSrc5,
  imageSrc6,
  imageSrc7,
  imageSrc8,
  imageSrc9,
  openModal,
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
    <div
      className="pc-gallery"
      style={{ marginBottom: "clamp(64px,6.66624vw,256px)" }}
    >
      <div className="gallery-nav">
        <button className="previous" onClick={handlePrev}>
          <FontAwesomeIcon className="icon" icon={faChevronLeft} />
        </button>
        <button className="next" onClick={handleNext}>
          <FontAwesomeIcon className="icon" icon={faChevronRight} />
        </button>
      </div>
      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        navigation={false} // Disable Swiper navigation (we're using custom buttons)
        pagination={{ clickable: true }}
        direction="horizontal"
        className="mySwiper3"
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
          <div className="dentist-card">
            <div className="button-image-container">
              <img src={imageSrc2} alt="Doctor 1" className="doctor-image" />
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="dentist-card">
            <div className="button-image-container">
              <img src={imageSrc3} alt="Doctor 1" className="doctor-image" />
            </div>
          </div>
        </SwiperSlide> */}
        <SwiperSlide>
          <div className="dentist-card">
            <div className="button-image-container">
              <img src={imageSrc4} alt="Doctor 1" className="doctor-image" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PcServiceGallery;
