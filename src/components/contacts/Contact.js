import React from "react";
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaLocationArrow } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-3">
        <span className="introSpan">Contact Me</span>
        <h1 className="fw-bolder">Get Intouch</h1>
      </div>

      <div className="container mt-5">
        <div className="row mlcontacts">
          <div className="col d-flex mb-3">
            <div className="contactIcons">
              <FaPhoneAlt color="white" className="mt-2" size={20} />
            </div>
            <div style={{ marginLeft: "20px" }}>
              <h6>Call Me</h6>
              <span>09154184580</span>
            </div>
          </div>
          <div className="col d-flex mb-3">
            <div className="contactIcons">
              <FaEnvelope color="white" className="mt-2" size={20} />
            </div>
            <div style={{ marginLeft: "20px" }}>
              <h6>E-mail</h6>
              <span>johnmichaelbuan21@gmail.com</span>
            </div>
          </div>
          <div className="col d-flex mb-2">
            <div className="contactIcons">
              <FaLocationArrow color="white" className="mt-2" size={20} />
            </div>
            <div style={{ marginLeft: "20px" }}>
              <h6>Location</h6>
              <span>089 Barangay Majada Out Calamba Laguna</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
