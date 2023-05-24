import "./project-card.styles.css";

const ProjectCard = ({ project }) => {
  return (
    <div className='project-card'>
      <div className='image-container'>
        <img className='project-img' src={project.imageUrl} alt='project' />
        <div className='name-description'>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      </div>

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
