import React, { useState, useRef, RefObject, useEffect } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";
import Popup from "reactjs-popup";
import "../prices/styles/prices_styles.css";
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "@emailjs/browser";
import {
  faPlus,
  faMinus,
  faPhone,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
const logoMobile: string = require("../../assets/logo_mob.svg").default;
const modalImage: string = require("../../assets/example_modal.webp");

interface PriceTabProps {
  tabHeadign: any;
  paragraphOne: any;
  priceOne: any;
  paragraphTwo: any;
  priceTwo: any;
  paragraphThree?: any;
  priceThree?: any;
  paragraphFour?: any;
  priceFour?: any;
  paragraphFive?: any;
  priceFive?: any;
  paragraphSix?: any;
  priceSix?: any;
  paragraphSeven?: any;
  priceSeven?: any;
  paragraphEight?: any;
  priceEight?: any;
  paragraphNine?: any;
  priceNine?: any;
  paragraphTen?: any;
  priceTen?: any;
  paragraph11?: any;
  price11?: any;
  paragraph12?: any;
  price12?: any;
  paragraph13?: any;
  price13?: any;
  paragraph14?: any;
  price14?: any;
  paragraph15?: any;
  price15?: any;
  paragraph16?: any;
  price16?: any;
  paragraph17?: any;
  price17?: any;
  paragraph18?: any;
  price18?: any;
  paragraph19?: any;
  price19?: any;
  paragraph20?: any;
  price20?: any;
  paragraph21?: any;
  price21?: any;
  paragraph22?: any;
  price22?: any;
  paragraph23?: any;
  price23?: any;
  paragraph24?: any;
  price24?: any;
  paragraph25?: any;
  price25?: any;
  paragraph26?: any;
  price26?: any;
  paragraph27?: any;
  price27?: any;
  paragraph28?: any;
  price28?: any;
  paragraph29?: any;
  price29?: any;
  paragraph30?: any;
  price30?: any;
  paragraph31?: any;
  price31?: any;
  paragraph32?: any;
  price32?: any;
  style?: any;
  openModal?: any;
}

const PriceTab: React.FC<PriceTabProps> = (props) => {
  return (
    <div className="price-tab">
      <h4 className="price-heading">{props.tabHeadign}</h4>
      <p className="price-p">{props.paragraphOne}</p>
      <span className="price">{props.priceOne}</span>
      <p className="price-p-two">{props.paragraphTwo}</p>
      <span className="price-two">{props.priceTwo}</span>
      <button className="blue-btn">Записаться</button>
    </div>
  );
};

const PriceTabLong: React.FC<PriceTabProps> = (props) => {
  return (
    <div className="price-tab-long" style={{ display: `${props.style}` }}>
      <h4 className="price-heading">{props.tabHeadign}</h4>
      {props.paragraphOne && (
        <>
          <p className="price-p">{props.paragraphOne}</p>
          <span className="price">{props.priceOne}</span>
        </>
      )}
      {props.paragraphTwo && (
        <>
          <p className="price-p-two">{props.paragraphTwo}</p>
          <span className="price-two">{props.priceTwo}</span>
        </>
      )}
      {props.paragraphThree && (
        <>
          <p className="price-p-three">{props.paragraphThree}</p>
          <span className="price-three">{props.priceThree}</span>
        </>
      )}
      {props.paragraphFour && (
        <>
          <p className="price-p-three">{props.paragraphFour}</p>
          <span className="price-three">{props.priceFour}</span>
        </>
      )}
      {props.paragraphFive && (
        <>
          <p className="price-p-three">{props.paragraphFive}</p>
          <span className="price-three">{props.priceFive}</span>
        </>
      )}
      {props.paragraphSix && (
        <>
          <p className="price-p-three">{props.paragraphSix}</p>
          <span className="price-three">{props.priceSix}</span>
        </>
      )}
      {props.paragraphSeven && (
        <>
          <p className="price-p-three">{props.paragraphSeven}</p>
          <span className="price-three">{props.priceSeven}</span>
        </>
      )}
      {props.paragraphEight && (
        <>
          <p className="price-p-three">{props.paragraphEight}</p>
          <span className="price-three">{props.priceEight}</span>
        </>
      )}
      {props.paragraphNine && (
        <>
          <p className="price-p-three">{props.paragraphNine}</p>
          <span className="price-three">{props.priceNine}</span>
        </>
      )}
      {props.paragraphTen && (
        <>
          <p className="price-p-three">{props.paragraphTen}</p>
          <span className="price-three">{props.priceTen}</span>
        </>
      )}
      {props.paragraph11 && (
        <>
          <p className="price-p-three">{props.paragraph11}</p>
          <span className="price-three">{props.price11}</span>
        </>
      )}
      {props.paragraph12 && (
        <>
          <p className="price-p-three">{props.paragraph12}</p>
          <span className="price-three">{props.price12}</span>
        </>
      )}
      {props.paragraph13 && (
        <>
          <p className="price-p-three">{props.paragraph13}</p>
          <span className="price-three">{props.price13}</span>
        </>
      )}
      {props.paragraph14 && (
        <>
          <p className="price-p-three">{props.paragraph14}</p>
          <span className="price-three">{props.price14}</span>
        </>
      )}
      {props.paragraph15 && (
        <>
          <p className="price-p-three">{props.paragraph15}</p>
          <span className="price-three">{props.price15}</span>
        </>
      )}
      {props.paragraph16 && (
        <>
          <p className="price-p-three">{props.paragraph16}</p>
          <span className="price-three">{props.price16}</span>
        </>
      )}
      {props.paragraph17 && (
        <>
          <p className="price-p-three">{props.paragraph17}</p>
          <span className="price-three">{props.price17}</span>
        </>
      )}
      {props.paragraph18 && (
        <>
          <p className="price-p-three">{props.paragraph18}</p>
          <span className="price-three">{props.price18}</span>
        </>
      )}
      {props.paragraph19 && (
        <>
          <p className="price-p-three">{props.paragraph19}</p>
          <span className="price-three">{props.price19}</span>
        </>
      )}
      {props.paragraph20 && (
        <>
          <p className="price-p-three">{props.paragraph20}</p>
          <span className="price-three">{props.price20}</span>
        </>
      )}
      {props.paragraph21 && (
        <>
          <p className="price-p-three">{props.paragraph21}</p>
          <span className="price-three">{props.price21}</span>
        </>
      )}
      {props.paragraph22 && (
        <>
          <p className="price-p-three">{props.paragraph22}</p>
          <span className="price-three">{props.price22}</span>
        </>
      )}
      {props.paragraph23 && (
        <>
          <p className="price-p-three">{props.paragraph23}</p>
          <span className="price-three">{props.price23}</span>
        </>
      )}
      {props.paragraph24 && (
        <>
          <p className="price-p-three">{props.paragraph24}</p>
          <span className="price-three">{props.price24}</span>
        </>
      )}
      {props.paragraph25 && (
        <>
          <p className="price-p-three">{props.paragraph25}</p>
          <span className="price-three">{props.price25}</span>
        </>
      )}
      {props.paragraph26 && (
        <>
          <p className="price-p-three">{props.paragraph26}</p>
          <span className="price-three">{props.price26}</span>
        </>
      )}
      {props.paragraph27 && (
        <>
          <p className="price-p-three">{props.paragraph27}</p>
          <span className="price-three">{props.price27}</span>
        </>
      )}{" "}
      {props.paragraph28 && (
        <>
          <p className="price-p-three">{props.paragraph28}</p>
          <span className="price-three">{props.price28}</span>
        </>
      )}{" "}
      {props.paragraph29 && (
        <>
          <p className="price-p-three">{props.paragraph29}</p>
          <span className="price-three">{props.price29}</span>
        </>
      )}
      {props.paragraph30 && (
        <>
          <p className="price-p-three">{props.paragraph30}</p>
          <span className="price-three">{props.price30}</span>
        </>
      )}{" "}
      {props.paragraph31 && (
        <>
          <p className="price-p-three">{props.paragraph31}</p>
          <span className="price-three">{props.price31}</span>
        </>
      )}
      {props.paragraph32 && (
        <>
          <p className="price-p-three">{props.paragraph32}</p>
          <span className="price-three">{props.price32}</span>
        </>
      )}
      <button className="blue-btn" onClick={props.openModal}>
        Записаться
      </button>
    </div>
  );
};

const PricesPage = () => {
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

  const [isLoading, setIsLoading] = useState(true);

  const [open, setOpen] = useState(false);

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [comment, setComment] = useState("");

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

  // Menu Function
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuPcOpen, setIsMenuPcOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePcMenu = () => {
    setIsMenuPcOpen(!isMenuPcOpen);
  };

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
            <main className="main-content">
              <div className="bread-dots">
                <Link to="/" className="main-link">
                  Главная
                </Link>
                <div className="circle"></div>
                <Link to="/prices" className="prices-link">
                  Цены
                </Link>
              </div>
              <h1 className="heading">Цены</h1>
              <div className="divider-container">
                <div className="divider"></div>
                <div className="row">
                  <span className="text">Направления</span>
                  <span className="text">Цена</span>
                </div>
              </div>
            </main>
            <div className="services-content">
              <div className="buttons">
                <div className="row">
                  <ScrollLink to="orthopedia" smooth={true} className="button">
                    Ортопедия
                  </ScrollLink>
                  <ScrollLink
                    to="consultations"
                    smooth={true}
                    className="button"
                  >
                    Консультация
                  </ScrollLink>
                  <ScrollLink to="xray" smooth={true} className="button">
                    Рентгенология
                  </ScrollLink>
                  <ScrollLink to="diagnostic" smooth={true} className="button">
                    Исследования и диагностика
                  </ScrollLink>
                  <ScrollLink to="anasthetics" smooth={true} className="button">
                    Анестезия
                  </ScrollLink>
                  <ScrollLink to="therapy" smooth={true} className="button">
                    Терапия
                  </ScrollLink>
                  <ScrollLink
                    to="restavration"
                    smooth={true}
                    className="button"
                  >
                    Реставрации
                  </ScrollLink>
                  <ScrollLink to="surgery" smooth={true} className="button">
                    Хирургия
                  </ScrollLink>
                  <ScrollLink
                    to="implantology"
                    smooth={true}
                    className="button"
                  >
                    Имплантология
                  </ScrollLink>
                  <ScrollLink
                    to="reconstruction"
                    smooth={true}
                    className="button"
                  >
                    Реконструктивное лечение
                  </ScrollLink>
                  <ScrollLink to="orthodontia" smooth={true} className="button">
                    Ортодонтия
                  </ScrollLink>
                  <ScrollLink to="hygiene" smooth={true} className="button">
                    Профилактика и гигиена
                  </ScrollLink>
                  <div
                    className="whitening-btn"
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <ScrollLink to="whitening" smooth={true} className="button">
                      Отбеливание
                    </ScrollLink>
                  </div>
                </div>
              </div>
              <div
                className="heading-container"
                style={{ marginTop: "clamp(64px,29.90592vw,256px)" }}
              >
                <h2 className="heading">Ортопедия</h2>
              </div>
              <div className="cards">
                <div className="" id="orthopedia">
                  <h2 className="heading">Ортопедия</h2>
                  <PriceTabLong
                    tabHeadign="Ортопедия"
                    paragraphOne="Повторная фиксация на постоянный цемент несъемных ортопедических конструкций "
                    priceOne="1500₽"
                    paragraphTwo="Фиксация на RELYX Luting несъемных ортопедических конструкций "
                    priceTwo="2000₽"
                    paragraphThree="иксация несъемных ортопедических конструкций на временный цемент Temp bond "
                    priceThree="700₽"
                    paragraphFour="Снятие несъемной ортопедической конструкции (1 единица) "
                    priceFour="1000₽"
                    paragraphFive="Удаление вкладки"
                    priceFive="4000₽"
                    paragraphSix="Коррекция протеза, изготовленного в другой клинике"
                    priceSix="1500₽"
                    paragraphSeven="Починка (перебазировка) съемного протеза лабораторным методом"
                    priceSeven="5500₽"
                    paragraphEight="Приварка 1 кламмера"
                    priceEight="5500₽"
                    paragraphNine="Приварка 1 зуба"
                    priceNine="5500₽"
                    paragraphTen="Замена матрицы на бюгельном протезе (1 протез)"
                    priceTen="5500₽"
                    paragraph11="Изготовление каппы для депрограмирования мышц"
                    price11="5000₽"
                    paragraph12="Коррекция съемного протеза изготовленного в другой клинике"
                    price12="1500₽"
                    paragraph13="Каппа для стабилизации прикуса (Ортотик)"
                    price13="20000₽"
                    openModal={openModal}
                  ></PriceTabLong>
                  <PriceTabLong
                    tabHeadign="Оттиски"
                    paragraphOne="Снятие оттиска с одной челюсти альгинатными массами"
                    priceOne="1000₽"
                    paragraphTwo="Снятие оттиска с одной челюсти массой из С-силикона"
                    priceTwo="1500₽"
                    paragraphThree="Снятие оттиска с одной челюсти массой из А-силикона"
                    priceThree="2000₽"
                    paragraphFour="Прикусной блок"
                    priceFour="1000₽"
                    paragraphFive="Изготовление прикусного шаблона и индивидуальной ложки"
                    priceFive="3500₽"
                    paragraphSix="Снятие оттиска с одной челюсти для изготовления силиконового ключа"
                    priceSix="1500₽"
                    paragraphSeven="Снятие оттиска с одной челюсти с имплантов с использованием индивидуальной ложки"
                    priceSeven="2500₽"
                    paragraphEight="Wax up восковое моделирование"
                    priceEight="2000₽"
                    paragraphNine="Цифровой оттиск (сканирование верхней и нижней челюсти, прикус)"
                    priceNine="5500₽"
                    paragraphTen="Замена матрицы на бюгельном протезе (1 протез)"
                    priceTen="5500₽"
                    openModal={openModal}
                  ></PriceTabLong>
                  <PriceTabLong
                    tabHeadign="Вкладки"
                    paragraphOne="Восстановление зуба с использованием керамической вкладки (накладки) Emax"
                    priceOne="25000₽"
                    paragraphTwo="Восстановление зуба с использованием цельнолитой культевой вкладки"
                    priceTwo="7000₽"
                    paragraphThree="Восстановление зуба с использованием культевой вкладки из диоксида циркония "
                    priceThree="15000₽"
                    paragraphFour="Восстановление зуба с использованием золотой вкладки (без стоимости золота)"
                    priceFour="10000₽"
                    openModal={openModal}
                  ></PriceTabLong>
                  <PriceTabLong
                    tabHeadign="Коронки"
                    paragraphOne="Восстановление зуба коронкой временной прямым методом"
                    priceOne="2000₽"
                    paragraphTwo="Восстановление зуба коронкой временной лабораторным способом "
                    priceTwo="3500₽"
                    paragraphThree="Восстановление зуба коронкой металлокерамической класса `стандарт`"
                    priceThree="12000₽"
                    paragraphFour="Восстановление зуба коронкой металлокерамической класса `премиум`"
                    priceFour="18000₽"
                    paragraphFive="Восстановление зуба коронкой металлокерамической на драгоценном сплаве (без учета стоимости драгоценного металла)"
                    priceFive="18500₽"
                    paragraphSix="Восстановление зуба коронкой из диоксида циркония класса `стандарт`"
                    priceSix="18000₽"
                    paragraphSeven="Восстановление зуба коронкой из диоксида циркония класса `премиум`"
                    priceSeven="27000₽"
                    openModal={openModal}
                  ></PriceTabLong>
                  <PriceTabLong
                    tabHeadign="Восстановление зуба виниром E-max"
                    paragraphOne="Восстановление зуба виниром E-max класса `стандарт`"
                    priceOne="25000₽"
                    paragraphTwo="Восстановление зуба виниром E-max класса `премиум`"
                    priceTwo="35000₽"
                    paragraphThree="Диагностика прикуса при помощи миостимулятора `МИСТ ТЕНС`"
                    priceThree="10000₽"
                    openModal={openModal}
                  ></PriceTabLong>
                  <PriceTabLong
                    tabHeadign="Съемные, Бюгельные Протезы"
                    paragraphOne="Протезирование зубов полным съемным пластиночным протезом (Японский гарнитур, пластм)"
                    priceOne="40000₽"
                    paragraphTwo="Протезирование частичным съемным пластиночным протезом для временного замещения 
                      отсутствующих 1-3 зубов (иммедиат-протез)"
                    priceTwo="9500₽"
                    paragraphThree="Протезирование частичным съемным пластиночным протезом (Японский гарнитур, пластм)"
                    priceThree="40000₽"
                    paragraphFour="Протезирование съемным бюгельным протезом кламерным"
                    priceFour="45000₽"
                    paragraphFive="Протезирование съемным бюгельным протезом шинирующим "
                    priceFive="48000₽"
                    paragraphSix="Протезирование съемным бюгельным протезом с замковыми креплениями Bredent "
                    priceSix="55000₽"
                    paragraphSeven="Протезирование съемным бюгельным протезом Квадротти"
                    priceSeven="45000₽"
                    paragraphEight="Изготовление ночной каппы при бруксизме "
                    priceEight="9000₽"
                    paragraphNine="Изготовление каппы для отбеливания (реминерализации)"
                    priceNine="4000₽"
                    paragraphTen="Изготовление спортивной каппы"
                    priceTen="10000₽"
                    paragraph11="Определение центрального соотношения целюстей и центральной окклюзии"
                    price11="0₽"
                    openModal={openModal}
                  ></PriceTabLong>
                </div>
                <div
                  className=""
                  id="consultations"
                  style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                >
                  <h2 className="heading">Консультация</h2>
                  <PriceTabLong
                    tabHeadign="Консультация"
                    paragraphOne="Прием (осмотр, консультация) врача-стоматолога первичный"
                    priceOne="1000₽"
                    paragraphTwo="Диспансерный прием (осмотр, консультация) врача-стоматолога "
                    priceTwo="500₽"
                    paragraphThree="Профилактический прием (осмотр, консультация) врача-стоматолога "
                    priceThree="0₽"
                    openModal={openModal}
                  ></PriceTabLong>
                </div>
                <div
                  className=""
                  id="xray"
                  style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                >
                  <h2 className="heading">Рентгенология</h2>
                  <PriceTabLong
                    tabHeadign="Рентгенология"
                    paragraphOne="Радиовизиография"
                    priceOne="400₽"
                    paragraphTwo="Получение снимка на электронный адрес "
                    priceTwo="100₽"
                    paragraphThree="Запись на электронный носитель CD"
                    priceThree="300₽"
                    paragraphFour="Запись на электронный носитель USB"
                    priceFour="500₽"
                    paragraphFive="Повторный диагностический снимок"
                    priceFive="0₽"
                    openModal={openModal}
                  ></PriceTabLong>
                </div>
                <div
                  className=""
                  id="diagnostic"
                  style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                >
                  <h2 className="heading">Исследования и диагностика</h2>
                  <PriceTabLong
                    tabHeadign="Исследования и диагностика"
                    paragraphOne="Исследование на диагностических моделях челюстей"
                    priceOne="500₽"
                    paragraphTwo="Витальное окрашивание твердых тканей зуба"
                    priceTwo="380₽"
                    paragraphThree="Исследование кариозных полостей с использованием стоматологического зонда"
                    priceThree="70₽"
                    paragraphFour="Термодиагностика зуба"
                    priceFour="50₽"
                    paragraphFive="Определение прикуса"
                    priceFive="500₽"
                    paragraphSix="Определение вида смыкания зубных рядов с помощью лицевой дуги"
                    priceSix="1500₽"
                    paragraphSeven="Перкуссия зубов"
                    priceSeven="40₽"
                    paragraphEight="Электроодонтометрия зуба (ЭОД)"
                    priceEight="120₽"
                    paragraphNine="Определение индексов гигиены полости рта"
                    priceNine="250₽"
                    openModal={openModal}
                  ></PriceTabLong>
                </div>
                <div
                  className=""
                  id="anasthetics"
                  style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                >
                  <h2 className="heading">Анестезия</h2>
                  <PriceTabLong
                    tabHeadign="Анестезия"
                    paragraphOne="Проводниковая анестезия"
                    priceOne="800₽"
                    paragraphTwo="Аппликационная анестезия "
                    priceTwo="150₽"
                    paragraphThree="Инфильтрационная анестезия"
                    priceThree="700₽"
                    openModal={openModal}
                  ></PriceTabLong>
                </div>
                <div
                  className=""
                  id="therapy"
                  style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                >
                  <h2 className="heading">Терапия</h2>
                  <PriceTabLong
                    tabHeadign="Восстановлени зуба пломбой"
                    paragraphOne="Применение системы Коффердам, Роббердам "
                    priceOne="500₽"
                    paragraphTwo="Применение системы OptraGate "
                    priceTwo="300₽"
                    paragraphThree="Микроабразия эмали (1 зуб)"
                    priceThree="1500₽"
                    paragraphFour="Восстановление зуба пломбой I, V, VI класс по Блэку с использованием материалов из фотополимеров SonicFill, Asteria"
                    priceFour="3900₽"
                    paragraphFive="Восстановление зуба пломбой I, V, VI класс по Блэку с использованием материалов из фотополимеров Filtek, Gradia"
                    priceFive="3500₽"
                    paragraphSix="Восстановление зуба виниром, полукоронкой из фотополимерного материала прямым методом"
                    priceSix="7500₽"
                    paragraphSeven="Избирательное пришлифовывание твердых тканей зуба"
                    priceSeven="250₽"
                    paragraphEight="Восстановление зуба пломбировочным материалом с использованием титановых штифтов"
                    priceEight="5500₽"
                    paragraphNine="Восстановление зуба пломбировочным материалом с использованием стекловолоконных штифтов"
                    priceNine="7000₽"
                    paragraphTen="Снятие временной пломбы"
                    priceTen="350₽"
                    paragraph11="Трепанация (препарирование) зуба"
                    price11="600₽"
                    paragraph12="Восстановление зуба пломбой с нарушением контактоного пункта II, III класс по Блэку с использованием материалов из фотополимеров Filtek, Gradia"
                    price12="4000₽"
                    paragraph13="Восстановление зуба пломбой с нарушением контактоного пункта II, III класс по Блэку с использованием материалов из фотополимеров SonicFill, Asteria"
                    price13="4300₽"
                    paragraph14="Восстановление зуба пломбой IV класс по Блэку с использованием материалов из фотополимеров Filtek, Gradia "
                    price14="4400₽"
                    paragraph15="Восстановление зуба пломбой IV класс по Блэку с использованием материалов из фотополимеров Asteria"
                    price15="4900₽"
                    paragraph16="Восстановление зуба пломбой с использованием материалов из фотополимеров Filtek Flow"
                    price16="1900₽"
                    paragraph17="Наложение лечебной или изолирующей прокладки"
                    price17="550₽"
                    openModal={openModal}
                  ></PriceTabLong>
                  <PriceTabLong
                    tabHeadign="Лечение осложнений кариеса"
                    paragraphOne="Наложение девитализирующей пасты"
                    priceOne="500₽"
                    paragraphTwo="Пломбирование корневого канала зуба под контролем апекс-локатора (процедура)"
                    priceTwo="350₽"
                    paragraphThree="Наложение временной пломбы "
                    priceThree="600₽"
                    paragraphFour="Пломбирование корневого канала зуба пастой (1 канал)"
                    priceFour="300₽"
                    paragraphFive="Пломбирование корневого канала зуба пастой с гуттаперчевыми штифтами (1 канал)"
                    priceFive="900₽"
                    paragraphSix="Закрытие перформации стенки корневого канала зуба"
                    priceSix="1500₽"
                    paragraphSeven="Инструментальная и медикаментозная обработка хорошо проходимого корневого канала (1к.)"
                    priceSeven="800₽"
                    paragraphEight="Инструментальная и медикаментозная обработка плохо проходимого корневого канала (1к.)"
                    priceEight="1100₽"
                    paragraphNine="Фиксация внутриканального штифта"
                    priceNine="1500₽"
                    paragraphTen="Удаление внутриканального штифта "
                    priceTen="2100₽"
                    paragraph11="Временное пломбирование лекарственным препаратом корневого канала ( 1 канал)"
                    price11="700₽"
                    paragraph12="Распломбировка корневого канала ранеее леченного пастой (1 канал) "
                    price12="600₽"
                    paragraph13="Распломбировка корневого канала ранеее леченного фосфат-цементом/резорцин-формалиновым методом (1 канал)"
                    price13="1300₽"
                    paragraph14="Депофорез корневого канала зуба "
                    price14="300₽"
                    paragraph15="Ультразвуковое расширение корневого канала зуба (1 канал) "
                    price15="300₽"
                    paragraph16="Механическая и медикаментозная обработка корневого канала"
                    price16="1500₽"
                    paragraph17="Пломбировка корневого канала гуттаперчивый штифт+паста"
                    price17="1500₽"
                    paragraph18="Временная пломбировка корневого канала Metapex/Colasep"
                    price18="500₽"
                    openModal={openModal}
                  ></PriceTabLong>
                  <PriceTabLong
                    tabHeadign="Эндодоническое лечение"
                    paragraphOne="Эндодоническое лечение одноканального зуба"
                    priceOne="4400₽"
                    paragraphTwo="Эндодоническое лечение двухканального зуба"
                    priceTwo="8800₽"
                    paragraphThree="Эндодоническое лечение трехканального зуб"
                    priceThree="12000₽"
                    paragraphFour="Эндодоническое лечение четырехканального зуба"
                    priceFour="16000₽"
                    paragraphFive="Эндодоническое лечение пятиканального зуба"
                    priceFive="20000₽"
                    paragraphSix="Эндодоническое лечение одноканального зуба (периодонтит)"
                    priceSix="6000₽"
                    paragraphSeven="Эндодоническое лечение двухканального зуба (периодонтит)"
                    priceSeven="10000₽"
                    paragraphEight="Эндодоническое лечение трехканального зуба (периодонтит)"
                    priceEight="14000₽"
                    paragraphNine="Эндодоническое лечение четырехканального зуба (периодонтит)"
                    priceNine="18000₽"
                    paragraphTen="Эндодоническое лечение пятиканального зуба (периодонтит)"
                    priceTen="22000₽"
                    openModal={openModal}
                  ></PriceTabLong>
                </div>
                <div
                  className=""
                  id="restavration"
                  style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                >
                  <h2 className="heading">Реставрации</h2>
                  <PriceTabLong
                    tabHeadign="Реставрации"
                    paragraphOne="Реставрация 1 степени сложности"
                    priceOne="4000₽"
                    paragraphTwo="Реставрация 2 степени сложности"
                    priceTwo="4900₽"
                    paragraphThree="Реставрация 3 степени сложности "
                    priceThree="5500₽"
                    paragraphFour="Художественная реставрация зуба "
                    priceFour="7500₽"
                    openModal={openModal}
                  ></PriceTabLong>
                </div>
                <div
                  className=""
                  id="surgery"
                  style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                >
                  <h2 className="heading">Хирургия</h2>
                  <PriceTabLong
                    tabHeadign="Хирургия"
                    paragraphOne="Удаление временного зуба I степени сложности"
                    priceOne="1200₽"
                    paragraphTwo="Удаление временного зуба II степени сложности"
                    priceTwo="1800₽"
                    paragraphThree="Удаление временного зуба с сохраненными корнями"
                    priceThree="2200₽"
                    paragraphFour="Удаление постоянного зуба простое"
                    priceFour="2400₽"
                    paragraphFive="Удаление постоянного зуба I степени сложности"
                    priceFive="3000₽"
                    paragraphSix="Удаление постоянного зуба II степени сложности"
                    priceSix="4000₽"
                    paragraphSeven="даление постоянного зуба III степени сложности"
                    priceSeven="5500₽"
                    paragraphEight="Удаление зуба сложное с разъединением корней "
                    priceEight="4500₽"
                    paragraphNine="Резекция верхушки корня (1 корень)"
                    priceNine="8500₽"
                    paragraphTen="Вскрытие и дренирование одонтогенного абсцесса"
                    priceTen="1200₽"
                    paragraph11="Отсроченный кюретаж лунки удаленного зуба"
                    price11="1000₽"
                    paragraph12="Удаление новообразований челюстно-лицевой области"
                    price12="5000₽"
                    paragraph13="Цистотомия, цистэктомия"
                    price13="8000₽"
                    paragraph14="Временное шинирование при заболеваниях пародонта ( 1 единица)"
                    price14="1500₽"
                    paragraph15="Операция удаления ретинированного, дистопированного или сверхкомплектного зуба"
                    price15="9500₽"
                    paragraph16="Удаление имплантата"
                    price16="5000₽"
                    paragraph17="Пластика уздечки языка"
                    price17="3000₽"
                    paragraph18="Пластика уздечки губы"
                    price18="3000₽"
                    paragraph19="Вестибулопластика"
                    price19="10000₽"
                    paragraph20="Лечение перикоронита (промывание, рассечение и/или иссечение капюшона)"
                    price20="1500₽"
                    paragraph21="Остановка луночного кровотечения с использованием гемостатических материалов"
                    price21="700₽"
                    paragraph22="Закрытие соустья с гайморовой пазухой"
                    price22="3000₽"
                    paragraph23="Наложение шва на слизистую оболочку рта"
                    price23="500₽"
                    paragraph24="Открытый кюретаж при заболеваниях пародонта в области 1 зуба"
                    price24="2500₽"
                    paragraph25="Закрытый кюретаж при заболеваниях пародонта в области 1 зуба"
                    price25="2000₽"
                    paragraph26="Пластика мягких тканей в области зуба или имплантата "
                    price26="7000₽"
                    paragraph27="Снятие швов"
                    price27="0₽"
                    paragraph28="Антисептическая обработка патологических карманов"
                    price28="1200₽"
                    paragraph29="Удаление экзостоза в области 1 зуба"
                    price29="1500₽"
                    paragraph30="Хирургическое удлинение в области 1 зуба"
                    price30="5000₽"
                    paragraph31="Закрытый кюретаж в области 1 зуба"
                    price31="20000₽"
                    paragraph32="Закрытие рецессии в обл. 1-3 рядом стоящих зубов "
                    price32="20000₽"
                    openModal={openModal}
                  ></PriceTabLong>
                </div>
                <div
                  className=""
                  id="implantology"
                  style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                >
                  <h2 className="heading">Имплантология</h2>
                  <PriceTabLong
                    tabHeadign="Протезирование на имплантах"
                    paragraphOne="Протезирование зуба с импользованием имплантата временной коронкой+временный абатмен "
                    priceOne="8500₽"
                    paragraphTwo="Единица промежуточной части временного мостовидного протеза с опорой на имплантах"
                    priceTwo="4500₽"
                    paragraphThree="Протезирование зуба с использованием имплантата коронкой металлокерамической класса `Стандарт` (трансокклюзионная фиксация)"
                    priceThree="25000₽"
                    paragraphFour="Протезирование зуба с использованием имплантата коронкой металлокерамической класса `Эстетик` (трансокклюзионная фиксация)"
                    priceFour="31000₽"
                    paragraphFive="Протезирование зуба с использованием имплантата коронкой металлокерамической класса `стандарт`(цементная фиксация) на индивидуальном абатменте"
                    priceFive="31000₽"
                    paragraphSix="Единица промежуточной части мостовидного протеза класса `Стандарт` (металлокерамика) с опорой на имплантах"
                    priceSix="17000₽"
                    paragraphSeven="Единица промежуточной части мостовидного протеза класса `Премиум` (металлокерамика) с опорой на имплантах"
                    priceSeven="21000₽"
                    paragraphEight="Протезирование зуба с использованием имплантата коронкой из диоксида циркония класса `Стандарт` (трансокклюзионная фиксация)"
                    priceEight="33000₽"
                    paragraphNine="Протезирование зуба с использованием имплантата коронкой из диоксида циркония на титановом основаниее класса `Премиум` (трансокклюзионная фиксация)"
                    priceNine="37500₽"
                    paragraphTen="Протезирование зуба с использованием имплантата коронкой из диоксида циркония класса `Стандарт` (цементная фиксация) на индивидуальном абатмене"
                    priceTen="39000₽"
                    paragraph11="Протезирование зуба с использованием имплантата коронкой из диоксида циркония класса `Премиум` (цементная фиксация) на индивидуальном абатмене"
                    price11="45000₽"
                    paragraph12="Единица промежуточной части мостовидного протеза из диоксида циркония класса `Стандарт` с опорой на имплантатах "
                    price12="22000₽"
                    paragraph13="Единица промежуточной части мостовидного протеза из диоксида циркония класса `Премиум` с опорой на имплантатах "
                    price13="26000₽"
                    paragraph14="Протезирование зуба с использованием имплантата коронкой E-max на титановом основании класса `Премиум` (трансокклюзионная фиксация)"
                    price14="30000₽"
                    paragraph15="Индивидуальный абатмен из диоксида циркония "
                    price15="15000₽"
                    paragraph16="Протезирование полным условно-съемным протезом с опорой на имплантатах (балочная конструкция) мультиюниты оплачиваются отдельно"
                    price16="185000₽"
                    paragraph17="Протезирование полным несъемным протезом с опорой на имплантатах на мультиюнитах (мультиюниты оплачиваются отдельно)"
                    price17="185000₽"
                    paragraph18="Стоимость мультиюнита (1 единица)"
                    price18="20000₽"
                    paragraph19="Протезирование полным съемным протезом на имплантатах с замковым креплением (люкаторная система замков)"
                    price19="120000₽"
                    paragraph20="Протезирование полным съемным протезом на имплантатах на аттачментах"
                    price20="95000₽"
                    paragraph21="Временный несъемный протез на имлантатах"
                    price21="80000₽"
                    paragraph22="Замена винта трансокклюзионной фиксации"
                    price22="500₽"
                    openModal={openModal}
                  ></PriceTabLong>
                  <PriceTabLong
                    tabHeadign="Внутрикостная дентальная имплантация системой"
                    paragraphOne="Имплантация системой Dentium SuperLine (Ю.Корея) "
                    priceOne="35000₽"
                    paragraphTwo="Имплантация системой NeoDent GM (Бразилия) "
                    priceTwo="3500₽"
                    paragraphThree="Имплантация системой Nobel Biocare (Швейцария)"
                    priceThree="70000₽"
                    paragraphFour="Миниимплант (ортовинт) "
                    priceFour="9000₽"
                    openModal={openModal}
                  ></PriceTabLong>
                  <PriceTabLong
                    tabHeadign="Формирователь десны"
                    paragraphOne="Установка формирователя десны SuperLine"
                    priceOne="3000₽"
                    paragraphTwo="Установка формирователя десны Strumann"
                    priceTwo="6000₽"
                    paragraphThree="Установка формирователя десны NeoDent GM"
                    priceThree="3000₽"
                    paragraphFour="Установка формирователя десны"
                    priceFour="3000₽"
                    openModal={openModal}
                  ></PriceTabLong>
                  <PriceTabLong
                    tabHeadign="Синус-лифтинг"
                    paragraphOne="Синус-лифтинг (без учета стоимости материалов) -закрытый"
                    priceOne="12000₽"
                    paragraphTwo="Синус-лифтинг (без учета стоимости материалов) -открытый "
                    priceTwo="25000₽"
                    paragraphThree="Направленная костная регенерация (HKP) титановой сеткой"
                    priceThree="25000₽"
                    paragraphFour="Подсыпка костной ткани после удаления Bio-Oss"
                    priceFour="5000₽"
                    paragraphFive="Костная пластика челюстно-лицевой области с применением биодеградируемых материалов (костно-пластический материал Bio-Oss 0,5 гр.)"
                    priceFive="15000₽"
                    paragraphSix="Костная пластика челюстно-лицевой области с применением биодеградируемых материалов (мембраны Bio-Gide) 1 шт"
                    priceSix="22000₽"
                    paragraphSeven="Использование хирургического шаблона от 3 зубов"
                    priceSeven="15000₽"
                    paragraphEight="Использование хирургического шаблона от 4 зубов "
                    priceEight="24000₽"
                    paragraphNine="Переустановка импланта"
                    priceNine="7500₽"
                    openModal={openModal}
                  ></PriceTabLong>
                </div>
                <div
                  className=""
                  id="reconstruction"
                  style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                >
                  <h2 className="heading">Реконструктивное лечение</h2>
                  <PriceTabLong
                    tabHeadign="Реконструктивное лечение"
                    paragraphOne="Инъекционное введение лекарственных препаратов в челюстно-лицевую область"
                    priceOne="380₽"
                    paragraphTwo="Аппликация лекарственного препарата на слизистую оболочку полости рта"
                    priceTwo="550₽"
                    paragraphThree="Ультразвуковая обработка пародонтального кармана в области зуба с применением лекарственных средств (лечение заболеваний пародонта аппаратом `Vector Para Pro` в области 1 зуба/импланта"
                    priceThree="800₽"
                    paragraphFour="Ультразвуковая обработка пародонтального кармана в области зуба с применением лекарственных средств (лечение заболеваний пародонта аппаратом `Vector Para Pro` 2 челюсти)"
                    priceFour="10000₽"
                    paragraphFive="Лазерная физиотерапия челюстно-лицевой области (1 процедура)"
                    priceFive="350₽"
                    openModal={openModal}
                  ></PriceTabLong>
                </div>
                <div
                  className=""
                  id="orthodontia"
                  style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                >
                  <h2 className="heading">Ортодонтия</h2>
                  <PriceTabLong
                    tabHeadign="Ортодоническая коррекция с применением брекет-системы"
                    paragraphOne="I степени сложности "
                    priceOne="65000₽"
                    paragraphTwo="II степени сложности"
                    priceTwo="70000₽"
                    paragraphThree="III степени сложности"
                    priceThree="75000₽"
                    paragraphFour="Фиксация брекет-системы (одна челюсть)"
                    priceFour="80000₽"
                    paragraphFive="Фиксация эстетической брекет-системы (одна челюсть) "
                    priceFive="95000₽"
                    paragraphSix="Брекет-система металлическая безлигатурная"
                    priceSix="25000₽"
                    paragraphSeven="Брекет-система Damon Q "
                    priceSeven="30000₽"
                    paragraphEight="Брекет-система сапфировая, керамическая"
                    priceEight="32500₽"
                    paragraphTen="Брекет-система керамическая безлигатурная"
                    priceTen="35000₽"
                    paragraph11="Фиксация одного брекета"
                    price11="2500₽"
                    paragraph12="Замена одного брекета"
                    price12="3000₽"
                    paragraph13="Снятие брекетов с одного зубного ряда"
                    price13="2000₽"
                    paragraph14="Снятие одного брекета"
                    price14="400₽"
                    paragraph15="Замена дуги"
                    price15="3000₽"
                    paragraph16="Установка открывающей, закрывающей пружины"
                    price16="1000₽"
                    paragraph17="Установка чейна (1 звено) "
                    price17="130₽"
                    paragraph18="Установка лигатуры (1 шт.) "
                    price18="70₽"
                    paragraph19="Наложение длинной лигатуры"
                    price19="400₽"
                    paragraph20="Изгиб на дуге"
                    price20="200₽"
                    openModal={openModal}
                  ></PriceTabLong>
                  <PriceTabLong
                    tabHeadign="Ретенция"
                    paragraphOne="Несъмныйретейнер на 1 зубной ряд"
                    priceOne="7000₽"
                    paragraphTwo="Ретенционный съемный аппарат на 1 зубной ряд "
                    priceTwo="8000₽"
                    paragraphThree="Снятие ретейнера"
                    priceThree="5000₽"
                    paragraphFour="Починка несъемного ретейнера"
                    priceFour="2000₽"
                    paragraphFive="Изготовление ретенционной каппы"
                    priceFive="6500₽"
                    openModal={openModal}
                  ></PriceTabLong>
                  <PriceTabLong
                    tabHeadign="Дополнительные приспособления"
                    paragraphOne="Лечение с помощью аппарат Марко-Росса "
                    priceOne="29000₽"
                    paragraphTwo="Активация ортодонтического винта"
                    priceTwo="2500₽"
                    paragraphThree="Аппарат для дистализации моляров"
                    priceThree="33000₽"
                    paragraphFour="Лечение с помощью небного бюгеля"
                    priceFour="4000₽"
                    paragraphFive="Межчелюстные тяги"
                    priceFive="500₽"
                    paragraphSix="Изготовление коронки ортодонической"
                    priceSix="5000₽"
                    paragraphSeven="Изготовление кольца-петли ортодонического"
                    priceSeven="9000₽"
                    paragraphEight="Повторная фиксация кольца-петли ортодонического"
                    priceEight="2000₽"
                    paragraphNine="Снятие оттиска с одной челюсти альгинатными массами "
                    priceNine="500₽"
                    paragraphTen="Изготовление прикусного шаблона"
                    priceTen="500₽"
                    paragraph11="Антропометрические исследования (компьютерный анализ ТРГ головы) "
                    price11="2000₽"
                    paragraph12="Изготовление контрольной модели (из гипса) "
                    price12="500₽"
                    paragraph13="Прием (осмотр, наблюдение) врача-ортодонта первичный"
                    price13="1000₽"
                    paragraph14="Прием (осмотр, наблюдение) врача-ортодонта повторный"
                    price14="700₽"
                    openModal={openModal}
                  ></PriceTabLong>
                </div>
                <div
                  className=""
                  id="hygiene"
                  style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                >
                  <h2 className="heading">Профилактика и гигиена</h2>
                  <PriceTabLong
                    tabHeadign="Профилактика и гигиена"
                    paragraphOne="Глубокое фторирование эмали зуба Seal&Protect (1 ед.)"
                    priceOne="300₽"
                    paragraphTwo="Местное применение реминилизирующих препаратов (процедура)"
                    priceTwo="500₽"
                    paragraphThree="Обучение гигиене полости рта и зубов индивидуально, подбор средств и предметов гигиены полости рта"
                    priceThree="400₽"
                    paragraphFour="Профессиональная гигиена полости рта и зубов (ультразвуковое удаление зубных отложений, AirFlow, полировка, покрытие зубов реминилизирующими препаратами)"
                    priceFour="5500₽"
                    paragraphFive="Профессиональная гигиена полости рта при регулярном профосмотре (1 раз в 6 месяцев)"
                    priceFive="5500₽"
                    paragraphSix="Снятие мягких зубных отложений щеткой + пастой, полировка (1 зуб)"
                    priceSix="50₽"
                    paragraphSeven="Профессиональная гигиена воздушноабразивным аппаратом AirFlow (1 челюсть)"
                    priceSeven="2500₽"
                    paragraphEight="Снятие зубных отложений пастой, полировка, покрытие `Fluocal gel` (2 челюсти) 1й сеанс"
                    priceEight="2500₽"
                    paragraphTen="Снятие зубных отложений пастой, полировка, покрытие `Fluocal gel` последующий сеанс"
                    priceTen="1500₽"
                    paragraph11="Запечатывание фиссуры зуба герметиком (1 ед.) "
                    price11="2000₽"
                    paragraph12="Ультразвуковое удаление наддесневых и поддесневых зубных отложений в области 1 зуба"
                    price12="150₽"
                    openModal={openModal}
                  ></PriceTabLong>
                </div>
                <div
                  className=""
                  id="whitening"
                  style={{
                    marginTop: "clamp(32px,3.33312vw,128px)",
                    marginBottom: "clamp(32px,3.33312vw,128px)",
                  }}
                >
                  <h2 className="heading">Отбеливание</h2>
                  <PriceTabLong
                    tabHeadign="Профилактика и гигиена"
                    paragraphOne="Профессиональное отбеливание зубов клиническое - система `ZOOM`"
                    priceOne="21500₽"
                    paragraphTwo="Капповое домашнее отбеливание (включая стоимость изготовления капп и набор отбеливающего геля) 2 челюсти"
                    priceTwo="9900₽"
                    paragraphThree="Профессиональное отбеливание зубов клиническое- система `Amazing White`"
                    priceThree="11000₽"
                    paragraphFour="Внутриканальное отбеливание (первый сеанс) "
                    priceFour="1900₽"
                    paragraphFive="Внутриканальное отбеливание (последующий сеанс)"
                    priceFive="1000₽"
                    openModal={openModal}
                  ></PriceTabLong>
                </div>
              </div>
            </div>
          </div>
          <div className="pc-content-c">
            <main
              className="main-content"
              style={{ width: "71.82291666666667%" }}
            >
              <Header
                isMenuPcOpen={isMenuPcOpen}
                openModal={openModal}
                togglePcMenu={togglePcMenu}
              ></Header>
              <div className="upper-content">
                <div className="bread-dots-container">
                  <Link className="link" to="/">
                    Главная
                  </Link>
                  <div className="bread-dot"></div>
                  <Link className="link-prices" to="/prices">
                    Цены
                  </Link>
                </div>
                <div className="heading-container">
                  <h1 className="heading">Цены</h1>
                </div>
                <div className="divider-container">
                  <div className="divider"></div>
                  <div className="row-container">
                    <span className="text">Услуги</span>
                    <span className="text">Направления</span>
                  </div>
                </div>
              </div>
              <div className="services-content">
                <div className="services-list">
                  <ScrollLink
                    to="orthopedia-pc"
                    smooth={true}
                    className="button"
                  >
                    Ортопедия
                  </ScrollLink>
                  <ScrollLink
                    to="consultations-pc"
                    smooth={true}
                    className="button"
                  >
                    Консультация
                  </ScrollLink>
                  <ScrollLink to="xray-pc" smooth={true} className="button">
                    Рентгенология
                  </ScrollLink>
                  <ScrollLink
                    to="diagnostic-pc"
                    smooth={true}
                    className="button"
                  >
                    Исследования и диагностика
                  </ScrollLink>
                  <ScrollLink
                    to="anasthetics-pc"
                    smooth={true}
                    className="button"
                  >
                    Анестезия
                  </ScrollLink>
                  <ScrollLink to="therapy-pc" smooth={true} className="button">
                    Терапия
                  </ScrollLink>
                  <ScrollLink
                    to="restavration-pc"
                    smooth={true}
                    className="button"
                  >
                    Реставрации
                  </ScrollLink>
                  <ScrollLink to="surgery-pc" smooth={true} className="button">
                    Хирургия
                  </ScrollLink>
                  <ScrollLink
                    to="implantology-pc"
                    smooth={true}
                    className="button"
                  >
                    Имплантология
                  </ScrollLink>
                  <ScrollLink
                    to="reconstruction-pc"
                    smooth={true}
                    className="button"
                  >
                    Реконструктивное лечение
                  </ScrollLink>
                  <ScrollLink
                    to="orthodontia-pc"
                    smooth={true}
                    className="button"
                  >
                    Ортодонтия
                  </ScrollLink>
                  <ScrollLink to="hygiene-pc" smooth={true} className="button">
                    Профилактика и гигиена
                  </ScrollLink>
                  <ScrollLink
                    to="whitening-pc"
                    smooth={true}
                    className="button"
                  >
                    Отбеливание
                  </ScrollLink>
                </div>
                <div className="cards-list">
                  <div className="" id="orthopedia-pc">
                    <h2 className="heading">Ортопедия</h2>
                    <PriceTabLong
                      tabHeadign="Ортопедия"
                      paragraphOne="Повторная фиксация на постоянный цемент несъемных ортопедических конструкций "
                      priceOne="1500₽"
                      paragraphTwo="Фиксация на RELYX Luting несъемных ортопедических конструкций "
                      priceTwo="2000₽"
                      paragraphThree="иксация несъемных ортопедических конструкций на временный цемент Temp bond "
                      priceThree="700₽"
                      paragraphFour="Снятие несъемной ортопедической конструкции (1 единица) "
                      priceFour="1000₽"
                      paragraphFive="Удаление вкладки"
                      priceFive="4000₽"
                      paragraphSix="Коррекция протеза, изготовленного в другой клинике"
                      priceSix="1500₽"
                      paragraphSeven="Починка (перебазировка) съемного протеза лабораторным методом"
                      priceSeven="5500₽"
                      paragraphEight="Приварка 1 кламмера"
                      priceEight="5500₽"
                      paragraphNine="Приварка 1 зуба"
                      priceNine="5500₽"
                      paragraphTen="Замена матрицы на бюгельном протезе (1 протез)"
                      priceTen="5500₽"
                      paragraph11="Изготовление каппы для депрограмирования мышц"
                      price11="5000₽"
                      paragraph12="Коррекция съемного протеза изготовленного в другой клинике"
                      price12="1500₽"
                      paragraph13="Каппа для стабилизации прикуса (Ортотик)"
                      price13="20000₽"
                      openModal={openModal}
                    ></PriceTabLong>
                    <PriceTabLong
                      tabHeadign="Оттиски"
                      paragraphOne="Снятие оттиска с одной челюсти альгинатными массами"
                      priceOne="1000₽"
                      paragraphTwo="Снятие оттиска с одной челюсти массой из С-силикона"
                      priceTwo="1500₽"
                      paragraphThree="Снятие оттиска с одной челюсти массой из А-силикона"
                      priceThree="2000₽"
                      paragraphFour="Прикусной блок"
                      priceFour="1000₽"
                      paragraphFive="Изготовление прикусного шаблона и индивидуальной ложки"
                      priceFive="3500₽"
                      paragraphSix="Снятие оттиска с одной челюсти для изготовления силиконового ключа"
                      priceSix="1500₽"
                      paragraphSeven="Снятие оттиска с одной челюсти с имплантов с использованием индивидуальной ложки"
                      priceSeven="2500₽"
                      paragraphEight="Wax up восковое моделирование"
                      priceEight="2000₽"
                      paragraphNine="Цифровой оттиск (сканирование верхней и нижней челюсти, прикус)"
                      priceNine="5500₽"
                      paragraphTen="Замена матрицы на бюгельном протезе (1 протез)"
                      priceTen="5500₽"
                      openModal={openModal}
                    ></PriceTabLong>
                    <PriceTabLong
                      tabHeadign="Вкладки"
                      paragraphOne="Восстановление зуба с использованием керамической вкладки (накладки) Emax"
                      priceOne="25000₽"
                      paragraphTwo="Восстановление зуба с использованием цельнолитой культевой вкладки"
                      priceTwo="7000₽"
                      paragraphThree="Восстановление зуба с использованием культевой вкладки из диоксида циркония "
                      priceThree="15000₽"
                      paragraphFour="Восстановление зуба с использованием золотой вкладки (без стоимости золота)"
                      priceFour="10000₽"
                      openModal={openModal}
                    ></PriceTabLong>
                    <PriceTabLong
                      tabHeadign="Коронки"
                      paragraphOne="Восстановление зуба коронкой временной прямым методом"
                      priceOne="2000₽"
                      paragraphTwo="Восстановление зуба коронкой временной лабораторным способом "
                      priceTwo="3500₽"
                      paragraphThree="Восстановление зуба коронкой металлокерамической класса `стандарт`"
                      priceThree="12000₽"
                      paragraphFour="Восстановление зуба коронкой металлокерамической класса `премиум`"
                      priceFour="18000₽"
                      paragraphFive="Восстановление зуба коронкой металлокерамической на драгоценном сплаве (без учета стоимости драгоценного металла)"
                      priceFive="18500₽"
                      paragraphSix="Восстановление зуба коронкой из диоксида циркония класса `стандарт`"
                      priceSix="18000₽"
                      paragraphSeven="Восстановление зуба коронкой из диоксида циркония класса `премиум`"
                      priceSeven="27000₽"
                      openModal={openModal}
                    ></PriceTabLong>
                    <PriceTabLong
                      tabHeadign="Восстановление зуба виниром E-max"
                      paragraphOne="Восстановление зуба виниром E-max класса `стандарт`"
                      priceOne="25000₽"
                      paragraphTwo="Восстановление зуба виниром E-max класса `премиум`"
                      priceTwo="35000₽"
                      paragraphThree="Диагностика прикуса при помощи миостимулятора `МИСТ ТЕНС`"
                      priceThree="10000₽"
                      openModal={openModal}
                    ></PriceTabLong>
                    <PriceTabLong
                      tabHeadign="Съемные, Бюгельные Протезы"
                      paragraphOne="Протезирование зубов полным съемным пластиночным протезом (Японский гарнитур, пластм)"
                      priceOne="40000₽"
                      paragraphTwo="Протезирование частичным съемным пластиночным протезом для временного замещения 
                      отсутствующих 1-3 зубов (иммедиат-протез)"
                      priceTwo="9500₽"
                      paragraphThree="Протезирование частичным съемным пластиночным протезом (Японский гарнитур, пластм)"
                      priceThree="40000₽"
                      paragraphFour="Протезирование съемным бюгельным протезом кламерным"
                      priceFour="45000₽"
                      paragraphFive="Протезирование съемным бюгельным протезом шинирующим "
                      priceFive="48000₽"
                      paragraphSix="Протезирование съемным бюгельным протезом с замковыми креплениями Bredent "
                      priceSix="55000₽"
                      paragraphSeven="Протезирование съемным бюгельным протезом Квадротти"
                      priceSeven="45000₽"
                      paragraphEight="Изготовление ночной каппы при бруксизме "
                      priceEight="9000₽"
                      paragraphNine="Изготовление каппы для отбеливания (реминерализации)"
                      priceNine="4000₽"
                      paragraphTen="Изготовление спортивной каппы"
                      priceTen="10000₽"
                      paragraph11="Определение центрального соотношения целюстей и центральной окклюзии"
                      price11="0₽"
                      openModal={openModal}
                    ></PriceTabLong>
                  </div>
                  <div
                    className=""
                    id="consultations-pc"
                    style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                  >
                    <h2 className="heading">Консультация</h2>
                    <PriceTabLong
                      tabHeadign="Консультация"
                      paragraphOne="Прием (осмотр, консультация) врача-стоматолога первичный"
                      priceOne="1000₽"
                      paragraphTwo="Диспансерный прием (осмотр, консультация) врача-стоматолога "
                      priceTwo="500₽"
                      paragraphThree="Профилактический прием (осмотр, консультация) врача-стоматолога "
                      priceThree="0₽"
                      openModal={openModal}
                    ></PriceTabLong>
                  </div>
                  <div
                    className=""
                    id="xray-pc"
                    style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                  >
                    <h2 className="heading">Рентгенология</h2>
                    <PriceTabLong
                      tabHeadign="Рентгенология"
                      paragraphOne="Радиовизиография"
                      priceOne="400₽"
                      paragraphTwo="Получение снимка на электронный адрес "
                      priceTwo="100₽"
                      paragraphThree="Запись на электронный носитель CD"
                      priceThree="300₽"
                      paragraphFour="Запись на электронный носитель USB"
                      priceFour="500₽"
                      paragraphFive="Повторный диагностический снимок"
                      priceFive="0₽"
                      openModal={openModal}
                    ></PriceTabLong>
                  </div>
                  <div
                    className=""
                    id="diagnostic-pc"
                    style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                  >
                    <h2 className="heading">Исследования и диагностика</h2>
                    <PriceTabLong
                      tabHeadign="Исследования и диагностика"
                      paragraphOne="Исследование на диагностических моделях челюстей"
                      priceOne="500₽"
                      paragraphTwo="Витальное окрашивание твердых тканей зуба"
                      priceTwo="380₽"
                      paragraphThree="Исследование кариозных полостей с использованием стоматологического зонда"
                      priceThree="70₽"
                      paragraphFour="Термодиагностика зуба"
                      priceFour="50₽"
                      paragraphFive="Определение прикуса"
                      priceFive="500₽"
                      paragraphSix="Определение вида смыкания зубных рядов с помощью лицевой дуги"
                      priceSix="1500₽"
                      paragraphSeven="Перкуссия зубов"
                      priceSeven="40₽"
                      paragraphEight="Электроодонтометрия зуба (ЭОД)"
                      priceEight="120₽"
                      paragraphNine="Определение индексов гигиены полости рта"
                      priceNine="250₽"
                      openModal={openModal}
                    ></PriceTabLong>
                  </div>
                  <div
                    className=""
                    id="anasthetics-pc"
                    style={{
                      marginTop: "clamp(32px,3.33312vw,128px)",
                      width: "100%",
                    }}
                  >
                    <h2 className="heading">Анестезия</h2>
                    <PriceTabLong
                      tabHeadign="Анестезия"
                      paragraphOne="Проводниковая анестезия"
                      priceOne="800₽"
                      paragraphTwo="Аппликационная анестезия "
                      priceTwo="150₽"
                      paragraphThree="Инфильтрационная анестезия"
                      priceThree="700₽"
                      openModal={openModal}
                    ></PriceTabLong>
                  </div>
                  <div
                    className=""
                    id="therapy-pc"
                    style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                  >
                    <h2 className="heading">Терапия</h2>
                    <PriceTabLong
                      tabHeadign="Восстановлени зуба пломбой"
                      paragraphOne="Применение системы Коффердам, Роббердам "
                      priceOne="500₽"
                      paragraphTwo="Применение системы OptraGate "
                      priceTwo="300₽"
                      paragraphThree="Микроабразия эмали (1 зуб)"
                      priceThree="1500₽"
                      paragraphFour="Восстановление зуба пломбой I, V, VI класс по Блэку с использованием материалов из фотополимеров SonicFill, Asteria"
                      priceFour="3900₽"
                      paragraphFive="Восстановление зуба пломбой I, V, VI класс по Блэку с использованием материалов из фотополимеров Filtek, Gradia"
                      priceFive="3500₽"
                      paragraphSix="Восстановление зуба виниром, полукоронкой из фотополимерного материала прямым методом"
                      priceSix="7500₽"
                      paragraphSeven="Избирательное пришлифовывание твердых тканей зуба"
                      priceSeven="250₽"
                      paragraphEight="Восстановление зуба пломбировочным материалом с использованием титановых штифтов"
                      priceEight="5500₽"
                      paragraphNine="Восстановление зуба пломбировочным материалом с использованием стекловолоконных штифтов"
                      priceNine="7000₽"
                      paragraphTen="Снятие временной пломбы"
                      priceTen="350₽"
                      paragraph11="Трепанация (препарирование) зуба"
                      price11="600₽"
                      paragraph12="Восстановление зуба пломбой с нарушением контактоного пункта II, III класс по Блэку с использованием материалов из фотополимеров Filtek, Gradia"
                      price12="4000₽"
                      paragraph13="Восстановление зуба пломбой с нарушением контактоного пункта II, III класс по Блэку с использованием материалов из фотополимеров SonicFill, Asteria"
                      price13="4300₽"
                      paragraph14="Восстановление зуба пломбой IV класс по Блэку с использованием материалов из фотополимеров Filtek, Gradia "
                      price14="4400₽"
                      paragraph15="Восстановление зуба пломбой IV класс по Блэку с использованием материалов из фотополимеров Asteria"
                      price15="4900₽"
                      paragraph16="Восстановление зуба пломбой с использованием материалов из фотополимеров Filtek Flow"
                      price16="1900₽"
                      paragraph17="Наложение лечебной или изолирующей прокладки"
                      price17="550₽"
                      openModal={openModal}
                    ></PriceTabLong>
                    <PriceTabLong
                      tabHeadign="Лечение осложнений кариеса"
                      paragraphOne="Наложение девитализирующей пасты"
                      priceOne="500₽"
                      paragraphTwo="Пломбирование корневого канала зуба под контролем апекс-локатора (процедура)"
                      priceTwo="350₽"
                      paragraphThree="Наложение временной пломбы "
                      priceThree="600₽"
                      paragraphFour="Пломбирование корневого канала зуба пастой (1 канал)"
                      priceFour="300₽"
                      paragraphFive="Пломбирование корневого канала зуба пастой с гуттаперчевыми штифтами (1 канал)"
                      priceFive="900₽"
                      paragraphSix="Закрытие перформации стенки корневого канала зуба"
                      priceSix="1500₽"
                      paragraphSeven="Инструментальная и медикаментозная обработка хорошо проходимого корневого канала (1к.)"
                      priceSeven="800₽"
                      paragraphEight="Инструментальная и медикаментозная обработка плохо проходимого корневого канала (1к.)"
                      priceEight="1100₽"
                      paragraphNine="Фиксация внутриканального штифта"
                      priceNine="1500₽"
                      paragraphTen="Удаление внутриканального штифта "
                      priceTen="2100₽"
                      paragraph11="Временное пломбирование лекарственным препаратом корневого канала ( 1 канал)"
                      price11="700₽"
                      paragraph12="Распломбировка корневого канала ранеее леченного пастой (1 канал) "
                      price12="600₽"
                      paragraph13="Распломбировка корневого канала ранеее леченного фосфат-цементом/резорцин-формалиновым методом (1 канал)"
                      price13="1300₽"
                      paragraph14="Депофорез корневого канала зуба "
                      price14="300₽"
                      paragraph15="Ультразвуковое расширение корневого канала зуба (1 канал) "
                      price15="300₽"
                      paragraph16="Механическая и медикаментозная обработка корневого канала"
                      price16="1500₽"
                      paragraph17="Пломбировка корневого канала гуттаперчивый штифт+паста"
                      price17="1500₽"
                      paragraph18="Временная пломбировка корневого канала Metapex/Colasep"
                      price18="500₽"
                      openModal={openModal}
                    ></PriceTabLong>
                    <PriceTabLong
                      tabHeadign="Эндодоническое лечение"
                      paragraphOne="Эндодоническое лечение одноканального зуба"
                      priceOne="4400₽"
                      paragraphTwo="Эндодоническое лечение двухканального зуба"
                      priceTwo="8800₽"
                      paragraphThree="Эндодоническое лечение трехканального зуб"
                      priceThree="12000₽"
                      paragraphFour="Эндодоническое лечение четырехканального зуба"
                      priceFour="16000₽"
                      paragraphFive="Эндодоническое лечение пятиканального зуба"
                      priceFive="20000₽"
                      paragraphSix="Эндодоническое лечение одноканального зуба (периодонтит)"
                      priceSix="6000₽"
                      paragraphSeven="Эндодоническое лечение двухканального зуба (периодонтит)"
                      priceSeven="10000₽"
                      paragraphEight="Эндодоническое лечение трехканального зуба (периодонтит)"
                      priceEight="14000₽"
                      paragraphNine="Эндодоническое лечение четырехканального зуба (периодонтит)"
                      priceNine="18000₽"
                      paragraphTen="Эндодоническое лечение пятиканального зуба (периодонтит)"
                      priceTen="22000₽"
                      openModal={openModal}
                    ></PriceTabLong>
                  </div>
                  <div
                    className=""
                    id="restavration-pc"
                    style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                  >
                    <h2 className="heading">Реставрации</h2>
                    <PriceTabLong
                      tabHeadign="Реставрации"
                      paragraphOne="Реставрация 1 степени сложности"
                      priceOne="4000₽"
                      paragraphTwo="Реставрация 2 степени сложности"
                      priceTwo="4900₽"
                      paragraphThree="Реставрация 3 степени сложности "
                      priceThree="5500₽"
                      paragraphFour="Художественная реставрация зуба "
                      priceFour="7500₽"
                      openModal={openModal}
                    ></PriceTabLong>
                  </div>
                  <div
                    className=""
                    id="surgery-pc"
                    style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                  >
                    <h2 className="heading">Хирургия</h2>
                    <PriceTabLong
                      tabHeadign="Хирургия"
                      paragraphOne="Удаление временного зуба I степени сложности"
                      priceOne="1200₽"
                      paragraphTwo="Удаление временного зуба II степени сложности"
                      priceTwo="1800₽"
                      paragraphThree="Удаление временного зуба с сохраненными корнями"
                      priceThree="2200₽"
                      paragraphFour="Удаление постоянного зуба простое"
                      priceFour="2400₽"
                      paragraphFive="Удаление постоянного зуба I степени сложности"
                      priceFive="3000₽"
                      paragraphSix="Удаление постоянного зуба II степени сложности"
                      priceSix="4000₽"
                      paragraphSeven="даление постоянного зуба III степени сложности"
                      priceSeven="5500₽"
                      paragraphEight="Удаление зуба сложное с разъединением корней "
                      priceEight="4500₽"
                      paragraphNine="Резекция верхушки корня (1 корень)"
                      priceNine="8500₽"
                      paragraphTen="Вскрытие и дренирование одонтогенного абсцесса"
                      priceTen="1200₽"
                      paragraph11="Отсроченный кюретаж лунки удаленного зуба"
                      price11="1000₽"
                      paragraph12="Удаление новообразований челюстно-лицевой области"
                      price12="5000₽"
                      paragraph13="Цистотомия, цистэктомия"
                      price13="8000₽"
                      paragraph14="Временное шинирование при заболеваниях пародонта ( 1 единица)"
                      price14="1500₽"
                      paragraph15="Операция удаления ретинированного, дистопированного или сверхкомплектного зуба"
                      price15="9500₽"
                      paragraph16="Удаление имплантата"
                      price16="5000₽"
                      paragraph17="Пластика уздечки языка"
                      price17="3000₽"
                      paragraph18="Пластика уздечки губы"
                      price18="3000₽"
                      paragraph19="Вестибулопластика"
                      price19="10000₽"
                      paragraph20="Лечение перикоронита (промывание, рассечение и/или иссечение капюшона)"
                      price20="1500₽"
                      paragraph21="Остановка луночного кровотечения с использованием гемостатических материалов"
                      price21="700₽"
                      paragraph22="Закрытие соустья с гайморовой пазухой"
                      price22="3000₽"
                      paragraph23="Наложение шва на слизистую оболочку рта"
                      price23="500₽"
                      paragraph24="Открытый кюретаж при заболеваниях пародонта в области 1 зуба"
                      price24="2500₽"
                      paragraph25="Закрытый кюретаж при заболеваниях пародонта в области 1 зуба"
                      price25="2000₽"
                      paragraph26="Пластика мягких тканей в области зуба или имплантата "
                      price26="7000₽"
                      paragraph27="Снятие швов"
                      price27="0₽"
                      paragraph28="Антисептическая обработка патологических карманов"
                      price28="1200₽"
                      paragraph29="Удаление экзостоза в области 1 зуба"
                      price29="1500₽"
                      paragraph30="Хирургическое удлинение в области 1 зуба"
                      price30="5000₽"
                      paragraph31="Закрытый кюретаж в области 1 зуба"
                      price31="20000₽"
                      paragraph32="Закрытие рецессии в обл. 1-3 рядом стоящих зубов "
                      price32="20000₽"
                      openModal={openModal}
                    ></PriceTabLong>
                  </div>
                  <div
                    className=""
                    id="implantology-pc"
                    style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                  >
                    <h2 className="heading">Имплантология</h2>
                    <PriceTabLong
                      tabHeadign="Протезирование на имплантах"
                      paragraphOne="Протезирование зуба с импользованием имплантата временной коронкой+временный абатмен "
                      priceOne="8500₽"
                      paragraphTwo="Единица промежуточной части временного мостовидного протеза с опорой на имплантах"
                      priceTwo="4500₽"
                      paragraphThree="Протезирование зуба с использованием имплантата коронкой металлокерамической класса `Стандарт` (трансокклюзионная фиксация)"
                      priceThree="25000₽"
                      paragraphFour="Протезирование зуба с использованием имплантата коронкой металлокерамической класса `Эстетик` (трансокклюзионная фиксация)"
                      priceFour="31000₽"
                      paragraphFive="Протезирование зуба с использованием имплантата коронкой металлокерамической класса `стандарт`(цементная фиксация) на индивидуальном абатменте"
                      priceFive="31000₽"
                      paragraphSix="Единица промежуточной части мостовидного протеза класса `Стандарт` (металлокерамика) с опорой на имплантах"
                      priceSix="17000₽"
                      paragraphSeven="Единица промежуточной части мостовидного протеза класса `Премиум` (металлокерамика) с опорой на имплантах"
                      priceSeven="21000₽"
                      paragraphEight="Протезирование зуба с использованием имплантата коронкой из диоксида циркония класса `Стандарт` (трансокклюзионная фиксация)"
                      priceEight="33000₽"
                      paragraphNine="Протезирование зуба с использованием имплантата коронкой из диоксида циркония на титановом основаниее класса `Премиум` (трансокклюзионная фиксация)"
                      priceNine="37500₽"
                      paragraphTen="Протезирование зуба с использованием имплантата коронкой из диоксида циркония класса `Стандарт` (цементная фиксация) на индивидуальном абатмене"
                      priceTen="39000₽"
                      paragraph11="Протезирование зуба с использованием имплантата коронкой из диоксида циркония класса `Премиум` (цементная фиксация) на индивидуальном абатмене"
                      price11="45000₽"
                      paragraph12="Единица промежуточной части мостовидного протеза из диоксида циркония класса `Стандарт` с опорой на имплантатах "
                      price12="22000₽"
                      paragraph13="Единица промежуточной части мостовидного протеза из диоксида циркония класса `Премиум` с опорой на имплантатах "
                      price13="26000₽"
                      paragraph14="Протезирование зуба с использованием имплантата коронкой E-max на титановом основании класса `Премиум` (трансокклюзионная фиксация)"
                      price14="30000₽"
                      paragraph15="Индивидуальный абатмен из диоксида циркония "
                      price15="15000₽"
                      paragraph16="Протезирование полным условно-съемным протезом с опорой на имплантатах (балочная конструкция) мультиюниты оплачиваются отдельно"
                      price16="185000₽"
                      paragraph17="Протезирование полным несъемным протезом с опорой на имплантатах на мультиюнитах (мультиюниты оплачиваются отдельно)"
                      price17="185000₽"
                      paragraph18="Стоимость мультиюнита (1 единица)"
                      price18="20000₽"
                      paragraph19="Протезирование полным съемным протезом на имплантатах с замковым креплением (люкаторная система замков)"
                      price19="120000₽"
                      paragraph20="Протезирование полным съемным протезом на имплантатах на аттачментах"
                      price20="95000₽"
                      paragraph21="Временный несъемный протез на имлантатах"
                      price21="80000₽"
                      paragraph22="Замена винта трансокклюзионной фиксации"
                      price22="500₽"
                      openModal={openModal}
                    ></PriceTabLong>
                    <PriceTabLong
                      tabHeadign="Внутрикостная дентальная имплантация системой"
                      paragraphOne="Имплантация системой Dentium SuperLine (Ю.Корея) "
                      priceOne="35000₽"
                      paragraphTwo="Имплантация системой NeoDent GM (Бразилия) "
                      priceTwo="3500₽"
                      paragraphThree="Имплантация системой Nobel Biocare (Швейцария)"
                      priceThree="70000₽"
                      paragraphFour="Миниимплант (ортовинт) "
                      priceFour="9000₽"
                      openModal={openModal}
                    ></PriceTabLong>
                    <PriceTabLong
                      tabHeadign="Формирователь десны"
                      paragraphOne="Установка формирователя десны SuperLine"
                      priceOne="3000₽"
                      paragraphTwo="Установка формирователя десны Strumann"
                      priceTwo="6000₽"
                      paragraphThree="Установка формирователя десны NeoDent GM"
                      priceThree="3000₽"
                      paragraphFour="Установка формирователя десны"
                      priceFour="3000₽"
                      openModal={openModal}
                    ></PriceTabLong>
                    <PriceTabLong
                      tabHeadign="Синус-лифтинг"
                      paragraphOne="Синус-лифтинг (без учета стоимости материалов) -закрытый"
                      priceOne="12000₽"
                      paragraphTwo="Синус-лифтинг (без учета стоимости материалов) -открытый "
                      priceTwo="25000₽"
                      paragraphThree="Направленная костная регенерация (HKP) титановой сеткой"
                      priceThree="25000₽"
                      paragraphFour="Подсыпка костной ткани после удаления Bio-Oss"
                      priceFour="5000₽"
                      paragraphFive="Костная пластика челюстно-лицевой области с применением биодеградируемых материалов (костно-пластический материал Bio-Oss 0,5 гр.)"
                      priceFive="15000₽"
                      paragraphSix="Костная пластика челюстно-лицевой области с применением биодеградируемых материалов (мембраны Bio-Gide) 1 шт"
                      priceSix="22000₽"
                      paragraphSeven="Использование хирургического шаблона от 3 зубов"
                      priceSeven="15000₽"
                      paragraphEight="Использование хирургического шаблона от 4 зубов "
                      priceEight="24000₽"
                      paragraphNine="Переустановка импланта"
                      priceNine="7500₽"
                      openModal={openModal}
                    ></PriceTabLong>
                  </div>
                  <div
                    className=""
                    id="reconstruction-pc"
                    style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                  >
                    <h2 className="heading">Реконструктивное лечение</h2>
                    <PriceTabLong
                      tabHeadign="Реконструктивное лечение"
                      paragraphOne="Инъекционное введение лекарственных препаратов в челюстно-лицевую область"
                      priceOne="380₽"
                      paragraphTwo="Аппликация лекарственного препарата на слизистую оболочку полости рта"
                      priceTwo="550₽"
                      paragraphThree="Ультразвуковая обработка пародонтального кармана в области зуба с применением лекарственных средств (лечение заболеваний пародонта аппаратом `Vector Para Pro` в области 1 зуба/импланта"
                      priceThree="800₽"
                      paragraphFour="Ультразвуковая обработка пародонтального кармана в области зуба с применением лекарственных средств (лечение заболеваний пародонта аппаратом `Vector Para Pro` 2 челюсти)"
                      priceFour="10000₽"
                      paragraphFive="Лазерная физиотерапия челюстно-лицевой области (1 процедура)"
                      priceFive="350₽"
                      openModal={openModal}
                    ></PriceTabLong>
                  </div>
                  <div
                    className=""
                    id="orthodontia-pc"
                    style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                  >
                    <h2 className="heading">Ортодонтия</h2>
                    <PriceTabLong
                      tabHeadign="Ортодоническая коррекция с применением брекет-системы"
                      paragraphOne="I степени сложности "
                      priceOne="65000₽"
                      paragraphTwo="II степени сложности"
                      priceTwo="70000₽"
                      paragraphThree="III степени сложности"
                      priceThree="75000₽"
                      paragraphFour="Фиксация брекет-системы (одна челюсть)"
                      priceFour="80000₽"
                      paragraphFive="Фиксация эстетической брекет-системы (одна челюсть) "
                      priceFive="95000₽"
                      paragraphSix="Брекет-система металлическая безлигатурная"
                      priceSix="25000₽"
                      paragraphSeven="Брекет-система Damon Q "
                      priceSeven="30000₽"
                      paragraphEight="Брекет-система сапфировая, керамическая"
                      priceEight="32500₽"
                      paragraphTen="Брекет-система керамическая безлигатурная"
                      priceTen="35000₽"
                      paragraph11="Фиксация одного брекета"
                      price11="2500₽"
                      paragraph12="Замена одного брекета"
                      price12="3000₽"
                      paragraph13="Снятие брекетов с одного зубного ряда"
                      price13="2000₽"
                      paragraph14="Снятие одного брекета"
                      price14="400₽"
                      paragraph15="Замена дуги"
                      price15="3000₽"
                      paragraph16="Установка открывающей, закрывающей пружины"
                      price16="1000₽"
                      paragraph17="Установка чейна (1 звено) "
                      price17="130₽"
                      paragraph18="Установка лигатуры (1 шт.) "
                      price18="70₽"
                      paragraph19="Наложение длинной лигатуры"
                      price19="400₽"
                      paragraph20="Изгиб на дуге"
                      price20="200₽"
                      openModal={openModal}
                    ></PriceTabLong>
                    <PriceTabLong
                      tabHeadign="Ретенция"
                      paragraphOne="Несъмныйретейнер на 1 зубной ряд"
                      priceOne="7000₽"
                      paragraphTwo="Ретенционный съемный аппарат на 1 зубной ряд "
                      priceTwo="8000₽"
                      paragraphThree="Снятие ретейнера"
                      priceThree="5000₽"
                      paragraphFour="Починка несъемного ретейнера"
                      priceFour="2000₽"
                      paragraphFive="Изготовление ретенционной каппы"
                      priceFive="6500₽"
                      openModal={openModal}
                    ></PriceTabLong>
                    <PriceTabLong
                      tabHeadign="Дополнительные приспособления"
                      paragraphOne="Лечение с помощью аппарат Марко-Росса "
                      priceOne="29000₽"
                      paragraphTwo="Активация ортодонтического винта"
                      priceTwo="2500₽"
                      paragraphThree="Аппарат для дистализации моляров"
                      priceThree="33000₽"
                      paragraphFour="Лечение с помощью небного бюгеля"
                      priceFour="4000₽"
                      paragraphFive="Межчелюстные тяги"
                      priceFive="500₽"
                      paragraphSix="Изготовление коронки ортодонической"
                      priceSix="5000₽"
                      paragraphSeven="Изготовление кольца-петли ортодонического"
                      priceSeven="9000₽"
                      paragraphEight="Повторная фиксация кольца-петли ортодонического"
                      priceEight="2000₽"
                      paragraphNine="Снятие оттиска с одной челюсти альгинатными массами "
                      priceNine="500₽"
                      paragraphTen="Изготовление прикусного шаблона"
                      priceTen="500₽"
                      paragraph11="Антропометрические исследования (компьютерный анализ ТРГ головы) "
                      price11="2000₽"
                      paragraph12="Изготовление контрольной модели (из гипса) "
                      price12="500₽"
                      paragraph13="Прием (осмотр, наблюдение) врача-ортодонта первичный"
                      price13="1000₽"
                      paragraph14="Прием (осмотр, наблюдение) врача-ортодонта повторный"
                      price14="700₽"
                      openModal={openModal}
                    ></PriceTabLong>
                  </div>
                  <div
                    className=""
                    id="hygiene-pc"
                    style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                  >
                    <h2 className="heading">Профилактика и гигиена</h2>
                    <PriceTabLong
                      tabHeadign="Профилактика и гигиена"
                      paragraphOne="Глубокое фторирование эмали зуба Seal&Protect (1 ед.)"
                      priceOne="300₽"
                      paragraphTwo="Местное применение реминилизирующих препаратов (процедура)"
                      priceTwo="500₽"
                      paragraphThree="Обучение гигиене полости рта и зубов индивидуально, подбор средств и предметов гигиены полости рта"
                      priceThree="400₽"
                      paragraphFour="Профессиональная гигиена полости рта и зубов (ультразвуковое удаление зубных отложений, AirFlow, полировка, покрытие зубов реминилизирующими препаратами)"
                      priceFour="5500₽"
                      paragraphFive="Профессиональная гигиена полости рта при регулярном профосмотре (1 раз в 6 месяцев)"
                      priceFive="5500₽"
                      paragraphSix="Снятие мягких зубных отложений щеткой + пастой, полировка (1 зуб)"
                      priceSix="50₽"
                      paragraphSeven="Профессиональная гигиена воздушноабразивным аппаратом AirFlow (1 челюсть)"
                      priceSeven="2500₽"
                      paragraphEight="Снятие зубных отложений пастой, полировка, покрытие `Fluocal gel` (2 челюсти) 1й сеанс"
                      priceEight="2500₽"
                      paragraphTen="Снятие зубных отложений пастой, полировка, покрытие `Fluocal gel` последующий сеанс"
                      priceTen="1500₽"
                      paragraph11="Запечатывание фиссуры зуба герметиком (1 ед.) "
                      price11="2000₽"
                      paragraph12="Ультразвуковое удаление наддесневых и поддесневых зубных отложений в области 1 зуба"
                      price12="150₽"
                      openModal={openModal}
                    ></PriceTabLong>
                  </div>
                  <div
                    className=""
                    id="whitening-pc"
                    style={{
                      marginTop: "clamp(32px,3.33312vw,128px)",
                      marginBottom: "clamp(32px,3.33312vw,128px)",
                    }}
                  >
                    <h2 className="heading">Отбеливание</h2>
                    <PriceTabLong
                      tabHeadign="Профилактика и гигиена"
                      paragraphOne="Профессиональное отбеливание зубов клиническое - система `ZOOM`"
                      priceOne="21500₽"
                      paragraphTwo="Капповое домашнее отбеливание (включая стоимость изготовления капп и набор отбеливающего геля) 2 челюсти"
                      priceTwo="9900₽"
                      paragraphThree="Профессиональное отбеливание зубов клиническое- система `Amazing White`"
                      priceThree="11000₽"
                      paragraphFour="Внутриканальное отбеливание (первый сеанс) "
                      priceFour="1900₽"
                      paragraphFive="Внутриканальное отбеливание (последующий сеанс)"
                      priceFive="1000₽"
                      openModal={openModal}
                    ></PriceTabLong>
                  </div>
                </div>
              </div>
            </main>
          </div>
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

export default PricesPage;
