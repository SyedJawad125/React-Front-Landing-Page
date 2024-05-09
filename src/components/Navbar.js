import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div className="container">
    <div className='nav-flex'>
      <div className='nav-content-left'>
        <a className="brand-logo" href="#"><span>DEV</span><span className='devwhiz-logo'>WHIZ</span></a>
      </div>

      <div className='nav-content-right'>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" href='#projects'>Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href='#services'>Services</a>
        </li>


        <li className="nav-item">
          <a className="nav-link active" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#contact">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
  </div>
  </div>
</nav>
  )
}

export default Navbar