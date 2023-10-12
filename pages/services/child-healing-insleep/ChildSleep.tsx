import React, { useState, useRef, RefObject } from "react";

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

const mainService = require("../../../assets/teeth-healing_pc.webp");

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

const ChildSleep = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuPcOpen, setIsMenuPcOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePcMenu = () => {
    setIsMenuPcOpen(!isMenuPcOpen);
  };

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

  return (
    <div className="screen">
      <main className="services-screen-mobile">
        <div className="content">
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
              <Link to="/services/child-sleep" className="link active">
                Лечение зубов во сне
              </Link>
            </div>
            <h1 className="heading">Лечение во сне</h1>
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
                Как проходит лечение зубов детям под наркозом?
              </h3>
              <p className="information-paragraph">
                Лечение зубов детям под наркозом проводится в специально
                оборудованной операционной. Перед началом процедуры, ребенка
                подготавливают к наркозу, вводя препараты через вену или маску.
                Во время наркоза, ребенок находится под постоянным контролем
                анестезиолога и стоматолога. После окончания лечения, ребенка
                переносят в палату для восстановления после наркоза, где его
                состояние также контролируется специалистами.
                <br />
                Важно помнить, что лечение зубов детям под наркозом является
                последней мерой и применяется только в случаях, когда другие
                методы лечения неэффективны или невозможны. Поэтому регулярные
                посещения детского стоматолога и соблюдение правил ухода за
                зубами являются основой для предотвращения проблем со здоровьем
                полости рта у детей.
                <br />
                <br />
                <strong>
                  Наркоз при лечении зубов детям нельзя использовать в следующих
                  случаях:
                </strong>{" "}
                <br />
                <br />
                1. Аллергические реакции на анестетики или другие препараты,
                используемые при наркозе. <br /> <br /> 2. Сердечно-сосудистые
                заболевания и нестабильное состояние сердца. <br /> <br /> 3.
                Неконтролируемая эпилепсия или другие неврологические
                заболевания. <br /> <br /> 4. Проблемы с дыхательной системой
                или легкими. <br /> <br />
                5. Острые инфекционные заболевания <br />
                6. В случае, если не соблюдаются рекомендации при подготовке к
                лечению зубов во сне
                <br />
                <br />В этих случаях использование наркоза может представлять
                опасность для здоровья ребенка. Вместо этого, следует обратиться
                к специалистам и найти альтернативные методы лечения зубов,
                которые будут безопасны и эффективны для ребенка.
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
                <Link to="/services/child-sleep" className="link active">
                  Лечение во сне
                </Link>
              </div>
              <h1 className="heading" style={{ width: "30%" }}>
                Лечение во сне
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
                  Как проходит лечение зубов детям под наркозом?
                </h3>
                <p className="p-info">
                  Лечение зубов детям под наркозом проводится в специально
                  оборудованной операционной. Перед началом процедуры, ребенка
                  подготавливают к наркозу, вводя препараты через вену или
                  маску. Во время наркоза, ребенок находится под постоянным
                  контролем анестезиолога и стоматолога. После окончания
                  лечения, ребенка переносят в палату для восстановления после
                  наркоза, где его состояние также контролируется специалистами.
                  <br />
                  Важно помнить, что лечение зубов детям под наркозом является
                  последней мерой и применяется только в случаях, когда другие
                  методы лечения неэффективны или невозможны. Поэтому регулярные
                  посещения детского стоматолога и соблюдение правил ухода за
                  зубами являются основой для предотвращения проблем со
                  здоровьем полости рта у детей.
                  <br />
                  <br />
                  <strong>
                    Наркоз при лечении зубов детям нельзя использовать в
                    следующих случаях:
                  </strong>{" "}
                  <br />
                  <br />
                  1. Аллергические реакции на анестетики или другие препараты,
                  используемые при наркозе. <br /> <br /> 2. Сердечно-сосудистые
                  заболевания и нестабильное состояние сердца. <br /> <br /> 3.
                  Неконтролируемая эпилепсия или другие неврологические
                  заболевания. <br /> <br /> 4. Проблемы с дыхательной системой
                  или легкими. <br /> <br />
                  5. Острые инфекционные заболевания <br />
                  6. В случае, если не соблюдаются рекомендации при подготовке к
                  лечению зубов во сне
                  <br />
                  <br />В этих случаях использование наркоза может представлять
                  опасность для здоровья ребенка. Вместо этого, следует
                  обратиться к специалистам и найти альтернативные методы
                  лечения зубов, которые будут безопасны и эффективны для
                  ребенка.
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
          <img className="modal-img" src={modalImage} alt="modal-picture"></img>
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
  );
};

export default ChildSleep;
