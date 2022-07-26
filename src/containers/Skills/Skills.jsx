import { motion } from 'framer-motion'
import { urlFor, client } from '../../client'
import React, { useState, useEffect } from 'react'
//import ReactTooltip from 'react-tooltip'
import {FiGithub} from 'react-icons/fi'
import {MdOpenInBrowser} from 'react-icons/md'
import './Skills.css'

function Skills() {
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  useEffect( () =>{
    const skills_query = '*[_type == "skills"]';
    client.fetch(skills_query)
    .then((data) =>{
      setSkills(data);
    })
    const projects_query = '*[_type == "projects"]';
    client.fetch(projects_query)
    .then((data) =>{
      setProjects(data);
    })
    
  }, [])
  
  return (
    <div className='skill-section' id="Skills">
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

      <div className='projects-wrapper'>
        <h2> Projects </h2>
          <motion.div className='projects-list'>
            {
              projects.map( (project) => (
                <motion.div
                  key={project.name}
                  whileInView={{opacity: [0, 0, 0, 0.5, 1]}}
                  transition={{duration: 1.5}}
                  className="project"
                >
                  <h2> {project.name} </h2>
                  <h3> {project.type} </h3>
                  <div className="icon-div">
                    <img className='project-icon' src={urlFor(project.image)} alt="project" />
                  </div>
                  <motion.div
                    className='project-links-mdiv'
                    whileInView={{opacity: [0, 0, 0, 0.5, 1]}}
                    transition={{duration: 1.5}}
                  >
                    
                    {project.app != null && <a href={project.app} target="_blank" rel="noreferrer"> <MdOpenInBrowser/> </a>}
                    <a href={project.git} target="_blank" rel="noreferrer"> <FiGithub/> </a>
                  </motion.div>

                </motion.div>
              ))
            }
          </motion.div>
      </div>

    </div>
  )
}

export default Skills