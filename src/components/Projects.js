import React from 'react'
import ProjectCard from './ProjectCardGPT'
import ProjectData from '../data/projects'


const Projects = () => {
  return (
    <div id='projects'><h1 className='mt-5 mb-1'>Projects</h1>
    <hr/>
    <div className='flex-container2'>
      {
        ProjectData.map(i => (
          // <ProjectCard name={i.name} description={i.description} stack={i.stack} image={i.image}/>
          <ProjectCard obj={i}/>
        ))
      }
    </div></div>
  )
}

export default Projects