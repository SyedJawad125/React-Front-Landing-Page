import React from 'react'
import thumb from '../images/thumbnail.jpg'

const ProjectCard = () => {
  return (
    <div className="card reusable project-card" style={{width: "18rem"}}>
        <img src={thumb} style={{borderRadius: '1vw 1vw 0vw 0vw'}} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
            <i class="fa-solid fa-link"></i>
        </div>
    </div>
  )
}

export default ProjectCard