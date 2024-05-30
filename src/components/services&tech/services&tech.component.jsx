import "./services&tech.styles.css";
// import { ReactComponent as AnimatedBlob } from "../../media/blobanimation.svg";

export const Services = () => {
  return (
    <div className="services-and-tech-container">
      <div className="tech-and-blob-container">
        <div className="info-container">
          <h2>Tech & Experience</h2>
          <ul>
            <li>
              Proficient in HTML5, CSS3, and JavaScript, with a solid
              understanding of their latest specifications and best practices.
            </li>
            <li>
              Expertise in frontend frameworks such as React.js, enabling the
              development of dynamic and interactive user interfaces.
            </li>
            <li>
              Prioritizing seamless user experiences across various devices and
              screen sizes.
            </li>
            <li>
              Skilled in optimizing website performance through techniques like
              code minification, image optimization, and caching.
            </li>
            <li>
              Understanding of SEO principles and implementation techniques to
              optimize websites for search engines. Prioritizing semantic code
              for best accessibility practices.
            </li>
            <li>
              Experience with WordPress development, for clients that need a
              simple and beautiful website within a short time.
            </li>
          </ul>
        </div>
        <div>{/* <AnimatedBlob className="blob" /> */}</div>
      </div>
    </div>
  );
};
