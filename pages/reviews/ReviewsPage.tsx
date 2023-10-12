import React, { useState, useEffect, useRef, RefObject } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/header";
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";
import Popup from "reactjs-popup";
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
import Footer from "../../components/footer/Footer";

import "./styles/reviews_page.css";

const logoMobile: string = require("../../assets/logo_mob.svg").default;
const modalImage: string = require("../../assets/example_modal.webp");

interface ReviewTabProps {
  date: string;
  name: string;
  paragraph: string;
  href: string;
  navigate: any;
}

const ReviewTab: React.FC<ReviewTabProps> = (props) => {
  return (
    <div className="review-tab">
      <div className="review-content">
        <div className="review-date">
          <span className="date">{props.date}</span>
          <div className="screenshot-container" onClick={props.navigate}>
            <span className="screenshot">Скриншот</span>
          </div>
        </div>
        <div className="main-content">
          <h5 className="review-name">{props.name}</h5>
          <p className="review-paragraph">{props.paragraph}</p>
          <a href={props.href} target="_blank" className="full">
            Читать полностью
          </a>
        </div>
      </div>
    </div>
  );
};

const ReviewsPage = () => {
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

  const [currentScreenshot, setCurrentScreenshot] = useState<string | null>(
    null
  );
  const [screenshotOpen, setScreenshotOpen] = useState(false);

  const handleOpenScreenshot = (screenshotUrl: any) => {
    setCurrentScreenshot(screenshotUrl);
    setScreenshotOpen(true);
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
                <Link to="/reviews" className="prices-link">
                  Отзывы
                </Link>
              </div>
              <h1 className="heading">Отзывы</h1>
              <div className="divider-container">
                <div className="divider"></div>
              </div>
              <ReviewGallery
              // openScreenshot={handleOpenScreenshot}
              ></ReviewGallery>
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
            <div className="main-content">
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
                  <Link className="link-prices" to="/reviews">
                    Отзывы
                  </Link>
                </div>
                <div className="heading-container">
                  <h1 className="heading">Отзывы</h1>
                </div>
                <div className="divider-container">
                  <div className="divider"></div>
                </div>
              </div>
              <div className="reviews-content">
                <div className="review-row">
                  <ReviewTab
                    date="22.09.2023"
                    name="Елена Ушакова"
                    href="https://yandex.ru/profile/185014698556"
                    navigate={() =>
                      handleOpenScreenshot("https://i.ibb.co.com/Kym4JTk/1.png")
                    }
                    paragraph="Приятный персонал, приятная обстановка, высококвалифицированные умные врачи. Только квалифицированные и умные врачи знают как заработать много денег. Ну, вот, например, шатаются зубы, если их шинировать и укреплять да на них поставить..."
                  ></ReviewTab>
                  <ReviewTab
                    date="05.02.2023"
                    name="Сергей Гончаров"
                    href="https://yandex.ru/profile/185014698556"
                    navigate={() =>
                      handleOpenScreenshot("https://i.ibb.co.com/4W51r75/2.png")
                    }
                    paragraph="Давно пользуюсь услугами этой клиники. Вся семья там периодически наблюдается и лечится. Это не смотря на то, что сам живу в Мытищах. Лечил, протезировал.... Жена и сын - брекеты устанавливали. На данный момент - ездим сюда с женой..."
                  ></ReviewTab>
                  <ReviewTab
                    date="28.03.2023"
                    name="Ксения"
                    href="https://yandex.ru/profile/185014698556"
                    navigate={() =>
                      handleOpenScreenshot("https://i.ibb.co.com/pjFM2NJ/3.png")
                    }
                    paragraph="Специалист Виктория Олеговна сделала зубы идеально белыми , чистыми и красивыми🫶🏻  Максимально бережное отношение к клиенту , ни разу не больно , моментами даже хотелось поспать 😀  Виктория Олеговна и ассистент Ксения , огромное вам спасибо..."
                  ></ReviewTab>
                </div>
                <div className="review-row">
                  {" "}
                  <ReviewTab
                    date="25.01.2023"
                    name="Катерина Ширкина"
                    href="https://yandex.ru/profile/185014698556"
                    navigate={() =>
                      handleOpenScreenshot("https://i.ibb.co.com/q9Sfp30/4.png")
                    }
                    paragraph="Это классная клиника с профессионалами своего дела👍 Зубы лечила, делаоа гигиеническую чистку и сейчас меняю коронку и все врачи замечательные🙌 Выслушают, посмотрят, расскажут, подскажут, покажут и всё сделают 👌 Муж трусил..."
                  ></ReviewTab>
                  <ReviewTab
                    date="01.09.2023"
                    name="Константин Г."
                    href="https://yandex.ru/profile/185014698556"
                    navigate={() =>
                      handleOpenScreenshot("https://i.ibb.co.com/MBnNz4c/5.png")
                    }
                    paragraph="Хочу выразить огромную благодарность коллективу Дентал Хоум и лично Павлу Сергеевичу. Сегодня был у него на приёме - высокий профессионализм, современное оборудование и трепетное отношение к пациенту. Дентал хоум - это действительно..."
                  ></ReviewTab>
                  <ReviewTab
                    date="03.02.2022"
                    name="Виктор П."
                    href="https://yandex.ru/profile/185014698556"
                    navigate={() =>
                      handleOpenScreenshot(
                        "https://i.ibb.co.com/0qqN3cF/Screenshot-6.png"
                      )
                    }
                    paragraph="Я в пушкинском районе был во всех лучших стоматологических клиниках и после посещения был один негатив… А сегодня был в этом прекрасном месте, где меня очень и очень приятно удивили! Такого бережного отношения и аккуратно выполненной работы..."
                  ></ReviewTab>
                </div>
                <div className="review-row">
                  {" "}
                  <ReviewTab
                    date="13.09.2023"
                    name="Марина"
                    href="https://yandex.ru/profile/185014698556"
                    navigate={() =>
                      handleOpenScreenshot("https://i.ibb.co.com/BwLWxRf/7.png")
                    }
                    paragraph="Лечу, протезируюсь только в этой клинике. Не смотря на то, что переехала и живу очень далеко , обращаюсь с проблемами только сюда.Шикарные специалисты, прекрасный руководитель и создатель этой чудесной стоматологии Павел Сергеевич..."
                  ></ReviewTab>
                  <ReviewTab
                    date="23.03.2023"
                    name="Гаврила"
                    href="https://2gis.ru/ivanteevka/firm/70000001055489951/tab/reviews"
                    navigate={() =>
                      handleOpenScreenshot("https://i.ibb.co.com/gTfCbw6/8.png")
                    }
                    paragraph="Мне в клинике понравилось, стоматолог хорошая, приятная, с ней удобно работать. Был у Альфии Камиловны. Врач нравится своим подходом, она делает без боли, постоянно спрашивает все ли в порядке, дает советы на будущее, если отек какой-то появится..."
                  ></ReviewTab>
                  <ReviewTab
                    date="15.12.2023"
                    name="Пациент"
                    href="https://prodoctorov.ru/ivanteevka/lpu/78431-dental-houm/#rating"
                    navigate={() =>
                      handleOpenScreenshot("https://i.ibb.co.com/Jz3Hrhb/9.png")
                    }
                    paragraph="Очень благодарна Людмиле Юрьевне и Павлу Сергеевичу, была проделана грандиозная работа: полное восстановление зубов с исправлением прикуса. Спасибо Вам огромное! Это было долгое лечение с апреля по декабрь, и всё это время я ощущала..."
                  ></ReviewTab>
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
            </div>
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
          <Popup
            open={screenshotOpen}
            onClose={() => setScreenshotOpen(false)}
            contentStyle={{ padding: "0", border: "none" }}
            overlayStyle={{ background: "rgba(0,0,0,0.7)" }}
          >
            {currentScreenshot && (
              <img src={currentScreenshot} alt="Screenshot" />
            )}
          </Popup>
        </div>
      )}
    </div>
  );
};

export default ReviewsPage;
