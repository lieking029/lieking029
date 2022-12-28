import React from "react";
import { FaReact, FaAngular, FaJsSquare } from "react-icons/fa";
import "./Services.css";

const Services = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-3">
        <span className="introSpan">Specialize In</span>
        <h1 className="fw-bolder">What I Offer</h1>
      </div>
      <div className="row">
        <div className="col-lg-4 col-sm-8">
          <div className="card border-0">
            <div className="bg-primary w-15 text-center rounded reactIcons">
              <FaReact size={50} style={{ color: "white" }} className="p-2" />
            </div>
            <div className="card-body border Braduis pt-4">
              <h5 className="card-title mt-3">React Js</h5>
              <p className="card-text p-3">
                Performance enhancement or ensuring faster rendering due to
                virual DOM, easily makes a reusable component for efficient
                usage.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-8">
          <div className="card border-0">
            <div className="bg-primary w-15 text-center rounded reactIcons">
              <FaAngular size={50} style={{ color: "white" }} className="p-2" />
            </div>
            <div className="card-body border Braduis pt-4">
              <h5 className="card-title mt-3">Angular Js</h5>
              <p className="card-text p-3">
                Angular uses TypeScript a super set of JavaScript which allows
                you see the errors in compile time rather than run time that is
                efficient for developers.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-8">
          <div className="card border-0">
            <div className="bg-primary w-15 text-center rounded reactIcons">
              <FaJsSquare
                size={50}
                style={{ color: "white" }}
                className="p-2"
              />
            </div>
            <div className="card-body border Braduis pt-4">
              <h5 className="card-title mt-3">JavaScript</h5>
              <p className="card-text p-3">
                JavaScript is a scripting or a programming language that allows
                you to implement complex features on your web-pages and can be
                used for stylings and animations.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Services;
