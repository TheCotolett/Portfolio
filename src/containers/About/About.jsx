import React from 'react'
import './About.css'
import { motion } from 'framer-motion'
import { images } from '../../assets/images'

function About() {
  const about = [
    {
      id: '1',
      desc: 'I am a quick learner with a passion for coding and problem solving',
      img: '',
    },
    {
      id: '2',
      desc: 'Interested in sports, DJing and technology',
      img: '',
    },
    {
      id: '3',
      desc: 'Gratuated from high school with a degree in computer science with 100/100',
      img: '',
    },
  ]
  return (
    <div className='about-container'>
      <h1>About me</h1>
      //map through about array and display each item
      {about.map((item) => (
        <motion.div
          key={item.id}
          className='about-item'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.2 }}
          style={{x:100}}
          durantion={10}
        >
          <img src={'../../assets/about1.png'} alt='about' />
          <p>{item.desc}</p>
        </motion.div>
      ))}
    </div>
  )
}

export default About