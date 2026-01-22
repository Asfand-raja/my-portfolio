import React from "react";
import ProjectList from "./ProjectList";
import { projects } from "../data/projectsData";

function GraphicDesign() {
    // Including both Graphic Design and Blender projects here
    const graphicProjects = projects.filter(
        (p) => p.category === "Graphic Design" || p.category === "Blender"
    );

    return <ProjectList title="Graphic Design & 3D Modeling" projects={graphicProjects} />;
}

export default GraphicDesign;
