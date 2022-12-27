import React from "react";
import "./AboutMe.css";
import images from "../../images";
import { FaEnvelope, FaFacebook, FaPhoneAlt } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div
      className="container bg-transparent text-center"
      style={{ marginTop: "10%" }}
    >
      <div className="row mt-5">
        <div className="col-lg-6 col-sm-12 text-center">
          <img className="michael" src={images.michael} alt="michael" />
        </div>
        <div className="col-lg-6 col-sm-8 row justify-content-center">
          <div className="paragraph p-4" style={{ textAlign: "start" }}>
            <span className="introSpan">My Intro</span>
            <h1 className="border-0 fw-bolder">About Me</h1>
            <p className="mt-3">
              I am John Michael Buan, 18 years old, freelance Front-End
              Developer for a year and 3 months. I am creating a user friendly
              web pages, maintain and improve website also optimizing
              applications for maximum speed. Aware of the industry trends.
            </p>
            <span style={{ letterSpacing: "1px" }} >
              <FaPhoneAlt style={{ marginRight: "3%", color: "rgb(0, 148, 246", }} />Phone : 09154184580
            </span> <br />
            <span style={{ letterSpacing: "1px" }} >
              <FaFacebook style={{ marginRight: "3%", color: "rgb(0, 148, 246" }} />Facebook : johnmichael.micosa.7
            </span> <br />
            <span style={{ letterSpacing: "1px" }} >
              <FaEnvelope style={{ marginRight: "3%", color: "rgb(0, 148, 246" }} />Gmail : johnmichaelbuan21@gmail.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
