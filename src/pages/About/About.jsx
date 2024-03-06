import "../../css/About.css";
import JeeivanImage from "../../images/jeeivan.jpg";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoVue } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

export default function About() {
  return (
    <div className="About">
      <div className="About-content">
        <h1>About</h1>
        <p>
          As a former senior Physiotherapist, I embarked on a transformative
          journey driven by my passion for technology and the dynamic nature of
          the industry, leading me to embrace a new career path as a software
          engineer. Due to my passion for technology and the industry’s constant
          evolution, I was strongly drawn to this field and made the decision to
          pursue a complete career change towards becoming a software engineer.
          I firmly believe that the communication, leadership, and adaptive
          skills I gained through my role as a physiotherapist will seamlessly
          translate into a tech environment.
          <br />
          <br />
          Always being eager to learn and relishing challenges that involve
          problem-solving, I knew that enrolling in General Assembly’s 3-month
          software engineering immersive program would be the perfect fit for me
          to refine my skills. I am now eager to expand upon the skills I have
          acquired in order to secure a full-stack role where I can leverage my
          abilities to their maximum potential.
        </p>
        <div className="skills-section">
          <h2>Skills</h2>
          <div className="skills-list">
            <div className="skill-group">
              <strong>Confident: </strong>
              <p><IoLogoJavascript /> <FaReact /> <FaPython /> <TbBrandVscode />{" "}
                <BiLogoPostgresql /><SiExpress /><SiMongodb /><FaHtml5 />
                <FaNodeJs /><FaNpm />
              </p>
            </div>
            <div className="skill-group">
              <strong>Comfortable: </strong>
              <p><DiDjango /><SiTailwindcss /><FaCss3 /><FaGitAlt />
                <FaSquareGithub /><IoLogoVue /><SiNextdotjs />
              </p>
            </div>
            <div className="skill-group">
              <strong>Dabbled With: </strong>
              <p><SiTypescript /><FaAws /></p>
            </div>
            <div className="skill-group">
<strong>Soft Skills: </strong>Communication, Teamwork, Leadership,
Resilience, Adaptable
</div>
<div className="skill-group">
<strong>Languages: </strong>English (Native), Tamil
(Conversational)
</div>
          </div>
        </div>
      </div>
      <img src={JeeivanImage} alt="Jeeivan" className="About-image" />
    </div>
  );
}

