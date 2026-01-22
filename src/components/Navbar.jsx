import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm">
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold" to="/">
          Raja Asfand Arif{" "}
          <small className="text-muted" style={{ fontSize: "0.8rem" }}>
            Software Engineer
          </small>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active-link" : "")
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active-link" : "")
                }
              >
                Resume
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Projects
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
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
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active-link" : "")
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
