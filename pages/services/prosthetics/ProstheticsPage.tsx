import React, { useState, useRef, RefObject, useEffect } from "react";
import { keyframes } from "@emotion/react";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
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

import Header from "../../../components/header/header";
import ReviewGallery from "../../../components/reviews/ReviewGallery";
import Footer from "../../../components/footer/Footer";
import Gallery from "../../../components/gallery/gallery";
import ServiceGallery from "../../../components/gallery/services_gallery";
import PcServiceGallery from "../../../components/gallery/pc_services_gallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faC, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "../../../components/service_template/styles/services_styles.css";
import PcGallery from "../../../components/gallery/pc_gallery";
import ReviewGalleryDesktop from "../../../components/reviews/ReviewGalleryDesktop";

import { Reveal } from "react-awesome-reveal";

import {
  faPlus,
  faMinus,
  faPhone,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const pavelGallery = require("../../../assets/pavel_gallery.webp");
const pavelGalleryPc = require("../../../assets/pavel_pc.webp");

const mainService = require("../../../assets/service_pc.webp");

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

const modalImage = require("../../../assets/example_modal.webp");
const logoMobile = require("../../../assets/logo_mob.svg").default;

const serviceOnePc = require("../../../assets/service_1.webp");
const serviceTwoPc = require("../../../assets/service_2.webp");
const ServiceThreePc = require("../../../assets/service_3.webp");
const ServiceFourPc = require("../../../assets/service_4.webp");

const serviceOneMob = require("../../../assets/service_mob_01.webp");
const serviceTwoMob = require("../../../assets/service_mob_02.webp");
const serviceThreeMob = require("../../../assets/service_mob_03.webp");
const serviceFourMob = require("../../../assets/service_mob_04.webp");

const prostheticsPc = require("../../../assets/prosthetics_pc.webp");

const ProstheticsPage = () => {
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
              <div className="heading-container">
                <div className="bread-dots">
                  <Link to="/" className="link">
                    Главная
                  </Link>
                  <div className="circle"></div>
                  <Link to="/#services" className="link">
                    Услуги
                  </Link>
                  <div className="circle"></div>
                  <Link to="/services/prosthetics" className="link active">
                    Протезирование
                  </Link>
                </div>
                <h1 className="heading">Протезирование</h1>
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
                    Виды протезирования в клинике Dental Home
                  </h3>
                  <p className="information-paragraph">
                    В нашей клинике предлагается широкий спектр услуг по
                    протезированию зубов, которые позволяют восстановить
                    функциональность и эстетику вашей улыбки. Наша команда
                    опытных ортопедов предлагает следующие виды протезирования:
                    <br />
                    <br />
                    <strong> 1.1 Зубные протезы</strong>
                    <br />
                    <br />
                    Зубные протезы являются наиболее распространенным способом
                    восстановления отсутствующих зубов. Они могут быть съемными
                    или несъемными, в зависимости от вашего индивидуального
                    случая. Съемные протезы легко снимаются и очищаются, что
                    облегчает уход за ними. Несъемные протезы, такие как
                    мостовидные конструкции, крепятся на соседние зубы или
                    имплантаты, что обеспечивает более надежную фиксацию.
                    <br />
                    <br />
                    <strong> 1.2 Коронки</strong>
                    <br />
                    <br />
                    Коронки используются для восстановления поврежденных зубов,
                    когда часть зуба сохранена. Они представляют собой капу,
                    которая надевается на зуб, полностью покрывая его. Коронки
                    могут быть изготовлены из различных материалов, таких как
                    металлокерамика, цельнокерамические материалы или металлы
                    высокой прочности. Мы поможем вам выбрать наиболее
                    подходящий материал с учетом ваших индивидуальных
                    потребностей.
                    <br />
                    <br />
                    <strong> 1.3 Имлпанты</strong>
                    <br />
                    <br />
                    Имплантаты являются современным и надежным способом
                    восстановления отсутствующих зубов. Они представляют собой
                    искусственные корни, которые вставляются в кость челюсти и
                    служат основой для крепления зубных протезов. Имплантаты
                    обеспечивают стабильную фиксацию протезов и восстанавливают
                    функциональность зубочелюстной системы. В нашей клинике мы
                    используем только качественные имплантаты, которые
                    обеспечивают долговечность и эстетическую привлекательность.
                    Заголовок 2: Преимущества протезирования в клинике Dental
                    Home
                  </p>
                </section>
                <div className="divider"></div>
                <section className="information">
                  <h3 className="information-heading">
                    Преимущества протезирования в клинике Dental Home
                  </h3>
                  <p className="information-paragraph">
                    <br />
                    <br />
                    <strong>2.1 Индивидуальный подход</strong>
                    <br />
                    <br />
                    Мы понимаем, что каждый пациент уникален, поэтому наши
                    специалисты проводят детальную консультацию и обследование
                    перед началом лечения. Мы учитываем ваши пожелания и
                    финансовые возможности, чтобы подобрать оптимальный тип
                    протеза и материал.
                    <br />
                    <br />
                    <strong>2.2 Использование современных технологий</strong>
                    <br />
                    <br />
                    В клинике Dental Home мы постоянно следим за новыми
                    технологиями и используем только современное оборудование.
                    Это позволяет нам достичь высокой точности и качества
                    восстановления зубов, сокращая время лечения и повышая
                    комфортность для пациентов.
                    <br />
                    <br />
                    <strong>2.3 Качественные материалы</strong>
                    <br />
                    <br />
                    Мы работаем только с проверенными поставщиками материалов,
                    которые гарантируют высокое качество и долговечность
                    протезов. Это позволяет нам предложить нашим пациентам
                    надежные и эстетически привлекательные решения.
                  </p>
                </section>
                <div className="divider"></div>
                <section className="information">
                  <h3 className="information-heading">
                    Процесс протезирования в клинике Dental Home
                  </h3>
                  <p className="information-paragraph">
                    <br />
                    <br />
                    <strong>3.1 Консультация и планирование</strong>
                    <br />
                    <br />
                    Перед началом лечения мы проводим детальную консультацию, в
                    ходе которой определяем ваши цели и ожидания от
                    протезирования. На основе этой информации мы разрабатываем
                    индивидуальный план лечения.
                    <br />
                    <br />
                    <strong>3.2 Подготовительные процедуры</strong>
                    <br />
                    <br />
                    В некоторых случаях может потребоваться подготовительная
                    работа, такая как удаление зубов или лечение зубочелюстной
                    системы. Наша команда специалистов проведет все необходимые
                    процедуры перед протезированием.
                    <br />
                    <br />
                    <strong>3.3 Изготовление и установка протеза</strong>
                    <br />
                    <br />
                    После подготовительных процедур мы приступаем к изготовлению
                    протеза в нашей собственной лаборатории. Когда протез будет
                    готов, мы проведем его установку и проверим его соответствие
                    вашим потребностям и ожиданиям.
                  </p>
                </section>
                <div className="divider"></div>
                <section className="information">
                  <h3 className="information-heading">Заключение</h3>
                  <p className="information-paragraph">
                    Протезирование в клинике Dental Home - это надежный и
                    эффективный способ восстановления зубочелюстной системы. Мы
                    предлагаем широкий спектр услуг, индивидуальный подход к
                    каждому пациенту, использование современных технологий и
                    качественных материалов. Обратившись к нам, вы получите
                    красивую и здоровую улыбку, которая прослужит вам долгие
                    годы.
                  </p>
                </section>

                <div className="divider"></div>
                <div className="plate">
                  <section className="tab-one">
                    <h5 className="plate-heading">
                      Протезирование на имплантах
                    </h5>
                    <span className="text">
                      Протезирование зуба с использованием имплантата временной
                      короной + временный абатмен
                    </span>
                    <span className="price">8 500₽</span>
                  </section>
                  <section className="tab-two">
                    <span className="text">
                      Единица промежуточной части временного мостовидного
                      протеза с опорой на имплантах
                    </span>
                    <span className="price">4 500₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Протезирование зуба с использованием имплантата коронкой
                      металлокерамической класса "Эстетик" (трансокклюзионная
                      фиксация)
                    </span>
                    <span className="price">31 000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Протезирование зуба с использованием имплантата коронкой
                      металлокерамической класса "стандарт" (цементная фиксация)
                      на индивидуальном абатменте
                    </span>
                    <span className="price">25 000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Протезирование зуба с использованием имплантата коронкой
                      металлокерамической класса "Премиум" (цементная фиксация)
                      на индивидуальном абатменте
                    </span>
                    <span className="price">31 000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Единица промежуточной части мостовидного протеза класса
                      "Стандарт" (металлокерамика) с опорой на имплантах
                    </span>
                    <span className="price">17 000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Единица промежуточной части мостовидного протеза класса
                      "Премиум" (металлокерамика) с опорой на имплантах
                    </span>
                    <span className="price">21 000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Протезирование зуба с использованием имплантата коронокой
                      из диоксида циркония класса "Стандарт"(трансокклюзионная
                      фиксация)
                    </span>
                    <span className="price">33 000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Протезирование зуба с использованием имплантата коронокой
                      из диоксида циркония класса "Премиум"(трансокклюзионная
                      фиксация)
                    </span>
                    <span className="price">37 500₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      {" "}
                      Протезирование зуба с использованием имплантата коронокой
                      из диоксида циркония класса "Стандарт"(трансокклюзионная
                      фиксация) на индивидуальном абатмене
                    </span>
                    <span className="price">39 000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      {" "}
                      Протезирование зуба с использованием имплантата коронокой
                      из диоксида циркония класса "Премиум"(трансокклюзионная
                      фиксация) на индивидуальном абатмене
                    </span>
                    <span className="price">45 000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Единица промежуточной части мостовидного протеза из
                      диоксида циркония класса "Стандарт" с опорой на
                      имплантатах
                    </span>
                    <span className="price">22000₽</span>
                  </section>
                  <section className="tab-three"></section>
                  <section className="tab-three">
                    <span className="text">
                      Единица промежуточной части мостовидного протеза из
                      диоксида циркония класса "Премиум" с опорой на имплантатах
                    </span>
                    <span className="price">26 0000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Протезирование зуба с использованием имплантата коронкой
                      E-max на титановом основании класса "Премиум"
                      (трансокклюзионная фиксация)
                    </span>
                    <span className="price">30 000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Индивидуальный абатмен из диоксида циркония
                    </span>
                    <span className="price">15 000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Протезирование полным условно-съемным протезом с опорой на
                      имплантатах (балочная конструкция) мультиюниты
                      оплачиваются отдельно
                    </span>
                    <span className="price">185 000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      ротезирование полным несъемным протезом с опорой на
                      имплантатах на мультиюнитах (мультиюниты оплачиваются
                      отдельно)
                    </span>
                    <span className="price">185 000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Стоимость мультиюнита (1 единица){" "}
                    </span>
                    <span className="price">20 000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Протезирование полным съемным протезом на имплантатах с
                      замковым креплением (люкаторная система замков){" "}
                    </span>
                    <span className="price">120 000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Протезирование полным съемным протезом на имплантатах на
                      аттачментах
                    </span>
                    <span className="price">95 000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Временный несъемный протез на имлантатах
                    </span>
                    <span className="price">80 000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Замена винта трансокклюзионной фиксации
                    </span>
                    <span className="price last">500₽</span>
                  </section>
                </div>
                <div
                  className="plate"
                  style={{ marginTop: "clamp(16px,7.47648vw,64px)" }}
                >
                  <section className="tab-one">
                    <h5 className="plate-heading">
                      Внутрикостная дентальная имплантация системой
                    </h5>
                    <span className="text">
                      Имплантация системой Dentium SuperLine (Ю.Корея)
                    </span>
                    <span className="price">35 000₽</span>
                  </section>
                  <section className="tab-two">
                    <span className="text">
                      Имплантация системой NeoDent GM (Бразилия)
                    </span>
                    <span className="price">35 000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Имплантация системой Nobel Biocare (Швейцария){" "}
                    </span>
                    <span className="price">70 000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">Миниимплант (ортовинт) </span>
                    <span className="price last">9 000₽</span>
                  </section>
                </div>
                <div
                  className="plate"
                  style={{ marginTop: "clamp(16px,7.47648vw,64px)" }}
                >
                  <section className="tab-one">
                    <h5 className="plate-heading">Формирователь десны</h5>
                    <span className="text">
                      Установка формирователя десны SuperLine
                    </span>
                    <span className="price">3 000₽</span>
                  </section>
                  <section className="tab-two">
                    <span className="text">
                      Установка формирователя десны Strumann{" "}
                    </span>
                    <span className="price">6 000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Установка формирователя десны NeoDent GM{" "}
                    </span>
                    <span className="price">3 000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">Установка формирователя десны </span>
                    <span className="price last">3 000₽</span>
                  </section>
                </div>
                <div
                  className="plate"
                  style={{ marginTop: "clamp(16px,7.47648vw,64px)" }}
                >
                  <section className="tab-one">
                    <h5 className="plate-heading">Синус-лифтинг</h5>
                    <span className="text">
                      Синус-лифтинг (без учета стоимости материалов) -закрытый
                    </span>
                    <span className="price">12 000₽</span>
                  </section>
                  <section className="tab-two">
                    <span className="text">
                      Синус-лифтинг (без учета стоимости материалов) -открытый
                    </span>
                    <span className="price">25 000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Направленная костная регенерация (HKP) титановой сеткой
                    </span>
                    <span className="price">25 000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Подсыпка костной ткани после удаления Bio-Oss
                    </span>
                    <span className="price">5 000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Костная пластика челюстно-лицевой области с применением
                      биодеградируемых материалов (костно-пластический материал
                      Bio-Oss 0,5 гр.)
                    </span>
                    <span className="price">15 000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Костная пластика челюстно-лицевой области с применением
                      биодеградируемых материалов (мембраны Bio-Gide) 1 шт.
                    </span>
                    <span className="price">22 000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Использование хирургического шаблона от 3 зубов
                    </span>
                    <span className="price">15 000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Использование хирургического шаблона от 4 зубов
                    </span>
                    <span className="price">24 000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">Переустановка импланта</span>
                    <span className="price last">7 500₽</span>
                  </section>
                </div>
                <div
                  className="plate"
                  style={{ marginTop: "clamp(16px,7.47648vw,64px)" }}
                >
                  <section className="tab-one">
                    <h5 className="plate-heading">Реконструктивное лечение</h5>
                    <span className="text">
                      Инъекционное введение лекарственных препаратов в
                      челюстно-лицевую область
                    </span>
                    <span className="price">380₽</span>
                  </section>
                  <section className="tab-two">
                    <span className="text">
                      Аппликация лекарственного препарата на слизистую оболочку
                      полости рта
                    </span>
                    <span className="price">550₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Ультразвуковая обработка пародонтального кармана в области
                      зуба с применением лекарственных средств (лечение
                      заболеваний пародонта аппаратом "Vector Para Pro" в
                      области 1 зуба/импланта)
                    </span>
                    <span className="price"> 800₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Ультразвуковая обработка пародонтального кармана в области
                      зуба с применением лекарственных средств (лечение
                      заболеваний пародонта аппаратом "Vector Para Pro" 2
                      челюсти)
                    </span>
                    <span className="price">10 000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Лазерная физиотерапия челюстно-лицевой области (1
                      процедура)
                    </span>
                    <span className="price">350₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Костная пластика челюстно-лицевой области с применением
                      биодеградируемых материалов (мембраны Bio-Gide) 1 шт.
                    </span>
                    <span className="price">22 000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Использование хирургического шаблона от 3 зубов
                    </span>
                    <span className="price">15 000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Использование хирургического шаблона от 4 зубов
                    </span>
                    <span className="price">24 000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">Переустановка импланта</span>
                    <span className="price last">7 500₽</span>
                  </section>
                </div>
              </div>
              <div className="services-gallery">
                <h4 className="heading">Работы</h4>
                <div className="divider"></div>
                <ServiceGallery
                  imageSrc={serviceOneMob}
                  imageSrcTwo={serviceTwoMob}
                  imageSrcThree={serviceOneMob}
                  imageSrcFour={serviceFourMob}
                />
              </div>
              <div className="services-gallery">
                <h4 className="heading">Наши специалисты</h4>
                <div className="divider"></div>
                <Gallery
                  imageSrc={doctorOneMob}
                  // imageSrcTwo={doctorTwoMob}
                  imageSrcThree={doctorThreeMob}
                  imageSrcFour={doctorFourMob}
                  imageSrcFive={doctorFiveMob}
                  imageSrcSix={doctorSixMob}
                  imageSrcSeven={doctorSevenMob}
                  imageSrcEight={doctorEightMob}
                  imageSrcNine={doctorNineMob}
                  openModal={openModal}
                />
              </div>
              <div className="services-gallery">
                <h4 className="heading">Отзывы</h4>
                <div className="divider"></div>
                <ReviewGallery></ReviewGallery>
                <div className="form-screen" id="form-screen-mob">
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
                          onChange={(event) =>
                            setPhoneNumber(event.target.value)
                          }
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
                          onChange={(event) =>
                            setServiceName(event.target.value)
                          }
                          name="serviceName"
                          placeholder="Выберите Услугу"
                          className="input-text"
                        />
                      </div>
                      {/* <div className="input-container">
                    <label htmlFor="direction" className="la">
                      Направление
                    </label>
                    <input
                      type="text"
                      name="direction"
                      placeholder="Выберите Направление"
                      className="input-text"
                    />
                  </div> */}
                      <div className="input-container">
                        <label htmlFor="doctor" className="la">
                          Врач
                        </label>
                        <input
                          type="text"
                          name="doctorName"
                          value={doctorName}
                          onChange={(event) =>
                            setDoctorName(event.target.value)
                          }
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
              </div>
            </div>
          </main>
          <main className="services-pc">
            <div className="pc-content">
              <Header
                isMenuPcOpen={isMenuPcOpen}
                openModal={openModal}
                togglePcMenu={togglePcMenu}
              ></Header>
              <div className="upper-content">
                <div className="heading-container">
                  <div className="bread-dots-container">
                    <Link to="/" className="link">
                      Главная
                    </Link>
                    <div className="circle"></div>
                    <Link to="/#services" className="link">
                      Услуги
                    </Link>
                    <div className="circle"></div>
                    <Link to="/services/prosthetics" className="link active">
                      Протезирование
                    </Link>
                  </div>
                  <h1 className="heading" style={{ width: "30%" }}>
                    Протезирование
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
                  src={prostheticsPc}
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
                    <ScrollLink to="doctors" className="button">
                      Врачи
                    </ScrollLink>
                    <ScrollLink to="prices" className="button">
                      Цена
                    </ScrollLink>
                    <ScrollLink to="works" className="button">
                      Работы
                    </ScrollLink>
                    <ScrollLink to="reviews" className="button">
                      Отзывы
                    </ScrollLink>
                    <ScrollLink
                      to="form-screen"
                      value={"Записаться на прием"}
                      className="button"
                    >
                      Записаться на прием
                    </ScrollLink>
                  </div>
                </div>
                <div className="services-information" id="information">
                  <span className="text">Об услуге</span>
                  <div className="information-one">
                    <h3 className="heading-info">
                      Виды протезирования в клинике Dental Home
                    </h3>
                    <p className="p-info">
                      В нашей клинике предлагается широкий спектр услуг по
                      протезированию зубов, которые позволяют восстановить
                      функциональность и эстетику вашей улыбки. Наша команда
                      опытных ортопедов предлагает следующие виды
                      протезирования:
                      <br />
                      <br />
                      <strong> 1.1 Зубные протезы</strong>
                      <br />
                      <br />
                      Зубные протезы являются наиболее распространенным способом
                      восстановления отсутствующих зубов. Они могут быть
                      съемными или несъемными, в зависимости от вашего
                      индивидуального случая. Съемные протезы легко снимаются и
                      очищаются, что облегчает уход за ними. Несъемные протезы,
                      такие как мостовидные конструкции, крепятся на соседние
                      зубы или имплантаты, что обеспечивает более надежную
                      фиксацию.
                      <br />
                      <br />
                      <strong> 1.2 Коронки</strong>
                      <br />
                      <br />
                      Коронки используются для восстановления поврежденных
                      зубов, когда часть зуба сохранена. Они представляют собой
                      капу, которая надевается на зуб, полностью покрывая его.
                      Коронки могут быть изготовлены из различных материалов,
                      таких как металлокерамика, цельнокерамические материалы
                      или металлы высокой прочности. Мы поможем вам выбрать
                      наиболее подходящий материал с учетом ваших индивидуальных
                      потребностей.
                      <br />
                      <br />
                      <strong> 1.3 Имлпанты</strong>
                      <br />
                      <br />
                      Имплантаты являются современным и надежным способом
                      восстановления отсутствующих зубов. Они представляют собой
                      искусственные корни, которые вставляются в кость челюсти и
                      служат основой для крепления зубных протезов. Имплантаты
                      обеспечивают стабильную фиксацию протезов и
                      восстанавливают функциональность зубочелюстной системы. В
                      нашей клинике мы используем только качественные
                      имплантаты, которые обеспечивают долговечность и
                      эстетическую привлекательность. Заголовок 2: Преимущества
                      протезирования в клинике Dental Home
                    </p>
                  </div>
                  <div className="information-two">
                    <h3 className="heading-info two">
                      Преимущества протезирования в клинике Dental Home
                    </h3>
                    <p className="p-info two">
                      <br />
                      <br />
                      <strong>2.1 Индивидуальный подход</strong>
                      <br />
                      <br />
                      Мы понимаем, что каждый пациент уникален, поэтому наши
                      специалисты проводят детальную консультацию и обследование
                      перед началом лечения. Мы учитываем ваши пожелания и
                      финансовые возможности, чтобы подобрать оптимальный тип
                      протеза и материал.
                      <br />
                      <br />
                      <strong>2.2 Использование современных технологий</strong>
                      <br />
                      <br />
                      В клинике Dental Home мы постоянно следим за новыми
                      технологиями и используем только современное оборудование.
                      Это позволяет нам достичь высокой точности и качества
                      восстановления зубов, сокращая время лечения и повышая
                      комфортность для пациентов.
                      <br />
                      <br />
                      <strong>2.3 Качественные материалы</strong>
                      <br />
                      <br />
                      Мы работаем только с проверенными поставщиками материалов,
                      которые гарантируют высокое качество и долговечность
                      протезов. Это позволяет нам предложить нашим пациентам
                      надежные и эстетически привлекательные решения.
                    </p>
                  </div>
                  <div className="information-two">
                    <h3 className="heading-info two">
                      {" "}
                      Процесс протезирования в клинике Dental Home
                    </h3>
                    <p className="p-info two">
                      <br />
                      <br />
                      <strong>3.1 Консультация и планирование</strong>
                      <br />
                      <br />
                      Перед началом лечения мы проводим детальную консультацию,
                      в ходе которой определяем ваши цели и ожидания от
                      протезирования. На основе этой информации мы разрабатываем
                      индивидуальный план лечения.
                      <br />
                      <br />
                      <strong>3.2 Подготовительные процедуры</strong>
                      <br />
                      <br />
                      В некоторых случаях может потребоваться подготовительная
                      работа, такая как удаление зубов или лечение зубочелюстной
                      системы. Наша команда специалистов проведет все
                      необходимые процедуры перед протезированием.
                      <br />
                      <br />
                      <strong>3.3 Изготовление и установка протеза</strong>
                      <br />
                      <br />
                      После подготовительных процедур мы приступаем к
                      изготовлению протеза в нашей собственной лаборатории.
                      Когда протез будет готов, мы проведем его установку и
                      проверим его соответствие вашим потребностям и ожиданиям.
                    </p>
                  </div>
                  <div className="information-two">
                    <h3 className="heading-info two">Заключение</h3>
                    <p className="p-info two">
                      Протезирование в клинике Dental Home - это надежный и
                      эффективный способ восстановления зубочелюстной системы.
                      Мы предлагаем широкий спектр услуг, индивидуальный подход
                      к каждому пациенту, использование современных технологий и
                      качественных материалов. Обратившись к нам, вы получите
                      красивую и здоровую улыбку, которая прослужит вам долгие
                      годы.
                    </p>
                  </div>

                  <div className="price-tab" id="prices">
                    <h4 className="price-heading">
                      Протезирование на имплантах
                    </h4>
                    <div className="prices">
                      <div className="price-row">
                        <span className="text">
                          Протезирование зуба с использованием имплантата
                          временной короной + временный абатмен
                        </span>
                        <span className="price">8 500₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Единица промежуточной части временного мостовидного
                          протеза с опорой на имплантах
                        </span>
                        <span className="price">4 500₽</span>
                      </div>
                      <div className="price-row ">
                        <span className="text">
                          Протезирование зуба с использованием имплантата
                          коронкой металлокерамической класса "Эстетик"
                          (трансокклюзионная фиксация)
                        </span>
                        <span className="price">31 000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Протезирование зуба с использованием имплантата
                          коронкой металлокерамической класса "стандарт"
                          (цементная фиксация) на индивидуальном абатменте
                        </span>
                        <span className="price">25 000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Протезирование зуба с использованием имплантата
                          коронкой металлокерамической класса "Премиум"
                          (цементная фиксация) на индивидуальном абатменте
                        </span>
                        <span className="price">31 000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Единица промежуточной части мостовидного протеза
                          класса "Стандарт" (металлокерамика) с опорой на
                          имплантах
                        </span>
                        <span className="price">17 000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Единица промежуточной части мостовидного протеза
                          класса "Премиум" (металлокерамика) с опорой на
                          имплантах
                        </span>
                        <span className="price">21 000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Протезирование зуба с использованием имплантата
                          коронокой из диоксида циркония класса
                          "Стандарт"(трансокклюзионная фиксация)
                        </span>
                        <span className="price">33 000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Протезирование зуба с использованием имплантата
                          коронокой из диоксида циркония класса
                          "Премиум"(трансокклюзионная фиксация)
                        </span>
                        <span className="price">37 500₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          {" "}
                          Протезирование зуба с использованием имплантата
                          коронокой из диоксида циркония класса
                          "Стандарт"(трансокклюзионная фиксация) на
                          индивидуальном абатмене
                        </span>
                        <span className="price">39 000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          {" "}
                          Протезирование зуба с использованием имплантата
                          коронокой из диоксида циркония класса
                          "Премиум"(трансокклюзионная фиксация) на
                          индивидуальном абатмене
                        </span>
                        <span className="price">45 000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Единица промежуточной части мостовидного протеза из
                          диоксида циркония класса "Стандарт" с опорой на
                          имплантатах
                        </span>
                        <span className="price">22000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Единица промежуточной части мостовидного протеза из
                          диоксида циркония класса "Премиум" с опорой на
                          имплантатах
                        </span>
                        <span className="price">26 0000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Протезирование зуба с использованием имплантата
                          коронкой E-max на титановом основании класса "Премиум"
                          (трансокклюзионная фиксация)
                        </span>
                        <span className="price">30 000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Индивидуальный абатмен из диоксида циркония
                        </span>
                        <span className="price">15 000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Протезирование полным условно-съемным протезом с
                          опорой на имплантатах (балочная конструкция)
                          мультиюниты оплачиваются отдельно
                        </span>
                        <span className="price">185 000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          ротезирование полным несъемным протезом с опорой на
                          имплантатах на мультиюнитах (мультиюниты оплачиваются
                          отдельно)
                        </span>
                        <span className="price">185 000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Стоимость мультиюнита (1 единица){" "}
                        </span>
                        <span className="price">20 000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Протезирование полным съемным протезом на имплантатах
                          с замковым креплением (люкаторная система замков){" "}
                        </span>
                        <span className="price">120 000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Протезирование полным съемным протезом на имплантатах
                          на аттачментах
                        </span>
                        <span className="price">95 000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Временный несъемный протез на имлантатах
                        </span>
                        <span className="price">80 000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Замена винта трансокклюзионной фиксации
                        </span>
                        <span className="price last">500₽</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="price-tab"
                    id="prices"
                    style={{ marginTop: "clamp(16px,1.66656vw,64px)" }}
                  >
                    <h4 className="price-heading">
                      Внутрикостная дентальная имплантация системой
                    </h4>
                    <div className="prices">
                      <div className="price-row">
                        <span className="text">
                          Имплантация системой Dentium SuperLine (Ю.Корея)
                        </span>
                        <span className="price">35 000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Имплантация системой NeoDent GM (Бразилия)
                        </span>
                        <span className="price">35 000₽</span>
                      </div>
                      <div className="price-row ">
                        <span className="text">
                          Имплантация системой Nobel Biocare (Швейцария){" "}
                        </span>
                        <span className="price">70 000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">Миниимплант (ортовинт) </span>
                        <span className="price last">9 000₽</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="price-tab"
                    id="prices"
                    style={{ marginTop: "clamp(16px,1.66656vw,64px)" }}
                  >
                    <h4 className="price-heading">Формирователь десны</h4>
                    <div className="prices">
                      <div className="price-row">
                        <span className="text">
                          Установка формирователя десны SuperLine
                        </span>
                        <span className="price">3 000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Установка формирователя десны Strumann{" "}
                        </span>
                        <span className="price">6 000₽</span>
                      </div>
                      <div className="price-row ">
                        <span className="text">
                          Установка формирователя десны NeoDent GM{" "}
                        </span>
                        <span className="price">3 000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Установка формирователя десны{" "}
                        </span>
                        <span className="price last">3 000₽</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="price-tab"
                    id="prices"
                    style={{ marginTop: "clamp(16px,1.66656vw,64px)" }}
                  >
                    <h4 className="price-heading">Реконструктивное лечение</h4>
                    <div className="prices">
                      <div className="price-row">
                        <span className="text">
                          Инъекционное введение лекарственных препаратов в
                          челюстно-лицевую область
                        </span>
                        <span className="price">380₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Аппликация лекарственного препарата на слизистую
                          оболочку полости рта
                        </span>
                        <span className="price">550₽</span>
                      </div>
                      <div className="price-row ">
                        <span className="text">
                          Ультразвуковая обработка пародонтального кармана в
                          области зуба с применением лекарственных средств
                          (лечение заболеваний пародонта аппаратом "Vector Para
                          Pro" в области 1 зуба/импланта)
                        </span>
                        <span className="price"> 800₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Ультразвуковая обработка пародонтального кармана в
                          области зуба с применением лекарственных средств
                          (лечение заболеваний пародонта аппаратом "Vector Para
                          Pro" 2 челюсти)
                        </span>
                        <span className="price">10 000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Лазерная физиотерапия челюстно-лицевой области (1
                          процедура)
                        </span>
                        <span className="price">350₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Костная пластика челюстно-лицевой области с
                          применением биодеградируемых материалов (мембраны
                          Bio-Gide) 1 шт.
                        </span>
                        <span className="price">22 000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Использование хирургического шаблона от 3 зубов
                        </span>
                        <span className="price">15 000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Использование хирургического шаблона от 4 зубов
                        </span>
                        <span className="price">24 000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">Переустановка импланта</span>
                        <span className="price last">7 500₽</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="gallery"
                id="works"
                style={{
                  borderTop: "1px solid #202637",
                  marginTop: "clamp(32px,3.33312vw,128px)",
                }}
              >
                <PcServiceGallery
                  imageSrc={serviceOnePc}
                  imageSrc2={serviceTwoPc}
                  imageSrc3={ServiceThreePc}
                  imageSrc4={ServiceFourPc}
                ></PcServiceGallery>
              </div>
              <div
                className="gallery"
                id="doctors"
                style={{
                  borderTop: "1px solid #202637",
                }}
              >
                <PcGallery
                  imageSrc={doctorOne}
                  // imageSrc2={doctorTwo}
                  imageSrc3={doctorThree}
                  imageSrc4={doctorFour}
                  imageSrc5={doctorFive}
                  imageSrc6={doctorSix}
                  imageSrc7={doctorSeven}
                  imageSrc8={doctorEight}
                  imageSrc9={doctorNine}
                  openModal={openModal}
                />
                <div
                  className="gallery"
                  id="reviews"
                  style={{
                    borderTop: "1px solid #202637",
                    marginTop: "clamp(32px,3.33312vw,128px)",
                  }}
                >
                  <ReviewGalleryDesktop />
                </div>
                <div
                  className="form-pc-screen"
                  id="form-screen"
                  ref={form}
                  style={{ marginBottom: "clamp(64px,6.66624vw,256px)" }}
                  onSubmit={sendEmail}
                >
                  <section className="content">
                    <div className="heading-container">
                      <h5 className="heading">Записаться На Прием</h5>
                    </div>
                    <div className="divider"></div>
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
                            onChange={(event) =>
                              setFullName(event.target.value)
                            }
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

export default ProstheticsPage;
