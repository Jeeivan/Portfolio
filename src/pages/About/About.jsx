import '../../css/About.css'
import JeeivanImage from "../../images/jeeivan.png";

export default function About() {
  return (
    <div className="About">
      <img src={JeeivanImage} alt="Jeeivan" className="About-image"/>
      <div className="About-content">
      <h1>About</h1>
      <p>
        As a former senior Physiotherapist, I embarked on a transformative
        journey driven by my passion for technology and the dynamic nature of
        the industry, leading me to embrace a new career path as a software
        engineer. Due to my passion for technology and the industry’s constant
        evolution, I was strongly drawn to this field and made the decision to
        pursue a complete career change towards becoming a software engineer. I
        firmly believe that the communication, leadership, and adaptive skills I
        gained through my role as a physiotherapist will seamlessly translate
        into a tech environment.
        <br /><br />
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
            <p><strong>Confident: </strong>JavaScript, React, Python, VScode, PostgreSQL, MongoDB, Mongoose, Express, HTML, Node.js, NPM</p>
            <p><strong>Comfortable: </strong>Django, Django Rest Framework, Tailwind, CSS, Railway, Git, Github, Vue.js, Next.js</p>
            <p><strong>Dabbled With: </strong>TypeScript, AWS</p>
            <p><strong>Soft Skills: </strong>Communication, Teamwork, Leadership, Resilience, Adaptable</p>
            <p><strong>Languages: </strong>English (Native), Tamil (Conversational)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
