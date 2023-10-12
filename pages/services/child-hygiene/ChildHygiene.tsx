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

const mainService = require("../../../assets/hygiene_pc.webp");

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

const ChildHygiene = () => {
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
    <div className="div">
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
                <Link to="/services/child-hygiene" className="link active">
                  Детская гигиена полости рта
                </Link>
              </div>
              <h1 className="heading">Детская гигиена полости рта</h1>
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
                  Как обеспечить правильную гигиену полости рта у детей?
                </h3>
                <p className="information-paragraph">
                  Правильная гигиена полости рта является важной частью здоровья
                  детей. Недостаточный уход за зубами и деснами может привести к
                  развитию кариеса, пародонтита и других проблем. Чтобы
                  обеспечить детям здоровую улыбку, наша клиника предлагает
                  следующие рекомендации по детской гигиене полости рта.
                  <br />
                  <br />
                  <strong>1. Регулярная чистка зубов:</strong>
                  <br />
                  <br />
                  Детям необходимо чистить зубы два раза в день - утром и перед
                  сном. Используйте мягкую зубную щетку и небольшое количество
                  детской пасты с фтором. Обучите ребенка правильной технике
                  чистки зубов, включая движения вверх-вниз и по кругу.
                  <br />
                  <br />
                  <strong>2. Использование зубной нитки:</strong>
                  <br />
                  <br />
                  Регулярное использование зубной нитки помогает удалить налет и
                  остатки пищи из межзубных промежутков. Начинайте использовать
                  зубную нитку, когда у ребенка появятся контактные точки между
                  зубами.
                  <br />
                  <br />
                  <strong>3.Использование ополаскивателей: </strong>
                  <br />
                  <br />
                  Ополаскиватели для полости рта помогают уничтожить бактерии и
                  освежить дыхание. Выбирайте безалкогольные ополаскиватели,
                  специально разработанные для детей.
                  <br />
                  <br />
                  <strong>
                    4. Ограничение потребления сладких и кислых продуктов
                  </strong>
                  <br />
                  <br />
                  Сладкие и кислые продукты могут повысить риск развития
                  кариеса. Поэтому ограничьте потребление сладостей,
                  газированных напитков и кислых фруктов.
                  <br />
                  <br />
                  <strong>5. Регулярные посещения стоматолога:</strong>
                  <br />
                  <br />
                  Рекомендуется посещать стоматолога раз в 6 месяцев для
                  профессиональной чистки зубов и осмотра полости рта. Это
                  поможет выявить проблемы на ранних стадиях и предотвратить их
                  развитие.
                  <br />
                  Обеспечение правильной гигиены полости рта у детей является
                  важным шагом для поддержания здоровья зубов и десен. Наша
                  команда опытных стоматологов готова помочь вам и вашему
                  ребенку в обеспечении правильного ухода за зубами и деснами,
                  чтобы сохранить здоровую и красивую улыбку на долгие годы.
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
                  <Link to="/services/child-hygiene" className="link active">
                    Детская гигиена полости рта
                  </Link>
                </div>
                <h1 className="heading" style={{ width: "30%" }}>
                  Гигиена полости рта
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
                    Как обеспечить правильную гигиену полости рта у детей?
                  </h3>
                  <p className="p-info">
                    Правильная гигиена полости рта является важной частью
                    здоровья детей. Недостаточный уход за зубами и деснами может
                    привести к развитию кариеса, пародонтита и других проблем.
                    Чтобы обеспечить детям здоровую улыбку, наша клиника
                    предлагает следующие рекомендации по детской гигиене полости
                    рта.
                    <br />
                    <br />
                    <strong>1. Регулярная чистка зубов:</strong>
                    <br />
                    <br />
                    Детям необходимо чистить зубы два раза в день - утром и
                    перед сном. Используйте мягкую зубную щетку и небольшое
                    количество детской пасты с фтором. Обучите ребенка
                    правильной технике чистки зубов, включая движения вверх-вниз
                    и по кругу.
                    <br />
                    <br />
                    <strong>2. Использование зубной нитки:</strong>
                    <br />
                    <br />
                    Регулярное использование зубной нитки помогает удалить налет
                    и остатки пищи из межзубных промежутков. Начинайте
                    использовать зубную нитку, когда у ребенка появятся
                    контактные точки между зубами.
                    <br />
                    <br />
                    <strong>3.Использование ополаскивателей: </strong>
                    <br />
                    <br />
                    Ополаскиватели для полости рта помогают уничтожить бактерии
                    и освежить дыхание. Выбирайте безалкогольные ополаскиватели,
                    специально разработанные для детей.
                    <br />
                    <br />
                    <strong>
                      4. Ограничение потребления сладких и кислых продуктов
                    </strong>
                    <br />
                    <br />
                    Сладкие и кислые продукты могут повысить риск развития
                    кариеса. Поэтому ограничьте потребление сладостей,
                    газированных напитков и кислых фруктов.
                    <br />
                    <br />
                    <strong>5. Регулярные посещения стоматолога:</strong>
                    <br />
                    <br />
                    Рекомендуется посещать стоматолога раз в 6 месяцев для
                    профессиональной чистки зубов и осмотра полости рта. Это
                    поможет выявить проблемы на ранних стадиях и предотвратить
                    их развитие.
                    <br />
                    Обеспечение правильной гигиены полости рта у детей является
                    важным шагом для поддержания здоровья зубов и десен. Наша
                    команда опытных стоматологов готова помочь вам и вашему
                    ребенку в обеспечении правильного ухода за зубами и деснами,
                    чтобы сохранить здоровую и красивую улыбку на долгие годы.
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
    </div>
  );
};

export default ChildHygiene;
