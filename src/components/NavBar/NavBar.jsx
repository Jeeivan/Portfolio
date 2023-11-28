import { Link } from "react-router-dom"
import '../../css/NavBar.css'

export default function NavBar() {
  return (
    <div className='navbar-container'>
    <Link to='/' className='navbar-link'>Home</Link>
    <Link to='/about' className='navbar-link'>About/Skills</Link>
    <Link to='/projects' className='navbar-link'>Projects</Link>
    <Link to='/interests' className='navbar-link'>Interests</Link>
</div>
  )
}
