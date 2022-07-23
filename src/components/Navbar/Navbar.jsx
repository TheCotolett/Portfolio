import React from 'react'
import { images } from '../../constants/index'
import './Navbar.css'

function Navbar() {
  return (
    <div className='nav-container'>
      <nav className='nav'>
        <img className='nav-logo' src={images.javascript} alt="logo"></img>
        <ul className='nav-ul'>
          {['Header', 'About', 'Skills', 'Contact'].map((item) => {
            return (
              <li className='nav-li' key={item}>
                <p className='nav-link' >{item}</p>
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