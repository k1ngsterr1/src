import React from "react";

// import Image from "next/image";

import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

import "./styles/clinic_gallery_one.css";

type Swiper = any;

const galleryOnePic = require("../../assets/gallery_one_pic.webp");
const galleryTwoPic = require("../../assets/gallery_c02.webp");
const galleryThreePic = require("../../assets/gallery_c03.webp");
const galleryFourPic = require("../../assets/gallery_c04.webp");
const galleryFivePic = require("../../assets/gallery_c05.webp");

const clinic = require("../../assets/dental_clinic_one.webp");
const example = require("../../assets/example.webp");

const ClinicGalleryOne: React.FC = () => {
  return (
    <div className="clinic-gallery">
      {/* <MDBCarousel showControls showIndicators>
        <MDBCarouselItem
          style={{ border: "2px solid red" }}
          itemId={1}
          src="https://i.ibb.co.com/VvqTp1D/dental-clinic-one.webp"
          alt="Сlinic"
        />
        <MDBCarouselItem
          itemId={2}
          src="https://i.ibb.co.com/VvqTp1D/dental-clinic-one.webp"
          alt="Сlinic"
        />
        <MDBCarouselItem
          itemId={3}
          src="https://i.ibb.co.com/VvqTp1D/dental-clinic-one.webp"
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
          <img className="swiper-image" src={galleryOnePic} alt="image"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-image" src={galleryTwoPic} alt="image"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-image" src={galleryThreePic} alt="image"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-image" src={galleryFourPic} alt="image"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-image" src={galleryFivePic} alt="image"></img>
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

export default ClinicGalleryOne;

{
  /* <a href="https://imgbb.com/"><img src="https://i.ibb.co.com/VvqTp1D/dental-clinic-one.webp" alt="dental-clinic-one" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co.com/HXVvZc7/dental-clinic-two.webp" alt="dental-clinic-two" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co.com/2SBKbgZ/example.webp" alt="example" border="0"></a> */
}
