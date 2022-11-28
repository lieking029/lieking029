import React from "react";
import "./Projects.css";
import images from "../../images";

const Projects = () => {
  return (
    <div className="container bg-transparent my-5">
       <div className="justify-content-center">
      <div className="row justify-content-between">

      <div className="text-center col-lg-4 col-md-4 col-sm-8 mt-3 ">
        <div className="card">
        <img className="card-img-top" src={images.vetm} alt="Card" height="300" style={{ width: "100%" }} />
        <div className="card-body">
          <p className="card-text">
            An appoinment scheduler and pet consulatation where you can describe your pets deseased or make an appoinment.
          </p>
          <h5>Role: Hosted the website <br/> (Freelance Project) </h5>
        </div>
        </div>
      </div>

      <div className="text-center col-lg-4 col-md-4 col-sm-8 mt-3 ">
        <div className="card">
        <img className="card-img-top" src={images.bet} alt="Card" height="300" style={{ width: "100%" }} />
        <div className="card-body">
          <p className="card-text">
            A betting game where you will watch a video and bet on the team you think is more likely to win. This system uses a hashing method where player's assure that both their account and money is safe.
          </p>
          <h5>Role: Front-end Developer <br/> (Freelance Project) </h5>
        </div>
        </div>
      </div>

      <div className="text-center col-lg-4 col-md-4 col-sm-8 mt-3 ">
        <div className="card">
        <img className="card-img-top" src={images.beanleaf} alt="Card" height="300" style={{ width: "100%" }} />
        <div className="card-body">
          <p className="card-text">
            A social media website where customer posting their coffee, purchase it and deliver it using the website riders to deliver it.
          </p>
          <h5>Role: Front-end Developer <br/> (Freelance Project)</h5>
        </div>
        </div>
      </div>

      </div>
      </div>
    </div>
  );
};

export default Projects;
