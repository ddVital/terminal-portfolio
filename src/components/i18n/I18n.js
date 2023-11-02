import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          changeLang: "Change Language",
          introduction: "Introduction",
          heroH1: "Hello, my name is David.",
          heroText:
            "I’m a software Developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building some personal projects.",
          scrollDown: "Scroll Down",
          aboutMe: "About Me",
          aboutText0: "",
          aboutText1:
            "Fast-forward to today, with much more experience in the tech industry and many collaborations with wonderful people and projects my main skills are Python, Javascript, C/C++, TypeScript, React, React native, Node.js, Express, Django, Flask, HTML, CSS, Sass, tailwind, Bootstrap, MongoDB, MySQL, and MariaDB, AWS, CI/CD, etc...",
          aboutText2:
            "I'm also studying for a bachelor's degree in computer science at the Federal Technological University of Paraná(UTFPR) and focusing on personal projects.",
          resume: "Resumé",
          downloadCv: "Download CV.",
          projects: "Projects",
          projectsText:
            "I enjoy creating wonderful, and useful experiences for the end user. here is a small gallery of my recent projects.",
          sayHi: "Say Hi",
          letsWork: "Let's Work Together.",
          contactText:
            "I’d love to meet up with you to discuss your venture, and potential collaborations.",
          name: "Name",
          msg: "Message",
          letsTalk: "Let's Talk",
        },
      },
      pt: {
        translation: {
          changeLang: "Mudar Idioma",
          introduction: "Introdução",
          heroH1: "Olá, eu sou o David",
          heroText:
            "Eu sou um desenvolvedor de software especializado em desenvolver (e ocasionalmente design) excelentes experiencias. atualmente, estou focado em projetos pessoais.",
          scrollDown: "",
          aboutMe: "Sobre Mim",
          aboutText0: "",
          aboutText1: "",
          aboutText2: "",
          resume: "Cúrriculo",
          projects: "Projetos",
          projectsText:
            "Eu amo Criar experiencias digitais incriveis. Abaixo tem uma lista dos meus projetos recentes.",
          sayHi: "Diga Oi",
          letsWork: "Vamos Trabalhar Juntos.",
          contactText: "Eu adoraria discutir suas , e potenciais colaborações.",
          name: "Nome",
          msg: "Mensagem",
          letsTalk: "Vamos Conversar",
        },
      },
    },
  });

export default i18n;
