import React, { useState, useEffect } from 'react';
import Term from './components/Term.js';
import Hero from './components/Hero.js';
import { useTranslation, Trans } from "react-i18next";
import "./styles/main.scss"
import "./Term.scss";
import About from './components/About.js';
import Projects from './components/Projects.js';
import { dribbbleIcon, githubIcon, instagramLogo, linkedinIcon, stackoverflowIcon } from './components/Icons.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import i18n from './i18n/index.js';
import BackToTopButton from './components/BackTop.js';
import LazyShow from './components/LazyShow.js';

export default function App() {
  const [mode, setMode] = useState('gui');
  
  const { t } = useTranslation();

  console.log(i18n);
  if (mode === 'gui') {
    return (
      <main className="main">
        {/* website. */}
        <LazyShow
          x={0}
          y={0}
          duration={3}
        >
          <div orientation="left" className="side side--left">
            <a
              href="https://github.com/ddvital"
              className="social__links translate-top-animation"
              target="_blank"
            >
                {githubIcon()}
            </a>
            <a
              href="https://stackoverflow.com/users/17768136/david"
              className="social__links translate-top-animation"
              target="_blank"
            >
              {stackoverflowIcon()}
            </a>
            <a
              href="https://www.linkedin.com/in/ddvital/"
              className="social__links translate-top-animation"
              target="_blank"
            >       
              {linkedinIcon()}
            </a>
            <a
              href="https://dribbble.com/ddvital"
              className="social__links translate-top-animation"
              target="_blank"
            >
              {dribbbleIcon()}
            </a>
            <a
              href="https://www.instagram.com/designalvinegro"
              className="social__links translate-top-animation"
              target="_blank"
            >
              {instagramLogo()}
            </a>
          </div>
        </LazyShow>
        <LazyShow
          x={0}
          y={0}
          duration={3}
        >
          <div orientation="right" className="side side--right">
            <a href="http://" target="_blank" rel="noopener noreferrer" className="email translate-top-animation">ddvital0@gmail.com</a>
          </div>
        </LazyShow>
        <Hero
          t={t}
          setMode={setMode}
        />
        <About
          t={t}
        />
        <Projects
          t={t}
          i18n={i18n}
        />
        <Contact
          t={t}
        />
        <Footer />
        <BackToTopButton />
      </main>
    )
  } else {
    return (
      <div className='container terminal'>
        <Term
          mode={mode}
          setMode={setMode}
          t={t}
          />
      </div>
    );
  }
}


