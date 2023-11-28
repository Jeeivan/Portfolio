import '../../css/Projects.css'
import Physio from '../../images/physio.png'
import Fitness from '../../images/fitness.png'
import Anime from '../../images/anime.png'
import Space from '../../images/space.png'

export default function Projects() {
  return (
    <div className="Projects">
      <div className="Projects__item">
        <h1>WaitLessWellness</h1>
        <img src={Physio} alt="Physio" />
        <p><strong>Tech Stack:</strong>Vanilla JavaScript ES6, Django, Django Rest
          Framework, PostgreSQL, React, Python, CSS, HTML</p>
        <p>
          Successfully built a user-friendly
          website that combines health information and interactive features,
          allowing users to access tailored physiotherapy guidance while awaiting
          in-person appointments to reduce stress on NHS waiting lists and for better patient outcome.
        </p>
        <a
          href="https://physio-frontend-production.up.railway.app/"
          target="_blank"
          rel="noreferrer"
        >
          <button>View Project</button>
        </a>
      </div>

      <div className="Projects__item">
        <h1>TrackTive</h1>
        <img src={Fitness} alt="Fitness" />
        <p><strong>Tech Stack:</strong>Vanilla JavaScript ES6, MongoDB,
          Mongoose, Node.js, Vue.js, Express, React, Next.js, CSS, HTML</p>
        <p>
          Successfully
          delivered a comprehensive platform tailored for gym-goers and
          health-conscious individuals.
        </p>
        <a
          href="https://physio-frontend-production.up.railway.app/"
          target="_blank"
          rel="noreferrer"
        >
          <button>View Project</button>
        </a>
      </div>

      <div className="Projects__item">
        <h1>EverythingAnime</h1>
        <img src={Anime} alt="Anime"/>
        <p><strong>Tech Stack:</strong>Vanilla JavaScript ES6, MongoDB, Mongoose,
          Node.js, Vue.js, Express, CSS, HTML</p>
        <p>
          Established a user-friendly website showcasing
          anime content and fostering community engagement with a timeframe of one
          week.
        </p>
        <a
          href="https://everythinganime.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <button>View Project</button>
        </a>
      </div>

      <div className="Projects__item">
        <h1>Space Invaders</h1>
        <img src={Space} alt="Space Invader"/>
        <p><strong>Tech Stack:</strong>Vanilla JavaScript ES6, HTML, CSS</p>
        <p>
          My take on the
          classic arcade game of Space Invaders. My first unit project of the
          General Assembly bootcamp. A stressful yet extremely rewarding and
          enjoyable experience where I got to put my foundation learning to the
          test in a personal project.
        </p>
        <a
          href="https://jeeivan.github.io/Space-Invaders-Project/"
          target="_blank"
          rel="noreferrer"
        >
          <button>Play Game</button>
        </a>
      </div>
    </div>
  );
}

