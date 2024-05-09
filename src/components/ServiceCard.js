import React from 'react'

const ServiceCard = ({obj}) => {
  return (
    <div className="vertical-card-container">
        <img className="card-image" style={{height: '200px'}} src={obj.image} alt="Placeholder Image"/>
        <div className="card-content">
          <div className='a-flex'>
          </div>
            <h2 className="card-title">{obj.name}</h2>
            {/* <p className="card-description">{obj.description}</p> */}
        </div>

    </div>
  )
}

export default ServiceCard