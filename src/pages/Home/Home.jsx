import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='Home'>
      <h1>Hello, I'm Jeeivan Srividiyakaran</h1>
      <Link to={'/about'}>
      <button>Learn More</button>
      </Link>
      <Link to={'/projects'}>
      <button>View My Projects</button>
      </Link>
      <p>Welcome to my first website, which I have created.
I am a junior software engineer. Quick learning, open-minded and an always looking to improve mindset.</p>
    </div>
  )
}
