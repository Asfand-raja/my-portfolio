import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
import asfand from "./asfand.jpg";

function Home() {
  return (
    <section className="intro text-center mt-5">
      <img src={asfand} alt="Profile" className="profile-pic" />
      <h1>Hello, Asfand Here!</h1>
      <p className="lead">Let's Talk A Bit About Me</p>

      <p>
        I'm Raja Asfand Arif Khan. I am a student of Software Engineering at
        COMSATS University Islamabad.
        <br />
        I'm driven by curiosity and creativity — whether it's coding,
        designing, or sketching new ideas. I enjoy solving problems,
        <br />
        learning emerging technologies, and turning concepts into something practical
        and engaging.
      </p>

      

      <div className="buttons">
        <NavLink to="/resume">
          <button className="btn-resume">Resume</button>
        </NavLink>
        <div className="d-inline-block dropdown">
          <button
            className="btn-projects dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Projects
          </button>
          <ul className="dropdown-menu">
            <li>
              <NavLink className="dropdown-item" to="/projects/web-dev">
                Web Development
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" to="/projects/graphic-design">
                Graphic Design
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" to="/projects/ui-design">
                UI Design
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/contact">
          <button className="btn-contact">Contact</button>
        </NavLink>
      </div>
    </section>
  );
}

export default Home;

