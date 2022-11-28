import React from "react";
import  { FaHtml5, FaJs, FaCss3, FaReact, FaAngular, FaGithub, FaGitlab, FaAws, FaDigitalOcean, FaGitSquare } from 'react-icons/fa'
import images from '../../images'
import './Skills.css'

const Skills = () => {
  return (
    <div className="container-fluid skills text-white" style={{ paddingLeft: "10%" }}>
      <h1 className="pt-5 border-0 ">Skills</h1>
      <div className="mt-4" style={{ marginLeft: "3%" }}>
          <div>
            <h4>Web</h4>
            <FaHtml5 style={{ fontSize: "50px", marginRight: "10px" }} />
            <FaJs style={{ fontSize: "50px", marginRight: "10px" }} />
            <FaCss3 style={{ fontSize: "50px", marginRight: "10px" }} />
            <FaReact style={{ fontSize: "50px", marginRight: "10px" }} />
            <FaAngular style={{ fontSize: "50px", marginRight: "10px" }} />
          </div>
          <div className="mt-4">
            <h4>Database</h4>
            <div className="d-flex">
            <div className="bg-white px-3">
            <img src={ images.firebase } height="50" alt="firebase" />
            </div>
            <div className="bg-white">
            <img src={ images.mysql } height="50" alt="mysql" />
            </div>
            </div>
          </div>
          <div className="mt-4">
            <h4>Deployment and Source Control</h4>
            <FaGitSquare style={{ fontSize: "50px", marginRight: "10px" }} />
            <FaGithub style={{ fontSize: "50px", marginRight: "10px" }} />
            <FaGitlab style={{ fontSize: "50px", marginRight: "10px" }} />
            <FaAws style={{ fontSize: "50px", marginRight: "10px" }} />
            <FaDigitalOcean style={{ fontSize: "50px", marginRight: "10px" }} />
          </div>
      </div>
    </div>
  );
};

export default Skills;
