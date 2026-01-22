import React, { useState } from "react";
import "./Projects.css";

// 🖼 Import local images
import KTravelImg from "./K-travel.png";
import MockupThumbnail from "./mockup.png";
import PortfolioPic from "./Portfolio.png";
import MonetizationPoster from "./Society.png";
import WebbAppImg from "./Web App.png";
import Mockups from "./Figma mockups.png";
import SwordImg from "./Sword.jpg"; // sword thumbnail
import PillarsImg from "./Pillars.png"; // pillars thumbnail

function Projects() {
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertType, setAlertType] = useState(""); // "success" or "danger"

  const projects = [
    // 🌐 Web Development
    {
      title: "K-Travel Website",
      text: "A responsive travel website built with HTML, CSS, and JavaScript showcasing tour destinations.",
      img: KTravelImg,
      link: "https://asfand-raja.github.io/K-travel/index.html",
      category: "Web Development",
    },
    {
      title: "Portfolio Website",
      text: "A modern, responsive personal portfolio built using React and Bootstrap to showcase my work and achievements.",
      img: PortfolioPic,
      link: "#",
      category: "Web Development",
      isPortfolio: true,
    },
    {
      title: "Web App Landing Page",
      text: "Developed an elegant restaurant landing page with smooth animations, menus, and responsive sections.",
      img: WebbAppImg,
      link: "#",
      category: "Web Development",
      isNotDeployed: true,
    },

    // 🎨 Graphic Design
    {
      title: "Online Shopping Mock-up",
      text: "Designed an engaging online shopping mock-up using Canva, blending typography and imagery effectively.",
      img: MockupThumbnail,
      link: "/Mockup.png",
      category: "Graphic Design",
    },
    {
      title: "Monetization Poster",
      text: "Designed impactful banners for university events and competitions, emphasizing color psychology and clarity.",
      img: MonetizationPoster,
      link: "/society.pdf",
      category: "Graphic Design",
    },
    {
      title: "Figma Mockups",
      text: "Designed impactful figma mockups for an Eldercare App emphasizing and covering all real world most needed facilities to help both Volunteers and Caregivers.",
      img: Mockups,
      link: "/ElderCare/index.html",
      category: "Graphic Design",
    },

    //  Blender
    {
      title: "Sword Model",
      text: "Modeled a medieval-style sword in Blender with metallic materials and realistic lighting setup.",
      img: SwordImg,
      link: "/sword/sword_done.blend", // public folder download link
      category: "Blender",
      isDownload: true,
    },
    {
      title: "Minecraft Pillars",
      text: "Created immersive Minecraft shader pillars featuring animated breakable blocks, enhancing the visual and interactive experience.",
      img: PillarsImg,
      link: "/sword/pillars_minecraft.blend", // public folder download link
      category: "Blender",
      isDownload: true,
    },
  ];

  const categories = ["Web Development", "Graphic Design", "Blender"];

  const handleButtonClick = (e, project) => {
    if (project.isPortfolio) {
      e.preventDefault();
      setAlertMessage("You are already here dude!");
      setAlertType("success");
    } else if (project.isNotDeployed) {
      e.preventDefault();
      setAlertMessage("Sorry, it's not deployed yet!");
      setAlertType("danger");
    } else if (project.isDownload) {
      // Allow download, show alert
      setAlertMessage("Your download should start shortly!");
      setAlertType("success");
      setTimeout(() => {
        setAlertMessage(null);
        setAlertType("");
      }, 3000);
      return; // do not prevent default
    } else {
      return;
    }

    // Remove alert after 3s
    setTimeout(() => {
      setAlertMessage(null);
      setAlertType("");
    }, 3000);
  };

  return (
    <div className="projects-page py-5">
      {alertMessage && (
        <div
          className={`alert alert-${alertType} text-center fade-alert`}
          role="alert"
        >
          {alertMessage}
        </div>
      )}

      <div className="container">
        <h2 className="text-center mb-5 section-title">My Projects</h2>

        {categories.map((category) => (
          <div key={category} className="mb-5">
            <h3 className="category-heading">{category}</h3>
            <div className="row">
              {projects
                .filter((p) => p.category === category)
                .map((project, index) => (
                  <div className="col-md-4 mb-4 d-flex" key={index}>
                    <div className="card project-card flex-fill">
                      <img
                        src={project.img}
                        className="card-img-top"
                        alt={project.title}
                        loading="lazy"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{project.title}</h5>
                        <p className="card-text">{project.text}</p>

                        {project.isDownload ? (
                          <a
                            href={project.link}
                            className="btn btn-gradient"
                            download
                            onClick={(e) => handleButtonClick(e, project)}
                          >
                            Download File
                          </a>
                        ) : (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-gradient"
                            onClick={(e) => handleButtonClick(e, project)}
                          >
                            View Project
                          </a>
                        )}

                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
