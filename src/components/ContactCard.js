import React from 'react'
import linkedinIcon from '../images/tech_icons/linkedin.png'
import facebookIcon from '../images/tech_icons/facebook.png'
import whatsappIcon from '../images/tech_icons/whatsapp.png'
import githubIcon from '../images/tech_icons/github.png'
import email from '../images/tech_icons/email.png'



const ContactCard = () => {
  return (
    <div id='contact' className="horizontal-card-container" style={{padding: '40px 0px'}}>
        <div className='contact-card-left'>
            <div className='contact-card-left-content'>
                <h2>Drop us a line or say 👋 on social networks</h2>
                <p>Whether you're a business or startup seeking to transform your ideas into exceptional mobile and web applications, I'm here to collaborate and bring your vision to life. Feel free to reach out, and let's turn your ideas into reality! 💻📱</p>
            </div>
        </div>
        
        <div className='contact-card-right'>
            <a href='https://www.linkedin.com' target='_blank' className='brand-logo'><img src={linkedinIcon} className='contact-icon' alt='linkedin'/> </a>
             <a href='https://www.facebook.com' target='_blank' className='brand-logo'><img src={facebookIcon} className='contact-icon' alt='facebook'/> </a>
             <a href='https://www.github.com/Syed-Haider-Ali' target='_blank' className='brand-logo'><img src={githubIcon} className='contact-icon' alt='github'/> </a>
              <a href='https://www.linkedin.com' target='_blank' className='brand-logo'><img src={whatsappIcon} className='contact-icon' alt='whatsapp'/> </a>
               <a href='s.haider0303@gmail.com' target='_blank' className='brand-logo'><img src={email} className='contact-icon' alt='email'/> </a>

        </div>
    </div>
  )
}

export default ContactCard