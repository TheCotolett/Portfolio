import React from 'react'
import './About.css'
import { motion } from 'framer-motion'
import { images } from '../../constants'

function About() {
  const about = [
    {
      id: '1',
      desc: 'I am a quick learner with a passion for coding and problem solving',
      img: images.about01,
    },
    {
      id: '2',
      desc: 'Interested in sports, DJing and technology',
      img: images.about02,
    },
    {
      id: '3',
      desc: 'Computer Science Degree (100/100), Italian native speaker & English B2 level',
      img: images.about03,
    },
  ]
  return (
    <div className='about-container' id="About">
      <h1 className='about-title'>About me</h1>
      <div className='about-wrapper'>
        {about.map((item) => (
          <motion.div
            key={item.id}
            className='about-card'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.2 }}
            //style={{x:100}}
            durantion={10}
          >
            <img className='about-img' src={item.img} alt='about' />
            <p className='about-p'>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default About