import logoMobile from "../img/logo-mobile.svg";
import LazyShow from "../components/LazyShow.js";
import Translator from "./i18n/Translator";
import ChangeLang from "./i18n/ChangeLang";
import { ArrowIcon, PaperPLaneIcon, TerminalIcon, Logo, logoWritte } from "./Icons";
import Modal from "./i18n/Modal";
import { useEffect, useState } from "react";
import ScrollAnimation from "./ScrollAnimation";
import TextAnimation from "./TextAnimation";
// import "../Optimized.scss";

function Hero({ t, i18n, setMode }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // window.scrollY = 0;
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="hero" id="home">
      <header className={`header ${isScrolled ? 'header--hidden' : ''}`}>
        <nav className="header__nav">
          <a href={'/'} className="logo-mobile">
            {logoWritte()}
          </a>
          <ul className="nav__list">
            <a href={'/'} className="logo">
              {logoWritte()}
            </a>
            <ScrollAnimation
              variants={{
                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
                hidden: { opacity: 0, scale: 1, y: -30 }
              }}
            >
              <li className="nav__list-item">
                <a href="#home" className="nav__list-link">
                  <Translator path="home.home" />
                </a>
              </li>
            </ScrollAnimation>
            <ScrollAnimation
              variants={{
                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } },
                hidden: { opacity: 0, scale: 1, y: -30 }
              }}
            >

              <li className="nav__list-item">
                <a href="#about" className="nav__list-link">
                  <Translator path="home.aboutMe" />
                </a>
              </li>
            </ScrollAnimation>
            <ScrollAnimation
              variants={{
                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7 } },
                hidden: { opacity: 0, scale: 1, y: -30 }
              }}
            >

              <li className="nav__list-item">
                <a href="#projects" className="nav__list-link">
                  <Translator path="home.Projects" />
                </a>
              </li>
            </ScrollAnimation>
            <ScrollAnimation
              variants={{
                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8 } },
                hidden: { opacity: 0, scale: 1, y: -30 }
              }}
            >
              <li className="nav__list-item">
                <a href="#contact" className="nav__list-link">
                  <Translator path="home.Contact" />
                </a>
              </li>
            </ScrollAnimation>
          </ul>

          <div className="nav__actions">
            <ScrollAnimation
              variants={{
                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1.4 } },
                hidden: { opacity: 0, scale: 1, y: -30 }
              }}
            >
            <button className="btn btn--outline" onClick={() => setMode('cmd')}>
              {TerminalIcon()}
            </button>
            </ScrollAnimation>
            <ScrollAnimation
              variants={{
                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1.6 } },
                hidden: { opacity: 0, scale: 1, y: -30 }
              }}
            >
              <ChangeLang />
            </ScrollAnimation>
          </div>
        </nav>
      </header>
      
      <div className="hero__content">
        <div className="hero__info">
        <ScrollAnimation
          variants={{
            visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
            hidden: { opacity: 0, scale: 1, y: -30 }
          }}
        >
          <p className="section-title">
            <Translator path="home.sectionIntroduction" />.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          variants={{
            visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
            hidden: { opacity: 0, scale: 1, y: 40 }
          }}
        >
          <h1 className="hero-title">
            <Translator path="home.heroH1" />.
            <br />
            <span className="hero-subtitle">
              <TextAnimation
                words={["Software developer", "UI/UX Designer"]}
              />
              {/* {t("home.heroText")} */}
            </span>
          </h1>
        </ScrollAnimation>
        <ScrollAnimation
          variants={{
            visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
            hidden: { opacity: 0, scale: .8, y: 0 }
          }}
        >
          <p className="hero__text subtext">
            <Translator path="home.heroText" />
          </p>
        </ScrollAnimation>
        <div className="btn-group">
        <ScrollAnimation
          variants={{
            visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 1 } },
            hidden: { opacity: 0, scale: 1, x: 40 }
          }}
        >
          <button className="btn btn--primary">
            <Translator path="home.letsTalk" />
            {PaperPLaneIcon()}
          </button>
        </ScrollAnimation>
        <ScrollAnimation
          variants={{
            visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 1 } },
            hidden: { opacity: 0, scale: 1, x: 40 }
          }}
        >
          <button className="btn btn--outline btn--special">
            <div className="btn__info">
              <Translator path="home.resume" />
              <span className="btn__info-text">100+ Views</span>
            </div>
            {ArrowIcon()}
          </button>
        </ScrollAnimation>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;