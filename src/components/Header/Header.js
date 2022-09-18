import React from 'react'
import './Header.css'
import images from '../../images'
import resume from '../../John Michael Micosa Buan-compressed.pdf'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='d-flex'>
      <div className='container'>
        <div className='header'>
              <h5>Greetings!</h5>
            <p className='header-intro'> <span>Im</span>    <h6 style={{ fontWeight: "bold" }}>John Michael Micosa Buan</h6> </p>
            <p className='support-detail'> Front-end Developer and UI/UX Designer </p>
        </div>
        <div className='d-flex'>
          <button  className="btn btn-default"><Link to={resume} style={{ textDecoration: "none", color: "black" }}> Get CV </Link></button>
          {/* <button type='button' className='btn btn-dark'> Go to My GitHub </button> */}
        </div>

        <div className='image-details'>
          <div className='title'>
            <h5>Provincial Veterinary Clinic</h5>
            <h6>This project in right is created using Laravel and Vue. <br/> It is hosted using Digital Ocean.</h6>
            <div className='links'>
              <div className='github-link'>
                <p>Open in GitHub</p>
                <span> https://github.com/lieking029/vet-m </span>
              </div>
              <div className='github-link'>
                <p>or view in Digital Ocean</p>
                <span> https://provincial-veterinary-clinic-po9ld.ondigitalocean.app/ </span>
              </div>
            </div>
          </div>
        </div>
    </div>
      <div>
        <img src={images.vetm} alt='vet-m' className='vet-m' />
      </div>
    </div>
  )
}

export default Header
