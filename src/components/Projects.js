import React, { useState } from "react";
import LazyShow from "../components/LazyShow.js";
import dino from "../img/dino.png";
import todo from "../img/todo.png";
import Translator from "./i18n/Translator.js";
import ScrollAnimation from "./ScrollAnimation.js";
import { externalLinkIcon, githubIcon } from "./Icons.js";

const Projects = ({ t, i18n }) => {
  const skills = [
    {
      name: "Beauty Ecommerce",
      src: "https://cdn.dribbble.com/users/7825060/screenshots/18074741/media/93ac8866cb7ea65c630a27b16f84e8d2.png",
      desc: "With this API in one simple click you can discover wonderful facts about several different topics.",
      descPt:
        "Com esta API em um simples clique você pode descobrir fatos impressionantes sobre vários tópicos diferentes.",
      techstack: ["Node.js", "React.js", "Prisma"],
      link: "https://funfactsapi.herokuapp.com/",
      repo: "https://github.com/ddvital/Fun-facts-api",
      current: true
    },
    {
      name: "Fun Facts Api",
      src: "https://cdn.dribbble.com/users/7825060/screenshots/18074741/media/93ac8866cb7ea65c630a27b16f84e8d2.png",
      desc: "With this API in one simple click you can discover wonderful facts about several different topics.",
      descPt:
        "Com esta API em um simples clique você pode descobrir fatos impressionantes sobre vários tópicos diferentes.",
      techstack: ["Node.js", "express", "MongoDB"],
      link: "https://funfactsapi.herokuapp.com/",
      repo: "https://github.com/ddvital/Fun-facts-api",
    },
    {
      name: "Dino game",
      src: dino,
      desc: "The Dinosaur Game (also known as the Chrome Dino) is a browser game developed by Google and built into the Google Chrome web browser. The player guides a pixelated Tyrannosaurus rex across a side-scrolling landscape, avoiding obstacles to achieve a higher score.",
      descPt:
        "O joguinho do dinossauro (também conhecido como Chrome Dino) é um jogo de navegador desenvolvido pelo Google e integrado ao navegador Google Chrome. O jogador guia um Tyrannosaurus rex pixelizado por uma paisagem de rolagem lateral, evitando obstáculos para alcançar uma pontuação mais alta.",
      techstack: ["Javascript", "css", "html"],
      link: "https://ddvital-dinogame.herokuapp.com/",
      repo: "https://github.com/ddvital/Dino-game",
    },
    {
      name: "ToDo App",
      src: todo,
      desc: "Do you have an idea? use this ToDo App. Whether you want to increase your productivity, reduce your stress levels, or just free up some mental space, ToDo makes it easy to plan your day and manage your life.",
      descPt:
        "Você tem alguma ideia? use este aplicativo ToDo. Se você deseja aumentar sua produtividade, reduzir seus níveis de estresse ou apenas liberar algum espaço mental, o ToDo facilita o planejamento do seu dia e o gerenciamento da sua vida.",
      techstack: ["React", "Sass", "React", "Sass", "React", "Sass"],
      link: "https://todo-app-ddvital.herokuapp.com/",
      repo: "https://github.com/ddvital/Todo-App",
    },
  ];

  return (
    <section className="projects" id="projects">
      <ScrollAnimation
          variants={{
            visible: { opacity: 1, scale: 1, x: 0, transition: { duration: .6 } },
            hidden: { opacity: 1, scale: 1, x: 40 }
          }}
      >
        <p className="section-title"><Translator path={"home.sectionProjects"}></Translator></p>
      </ScrollAnimation>
      <ScrollAnimation
          variants={{
            visible: { opacity: 1, scale: 1, y: 0, transition: { duration: .6 } },
            hidden: { opacity: 1, scale: 1, y: 40 }
          }}
      >
        <p className="subtitle"><Translator path={"home.projectsDesc"}></Translator></p>
      </ScrollAnimation>
      <ul className="projects__list">
        {skills.map((skill) => {
          return (
            // <LazyShow>
            <ScrollAnimation
              variants={{
                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: .6 } },
                hidden: { opacity: .7, scale: 1, y: 50 }
              }}
            >
            <li className="card">
              {skill.current &&
              <div className="current-project">current project</div>
              }
              <div className="card__info">
                <span className="card__info-type">Personal Project</span>
                <h2 className="card__info-title">{skill.name}</h2>
                {i18n.language === "en" ? (
                  <div className="card__main">{skill.desc}</div>
                ) : (
                  <div className="card__main">{skill.descPt}</div>
                )}
                <ul className="card__techstack">
                  {skill.techstack.map((item) => {
                    return <li>{item}</li>;
                  })}
                </ul>
                <div className="card__links">
                  <a href={skill.repo} className="scale-animation">
                    <svg 
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 21C15 21 15 18.7256 15 18C15 17.3743 15.1506 16.038 14.5 15.5C15.8887 15.3749 16.983 14.9178 18 14C19.017 13.0822 19.5 11.6875 19.5 9.5C19.5 8 19.25 7 18.5 6C18.7863 5.21921 18.8438 4 18.5 3C16.9375 3 15.5255 4.07463 15 4.5C14.6122 4.39991 13.6683 4 12 4C10.3317 4 9.38784 4.39991 9 4.5C8.47455 4.07463 7.0625 3 5.5 3C5.15625 4 5.21371 5.21921 5.5 6C4.75 7 4.5 8 4.5 9.5C4.5 11.6875 4.98301 13.0822 6 14C7.01699 14.9178 8.1113 15.3749 9.5 15.5C8.84944 16.038 9 17.3743 9 18C9 18.7256 9 21 9 21" stroke="#d292ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id=""/>
                      <path d="M9 19C7.594 19 6 18.5 5 18.5C4.468 18.5 4 18.5 3 18" stroke="#d292ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id=""/>
                    </svg>
                  </a>
                  <a href={skill.link} className="scale-animation">
                    {externalLinkIcon()}
                  </a>
                </div>
              </div>
                <a href={skill.link} className="card__img">
                  <img src={skill.src} alt="" />
                </a>
            </li>
            {/* </LazyShow> */}
            </ScrollAnimation>
          );
        })}
      </ul>
      <span className="more">
      Other projects can be explored in <a href="" className="external-link">my github profile</a>
      </span>
    </section>
  );
};

export default Projects;
