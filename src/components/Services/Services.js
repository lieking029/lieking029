import React from 'react'
import images from '../../images'

const Services = () => {
  return (
    <div className="container mb-5">
      <div className="text-center mb-3">
          <h1>Services Offers</h1>
      </div>
      <div className="justify-content-center">
      <div className="row justify-content-between">

      <div className="text-center col-lg-4 col-md-4 col-sm-8 mt-3 ">
        <div className="card">
        <img className="card-img-top" src={images.react} alt="Card" style={{ width: "100%" }} />
        <div className="card-body">
          <p className="card-text">
            Build an interactive interfaces and web applications quickly and efficiently, creating reusable components, ultimately optimized development interface.
          </p>
        </div>
        </div>
      </div>

      <div className="text-center col-lg-4 col-md-4 col-sm-8 mt-3 ">
        <div className="card">
        <img className="card-img-top" src={images.angular} alt="Card" style={{ width: "100%" }} />
        <div className="card-body">
          <p className="card-text">
            Build an scalable web applications, more precise feature since angular is using a real DOM not a virtual. Has an excellent material design library. 
          </p>
        </div>
        </div>
      </div>

      <div className="text-center col-lg-4 col-md-4 col-sm-8 mt-3 ">
        <div className="card">
        <img className="card-img-top" src={images.js} alt="Card" style={{ width: "100%" }} />
        <div className="card-body">
          <p className="card-text">
            Build a complex interactive website's features, Vanilla JS easily adopt new frameworks and libraries so it also increases my development speed
          </p>
        </div>
        </div>
      </div>

      </div>
      </div>
    </div>
  )
}

export default Services