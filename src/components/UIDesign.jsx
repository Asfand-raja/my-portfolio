import React from "react";
import ProjectList from "./ProjectList";
import { projects } from "../data/projectsData";

function UIDesign() {
    const uiProjects = projects.filter((p) => p.category === "UI Design");

    return <ProjectList title="UI/UX Design Projects" projects={uiProjects} />;
}

export default UIDesign;
