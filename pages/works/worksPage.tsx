import React, { useState, useEffect, useRef, RefObject } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/header";
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faPhone,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { MDBCheckbox } from "mdb-react-ui-kit";

import emailjs from "@emailjs/browser";

import ReviewGallery from "../../components/reviews/ReviewGallery";
import ServiceGallery from "../../components/gallery/services_gallery";
import Footer from "../../components/footer/Footer";

import "./styles/works_styles.css";

const serviceOnePc = require("../../assets/service_1.webp");
const serviceTwoPc = require("../../assets/service_2.webp");
const serviceThreePc = require("../../assets/service_3.webp");
const serviceFourPc = require("../../assets/service_4.webp");

const serviceOneMob = require("../../assets/service_mob_01.webp");
const serviceTwoMob = require("../../assets/service_mob_02.webp");
const serviceThreeMob = require("../../assets/service_mob_03.webp");
const serviceFourMob = require("../../assets/service_mob_04.webp");

const logoMobile: string = require("../../assets/logo_mob.svg").default;
const modalImage: string = require("../../assets/example_modal.webp");

const WorksPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuPcOpen, setIsMenuPcOpen] = useState(false);

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
                <Link to="/works" className="prices-link">
                  Работы
                </Link>
              </div>
              <h1 className="heading">Работы</h1>
              <div className="divider-container">
                <div className="divider"></div>
              </div>
              <ServiceGallery
                imageSrc={serviceOneMob}
                imageSrcTwo={serviceTwoMob}
                imageSrcThree={serviceThreeMob}
                imageSrcFour={serviceFourMob}
              />
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
          <div className="pc-content-c">
            <main className="main-content">
              {" "}
              <Header
                isMenuPcOpen={isMenuPcOpen}
                togglePcMenu={togglePcMenu}
              ></Header>
              <div className="upper-content">
                <div className="bread-dots-container">
                  <Link className="link" to="/">
                    Главная
                  </Link>
                  <div className="bread-dot"></div>
                  <Link className="link-prices" to="/works">
                    Работы
                  </Link>
                </div>
                <div className="heading-container">
                  <h1 className="heading">Работы</h1>
                </div>
                <div className="divider-container">
                  <div className="divider"></div>
                </div>
              </div>
              <div className="works-container">
                <div className="row">
                  <div className="photos">
                    <img className="img" src={serviceOnePc}></img>
                    <img className="img" src={serviceTwoPc}></img>
                  </div>
                </div>
                <div className="row">
                  {" "}
                  <div className="photos two">
                    <img className="img" src={serviceThreePc}></img>
                    <img className="img" src={serviceFourPc}></img>
                  </div>
                </div>
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
        </div>
      )}
    </div>
  );
};

export default WorksPage;
