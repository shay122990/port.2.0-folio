import "./project-card.styles.css";

const ProjectCard = ({ project }) => {
  return (
    <div className='project-card'>
      <img className='product-img' src={project.imageUrl} alt='project' />

      <div className='links'>
        <a href={project.liveUrl} target='_blank' rel='noopener noreferrer'>
          Live Demo
        </a>
        <a href={project.githubUrl} target='_blank' rel='noopener noreferrer'>
          GitHub Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
