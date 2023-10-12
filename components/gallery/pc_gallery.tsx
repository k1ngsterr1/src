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

const PcGallery: React.FC<PhotoSource> = ({
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
    <div className="pc-gallery">
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
              <button className="doctor-btn" onClick={openModal}>
                <span className="text">Записаться</span>
              </button>
              <img src={imageSrc} alt="Doctor 1" className="doctor-image" />
            </div>
            <h3 className="doctor-name">Аманова Альфия Камиловна</h3>
            <p className="doctor-position">Врач стоматолог-терапевт</p>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="dentist-card">
            <div className="button-image-container">
              <button className="doctor-btn" onClick={openModal}>
                <span className="text">Записаться</span>
              </button>
              <img src={imageSrc2} alt="Doctor 1" className="doctor-image" />
            </div>
            <h3 className="doctor-name">Таха Дана Юрьевна</h3>
            <p className="doctor-position">Управляющий</p>
          </div>
        </SwiperSlide> */}
        <SwiperSlide>
          <div className="dentist-card">
            <div className="button-image-container">
              <button className="doctor-btn" onClick={openModal}>
                <span className="text">Записаться</span>
              </button>
              <img src={imageSrc3} alt="Doctor 1" className="doctor-image" />
            </div>
            <h3 className="doctor-name">Тамаров Павел Сергеевич</h3>
            <p className="doctor-position">
              Главный врач, врач-ортопед, врач-хирург,имплантолог{" "}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="dentist-card">
            <div className="button-image-container">
              <button className="doctor-btn">
                <span className="text">Записаться</span>
              </button>
              <img src={imageSrc4} alt="Doctor 1" className="doctor-image" />
            </div>
            <h3 className="doctor-name">Пятаев Ислам Рушанович</h3>
            <p className="doctor-position">Стоматолог терапевт-микроскопист </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="dentist-card">
            <div className="button-image-container">
              <button className="doctor-btn">
                <span className="text">Записаться</span>
              </button>
              <img src={imageSrc5} alt="Doctor 1" className="doctor-image" />
            </div>
            <h3 className="doctor-name">Терехова Елена Юрьевна</h3>
            <p className="doctor-position">Стоматолог-терапевт</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="dentist-card">
            <div className="button-image-container">
              <button className="doctor-btn">
                <span className="text">Записаться</span>
              </button>
              <img src={imageSrc6} alt="Doctor 1" className="doctor-image" />
            </div>
            <h3 className="doctor-name">Бурмистрова Анастасия Игоревна. </h3>
            <p className="doctor-position">
              Главный врач, врач-ортопед, врач-хирург,имплантолог{" "}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="dentist-card">
            <div className="button-image-container">
              <button className="doctor-btn">
                <span className="text">Записаться</span>
              </button>
              <img src={imageSrc7} alt="Doctor 1" className="doctor-image" />
            </div>
            <h3 className="doctor-name">Дербенцева Яна Сергеевна</h3>
            <p className="doctor-position">
              Врач стоматолог терапевт-микроскопист
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="dentist-card">
            <div className="button-image-container">
              <button className="doctor-btn">
                <span className="text">Записаться</span>
              </button>
              <img src={imageSrc8} alt="Doctor 1" className="doctor-image" />
            </div>
            <h3 className="doctor-name">Лебединский Алек Иванович</h3>
            <p className="doctor-position">
              Врач Стоматолог-хирург-имплантолог{" "}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <div className="dentist-card">
            <div className="button-image-container">
              <button className="doctor-btn">
                <span className="text">Записаться</span>
              </button>
              <img src={imageSrc9} alt="Doctor 1" className="doctor-image" />
            </div>
            <h3 className="doctor-name">Юлия</h3>
            <p className="doctor-position">Администратор</p>
          </div> */}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PcGallery;
