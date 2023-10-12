import React from "react";

import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles/gallery_styles_two.css";

const galleryTwoPic = require("../../assets/gallery_two_pic.webp");

const gallerySTwoPicM = require("../../assets/galleryS_02m.webp");
const gallerySThreePicM = require("../../assets/galleryS_03m.webp");
const gallerySFourPicM = require("../../assets/galleryS_04m.webp");
const gallerySFivePicM = require("../../assets/galleryS_05m.webp");
const gallerySSixPicM = require("../../assets/galleryS_06m.webp");
const gallerySSevenPicM = require("../../assets/galleryS_07m.webp");

const gallery02 = require("../../assets/galleryS_02.webp");
const gallery03 = require("../../assets/galleryS_03.webp");
const gallery04 = require("../../assets/galleryS_04.webp");
const gallery05 = require("../../assets/galleryS_05.webp");
const gallery06 = require("../../assets/galleryS_06.webp");
const gallery07 = require("../../assets/galleryS_07.webp");

const ClinicGalleryTwo: React.FC = () => {
  return (
    <div className="clinic-gallery">
      {/* <MDBCarousel showControls showIndicators>
        <MDBCarouselItem
          itemId={1}
          src="https://i.ibb.co.com/HXVvZc7/dental-clinic-two.webp"
          alt="Сlinic"
        />
        <MDBCarouselItem
          itemId={2}
          src="https://i.ibb.co.com/HXVvZc7/dental-clinic-two.webp"
          alt="Сlinic"
        />
        <MDBCarouselItem
          itemId={3}
          src="https://i.ibb.co.com/HXVvZc7/dental-clinic-two.webp"
          alt="Сlinic"
        />
      </MDBCarousel> */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        style={
          {
            "--swiper-pagination-color": "#E8CB6C",
            "--swiper-navigation-color": "#E8CB6C",
          } as React.CSSProperties
        }
        className="mySwiper4"
      >
        <SwiperSlide>
          <img className="swiper-image" src={galleryTwoPic} alt="image"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-image" src={gallerySTwoPicM} alt="image"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="swiper-image"
            src={gallerySThreePicM}
            alt="image"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="swiper-image"
            src={gallerySFourPicM}
            alt="image"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="swiper-image"
            src={gallerySFivePicM}
            alt="image"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-image" src={gallerySSixPicM} alt="image"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="swiper-image"
            src={gallerySSevenPicM}
            alt="image"
          ></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

{
  /* <a href="https://imgbb.com/"><img src="https://i.ibb.co.com/FWjnCtx/dental-clinic-one.png" alt="dental-clinic-one" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co.com/gF7pg2p/dental-clinic-two.png" alt="dental-clinic-two" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co.com/F4X5Kfk/example.png" alt="example" border="0"></a> */
}

export default ClinicGalleryTwo;
