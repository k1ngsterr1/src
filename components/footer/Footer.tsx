import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faV } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faVk } from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import "../footer/styles/footer_styles.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  function navigateToVk() {
    window.open("https://vk.com/dentalhomeclinik");
  }

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

  return (
    <footer className="footer" id="contacts">
      <div className="content">
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
        <div className="icons">
          <FontAwesomeIcon
            icon={faVk}
            className="icon"
            onClick={navigateToVk}
          ></FontAwesomeIcon>
        </div>
        <div className="informations-container">
          <h5 className="information">Информация</h5>
          <div className="links-container">
            <div className="link-column-one">
              <Link to="/clinics" className="l ">
                О клинике
              </Link>
              <Link to="/doctors" className="l two">
                Врачи
              </Link>
              <Link to="/prices" className="l two">
                Цены
              </Link>
            </div>
            <div className="link-column-two">
              <Link to="/works" className="l">
                Работы
              </Link>
              <Link to="/reviews" className="l two">
                Отзывы
              </Link>
              <Link to="/contacts" className="l two">
                Контакты
              </Link>
            </div>
          </div>
        </div>
        <div className="contacts-container">
          <h5 className="contacts">Контакты</h5>
          <a href="tel:+79252229022" className="contact-text">
            +7 (925) 222-90-22
          </a>
          <span className="contact-text two">
            Россия, Московская область, г. Ивантеевка, Советский проспект 5
          </span>
          <span className="contact-text two">
            Россия, Московская область, г. Ивантеевка, Рощинская 9
          </span>
          <span className="contact-text two">Пн-Вс - 9:00-21:00</span>
          <span className="contact-text two">Бесплатная парковка</span>
          <div className="policy-row">
            <Link to="/privacy" className="policy-text">
              Политика конфиденциальности
            </Link>
            <Link to="/privacy" className="policy-text">
              Политика обработки ПД
            </Link>
          </div>
        </div>
      </div>
      <div className="pc-content-cont">
        <div className="map-social-c column">
          <YMaps>
            <Map
              defaultState={{ center: [55.9647, 37.915], zoom: 12 }}
              width="clamp(196.5px,20.46744vw,786px)"
              height="clamp(172.5px,17.9676vw,690px)"
            >
              <Placemark {...placeMark1}></Placemark>
              <Placemark {...placeMark2}></Placemark>
            </Map>
          </YMaps>
          <div className="social-m-row">
            <FontAwesomeIcon
              icon={faVk}
              className="icon vk"
              onClick={navigateToVk}
            ></FontAwesomeIcon>
          </div>
        </div>
        <div className="column">
          <h6 className="information">Информация</h6>

          <Link className="link-nav" to="/clinics">
            О клинике
          </Link>
          <Link to="/doctors" className="link-nav">
            Врачи
          </Link>
          <Link className="link-nav" to="/prices">
            Цены
          </Link>
          <Link className="link-nav" to="/works">
            Работы
          </Link>
          <Link className="link-nav" to="/reviews">
            Отзывы
          </Link>
          <Link className="link-nav" to="/contacts">
            Контакты
          </Link>
        </div>
        <div className="column">
          <h6 className="information">Контакты</h6>
          <p className="p-nav mob">+7(925) 925 99 55</p>
          <p className="p-nav">
            Россия, Московская область, г. Ивантеевка, Советский проспект 5
          </p>
          <p className="p-nav">
            Россия, Московская область, г. Ивантеевка, Рощинская 9
          </p>
          <p className="p-nav">Пн-Вс - 9:00-21:00</p>
          <p className="p-nav">Бесплатная парковка</p>
          <div className="links-conditional">
            <Link to="/privacy" className="conditional">
              Политика конфиденциальности
            </Link>
            <Link to="/privacy" className="conditional cond">
              Политика обработки ПД
            </Link>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </footer>
  );
};

export default Footer;
