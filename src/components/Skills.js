import python from "../img/python.svg";
import js from "../img/javascript.svg";
import django from "../img/django.svg";
import reactLogo from "../img/react.svg";
import node from "../img/node.svg";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import styled from "styled-components";

const WordClouds = () => {
  return (
    <Parallax
      y={["-350px", "-150px"]}
      slowerScrollRate={true}
      aria-hidden="true"
      className="parallax-outer skills__clouds"
    >
      <div class="parallax-inner">
        <p className="skill skill--1">HTML5</p>
        <p className="skill skill--2">WebGL</p>
        <p className="skill skill--3">CSS3</p>
        <p className="skill skill--4">figma</p>
        <p className="skill skill--5">VScode</p>
        <p className="skill skill--6">MongoDB</p>
        <p className="skill skill--7">React Native</p>
        <p className="skill skill--8">ES6</p>
        <p className="skill skill--9">C/C++</p>
      </div>
    </Parallax>
  );
};

// const SkillsWrapper = styled.section`
// ${(props) => props.theme.spacing.sectionBottom};
// position: relative;
// .skill__icons {
// padding: 30px 0;
// @media ${(props) => props.theme.media.tablet} {
//     padding: 10px 0;
// }
// svg {
//     color: ${(props) => props.theme.primaryColor};
// }
// }
// .skills__word-clouds {
// @media ${(props) => props.theme.media.tablet} {
//     display: none;
// }
// p {
//     position: absolute;
//     color: ${(props) => props.theme.accentColor};
//     z-index: -1;
//     left: 0;
//     right: 0;
//     font-weight: 900;
//     user-select: none;
// }
// z-index: -1;
// }
// `;

// const WordClouds = () => {
//   return (
//     <Parallax
//       y={["-350px", "-150px"]}
//       slowerScrollRate={true}
//       aria-hidden="true"
//       className="skills__word-clouds"
//     >
//       <p style={{ top: 50, left: "100%", fontSize: 23 }}>HTML5</p>
//       <p style={{ top: 0, left: 0, fontSize: 25 }}>WebGL</p>
//       <p style={{ top: 200, left: -60, fontSize: 14 }}>CSS3</p>
//       <p style={{ top: "30%", left: "35%", fontSize: 18 }}>figma</p>
//       <p style={{ top: 40, left: "75%", fontSize: 12 }}>antd</p>
//       <p style={{ top: 380, left: "85%", fontSize: 18 }}>MongoDB</p>
//       <p style={{ top: 320, left: "65%", fontSize: 18 }}>Gatsby</p>
//       <p style={{ top: 350, left: 150, fontSize: 20 }}>ES6</p>
//       <p style={{ top: 120, left: "22%", fontSize: 12 }}>blender</p>
//     </Parallax>
//   );
// };

const Skills = () => (
  <section className="skills">
    <ParallaxProvider>
      <h1>My Skillsets</h1>

      {/* <SkillPie percent={90} name={"JavaScript"} /> */}
      {/* <Flex className="skill__icons" justify="space-around" align="center">
        <FontAwesomeIcon icon={["fab", "html5"]} size="5x" />
        <FontAwesomeIcon icon={["fab", "js"]} size="5x" />
        <FontAwesomeIcon icon={["fab", "react"]} size="5x" />
        <FontAwesomeIcon icon={["fab", "node"]} size="5x" />
      </Flex> */}
      <div className="skills__main">
        <img src={python} alt="Python logo" />
        <img src={js} alt="Javascript logo" />
        <img src={django} alt="Django logo" />
        <img src={reactLogo} alt="React logo" />
        <img src={node} alt="Node logo" />
      </div>

      <WordClouds />
    </ParallaxProvider>
  </section>
);

export default Skills;
