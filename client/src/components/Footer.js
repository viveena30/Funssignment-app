import React from 'react'
import '../App.css'

const Footer = () => {
  return (
    <>
        
      <div className="main-footer">
        <div className="logo-container">
          <span>Fun</span>ssignment
        </div>
        <div className="footer-links">
          <p className="mission">Mission</p>
          <p className="pricing">Pricing</p>
          <p className="privacy-policy">Privacy Policy</p>
          <p className="termandcondition">Terms & Conditions</p>
          <p className="contact">Contact</p>
        </div>
        <div className="copyrights">
          copyright ©2022 FunTechCorp.
        </div>
      </div>
    </>
  )
}

export default Footer