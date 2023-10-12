import React, { useState, useRef, RefObject, useEffect } from "react";

import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import {
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
  Link as ScrollLink,
} from "react-scroll";
import { keyframes } from "@emotion/react";
import { MDBCheckbox } from "mdb-react-ui-kit";
import emailjs from "@emailjs/browser";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faPlay } from "@fortawesome/free-solid-svg-icons";

import { Reveal } from "react-awesome-reveal";

import {
  faPlus,
  faMinus,
  faPhone,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import Header from "../../../components/header/header";
import ReviewGallery from "../../../components/reviews/ReviewGallery";
import Footer from "../../../components/footer/Footer";
import Gallery from "../../../components/gallery/gallery";
import ServiceGallery from "../../../components/gallery/services_gallery";
import PcServiceGallery from "../../../components/gallery/pc_services_gallery";
import { faC, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "../../../components/service_template/styles/services_styles.css";
import PcGallery from "../../../components/gallery/pc_gallery";
import ReviewGalleryDesktop from "../../../components/reviews/ReviewGalleryDesktop";

const pavelGallery = require("../../../assets/pavel_gallery.webp");
const pavelGalleryPc = require("../../../assets/pavel_pc.webp");
const modalImage = require("../../../assets/example_modal.webp");
const logoMobile = require("../../../assets/logo_mob.svg").default;

const mainService = require("../../../assets/bite-correction_pc.webp");

const doctorOne = require("../../../assets/1.webp");
const doctorTwo = require("../../../assets/2.webp");
const doctorThree = require("../../../assets/3.webp");
const doctorFour = require("../../../assets/4.webp");
const doctorFive = require("../../../assets/5.webp");
const doctorSix = require("../../../assets/6.webp");
const doctorSeven = require("../../../assets/7.webp");
const doctorEight = require("../../../assets/8.webp");
const doctorNine = require("../../../assets/9.webp");

const doctorOneMob = require("../../../assets/01.webp");
const doctorTwoMob = require("../../../assets/02.webp");
const doctorThreeMob = require("../../../assets/03.webp");
const doctorFourMob = require("../../../assets/04.webp");
const doctorFiveMob = require("../../../assets/05.webp");
const doctorSixMob = require("../../../assets/06.webp");
const doctorSevenMob = require("../../../assets/07.webp");
const doctorEightMob = require("../../../assets/08.webp");
const doctorNineMob = require("../../../assets/09.webp");

const serviceOnePc = require("../../../assets/service_1.webp");
const serviceTwoPc = require("../../../assets/service_2.webp");
const ServiceThreePc = require("../../../assets/service_3.webp");
const ServiceFourPc = require("../../../assets/service_4.webp");

const serviceOneMob = require("../../../assets/service_mob_01.webp");
const serviceTwoMob = require("../../../assets/service_mob_02.webp");
const serviceThreeMob = require("../../../assets/service_mob_03.webp");
const serviceFourMob = require("../../../assets/service_mob_04.webp");

const ChildBiteCorrection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuPcOpen, setIsMenuPcOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const phoneForm = useRef<HTMLFormElement>(null);

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [comment, setComment] = useState("");

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

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {};
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePcMenu = () => {
    setIsMenuPcOpen(!isMenuPcOpen);
  };

  return (
    <div className="div">
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
          <main className="services-screen-mobile">
            <div className="content">
              <div className="header-container" style={{ width: "100%" }}>
                <Header
                  isMenuOpen={isMenuOpen}
                  toggleMenu={toggleMenu}
                  openModal={openModal}
                ></Header>
              </div>
              <div className="tablet" style={{ width: "100%" }}>
                <Header
                  isMenuPcOpen={isMenuPcOpen}
                  togglePcMenu={togglePcMenu}
                  openModal={openModal}
                ></Header>
              </div>
              <div className="heading-container">
                <div className="bread-dots">
                  <Link to="/" className="link">
                    Главная
                  </Link>
                  <div className="circle"></div>
                  <Link to="/child-dental" className="link">
                    Детские Услуги
                  </Link>
                  <div className="circle"></div>
                  <Link
                    to="/services/child-bite-correction"
                    className="link active"
                  >
                    Исправление прикуса
                  </Link>
                </div>
                <h1 className="heading">Исправление прикуса</h1>
                <button className="golden-button" onClick={openModal}>
                  <span className="text">Записаться</span>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon"
                  ></FontAwesomeIcon>
                </button>
              </div>
              <div className="information-container">
                <div className="divider-container">
                  <div className="divider"></div>
                  <span className="text">Об услуге</span>
                </div>
                <section className="information">
                  <h3 className="information-heading">
                    Как исправить прикус ребенку?
                  </h3>
                  <p className="information-paragraph">
                    Исправление прикуса у ребенка возможно с помощью
                    ортодонтического лечения. Ортодонтия - это раздел
                    стоматологии, который занимается коррекцией прикуса и
                    выравниванием зубов.
                  </p>
                </section>
                <div className="divider"></div>
                <section className="information">
                  <h3 className="information-heading">
                    Существует несколько методов исправления прикуса у детей
                  </h3>
                  <p className="information-paragraph">
                    <strong>1. Съемные аппараты. </strong>
                    <br />
                    <br />
                    Это специальные съемные конструкции, которые надеваются на
                    зубы ребенка и помогают корректировать прикус. Съемные
                    аппараты применяются в случаях, когда необходимо провести
                    небольшие корректировки прикуса или подготовить зубы к более
                    серьезному лечению.
                    <br />
                    <br />
                    <strong> 2. Брекет-системы. </strong>
                    <br />
                    <br />
                    Брекеты - это металлические или керамические элементы,
                    которые крепятся на зубы и позволяют постепенно перемещать
                    их в нужное положение. Брекет-системы являются наиболее
                    эффективным методом исправления прикуса у детей. Они
                    позволяют добиться оптимального распределения нагрузки на
                    зубы и достичь правильного прикуса.
                    <br />
                    <br />
                    <strong> 3.Инвизибл-ретейнеры. </strong>
                    <br />
                    <br />
                    Инвизибл-ретейнеры - это прозрачные съемные пластинки,
                    которые надеваются на зубы и позволяют постепенно выправить
                    прикус. Они не видны наружу и не вызывают дискомфорта при
                    еде или разговоре. Инвизибл-ретейнеры особенно удобны для
                    подростков, которые хотят сохранить естественный внешний
                    вид.
                  </p>
                </section>
                <div className="divider"></div>
                <section className="information">
                  <h3 className="information-heading">
                    Исправление прикуса у ребенка - это процесс, требующий
                    времени и терпения
                  </h3>
                  <p className="information-paragraph">
                    Длительность лечения зависит от степени нарушения прикуса и
                    выбранного метода коррекции. Важно помнить, что раннее
                    начало лечения позволяет достичь лучших результатов. Если у
                    вас есть подозрения на нарушение прикуса у вашего ребенка,
                    обратитесь к стоматологу-ортодонту. Он проведет необходимое
                    обследование и поможет определить наилучший способ
                    исправления прикуса. Помните, что правильный прикус - это
                    залог здоровья и красоты улыбки вашего ребенка.
                  </p>
                </section>
              </div>
            </div>
          </main>
          <main className="services-pc">
            <div className="pc-content">
              <Header
                isMenuPcOpen={isMenuPcOpen}
                togglePcMenu={togglePcMenu}
                openModal={openModal}
              ></Header>
              <div className="upper-content">
                <div className="heading-container">
                  <div className="bread-dots-container">
                    <Link to="/" className="link">
                      Главная
                    </Link>
                    <div className="circle"></div>
                    <Link to="/child-dental" className="link">
                      Детские услуги
                    </Link>
                    <div className="circle"></div>
                    <Link
                      to="/services/child-bite-correction"
                      className="link active"
                    >
                      Исправление прикуса
                    </Link>
                  </div>
                  <h1 className="heading" style={{ width: "30%" }}>
                    Исправление прикуса
                  </h1>
                  <button className="button" onClick={openModal}>
                    <span className="text">Записаться</span>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="icon"
                    ></FontAwesomeIcon>
                  </button>
                </div>
                <img
                  src={mainService}
                  alt="service"
                  className="service-image"
                ></img>
              </div>
              <div className="services-content">
                <div className="services-list">
                  <span className="text">Содержание</span>
                  <div className="buttons">
                    <ScrollLink
                      to="information"
                      className="button"
                      style={{ width: "110%" }}
                    >
                      Основная информация
                    </ScrollLink>
                  </div>
                </div>
                <div className="services-information" id="information">
                  <span className="text">Об услуге</span>
                  <div className="information-one">
                    <h3 className="heading-info">
                      Как исправить прикус ребенку?
                    </h3>
                    <p className="p-info">
                      Исправление прикуса у ребенка возможно с помощью
                      ортодонтического лечения. Ортодонтия - это раздел
                      стоматологии, который занимается коррекцией прикуса и
                      выравниванием зубов.
                    </p>
                  </div>
                  <div className="information-two">
                    <h3 className="heading-info two">
                      Существует несколько методов исправления прикуса у детей
                    </h3>
                    <p className="p-info two">
                      <strong>1. Съемные аппараты. </strong>
                      <br />
                      <br />
                      Это специальные съемные конструкции, которые надеваются на
                      зубы ребенка и помогают корректировать прикус. Съемные
                      аппараты применяются в случаях, когда необходимо провести
                      небольшие корректировки прикуса или подготовить зубы к
                      более серьезному лечению.
                      <br />
                      <br />
                      <strong> 2. Брекет-системы. </strong>
                      <br />
                      <br />
                      Брекеты - это металлические или керамические элементы,
                      которые крепятся на зубы и позволяют постепенно перемещать
                      их в нужное положение. Брекет-системы являются наиболее
                      эффективным методом исправления прикуса у детей. Они
                      позволяют добиться оптимального распределения нагрузки на
                      зубы и достичь правильного прикуса.
                      <br />
                      <br />
                      <strong> 3.Инвизибл-ретейнеры. </strong>
                      <br />
                      <br />
                      Инвизибл-ретейнеры - это прозрачные съемные пластинки,
                      которые надеваются на зубы и позволяют постепенно
                      выправить прикус. Они не видны наружу и не вызывают
                      дискомфорта при еде или разговоре. Инвизибл-ретейнеры
                      особенно удобны для подростков, которые хотят сохранить
                      естественный внешний вид.
                    </p>
                  </div>
                  <div
                    className="information-two"
                    style={{ marginBottom: "clamp(64px,6.66624vw,256px)" }}
                  >
                    <h3 className="heading-info two">
                      Исправление прикуса у ребенка - долгий процесс
                    </h3>
                    <p className="p-info two">
                      Длительность лечения зависит от степени нарушения прикуса
                      и выбранного метода коррекции. Важно помнить, что раннее
                      начало лечения позволяет достичь лучших результатов. Если
                      у вас есть подозрения на нарушение прикуса у вашего
                      ребенка, обратитесь к стоматологу-ортодонту. Он проведет
                      необходимое обследование и поможет определить наилучший
                      способ исправления прикуса. Помните, что правильный прикус
                      - это залог здоровья и красоты улыбки вашего ребенка.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer />
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

export default ChildBiteCorrection;
