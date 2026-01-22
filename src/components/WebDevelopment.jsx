import React from "react";
import ProjectList from "./ProjectList";
import { projects } from "../data/projectsData";

function WebDevelopment() {
    const webProjects = projects.filter((p) => p.category === "Web Development");

    return <ProjectList title="Web Development Projects" projects={webProjects} />;
}

export default WebDevelopment;
