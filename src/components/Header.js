import React from 'react'
import  Typed  from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>Web devlopment and websites promotions</h1>
        <Typed
        className="typed-text"
        strings={["Web design","Web devlopment","Facebook adds SMM","Google ads"]}
        typeSpeed={40}
        backSpeed={40}
        loop
        />
        <a href="#" className="btn-main-offer">Contact me</a>
      </div>
    </div>
  )
}

export default Header
