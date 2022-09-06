import React from 'react'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect';
import './Header.css'
import {FiGithub} from 'react-icons/fi'

function Header() {
  return (
    <div className='header-container' id="Home">
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
        <motion.button 
        className='git-button'
        onClick={(e) => {
          e.preventDefault();
          window.open('https://github.com/TheCotolett/Portfolio','_blank');
          }
        }
        > <FiGithub/> <p className='git-btn-txt'>Check out the code</p> </motion.button>
    </div>
  )
}

export default Header