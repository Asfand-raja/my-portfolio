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
        designing, or sketching new ideas. I enjoy solving problems, learning
        <br />
        emerging technologies, and turning concepts into something practical
        and engaging.
      </p>

      <p>
        Beyond academics, I'm good at playing Cricket, Badminton and
        Sketching.
      </p>

      <div className="buttons">
        <NavLink to="/resume">
          <button className="btn-resume">Resume</button>
        </NavLink>
        <NavLink to="/projects">
          <button className="btn-projects">Projects</button>
        </NavLink>
        <NavLink to="/contact">
          <button className="btn-contact">Contact</button>
        </NavLink>
      </div>
    </section>
  );
}

export default Home;

