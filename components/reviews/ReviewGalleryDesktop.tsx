import React, { useState } from "react";

import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Popup from "reactjs-popup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import "./styles/reviews_pc_gallery.css";

interface ReviewTabProps {
  date: string;
  name: string;
  paragraph: string;
  href: string;
  navigate: any;
}

const ReviewTab: React.FC<ReviewTabProps> = (props) => {
  type Swiper = any;

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

type Swiper = any;

// type ReviewGalleryProps = {
//   openScreenshot: (url: string) => void;
// };

const ReviewGalleryDesktop = () => {
  const swiperRef = React.useRef<Swiper | null>(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const [currentScreenshot, setCurrentScreenshot] = useState<string | null>(
    null
  );

  const [screenshotOpen, setScreenshotOpen] = useState(false);

  const handleOpenScreenshot = (screenshotUrl: any) => {
    setCurrentScreenshot(screenshotUrl);
    setScreenshotOpen(true);
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="reviews">
      <div className="gallery-nav">
        <button className="previous" onClick={handlePrev}>
          <FontAwesomeIcon className="icon" icon={faArrowLeft} />
        </button>
        <button className="next" onClick={handleNext}>
          <FontAwesomeIcon className="icon" icon={faArrowRight} />
        </button>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        onSwiper={(swiper: any) => {
          swiperRef.current = swiper;
        }}
        className="mySwiper6"
      >
        <SwiperSlide>
          <ReviewTab
            date="22.09.2023"
            name="Елена Ушакова"
            href="https://yandex.ru/profile/185014698556"
            navigate={() =>
              handleOpenScreenshot("https://i.ibb.co.com/Kym4JTk/1.png")
            }
            paragraph="Приятный персонал, приятная обстановка, высококвалифицированные умные врачи. Только квалифицированные и умные врачи знают как заработать много денег. Ну, вот, например, шатаются зубы, если их шинировать и укреплять да на них поставить..."
          ></ReviewTab>
        </SwiperSlide>
        <SwiperSlide>
          <ReviewTab
            date="05.02.2023"
            name="Сергей Гончаров"
            href="https://yandex.ru/profile/185014698556"
            navigate={() =>
              handleOpenScreenshot("https://i.ibb.co.com/4W51r75/2.png")
            }
            paragraph="Давно пользуюсь услугами этой клиники. Вся семья там периодически наблюдается и лечится. Это не смотря на то, что сам живу в Мытищах. Лечил, протезировал.... Жена и сын - брекеты устанавливали. На данный момент - ездим сюда с женой..."
          ></ReviewTab>
        </SwiperSlide>
        <SwiperSlide>
          <ReviewTab
            date="28.03.2023"
            name="Ксения"
            href="https://yandex.ru/profile/185014698556"
            navigate={() =>
              handleOpenScreenshot("https://i.ibb.co.com/pjFM2NJ/3.png")
            }
            paragraph="Специалист Виктория Олеговна сделала зубы идеально белыми , чистыми и красивыми🫶🏻  Максимально бережное отношение к клиенту , ни разу не больно , моментами даже хотелось поспать 😀  Виктория Олеговна и ассистент Ксения , огромное вам спасибо..."
          ></ReviewTab>
        </SwiperSlide>
        <SwiperSlide>
          <ReviewTab
            date="25.01.2023"
            name="Катерина Ширкина"
            href="https://yandex.ru/profile/185014698556"
            navigate={() =>
              handleOpenScreenshot("https://i.ibb.co.com/q9Sfp30/4.png")
            }
            paragraph="Это классная клиника с профессионалами своего дела👍 Зубы лечила, делаоа гигиеническую чистку и сейчас меняю коронку и все врачи замечательные🙌 Выслушают, посмотрят, расскажут, подскажут, покажут и всё сделают 👌 Муж трусил..."
          ></ReviewTab>
        </SwiperSlide>
        <SwiperSlide>
          <ReviewTab
            date="01.09.2023"
            name="Константин Г."
            href="https://yandex.ru/profile/185014698556"
            navigate={() =>
              handleOpenScreenshot("https://i.ibb.co.com/MBnNz4c/5.png")
            }
            paragraph="Хочу выразить огромную благодарность коллективу Дентал Хоум и лично Павлу Сергеевичу. Сегодня был у него на приёме - высокий профессионализм, современное оборудование и трепетное отношение к пациенту. Дентал хоум - это действительно..."
          ></ReviewTab>
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
          <ReviewTab
            date="13.09.2023"
            name="Марина"
            href="https://yandex.ru/profile/185014698556"
            navigate={() =>
              handleOpenScreenshot("https://i.ibb.co.com/BwLWxRf/7.png")
            }
            paragraph="Лечу, протезируюсь только в этой клинике. Не смотря на то, что переехала и живу очень далеко , обращаюсь с проблемами только сюда.Шикарные специалисты, прекрасный руководитель и создатель этой чудесной стоматологии Павел Сергеевич..."
          ></ReviewTab>
        </SwiperSlide>
        <SwiperSlide>
          <ReviewTab
            date="23.03.2023"
            name="Гаврила"
            href="https://2gis.ru/ivanteevka/firm/70000001055489951/tab/reviews"
            navigate={() =>
              handleOpenScreenshot("https://i.ibb.co.com/gTfCbw6/8.png")
            }
            paragraph="Мне в клинике понравилось, стоматолог хорошая, приятная, с ней удобно работать. Был у Альфии Камиловны. Врач нравится своим подходом, она делает без боли, постоянно спрашивает все ли в порядке, дает советы на будущее, если отек какой-то появится..."
          ></ReviewTab>
        </SwiperSlide>
        <SwiperSlide>
          <ReviewTab
            date="15.12.2023"
            name="Пациент"
            href="https://prodoctorov.ru/ivanteevka/lpu/78431-dental-houm/#rating"
            navigate={() =>
              handleOpenScreenshot("https://i.ibb.co.com/Jz3Hrhb/9.png")
            }
            paragraph="Очень благодарна Людмиле Юрьевне и Павлу Сергеевичу, была проделана грандиозная работа: полное восстановление зубов с исправлением прикуса. Спасибо Вам огромное! Это было долгое лечение с апреля по декабрь, и всё это время я ощущала..."
          ></ReviewTab>
        </SwiperSlide>
      </Swiper>
      <Popup
        open={screenshotOpen}
        onClose={() => setScreenshotOpen(false)}
        contentStyle={{ padding: "0", border: "none" }}
        overlayStyle={{ background: "rgba(0,0,0,0.7)" }}
      >
        {currentScreenshot && <img src={currentScreenshot} alt="Screenshot" />}
      </Popup>
    </div>
  );
};

export default ReviewGalleryDesktop;
