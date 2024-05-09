import React from 'react'

const ProjectCardGPT = ({obj}) => {

  let subDescription = (obj.description).substring(0,150)
  return (
    <div className="vertical-card-container">
        <img className="card-image" src={obj.image} alt="Placeholder Image"/>
        <div className="card-content">
          <div className='a-flex'>
            <div className='skill-tag-wrapper'> 
            {
              (obj.stack).map(i => (
                <span className='skill-tag'>{i}</span>
              ))
            }
            </div>

          </div>
            <h2 className="card-title">{obj.name}</h2>
            <p className="card-description">{subDescription}...</p>
            <a href={obj.url} target="_blank"> <i className="fa-solid fa-link"></i></a>
        </div>

    </div>
  )
}

export default ProjectCardGPT