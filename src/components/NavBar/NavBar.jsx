import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <div className="NavBar">
        <nav>
            <>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/interests'>Interests</Link>
            </>
        </nav>
    </div>
  )
}
