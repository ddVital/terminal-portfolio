/* eslint-disable import/no-anonymous-default-export */
import { useTranslation } from "react-i18next";
import Translator from "../i18n/Translator";
import ptBr from "../../i18n/locales/pt-br";
import getcat from "../../utils/cat";
import getRadomImage from "../../utils/santos";
import getnp from "../../utils/spotify";

export default {
  commands: {
    echo: {
      description: "Prints the given text to the console",
      usage: "echo <text>",
      fn: (...args) => args.join(" "),
    },
    about: {
      description: "About Me.",
      usage: "about",
      fn: () => {
        return "About Me.\n---\nmale\n19\nComputer Science - UTFPR\nFullstack Dev.\nUI/UX Designer\nParaná, Brazil\n---\n";
      },
    },
    message: {
      description: "Send a message",
      usage: "message <email> <message>",
      fn: (...args) => {
        if (args.length < 2) return "Usage: message <email> <message>\n";

        const email = args[0];
        const message = args.slice(1).join(" ");

        const data = {
          email,
          message,
        };

        // Now you can proceed to send the data to your API

        return "Message sent successfully!\n";
      },
    },
    socials: {
      description: "Social links",
      usage: "socials",
      fn: (...args) => {
        let response = "";
        if (args.length !== 2 || args[0] !== "go") {
          response =
            "\n \nHere are my social links:\n \n" +
            "1. Github - https://github.com/ddvital\n" +
            "2. Linkedin - https://www.linkedin.com/in/ddvital\n" +
            "3. Dribbble - https://dribbble.com/ddvital\n \n" +
            "Usage: socials go <social-no>\n" +
            "Example: socials go 1\n \n";
        } else {
          const socialNo = parseInt(args[1]);
          switch (socialNo) {
            case 1:
              window.open("https://github.com/ddvital", "_blank");
              response = "\n \n1. Github - https://github.com/ddvital\n \n";
              break;
            case 2:
              window.open("https://www.linkedin.com/in/ddvital", "_blank");
              response =
                "\n \n2. Linkedin - https://www.linkedin.com/in/ddvital\n \n";
              break;
            case 2:
              window.open("https://dibbble.com/ddvital", "_blank");
              response = "\n \n3. Dribbble - https://dribbble.com/ddvital\n \n";
              break;
            default:
              response =
                "\n \nInvalid social number. Use 'socials' command to see available options.\n \n";
              break;
          }
        }
        return response;
      },
    },
    languages: {
      description: "Languages I know.",
      usage: "languages",
      fn: () => {
        return `
                    these are the languages I know.\n---\n
                    English               - Fluent
                    Portuguese            - Native
                    German                - learning" \n---\n
                `;
      },
    },
    skills: {
      description: "Skills I have.",
      usage: "skills",
      fn: () => {
        return `
                    these are the skills I have.\n---\n
                    Python - 6 years
                    Javascript - 6 years
                    C/C++ - 4 years
                    C# - 3 years
                    Ruby - 3 years
                    PHP - 2 years
                    HTML/CSS - 6 years
                    Sass/Tailwind/Bootstrap - 4 years
                    Django - 5 years
                    Node.js - 5 years
                    .Net - 2 years
                    React - 4 years
                    Angular - 1 years
                    Figma - 5 years
                    UI/UX - 4 years
                    Adobe Photoshop - 5 years
                    Adobe Illustrator - 5 years
                    \n---\n
                `;
      },
    },
    projects: {
      description: "Projects I have worked on.",
      usage: "projects",
      fn: () => {
        return `
                    Cool projects I have worked on.\n---\n
                    'Dino Game'               |    (https://link.com)    | 'Javascript'
                    'Snake Game'              |    (https://link.com)    | 'Javascript'
                    'Quiz-app'                |    (https://link.com)    | 'Python/Django'
                    'Todo'                    |    (https://link.com)    | 'React'
                    'Fun-Facts-Api'           |    (https://link.com)    | 'JS/React'
                    'Problem-solving'         |    (https://link.com)    | 'C/C++'\n---\n
                `;
      },
    },
  },
  overwrites: {
    help: {
      description: "List all available commands",
      usage: "help",
    },
    cd: {
      description: "Change directory, not really, lol!",
      usage: "cd <directory>",
    },
    ls: {
      description: "List files in the current directory",
      usage: "ls",
    },
    mkdir: {
      description: "Make a directory",
      usage: "mkdir <directory>",
    },
    clear: {
      description: "Clears the terminal",
      usage: "clear",
    },
    santos: {
      description: "Get a random Santos FC image.",
      usage: "santos",
    },
    gui: {
      description: "go to my portfolio in GUI.",
      usage: "theme <theme>",
    },
  },
};
