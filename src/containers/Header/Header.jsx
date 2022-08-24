import React from 'react'
import Typewriter from 'typewriter-effect';
import './Header.css'

function Header() {
  return (
    <div className='header-container'>
      <div className='header-text-div'>
        <h1 className='header-text'> Hello, I'm<Typewriter
          options={{
            strings: ['Lorenzo', 'a Frontend Developer', 'a React Developer', 'a Java Developer'],
            autoStart: true,
            loop: true,
            delay: 150,
            deleteSpeed: 70,
            wrapperClassName: 'header-text-wrapper',
            cursorClassName: 'header-text-cursor',
            blink: true,
            pauseOnBlur: true,
            pauseOnStart: true,
            startDelay: 1000,
            loopCount: Infinity
          }}
        />
        </h1>
      </div>
    </div>
  )
}

export default Header