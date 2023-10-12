"use client";
import Header from "../header/header";
import "../styles/main/main.css";
import "./styles/services_styles.css";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faC, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const pavelGallery = require("./assets/pavel_gallery.webp");
const pavelGalleryPc = require("./assets/pavel_pc.webp");

import { useState } from "react";
import Footer from "../footer/Footer";
import Gallery from "../gallery/gallery";

interface ServiceTemplateProps {
  title?: any;
  breadDot?: any;
  breadDotHref?: any;
  descriptionHeading?: any;
  description?: any;
  descriptionHeading2?: any;
  description2?: any;
  descriptionHeading3?: any;
  description3?: any;
  descriptionHeading4?: any;
  description4?: any;
  descriptionHeading5?: any;
  description5?: any;
  question?: any;
  answer?: any;
  question2: any;
  answer2?: any;
  question3?: any;
  answer3?: any;
  question4?: any;
  answer4?: any;
  plateDescription?: any;
  platePrice?: any;
  plateDescription2?: any;
  platePrice2?: any;
  plateDescription3?: any;
  platePrice3?: any;
}

interface ServicesPageProps {
  serviceData: ServiceTemplateProps; // Define a prop for your service data
}

const ServicesPage: React.FC<ServicesPageProps> = ({ serviceData }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuPcOpen, setIsMenuPcOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePcMenu = () => {
    setIsMenuPcOpen(!isMenuPcOpen);
  };

  return (
    <div className="screen">
      <main className="services-screen-mobile">
        <div className="content">
          <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}></Header>
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
              <Link to={serviceData.breadDotHref} className="link active">
                {serviceData.breadDot}
              </Link>
            </div>
            <h1 className="heading">Лечение Кариеса</h1>
          </div>
          <button className="golden-button">
            <span className="text">Записаться</span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="icon"
            ></FontAwesomeIcon>
          </button>
          <div className="information-container">
            <div className="divider-container">
              <div className="divider"></div>
              <span className="text">Об услуге</span>
            </div>
            <section className="information">
              <h3 className="information-heading">
                {serviceData.descriptionHeading}
              </h3>
              <p className="information-paragraph">{serviceData.description}</p>
            </section>
            <section className="information">
              <h3 className="information-heading">
                {serviceData.descriptionHeading}
              </h3>
              <p className="information-paragraph">{serviceData.description}</p>
            </section>
            <section className="information">
              <h3 className="information-heading">
                {serviceData.descriptionHeading}
              </h3>
              <p className="information-paragraph">{serviceData.description}</p>
            </section>
            <section className="information">
              <h3 className="information-heading">
                {serviceData.descriptionHeading}
              </h3>
              <p className="information-paragraph">{serviceData.description}</p>
            </section>
            <section className="information">
              <h3 className="information-heading">
                {serviceData.descriptionHeading}
              </h3>
              <h4 className="question-heading">{serviceData.question}</h4>
              <p className="answer-paragraph">{serviceData.answer}</p>
            </section>
            <div className="plate">
              <section className="tab-one">
                <h5 className="plate-heading">{serviceData.title}</h5>
                <span className="text">
                  Восстановление зуба пломбой, лечение кариеса IV класс по
                  Блэку, МОД / А16.07.002.006
                </span>
                <span className="price">22 500 ₽</span>
              </section>
              <section className="tab-two">
                <span className="text">
                  Восстановление зуба пломбой, лечение кариеса II,III класс по
                  Блэку / А16.07.002.005
                </span>
                <span className="price">20 900 ₽</span>
              </section>
              <section className="tab-three">
                <span className="text">
                  Восстановление зуба пломбой, лечение кариеса I,V класс по
                  Блэку / А16.07.002.004
                </span>
                <span className="price">17 600 ₽</span>
              </section>
            </div>
          </div>
          <Gallery imageSrc={pavelGallery} />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default ServicesPage;
