import React from "react";
import './AboutMe.css'
import images from '../../images'

const AboutMe = () => {
  return (
    <div className="container-fluid bg-transparent text-center my-5">
      <h1 className="border-0">About Me</h1>
      <div className="row mt-5">
        <div className="col-lg-6 col-sm-12 text-center">
        <img className="michael" src={images.michael} alt="michael" />
        </div>
        <div className="col-lg-6 col-sm-8 row justify-content-center">
            <p className="paragraph mt-lg-5 mt-sm-2 p-4 mt-3" style={{ textAlign: "start" }}>
              I am John Michael Buan, 18 years old, freelance Front-End Developer for a year and 3 months. I am creating a user friendly web pages, maintain and improve website also optimizing applications for maximum speed.
              Aware of the industry trends, following the SEO best practices
            </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
