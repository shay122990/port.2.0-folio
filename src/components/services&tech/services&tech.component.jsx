import "./services&tech.styles.css";
import { ReactComponent as AnimatedBlob } from "../../media/blobanimation.svg";

export const Services = () => {

  return (
    <div className='services-and-tech-container'>
      <div className='tech-and-blob-container'>
        <div className='info-container'>
          <h2>Tech & Experience</h2>
          <ul>
            <li>
              Proficient in HTML5, CSS3, and JavaScript, with a solid
              understanding of their latest specifications and best
              practices.
            </li>
            <li>
              Expertise in frontend frameworks such as React.js, enabling
              the development of dynamic and interactive user interfaces.
            </li>
            <li>
              Strong command of CSS preprocessors like Sass and
              styled-components, allowing for efficient and maintainable
              stylesheets.
            </li>
            <li>
              Experience with responsive web design and mobile-first
              development, ensuring seamless user experiences across various
              devices and screen sizes.
            </li>
            <li>
              Familiarity with version control systems such as Git, enabling
              efficient collaboration and code management.
            </li>
            <li>
              Skilled in optimizing website performance through techniques
              like code minification, image optimization, and caching.
            </li>
            <li>
              Proficient in using design tools like Figma and Canva to
              collaborate with designers and translate visual concepts into
              code.
            </li>
            <li>
              Knowledge of backend technologies, including RESTful APIs, to
              facilitate seamless integration between the frontend and
              backend systems.
            </li>
            <li>
              Understanding of SEO principles and implementation techniques
              to optimize websites for search engines. Prioritizing semantic code for best accessibility practices. 
            </li>
            <li>
              Strong problem-solving skills and a proactive approach to
              debugging and troubleshooting frontend issues.
            </li>
            <li>
              Experience with WordPress development, for clients that need a fast, scalabe and beautiful website within a short time.
            </li>
          </ul>
        </div>
        <div>
          <AnimatedBlob className='blob' />
        </div>
      </div>
    </div>
  );
};
