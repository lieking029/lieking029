import React, { useState, useEffect } from "react";
import "./Projects.css";
import images from "../../images";
import Item from "../ProjectItem/Item";

const Projects = () => {

  const [show, setShow] = useState(window.innerWidth > 650)
  const updateMedia = () => {
    setShow(window.innerWidth > 650 )
  }

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia)
  })

  return (
    <div className="container secondary projectPadd">
      <div className="text-center mb-3">
        <span className="introSpan">My Portfolio</span>
        <h1 className="fw-bolder">Recent Works</h1>
      </div>

      <div className="justify-content-center w-90">
        <div className="row justify-content-between">
          <div className="text-center col-lg-4 col-md-4 col-sm-8 mt-3 ">
            <div className="card">
              <img
                className="card-img-top"
                src={images.vetm}
                alt="Card"
                height="300"
                style={{ width: "100%" }}
              />
            </div>
          </div>

          <div className="text-center col-lg-4 col-md-4 col-sm-8 mt-3 ">
            <div className="card">
              <img
                className="card-img-top"
                src={images.bet}
                alt="Card"
                height="300"
                style={{ width: "100%" }}
              />
            </div>
          </div>

          

          {
            show? (
              <Item />
            )
          : <span className="mt-3" style={{ textDecoration: "underline" }}>View in desktop size to see more...</span>
          }

        </div>
      </div>
    </div>
  );
};

export default Projects;
