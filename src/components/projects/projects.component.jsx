import React from "react";
import "./projects.styles.css";
import ProjectCard from "../project-card/project-card.component";
import projects from "../../projects-data";

export const Projects = () => {
  return (
    <div className="projects">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};
