import { Link } from "react-router-dom";
import "../../css/Home.css";

export default function Home() {
  return (
    <div className="Home">
      <h1>Hello, I'm Jeeivan Srividiyakaran</h1>
      <div className="Home-buttons">
        <Link to={"/about"} className="Home-button">
          Learn More
        </Link>
        <Link to={"/projects"} className="Home-button">
          View My Projects
        </Link>
      </div>
      <p>
        Junior Software Engineer with a passion for technology and a strong
        foundation in full-stack development. Committed to continuous learning
        and eager to contribute to innovative projects. Let's create something
        extraordinary!
      </p>
    </div>
  );
}
