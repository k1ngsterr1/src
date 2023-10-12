"use client";
import React, { useState, useEffect } from "react";

import "./styles/header_styles.css";
import Menu from "../menu/Menu";

import Hamburger from "hamburger-react";
import { Fade, Zoom } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  isMenuOpen?: any;
  isMenuPcOpen?: any;
  toggleMenu?: any;
  togglePcMenu?: any;
  openModal?: any;
  consoleLog?: () => void;
}

const logo: string = require("../../assets/logo_mob.svg").default;

const Header: React.FC<HeaderProps> = ({
  isMenuOpen,
  toggleMenu,
  isMenuPcOpen,
  togglePcMenu,
  openModal,
  consoleLog,
}) => {
  if (isMenuOpen || isMenuPcOpen) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "";
  }

  const navigate = useNavigate();

  const [scrollAmount, setScrollAmount] = useState(100);

  function navigateToMain() {
    navigate("/");
  }

  useEffect(() => {
    if (isMenuOpen || isMenuPcOpen) {
      document.body.style.overflowY = "hidden";
      // window.scrollBy(0, scrollAmount);
      // window.scrollTo(0, 0);
    } else {
      document.body.style.overflowY = "";
    }

    // window.addEventListener("scroll", handleScroll);
    // window.removeEventListener("scroll", handleScroll);

    return () => {
      document.body.style.overflowY = ""; // Reset when the component unmounts
    };
  }, [isMenuOpen, isMenuPcOpen]);

  // {isMenuOpen && <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />}
  return (
    <header className="header">
      <div className="header-mob">
        <img
          src={logo}
          alt="logotype"
          className="logo"
          onClick={navigateToMain}
          style={{ cursor: "pointer" }}
        ></img>
        <div
          className="hamburger-button"
          style={{
            position: isMenuOpen ? "absolute" : "static",
            zIndex: "20000",
          }}
        >
          <Hamburger
            color={isMenuOpen ? "#E6C96B" : "#202637"}
            toggled={isMenuOpen ? true : false}
            onToggle={toggleMenu}
          ></Hamburger>
        </div>
        {isMenuOpen && (
          <Fade delay={300}>
            <Menu
              openModal={openModal}
              isMenuOpen={isMenuOpen}
              toggleMenu={toggleMenu}
            />{" "}
          </Fade>
        )}
      </div>
      <div className="header-pc">
        <img
          className="logo"
          src={logo}
          alt="logo"
          onClick={navigateToMain}
          style={{ cursor: "pointer" }}
        ></img>
        <div className="header-content">
          <a
            href="tel:+79252229022"
            className="tel-link"
            style={{ textDecoration: "none" }}
          >
            +7 (925) 222-90-22
          </a>
          <button className="header-btn" onClick={openModal}>
            Записаться на прием
          </button>
          <div
            className="hamburger-button"
            style={{
              position: isMenuPcOpen ? "absolute" : "static",
              zIndex: "20000",
            }}
          >
            <Hamburger
              onToggle={togglePcMenu}
              toggled={isMenuPcOpen ? true : false}
              color={isMenuPcOpen ? "#E6C96B" : "#202637"}
            ></Hamburger>
          </div>
          {isMenuPcOpen && (
            <Fade>
              <Menu
                openModal={openModal}
                isMenuPcOpen={isMenuPcOpen}
                togglePcMenu={togglePcMenu}
              />
            </Fade>
          )}
        </div>
      </div>
      <div className="header-tablet">
        <div className="tablet-content">
          <img
            className="logo"
            src={logo}
            alt="logo"
            onClick={navigateToMain}
            style={{ cursor: "pointer" }}
          ></img>
          <div className="header-content">
            <a
              href="tel:+79252229022"
              className="tel-link"
              style={{ textDecoration: "none" }}
            >
              +7 (925) 222-90-22
            </a>
            <button className="header-btn">Записаться на прием</button>
            <div
              className="hamburger-button"
              style={{
                position: isMenuPcOpen ? "absolute" : "static",
                zIndex: "20000",
              }}
            >
              <Hamburger
                onToggle={togglePcMenu}
                toggled={isMenuPcOpen ? true : false}
                color={isMenuPcOpen ? "#E6C96B" : "#202637"}
              ></Hamburger>
            </div>
            {isMenuPcOpen && (
              <Fade>
                <Menu
                  openModal={openModal}
                  isMenuPcOpen={isMenuPcOpen}
                  togglePcMenu={togglePcMenu}
                />
              </Fade>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
