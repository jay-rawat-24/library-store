import React , {useState} from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [click , setClick] = useState(false)
  const [button , setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMenu = () => setClick(false)

  return (
    <>
    <nav className='navbar'>
        <div className="navbar-container"></div>
        <Link to="/" className="navbar-logo">
            BookTown <i className="fa-solid fa-book"></i>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
        </div>
        <div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='home' >
              <Link to="/" className='nav-home' onClick={closeMenu}>Home</Link>
            </li>
            <li className='about' >
              <Link to="/about2" className='nav-products' onClick={closeMenu}>About</Link>
            </li>
            <li className='services' >
              <Link to="/services" className='nav-services' onClick={closeMenu}>Services</Link>
            </li>
            <li className='nav-discord' >
              <Link to="/discord" className='nav-discord'  onClick={closeMenu}>Discord</Link>
            </li>
            <li className='nav-signup' >
              <Link to="/signup" className='nav-signup' onClick={closeMenu}>SignUp</Link>
            </li>
          </ul>
        </div>
    </nav>
    </>
    
  )
}

export default Navbar