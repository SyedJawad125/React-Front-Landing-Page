import React from 'react'
import ServiceCard from './ServiceCard'
import ServiceData from '../data/services' 


const Services = () => {
  return (
    <div id='services'>
        <h1 className='mt-5 mb-1'>Services</h1>
    <hr/>

        <div className='flex-container2'>
        {
            ServiceData.map(i => (
              <ServiceCard obj={i}/>
            ))
          }
        </div>
    </div>
  )
}

export default Services