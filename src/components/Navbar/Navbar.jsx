import React from 'react'
import { images } from '../../constants/index'
import './Navbar.css'
import {Link} from 'react-scroll'

function Navbar() {
  return (
    <div className='nav-container'>
      <nav className='nav'>
        <img className='nav-logo' src={images.javascript} alt="logo"></img>
        <ul className='nav-ul'>
          {['Home', 'About', 'Skills'].map((item) => {
            return (
              <li className='nav-li' key={item}>
                <div className="circle"></div>
                <Link to={item} spy={true} smooth={true} duration={500} className='nav-link'>{item}</Link>
                {/* Finire con React Link e Routing*/}
              </li>
            );
          }
          )}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar