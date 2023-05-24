import React from "react";
import "./projects.styles.css";
import ProjectCard from "../project-card/project-card.component";
import image1 from "../../media/project4.png";

const projects = [
  {
    id: 1,
    name: "crown-clothing-redux",
    description:
      "lsaodhsiaodhisaohdsiaohdisaonsiao ncskalc sn cjsao nsaioc sancisoa hcsoac hsa",
    liveUrl: "https://master--vermillion-stardust-52b853.netlify.app/checkout",
    githubUrl: "https://github.com/shay122990/crwn-clothings-v2-reduxtoolkit",
    imageUrl: image1,
  },
  {
    id: 2,
    name: "crown-clothing-redux",
    description:
      "lsaodhsiaodhisaohdsiaohdisaonsiao ncskalc sn cjsao nsaioc sancisoa hcsoac hsa",
    liveUrl: "https://example.com/project-1",
    githubUrl: "https://github.com/username/project-1../..",
    imageUrl:
      "https://images.pexels.com/photos/13173088/pexels-photo-13173088.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
  },
  {
    id: 3,
    name: "crown-clothing-redux",
    description:
      "lsaodhsiaodhisaohdsiaohdisaonsiao ncskalc sn cjsao nsaioc sancisoa hcsoac hsa",
    liveUrl: "https://example.com/project-1",
    githubUrl: "https://github.com/username/project-1",
    imageUrl:
      "https://images.pexels.com/photos/13173088/pexels-photo-13173088.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
  },
  {
    id: 4,
    name: "crown-clothing-redux",
    description:
      "lsaodhsiaodhisaohdsiaohdisaonsiao ncskalc sn cjsao nsaioc sancisoa hcsoac hsa",
    liveUrl: "https://example.com/project-1",
    githubUrl: "https://github.com/username/project-1",
    imageUrl:
      "https://images.pexels.com/photos/13173088/pexels-photo-13173088.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
  },
  {
    id: 5,
    name: "crown-clothing-redux",
    description:
      "lsaodhsiaodhisaohdsiaohdisaonsiao ncskalc sn cjsao nsaioc sancisoa hcsoac hsa",
    liveUrl: "https://example.com/project-1",
    githubUrl: "https://github.com/username/project-1",
    imageUrl:
      "https://images.pexels.com/photos/13173088/pexels-photo-13173088.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
  },
  {
    id: 6,
    name: "crown-clothing-redux",
    description:
      "lsaodhsiaodhisaohdsiaohdisaonsiao ncskalc sn cjsao nsaioc sancisoa hcsoac hsa",
    liveUrl: "https://example.com/project-1",
    githubUrl: "https://github.com/username/project-1",
    imageUrl:
      "https://images.pexels.com/photos/13173088/pexels-photo-13173088.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
  },

  // Add more projects here
];

export const Projects = () => {
  return (
    <div className='projects'>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};
