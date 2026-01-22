import React, { useState } from "react";
import "../components/Projects.css";

function ProjectList({ title, projects }) {
    const [alertMessage, setAlertMessage] = useState(null);
    const [alertType, setAlertType] = useState("");

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
            setAlertMessage("Your download should start shortly!");
            setAlertType("success");
            setTimeout(() => {
                setAlertMessage(null);
                setAlertType("");
            }, 3000);
            return;
        } else {
            return;
        }

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
                    style={{ position: 'fixed', top: '80px', left: '50%', transform: 'translateX(-50%)', zIndex: 1000, width: '80%', maxWidth: '500px' }}
                >
                    {alertMessage}
                </div>
            )}

            <div className="container">
                <h2 className="text-center mb-5 section-title">{title}</h2>

                <div className="row">
                    {projects.map((project, index) => (
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
        </div>
    );
}

export default ProjectList;
