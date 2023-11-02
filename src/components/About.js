import React, { useEffect, useState } from "react";
import LazyShow from "../components/LazyShow.js";
import dvd from "../img/model/dvd.webp";
import Translator from "./i18n/Translator.js";
import ScrollAnimation from "./ScrollAnimation.js";

const About = ({ t }) => {

  return (
    <section className="about" id="about">
      <div className="about__info">
        <ScrollAnimation
          variants={{
            visible: { opacity: 1, scale: 1, x: 0, transition: { duration: .6 } },
            hidden: { opacity: 0, scale: 1, x: -40 }
          }}
        >
          <p className="section-title">About Me</p>
        </ScrollAnimation>
        <ScrollAnimation
          variants={{
            visible: { opacity: 1, scale: 1, x: 0, transition: { duration: .6 } },
            hidden: { opacity: 0, scale: 1, x: 40 }
          }}
        >
          <p className="about__info-text">
            <Translator path="home.aboutText0" />
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          variants={{
            visible: { opacity: 1, scale: 1, y: 0, transition: { duration: .6 } },
            hidden: { opacity: 1, scale: 1, y: 40 }
          }}
        >
          <Translator path="home.aboutText1" />
        </ScrollAnimation>
        <ScrollAnimation
          variants={{
            visible: { opacity: 1, scale: 1, y: 0, transition: { duration: .6 } },
            hidden: { opacity: 1, scale: 1, y: 40 }
          }}
        >
          <p className="about__info-text">
            <Translator path="home.aboutText2" />
          </p>
        </ScrollAnimation>
      </div>

      <ScrollAnimation
          variants={{
            visible: { opacity: 1, scale: 1, x: 0, transition: { duration: .6 } },
            hidden: { opacity: 1, scale: .8, x: 0 }
          }}
      >
        <div className="about__pic">
          <img src={dvd} alt="the most handsome man on earth" className="about__pic-img" />
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default About;
