import LazyShow from "../components/LazyShow.js";
import linkedin from "../img/in.svg";
import github from "../img/github.svg";
import dribbble from "../img/dribbble.svg";
import stack from "../img/stack.svg";
import user from "../img/user.svg";
import paperPlane from "../img/paper-plane.svg";
import msg from "../img/msg.svg";
import { useEffect, useState } from "react";
import Translator from "./i18n/Translator.js";
import ScrollAnimation from "./ScrollAnimation.js";
// import axios from "axios";

function Contact({ t }) {
  const [message, setMessage] = useState("Hi, I saw your portfolio");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  return (
    <section className="contact" id="contact">
      <ScrollAnimation
        variants={{
          visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
          hidden: { opacity: 0, scale: 1, y: 20 }
        }}
      >
        <p className="section-title section-title--centered"><Translator path={"home.sectionContact"}></Translator></p>
      </ScrollAnimation>

      <div className="Contact__main">
        <ul className="Contact__info">
          {/* <LazyShow> */}
          <ScrollAnimation
            variants={{
              visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.5 } },
              hidden: { opacity: 0, scale: 1, x: 20 }
            }}
          >
            <h2 className="title"><Translator path={"home.contactTitle"}></Translator></h2>
          </ScrollAnimation>
          <ScrollAnimation
            variants={{
              visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.5 } },
              hidden: { opacity: 0, scale: .8, x: 0 }
            }}
          >
            <p className="subtitle"><Translator path={"home.contactText"}></Translator></p>
          </ScrollAnimation>
          <ScrollAnimation
            variants={{
              visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
              hidden: { opacity: 0, scale: 1, y: 60 }
            }}
          >
            <button className="btn btn--primary">
              <Translator path={"home.contactButton"}></Translator>
            </button>
          </ScrollAnimation>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
