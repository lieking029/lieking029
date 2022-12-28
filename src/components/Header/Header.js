import React from "react";
import Nav from "../Nav/Nav";
import "./Header.css";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { FaAward, FaFileCode } from "react-icons/fa";

const Header = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["18 years old", "a Web Developer", "a Front-end"],
      startDelay: 300,
      typeSpeed: 150,
      backDelay: 150,
      smartBackspace: true,
      showCursor: false,
      loop: true,
    });
  });

  return (
    <>
     <div className="h100">
     <Nav />
     <div className="container-fluid" id="header-con">
       <div className="container d-flex justify-content-between">
         <div className="p__pad">
           <h6 className="h6__header">Hi! I'm</h6>
           <h3 className="fw-bolder">John Michael Buan</h3>
           <h5 className="pb-3">
             I am <span ref={el}></span>{" "}
           </h5>
           <span>
             Looking for an opportunity to harness my skills and an opportunity
             to learn to others
           </span>{" "}
           <br />
           <div className="m-3 row">
             <button className="col-sm-4 col-lg-4 btn btnBlue p-3 mx-3 mb-2">Download CV</button>
             <button className="col-sm-4 col-lg-4 btn borderBlue p-3 mx-3">Contact Me</button>
           </div>
         </div>

         <div className="p__pad1">
           <img
             className="michael1"
             src="https://imgs.search.brave.com/6Xe7z_rqxzBwJsOPJj0eLgH4VeqIvKd3yhU8Rb9PrXM/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWcu/cmF3cGl4ZWwuY29t/L3MzZnMtcHJpdmF0/ZS9yYXdwaXhlbF9p/bWFnZXMvd2Vic2l0/ZV9jb250ZW50L3My/OS10b25nLTIucG5n/P2F1dG89JmJnPXRy/YW5zcGFyZW50JmNv/bj0zJmNzPXNyZ2Im/ZHByPTEmZm09cG5n/Jml4bGliPXBocC0z/LjEuMCZtYXJrPXJh/d3BpeGVsLXdhdGVy/bWFyay5wbmcmbWFy/a2FscGhhPTkwJm1h/cmtwYWQ9MTMmbWFy/a3NjYWxlPTEwJm1h/cmt4PTI1JnE9NzUm/dXNtPTE1JnZpYj0z/Jnc9MTQwMCZzPTZl/MWE2OGZiMjJhMzM1/MGYyMDMxYzM0NjI1/ZGY2MWFj"
             alt="michael"
           />
         </div>
       </div>
       <div className="row justify-content-center text-center">
         <div className="row py-5 w75 bg-white shadow  Absolute circled">
           <div className="col d-flex" style={{ marginLeft: "4%"  }}>
             <FaAward className="mx-lg-2 faIcon-color" />
             <div>
               <span style={{ fontWeight: "bold"}} className="spanText">1 year and 3 months</span> <br />
               <span className="subHeader">Freelance experience</span>
             </div>
           </div>
           <div className="col d-flex">
             <FaFileCode className="mx-lg-2 faIcon-color" />
             <div>
               <span style={{ fontWeight: "bold"}} className="spanText">5 months</span> <br />
               <span className="subHeader">Assist Developer</span>
             </div>
           </div>
         </div>
       </div>
     </div>
     </div>
    </>
  );
};

export default Header;
