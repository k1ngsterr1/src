import React, { useState, useRef, RefObject, useEffect } from "react";
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
import { keyframes } from "@emotion/react";
import { MDBCheckbox } from "mdb-react-ui-kit";
import emailjs from "@emailjs/browser";
import { Reveal } from "react-awesome-reveal";
import Header from "../../../components/header/header";
import ReviewGallery from "../../../components/reviews/ReviewGallery";
import Footer from "../../../components/footer/Footer";
import Gallery from "../../../components/gallery/gallery";
import ServiceGallery from "../../../components/gallery/services_gallery";
import PcServiceGallery from "../../../components/gallery/pc_services_gallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faC, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import {
  faPlus,
  faMinus,
  faPhone,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import "../../../components/service_template/styles/services_styles.css";
import PcGallery from "../../../components/gallery/pc_gallery";
import ReviewGalleryDesktop from "../../../components/reviews/ReviewGalleryDesktop";

const pavelGallery = require("../../../assets/pavel_gallery.webp");
const pavelGalleryPc = require("../../../assets/pavel_pc.webp");

const modalImage = require("../../../assets/example_modal.webp");
const logoMobile = require("../../../assets/logo_mob.svg").default;
const mainService = require("../../../assets/vinirs_pc.webp");

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

const VinirsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuPcOpen, setIsMenuPcOpen] = useState(false);

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [comment, setComment] = useState("");

  const form: RefObject<HTMLDivElement> = useRef(null);

  const [open, setOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePcMenu = () => {
    setIsMenuPcOpen(!isMenuPcOpen);
  };

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
                  <Link to="/services/vinirs" className="link active">
                    Виниры и коронки
                  </Link>
                </div>
                <h1 className="heading"> Виниры и коронки</h1>
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
                  <h3 className="information-heading">Виниры и коронки</h3>
                  <p className="information-paragraph">
                    Под коронку всегда нужно препарировать зуб, чтобы создать
                    место для ее установки
                    <br />
                    <br />
                    <strong>
                      Как проходит процедура установки виниров и коронок?{" "}
                    </strong>
                    <br />
                    <br />
                    <strong>1. Консультация и планирование</strong>
                    <br />
                    <br />
                    Врач проводит осмотр и обсуждает с пациентом его желания и
                    ожидания от процедуры. На основе этой информации
                    разрабатывается индивидуальный план лечения.
                    <br />
                    <br />
                    <strong>2. Подготовка зуба</strong>
                    <br />
                    <br />
                    При установке виниров зубы обрабатываются минимально, чтобы
                    сохранить их структуру. При установке коронок зубы
                    препарируются, чтобы создать место для будущей коронки.
                    <br />
                    <br />
                    <strong>3. Оттиск зуба</strong>
                    <br />
                    <br />
                    Для изготовления виниров или коронок врач берет оттиск зуба,
                    чтобы точно скопировать его форму и размеры.
                    <br />
                    <br />
                    <strong>4. Изготовление протеза</strong>
                    <br />
                    <br />В лаборатории специалисты изготавливают виниры или
                    коронки из выбранного материала с учетом индивидуальных
                    потребностей пациента.
                    <br />
                    <br />
                    <strong>5. Установка протеза</strong>
                    <br />
                    <br />
                    После изготовления протеза он устанавливается на зуб с
                    помощью специального цемента или клея. Врач проверяет
                    соответствие протеза ожиданиям пациента и вносит необходимые
                    корректировки.
                  </p>
                </section>
                <div className="divider"></div>
                <section className="information">
                  <h3 className="information-heading">
                    Преимущества виниров и коронок:
                  </h3>
                  <p className="information-paragraph">
                    <br />
                    <br />
                    - Эстетическая привлекательность. Виниры и коронки позволяют
                    изменить форму, цвет и положение зубов, создавая красивую
                    улыбку.
                    <br />
                    <br />
                    - Функциональность. Протезы восстанавливают поврежденные
                    зубы, обеспечивая нормальное жевание и речь.
                    <br />
                    <br />
                    - Долговечность. Керамические и циркониевые виниры и коронки
                    имеют высокую прочность и долгий срок службы.
                    <br />
                    <br />
                    - Безопасность. Материалы, используемые для изготовления
                    виниров и коронок, не вызывают аллергических реакций и не
                    взаимодействуют с тканями ротовой полости.
                    <br />
                    <br />
                    Если вы ищете качественные стоматологические услуги по
                    установке виниров и коронок в Ивантеевке, обратитесь в нашу
                    клинику Dental Home. Наша команда опытных специалистов
                    гарантирует высокое качество работы, индивидуальный подход к
                    каждому пациенту и использование современных технологий. Мы
                    поможем вам достичь желаемого результата и получить красивую
                    улыбку.
                  </p>
                </section>
                <div className="divider"></div>
                <div className="plate">
                  <section className="tab-one">
                    <h5 className="plate-heading">Ортопедия</h5>
                    <span className="text">
                      Повторная фиксация на постоянный цемент несъемных
                      ортопедических конструкций
                    </span>
                    <span className="price">1 500₽</span>
                  </section>
                  <section className="tab-two">
                    <span className="text">
                      Фиксация на RELYX Luting несъемных ортопедических
                      конструкций
                    </span>
                    <span className="price">2 000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Фиксация несъемных ортопедических конструкций на временный
                      цемент Temp bond
                    </span>
                    <span className="price">700₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Снятие несъемной ортопедической конструкции (1 единица)
                    </span>
                    <span className="price">1 000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">Удаление вкладки</span>
                    <span className="price">4 000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Коррекция протеза, изготовленного в другой клинике
                    </span>
                    <span className="price">1 500₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Починка (перебазировка) съемного протеза лабораторным
                      методом
                    </span>
                    <span className="price">5 500₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">Приварка 1 кламмера</span>
                    <span className="price">5 500₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">Приварка 1 зуба</span>
                    <span className="price">5 500₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      {" "}
                      Замена матрицы на бюгельном протезе (1 протез)
                    </span>
                    <span className="price">5 500₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      {" "}
                      Изготовление каппы для депрограмирования мышц
                    </span>
                    <span className="price">5 500₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Коррекция съемного протеза изготовленного в другой клинике
                    </span>
                    <span className="price">1 500₽</span>
                  </section>
                  <section className="tab-three"></section>
                  <section className="tab-three">
                    <span className="text">
                      Каппа для стабилизации прикуса (Ортотик)
                    </span>
                    <span className="price last">20 000₽</span>
                  </section>
                </div>
                <div
                  className="plate"
                  style={{ marginTop: "clamp(16px,7.47648vw,64px)" }}
                >
                  <section className="tab-one">
                    <h5 className="plate-heading">Оттиски</h5>
                    <span className="text">
                      Снятие оттиска с одной челюсти альгинатными массами
                    </span>
                    <span className="price">1 000₽</span>
                  </section>
                  <section className="tab-two">
                    <span className="text">
                      Снятие оттиска с одной челюсти массой из С-силикона
                    </span>
                    <span className="price">1 500₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Снятие оттиска с одной челюсти массой из А-силикона
                    </span>
                    <span className="price">2 000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">Прикусной блок</span>
                    <span className="price">1 000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Изготовление прикусного шаблона и индивидуальной ложки
                    </span>
                    <span className="price">3 500₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Снятие оттиска с одной челюсти для изготовления
                      силиконового ключа
                    </span>
                    <span className="price">1 500₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Снятие оттиска с одной челюсти с имплантов с
                      использованием индивидуальной ложки
                    </span>
                    <span className="price">2 500₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">Wax up восковое моделирование</span>
                    <span className="price">2 000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Цифровой оттиск (сканирование верхней и нижней челюсти,
                      прикус){" "}
                    </span>
                    <span className="price last">5 500₽</span>
                  </section>
                </div>
                <div
                  className="plate"
                  style={{ marginTop: "clamp(16px,7.47648vw,64px)" }}
                >
                  <section className="tab-one">
                    <h5 className="plate-heading">Вкладки</h5>
                    <span className="text">
                      Восстановление зуба с использованием керамической вкладки
                      (накладки) Emax
                    </span>
                    <span className="price">25 000₽</span>
                  </section>
                  <section className="tab-two">
                    <span className="text">
                      Восстановление зуба с использованием цельнолитой культевой
                      вкладки
                    </span>
                    <span className="price">7 000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Восстановление зуба с использованием культевой вкладки из
                      диоксида циркония
                    </span>
                    <span className="price">15 000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Восстановление зуба с использованием золотой вкладки (без
                      стоимости золота){" "}
                    </span>
                    <span className="price last">10 000₽</span>
                  </section>
                </div>
                <div
                  className="plate"
                  style={{ marginTop: "clamp(16px,7.47648vw,64px)" }}
                >
                  <section className="tab-one">
                    <h5 className="plate-heading">Коронки</h5>
                    <span className="text">
                      Восстановление зуба коронкой временной прямым методом
                    </span>
                    <span className="price">2 000₽</span>
                  </section>
                  <section className="tab-two">
                    <span className="text">
                      Восстановление зуба коронкой временной лабораторным
                      способом
                    </span>
                    <span className="price">3 500₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Восстановление зуба коронкой металлокерамической класса
                      "стандарт"
                    </span>
                    <span className="price">12 000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Восстановление зуба коронкой металлокерамической класса
                      "премиум"
                    </span>
                    <span className="price">18 500₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Восстановление зуба коронкой металлокерамической на
                      драгоценном сплаве (без учета стоимости драгоценного
                      металла)
                    </span>
                    <span className="price">18 500₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Восстановление зуба коронкой из диоксида циркония класса
                      "стандарт"
                    </span>
                    <span className="price">18 000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Восстановление зуба коронкой из диоксида циркония класса
                      "премиум"
                    </span>
                    <span className="price last">27 000₽</span>
                  </section>
                </div>
                <div
                  className="plate"
                  style={{ marginTop: "clamp(16px,7.47648vw,64px)" }}
                >
                  <section className="tab-one">
                    <h5 className="plate-heading">
                      Восстаовление зуба виниром E-max
                    </h5>
                    <span className="text">
                      Восстановление зуба виниром E-max класса "стандарт"
                    </span>
                    <span className="price">25000₽</span>
                  </section>
                  <section className="tab-two">
                    <span className="text">
                      Восстановление зуба виниром E-max класса "премиум"
                    </span>
                    <span className="price">35000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Диагностика прикуса при помощи миостимулятора "МИСТ ТЕНС"
                    </span>
                    <span className="price last">10000₽</span>
                  </section>
                </div>
                <div
                  className="plate"
                  style={{ marginTop: "clamp(16px,7.47648vw,64px)" }}
                >
                  <section className="tab-one">
                    <h5 className="plate-heading">
                      Съемные, Бюгельные протезы
                    </h5>
                    <span className="text">
                      Протезирование зубов полным съемным пластиночным протезом
                      (Японский гарнитур, пластм)
                    </span>
                    <span className="price">40000₽</span>
                  </section>
                  <section className="tab-two">
                    <span className="text">
                      Протезирование частичным съемным пластиночным протезом для
                      временного замещения отсутствующих 1-3 зубов
                      (иммедиат-протез)
                    </span>
                    <span className="price">9 500₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Протезирование частичным съемным пластиночным протезом
                      (Японский гарнитур, пластм)
                    </span>
                    <span className="price">40 000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Протезирование съемным бюгельным протезом кламерным
                    </span>
                    <span className="price last">45 000₽</span>
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
                  imageSrcTwo={doctorTwoMob}
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
                    <Link to="/services/vinirs" className="link active">
                      Виниры и коронки
                    </Link>
                  </div>
                  <h1 className="heading" style={{ width: "30%" }}>
                    Виниры и коронки
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
                    <h3 className="heading-info">Виниры и коронки</h3>
                    <p className="p-info">
                      Под коронку всегда нужно препарировать зуб, чтобы создать
                      место для ее установки
                      <br />
                      <br />
                      <strong>
                        Как проходит процедура установки виниров и коронок?{" "}
                      </strong>
                      <br />
                      <br />
                      <strong>1. Консультация и планирование</strong>
                      <br />
                      <br />
                      Врач проводит осмотр и обсуждает с пациентом его желания и
                      ожидания от процедуры. На основе этой информации
                      разрабатывается индивидуальный план лечения.
                      <br />
                      <br />
                      <strong>2. Подготовка зуба</strong>
                      <br />
                      <br />
                      При установке виниров зубы обрабатываются минимально,
                      чтобы сохранить их структуру. При установке коронок зубы
                      препарируются, чтобы создать место для будущей коронки.
                      <br />
                      <br />
                      <strong>3. Оттиск зуба</strong>
                      <br />
                      <br />
                      Для изготовления виниров или коронок врач берет оттиск
                      зуба, чтобы точно скопировать его форму и размеры.
                      <br />
                      <br />
                      <strong>4. Изготовление протеза</strong>
                      <br />
                      <br />В лаборатории специалисты изготавливают виниры или
                      коронки из выбранного материала с учетом индивидуальных
                      потребностей пациента.
                      <br />
                      <br />
                      <strong>5. Установка протеза</strong>
                      <br />
                      <br />
                      После изготовления протеза он устанавливается на зуб с
                      помощью специального цемента или клея. Врач проверяет
                      соответствие протеза ожиданиям пациента и вносит
                      необходимые корректировки.
                    </p>
                  </div>
                  <div className="information-two">
                    <h3 className="heading-info two">
                      Преимущества виниров и коронок:
                    </h3>
                    <p className="p-info two">
                      <br />
                      <br />
                      - Эстетическая привлекательность. Виниры и коронки
                      позволяют изменить форму, цвет и положение зубов, создавая
                      красивую улыбку.
                      <br />
                      <br />
                      - Функциональность. Протезы восстанавливают поврежденные
                      зубы, обеспечивая нормальное жевание и речь.
                      <br />
                      <br />
                      - Долговечность. Керамические и циркониевые виниры и
                      коронки имеют высокую прочность и долгий срок службы.
                      <br />
                      <br />
                      - Безопасность. Материалы, используемые для изготовления
                      виниров и коронок, не вызывают аллергических реакций и не
                      взаимодействуют с тканями ротовой полости.
                      <br />
                      <br />
                      Если вы ищете качественные стоматологические услуги по
                      установке виниров и коронок в Ивантеевке, обратитесь в
                      нашу клинику Dental Home. Наша команда опытных
                      специалистов гарантирует высокое качество работы,
                      индивидуальный подход к каждому пациенту и использование
                      современных технологий. Мы поможем вам достичь желаемого
                      результата и получить красивую улыбку.
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

                  <div className="price-tab" id="prices">
                    <h4 className="price-heading">Ортопедия</h4>
                    <div className="prices">
                      <div className="price-row">
                        <span className="text">
                          Повторная фиксация на постоянный цемент несъемных
                          ортопедических конструкций
                        </span>
                        <span className="price">1 500₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Фиксация на RELYX Luting несъемных ортопедических
                          конструкций
                        </span>
                        <span className="price">2 000₽</span>
                      </div>
                      <div className="price-row ">
                        <span className="text">
                          Фиксация несъемных ортопедических конструкций на
                          временный цемент Temp bond
                        </span>
                        <span className="price">700₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Снятие несъемной ортопедической конструкции (1
                          единица)
                        </span>
                        <span className="price">1 000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">Удаление вкладки</span>
                        <span className="price">4 000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Коррекция протеза, изготовленного в другой клинике
                        </span>
                        <span className="price">1 500₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Починка (перебазировка) съемного протеза лабораторным
                          методом
                        </span>
                        <span className="price">5 500₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">Приварка 1 кламмера</span>
                        <span className="price">5 500₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">Приварка 1 зуба</span>
                        <span className="price">5 500₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          {" "}
                          Замена матрицы на бюгельном протезе (1 протез)
                        </span>
                        <span className="price">5 500₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          {" "}
                          Изготовление каппы для депрограмирования мышц
                        </span>
                        <span className="price">5 500₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Коррекция съемного протеза изготовленного в другой
                          клинике
                        </span>
                        <span className="price">1 500₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Каппа для стабилизации прикуса (Ортотик)
                        </span>
                        <span className="price last">20 000₽</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="price-tab"
                    id="prices"
                    style={{ marginTop: "clamp(16px,1.66656vw,64px)" }}
                  >
                    <h4 className="price-heading">Оттиски</h4>
                    <div className="prices">
                      <div className="price-row">
                        <span className="text">
                          Снятие оттиска с одной челюсти альгинатными массами
                        </span>
                        <span className="price">1 000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Снятие оттиска с одной челюсти массой из С-силикона
                        </span>
                        <span className="price">1 500₽</span>
                      </div>
                      <div className="price-row ">
                        <span className="text">
                          Снятие оттиска с одной челюсти массой из А-силикона
                        </span>
                        <span className="price">2 000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">Прикусной блок</span>
                        <span className="price">1 000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Изготовление прикусного шаблона и индивидуальной ложки
                        </span>
                        <span className="price">3 500₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Снятие оттиска с одной челюсти для изготовления
                          силиконового ключа
                        </span>
                        <span className="price">1 500₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Снятие оттиска с одной челюсти с имплантов с
                          использованием индивидуальной ложки
                        </span>
                        <span className="price">2 500₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Wax up восковое моделирование
                        </span>
                        <span className="price">2 000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Цифровой оттиск (сканирование верхней и нижней
                          челюсти, прикус){" "}
                        </span>
                        <span className="price last">5 500₽</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="price-tab"
                    id="prices"
                    style={{ marginTop: "clamp(16px,1.66656vw,64px)" }}
                  >
                    <h4 className="price-heading">Вкладки</h4>
                    <div className="prices">
                      <div className="price-row">
                        <span className="text">
                          Восстановление зуба с использованием керамической
                          вкладки (накладки) Emax
                        </span>
                        <span className="price">25 000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Восстановление зуба с использованием цельнолитой
                          культевой вкладки
                        </span>
                        <span className="price">7 000₽</span>
                      </div>
                      <div className="price-row ">
                        <span className="text">
                          Восстановление зуба с использованием культевой вкладки
                          из диоксида циркония
                        </span>
                        <span className="price">15 000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Восстановление зуба с использованием золотой вкладки
                          (без стоимости золота){" "}
                        </span>
                        <span className="price last">10 000₽</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="price-tab"
                    id="prices"
                    style={{ marginTop: "clamp(16px,1.66656vw,64px)" }}
                  >
                    <h4 className="price-heading">Коронки</h4>
                    <div className="prices">
                      <div className="price-row">
                        <span className="text">
                          Восстановление зуба коронкой временной прямым методом
                        </span>
                        <span className="price">2 000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Восстановление зуба коронкой временной лабораторным
                          способом
                        </span>
                        <span className="price">3 500₽</span>
                      </div>
                      <div className="price-row ">
                        <span className="text">
                          Восстановление зуба коронкой металлокерамической
                          класса "стандарт"
                        </span>
                        <span className="price">12 000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Восстановление зуба коронкой металлокерамической
                          класса "премиум"
                        </span>
                        <span className="price">18 500₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Восстановление зуба коронкой металлокерамической на
                          драгоценном сплаве (без учета стоимости драгоценного
                          металла)
                        </span>
                        <span className="price">18 500₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Восстановление зуба коронкой из диоксида циркония
                          класса "стандарт"
                        </span>
                        <span className="price">18 000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Восстановление зуба коронкой из диоксида циркония
                          класса "премиум"
                        </span>
                        <span className="price last">27 000₽</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="price-tab"
                    id="prices"
                    style={{ marginTop: "clamp(16px,1.66656vw,64px)" }}
                  >
                    <h4 className="price-heading">
                      Восстаовление зуба виниром E-max
                    </h4>
                    <div className="prices">
                      <div className="price-row">
                        <span className="text">
                          Восстановление зуба виниром E-max класса "стандарт"
                        </span>
                        <span className="price">25000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Восстановление зуба виниром E-max класса "премиум"
                        </span>
                        <span className="price">35000₽</span>
                      </div>
                      <div className="price-row ">
                        <span className="text">
                          Диагностика прикуса при помощи миостимулятора "МИСТ
                          ТЕНС"
                        </span>
                        <span className="price last">10000₽</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="price-tab"
                    id="prices"
                    style={{ marginTop: "clamp(16px,1.66656vw,64px)" }}
                  >
                    <h4 className="price-heading">
                      Съемные, Бюгельные протезы
                    </h4>
                    <div className="prices">
                      <div className="price-row">
                        <span className="text">
                          Протезирование зубов полным съемным пластиночным
                          протезом (Японский гарнитур, пластм)
                        </span>
                        <span className="price">40000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Протезирование частичным съемным пластиночным протезом
                          для временного замещения отсутствующих 1-3 зубов
                          (иммедиат-протез)
                        </span>
                        <span className="price">9 500₽</span>
                      </div>
                      <div className="price-row ">
                        <span className="text">
                          Протезирование частичным съемным пластиночным протезом
                          (Японский гарнитур, пластм)
                        </span>
                        <span className="price">40 000₽</span>
                      </div>
                      <div className="price-row ">
                        <span className="text">
                          Протезирование съемным бюгельным протезом кламерным
                        </span>
                        <span className="price last">45 000₽</span>
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
                  imageSrc2={doctorTwo}
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

export default VinirsPage;
