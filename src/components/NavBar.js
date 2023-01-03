import React from 'react'
import logo from '../logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from  '@fortawesome/free-solid-svg-icons'
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#"><img className='logo' src={logo} alt="logo" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      
            <FontAwesomeIcon icon={faBars} style={{color:"white"}}/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">about</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">haw work</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">contact</a>
              </li>
              
            </ul>
            
          </div>
        </div>
      </nav>
  )
}

export default NavBar