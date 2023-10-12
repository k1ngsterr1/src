import React, { useState, useEffect, useRef, RefObject } from "react";
import { Link } from "react-router-dom";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import Header from "../../components/header/header";
import Popup from "reactjs-popup";
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Bounce, Fade, Zoom } from "react-awesome-reveal";
import {
  faPlus,
  faMinus,
  faPhone,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { MDBCheckbox } from "mdb-react-ui-kit";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import emailjs from "@emailjs/browser";

import ReviewGallery from "../../components/reviews/ReviewGallery";
import ServiceGallery from "../../components/gallery/services_gallery";
import Gallery from "../../components/gallery/gallery";
import ReviewGalleryDesktop from "../../components/reviews/ReviewGalleryDesktop";
import PcGallery from "../../components/gallery/pc_gallery";
import ClinicGalleryOne from "../../components/clinic_gallery_1/clinicGalleryOne";
import ClinicGalleryTwo from "../../components/clinic_gallery_2/clinicGalleryTwo";
import Footer from "../../components/footer/Footer";

// import "./styles/clinics_styles.css";

const doctorOneMob = require("../../assets/01.webp");
const doctorTwoMob = require("../../assets/02.webp");
const doctorThreeMob = require("../../assets/03.webp");
const doctorFourMob = require("../../assets/04.webp");
const doctorFiveMob = require("../../assets/05.webp");
const doctorSixMob = require("../../assets/06.webp");
const doctorSevenMob = require("../../assets/07.webp");
const doctorEightMob = require("../../assets/08.webp");
const doctorNineMob = require("../../assets/09.webp");

const doctorOnePc = require("../../assets/1.webp");
const doctorTwoPc = require("../../assets/2.webp");
const doctorThreePc = require("../../assets/3.webp");
const doctorFourPc = require("../../assets/4.webp");
const doctorFivePc = require("../../assets/5.webp");
const doctorSixPc = require("../../assets/6.webp");
const doctorSevenPc = require("../../assets/7.webp");
const doctorEightPc = require("../../assets/8.webp");
const doctorNinePc = require("../../assets/9.webp");
const modalImage = require("../../assets/example_modal.webp");

const featuresPhotoPc = require("../../assets/features_image.webp");
const galleryOnePic = require("../../assets/gallery_one_pic.webp");
const galleryTwoPic = require("../../assets/gallery_two_pic.webp");

const serviceOneMob = require("../../assets/service_mob_01.webp");
const serviceTwoMob = require("../../assets/service_mob_02.webp");
const serviceThreeMob = require("../../assets/service_mob_03.webp");
const serviceFourMob = require("../../assets/service_mob_04.webp");

interface Tabprops {
  number: string;
  text: string;
  goldText?: string;
}

const FeatureTab: React.FC<Tabprops> = (props) => {
  return (
    <div className="feature-tab">
      <span className="number">{props.number}</span>
      <p className="paragraph">{props.text}</p>
      <p className="gold-text">{props.goldText}</p>
    </div>
  );
};

const FeatureLong: React.FC<Tabprops> = (props) => {
  return (
    <div className="feature-tab-long">
      <span className="number">{props.number}</span>
      <p
        className="paragraph-goldz"
        style={{
          color: "#E8CB6C",
          marginLeft: "clamp(8px,3.73824vw,32px)",
          marginTop: "clamp(13px,6.07464vw,52px)",
          fontSize: "clamp(8px,3.73824vw,32px)",
        }}
      >
        {props.text}
      </p>
    </div>
  );
};

const pavel = require("../../assets/pavel.webp");
const featuresPhoto = require("../../assets/features_photo.png");
const logoMobile: string = require("../../assets/logo_mob.svg").default;
const bulb: string = require("../../assets/bulb.svg");

type Swiper = any;

const ContactsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuPcOpen, setIsMenuPcOpen] = useState(false);

  const mapData = {
    geometry: [55.9647, 37.915],
    zoom: 9,
  };

  const placeMark1 = {
    geometry: [55.965502, 37.920435],
    properties: {
      hintContent: "Клиника на Советском проспекте, 5",
      balloonContent: "Клиника Dental Home",
    },
  };

  const placeMark2 = {
    geometry: [55.974727, 37.905218],
    properties: {
      hintContent: "Клиника на Рощинской, 9",
      balloonContent: "Клиника Dental Home",
    },
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePcMenu = () => {
    setIsMenuPcOpen(!isMenuPcOpen);
  };

  const customAnimation = keyframes`
    from {
      opacity: 1;
      transform: translate3d(0px, 0px, 0);
    }
    
    to {
      opacity: 0;
      transform: translate3d(-2000, 0, 0);
    }
    `;

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [comment, setComment] = useState("");

  const form: RefObject<HTMLDivElement> = useRef(null);

  function sendEmail(e: any) {
    e.preventDefault();
    setFullName("");
    setPhoneNumber("");
    setServiceName("");
    setDoctorName("");
    setServiceName("");

    emailjs
      .sendForm(
        "service_kwh5orp",
        "template_5kdc5wu",
        e.target,
        "b-K7bdT7JW4cqcN4y"
      )
      .then((res) => {
        console.log("SUCCESS");
      })
      .catch((err) => console.log(err));
  }

  const [open, setOpen] = useState(false);

  const phoneForm = useRef<HTMLFormElement>(null);

  function openPopupWindow() {
    setOpen(true);
  }

  function sendPhoneRequest(e: any) {
    e.preventDefault();
    setFullName("");
    setPhoneNumber("");

    emailjs
      .sendForm(
        "service_kwh5orp",
        "template_rgnaux5",
        e.target,
        "b-K7bdT7JW4cqcN4y"
      )
      .then((res) => {
        console.log("SUCCESS");
      })
      .catch((err) => console.log(err));
  }

  const openModal = () => {
    console.log("Opening modal");
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {};
  }, []);

  return (
    <div>
      {isLoading ? (
        <Reveal keyframes={customAnimation} delay={1000}>
          <div className={`loader ${isLoading ? "" : "hidden"}`}>
            <div className="loader-container">
              <img className="logo" src={logoMobile} alt="logo"></img>
              <h1 className="loading-heading">
                Клиника Эстетической Стоматологии
              </h1>
            </div>
          </div>
        </Reveal>
      ) : (
        <div className="screen">
          <div className="content" style={{ width: "100%" }}>
            <div className="header-container" style={{ width: "100%" }}>
              <Header
                isMenuOpen={isMenuOpen}
                openModal={openModal}
                toggleMenu={toggleMenu}
              ></Header>
            </div>
            <div className="tablet" style={{ width: "100%" }}>
              <Header
                isMenuPcOpen={isMenuPcOpen}
                openModal={openModal}
                togglePcMenu={togglePcMenu}
              ></Header>
            </div>
            <main className="main-content">
              <div
                className="heading-content-container"
                style={{ width: "90%", margin: "auto" }}
              >
                <div className="bread-dots">
                  <Link to="/" className="main-link">
                    Главная
                  </Link>
                  <div className="circle"></div>
                  <Link to="/contacts" className="prices-link">
                    Контакты
                  </Link>
                </div>
                <h1 className="heading">Контакты</h1>
                <p
                  className="paragraph"
                  style={{
                    marginTop: "clamp(8px,3.73824vw,32px)",
                    color: "#202637",
                  }}
                >
                  Для связи с нами, оставьте заявку или позвоните нам
                </p>
              </div>
              <div
                className="map-container"
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "clamp(16px,7.47648vw,64px)",
                }}
              >
                <YMaps>
                  <Map
                    defaultState={{
                      center: [55.965502, 37.920435], // Your initial latitude and longitude
                      zoom: 12,
                    }}
                    width="90%"
                    height="345px"
                  >
                    <Placemark {...placeMark1}></Placemark>
                    <Placemark {...placeMark2}></Placemark>
                  </Map>
                </YMaps>
              </div>
              <div className="form-screen">
                <section className="content">
                  <div className="form-heading-container">
                    <h3 className="form-heading">Записаться На Прием</h3>
                  </div>
                  <div className="divider"></div>
                  <form action="" className="form">
                    <div className="input-container">
                      <label htmlFor="name" className="la">
                        Имя*
                      </label>
                      <input
                        type="text"
                        required={true}
                        value={fullName}
                        name="fullName"
                        onChange={(event) => setFullName(event.target.value)}
                        className="input-text"
                        placeholder="Иван Иванов"
                      />
                    </div>
                    <div className="input-container">
                      <label htmlFor="phone" className="la">
                        Номер телефона*
                      </label>
                      <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(event) => setPhoneNumber(event.target.value)}
                        name="phoneNumber"
                        className="input-text"
                        placeholder="+7 (925) 222-90-22"
                      />
                    </div>
                    <div className="input-container">
                      <label htmlFor="service" className="la">
                        Услуга
                      </label>
                      <input
                        type="text"
                        value={serviceName}
                        onChange={(event) => setServiceName(event.target.value)}
                        name="serviceName"
                        placeholder="Выберите Услугу"
                        className="input-text"
                      />
                    </div>

                    <div className="input-container">
                      <label htmlFor="doctor" className="la">
                        Врач
                      </label>
                      <input
                        type="text"
                        name="doctorName"
                        value={doctorName}
                        onChange={(event) => setDoctorName(event.target.value)}
                        placeholder="Выберите Врача"
                        className="input-text"
                      />
                    </div>
                    <div className="input-container">
                      <label htmlFor="comment" className="la">
                        Комментарий
                      </label>
                      <textarea
                        name="comment"
                        value={comment}
                        onChange={(event) => setComment(event.target.value)}
                        className="comment"
                      ></textarea>
                    </div>
                    <div className="checkbox-container">
                      <div className="checkbox-container-2">
                        <MDBCheckbox
                          name="flexCheck"
                          value=""
                          id="flexCheckChecked"
                          label="Ознакомлен с Условиями обработки персональных данных"
                          defaultChecked
                        />
                      </div>
                    </div>
                    <button className="form-button" onClick={sendEmail}>
                      Записаться на прием
                      <FontAwesomeIcon
                        className="icon"
                        icon={faChevronRight}
                        style={{
                          fontSize: "clamp(7px,3.2709599999999996vw,28px",
                          marginLeft: "clamp(4px,1.86912vw,16px)",
                        }}
                      ></FontAwesomeIcon>
                    </button>
                  </form>
                </section>
              </div>
            </main>
          </div>
          <div className="pc-content-c" style={{ width: "100%" }}>
            <main className="main-content" style={{ width: "100%" }}>
              <div
                className="header-container"
                style={{ width: "71.82291666666667%", margin: "auto" }}
              >
                <Header
                  isMenuPcOpen={isMenuPcOpen}
                  openModal={openModal}
                  togglePcMenu={togglePcMenu}
                ></Header>
              </div>
              <div
                className="upper-content"
                style={{
                  width: "71.82291666666667%",
                  margin: "auto",
                  marginTop: "clamp(32px,3.33312vw,128px)",
                }}
              >
                <div className="bread-dots-container">
                  <Link className="link" to="/">
                    Контакты
                  </Link>
                  <div className="bread-dot"></div>
                  <Link className="link-prices" to="/contacts">
                    Контакты
                  </Link>
                </div>
                <div className="heading-container">
                  <h1 className="heading">Контакты</h1>
                </div>
                <p
                  className="paragraph"
                  style={{
                    fontSize: "clamp(11.5px,1.19784vw,46px)",
                    color: "#202637",
                  }}
                >
                  Для связи с нами, оставьте заявку или позвоните нам
                </p>
                <div className="divider-container">
                  <div className="divider"></div>
                </div>
              </div>
              <div
                className="map-container"
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h2
                  className="map-heading"
                  style={{
                    marginTop: "clamp(16px,1.66656vw,64px)",
                    marginBottom: "clamp(16px,1.66656vw,64px)",
                  }}
                >
                  Карта
                </h2>
                <YMaps>
                  <Map
                    defaultState={{ center: [55.9647, 37.915], zoom: 12 }}
                    width="75%"
                    height="clamp(215px,22.3944vw,860px)"
                  >
                    <Placemark {...placeMark1}></Placemark>
                    <Placemark {...placeMark2}></Placemark>
                  </Map>
                </YMaps>
              </div>
              <div
                className="form-pc-screen"
                ref={form}
                onSubmit={sendEmail}
                style={{
                  borderTop: "none",
                  marginTop: "clamp(32px,3.33312vw,128px)",
                  marginBottom: "clamp(64px,6.666666666666667vw,256px)",
                }}
              >
                <section className="content" style={{ borderTop: "none" }}>
                  <form action="" className="form-content">
                    <div className="row-c">
                      <div className="input-container">
                        <span className="text">Имя*</span>
                        <input
                          type="text"
                          className="input-c"
                          required={true}
                          value={fullName}
                          name="fullName"
                          onChange={(event) => setFullName(event.target.value)}
                          placeholder="Иван Иванов"
                        />
                      </div>
                      <div className="input-container">
                        <span className="text">Телефон*</span>
                        <input
                          type="text"
                          className="input-c"
                          required={true}
                          value={phoneNumber}
                          name="phoneNumber"
                          onChange={(event) =>
                            setPhoneNumber(event.target.value)
                          }
                          placeholder="+7 (925) 222-90-22"
                        />
                      </div>
                    </div>
                    <div className="row-c">
                      <div className="input-container services">
                        <span className="text">Услуга</span>
                        <input
                          type="text"
                          placeholder="Выберите Услугу"
                          required={true}
                          value={serviceName}
                          name="serviceName"
                          onChange={(event) =>
                            setServiceName(event.target.value)
                          }
                          className="input-s"
                        />
                      </div>
                    </div>
                    <div className="row-c"></div>
                    <div className="row-c">
                      <div className="input-container services">
                        <span className="text">Врач</span>
                        <input
                          type="text"
                          placeholder="Выберите Врача"
                          required={true}
                          value={doctorName}
                          name="doctorName"
                          onChange={(event) =>
                            setDoctorName(event.target.value)
                          }
                          className="input-s"
                        />
                      </div>
                    </div>
                    <div className="row-c">
                      <div className="input-container services">
                        <span className="text">Комментарий</span>
                        <textarea
                          className="comment"
                          name="comment"
                          value={comment}
                          onChange={(event) => setComment(event.target.value)}
                        />
                      </div>
                    </div>
                    <div className="checkbox-container">
                      <div className="check-row">
                        <input type="checkbox" className="checkbox" />
                        <span className="text">
                          Ознакомлен с Условиями обработки персональных данных
                        </span>
                      </div>
                      <button
                        className="golden-btn"
                        value="Send"
                        onClick={() => console.log(form)}
                      >
                        Записаться на прием
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className="icon"
                          style={{
                            fontSize: "clamp(6px,0.62496vw,24px)",
                            marginLeft: "clamp(4px,0.41664vw,16px)",
                          }}
                        ></FontAwesomeIcon>
                      </button>
                    </div>
                  </form>
                </section>
              </div>
            </main>
          </div>
          <Footer></Footer>
          <Popup
            open={open}
            closeOnDocumentClick
            onClose={closeModal}
            modal
            nested
            className="popup-container"
            position="center center"
          >
            <div className="modal">
              <img
                className="modal-img"
                src={modalImage}
                alt="modal-picture"
              ></img>
              <div className="modal-content">
                <img className="logo" src={logoMobile} alt="logotype"></img>
                <span className="text">
                  Хотите получить бесплатную консультацию?
                </span>
                <span className="additional-text">
                  Оставьте свой номер и мы перезвоним вам
                </span>
                <form className="input-container" onSubmit={sendPhoneRequest}>
                  <label htmlFor="phone-number-input" className="label">
                    Ваш номер телефона*
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    className="phone-number-input"
                    placeholder="+7 (925) 222-90-22"
                    required={true}
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                    style={{ textAlign: "center" }}
                    id=""
                  />
                  <button className="phone-btn" value="Send">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="icon"
                    ></FontAwesomeIcon>
                    Хорошо жду звонка
                  </button>
                </form>
              </div>
            </div>
          </Popup>
        </div>
      )}
    </div>
  );
};

export default ContactsPage;
