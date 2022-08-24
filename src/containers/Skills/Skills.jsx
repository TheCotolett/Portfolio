import { motion } from 'framer-motion'
import { urlFor, client } from '../../client'
import React, { useState, useEffect } from 'react'
//import ReactTooltip from 'react-tooltip'
import './Skills.css'

function Skills() {
  const [skills, setSkills] = useState([]);
  useEffect( () =>{
    const skills_query = '*[_type == "skills"]';
    client.fetch(skills_query)
    .then((data) =>{
      setSkills(data);
    })
    

  }, [])

  return (
    <div className='skill-section'>
      <h2 className='skills-title'> Skills & Experience </h2>
      <div className='skills-wrapper'>
        <motion.div className='skills-list'>
          {
            skills.map((skill) => (
              <motion.div
                key={skill.name}
                whileInView={{opacity: [0, 1]}}
                transition={{duration: 0.5}}
                className="skill"
              >
                <div className='skill-icon-div'>
                  <img className='skill-icon' src={urlFor(skill.image)} alt="skill" />
                </div>
                <p className='skill-name'>{skill.name}</p>
              </motion.div>
            ))
          }
        </motion.div>
      </div>

    </div>
  )
}

export default Skills