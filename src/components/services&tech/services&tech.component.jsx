import { useState } from "react";
import "./services&tech.styles.css";
import { ReactComponent as AnimatedBlob } from "../../media/blobanimation.svg";

export const Services = () => {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleOptionClick = (event) => {
    setSelectedOption(event.target.id);
  };

  return (
    <div className='services-and-tech-container'>
      <div className='menu-container'>
        <button id='option1' onClick={handleOptionClick}>
          Tech & Experience
        </button>
        <button id='option2' onClick={handleOptionClick}>
          Client Services
        </button>
      </div>
      <div className='tech-and-blob-container'>
        <div className='info-container'>
          {selectedOption === "option1" && (
            <>
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
                  Experience with WordPress development, customizing themes, and
                  plugins to create tailored and scalable websites.
                </li>
                <li>
                  Understanding of SEO principles and implementation techniques
                  to optimize websites for search engines.
                </li>
                <li>
                  Strong problem-solving skills and a proactive approach to
                  debugging and troubleshooting frontend issues.
                </li>
                <li>
                  Ability to stay up-to-date with the latest frontend trends,
                  emerging technologies, and industry best practices to deliver
                  cutting-edge solutions.
                </li>
              </ul>
            </>
          )}

          {selectedOption === "option2" && (
            <>
              <h2>Services</h2>
              <ul>
                <li>
                  Web Design: Crafting visually stunning and user-friendly
                  websites that reflect your brand's unique identity and
                  captivate your target audience.
                </li>
                <li>
                  Frontend Development: Building seamless and interactive user
                  interfaces using HTML5, CSS3, and JavaScript to ensure an
                  engaging digital experience.
                </li>
                <li>
                  Responsive Design: Creating websites that adapt flawlessly to
                  different devices and screen sizes, providing an optimal user
                  experience across desktop, mobile, and tablet platforms.
                </li>
                <li>
                  UI/UX Optimization: Enhancing the usability and overall user
                  experience of your website by carefully analyzing user
                  behavior, conducting user testing, and implementing intuitive
                  navigation and interactions.
                </li>
                <li>
                  Branding and Rebranding: Developing or revitalizing your brand
                  identity by designing compelling logos, selecting color
                  palettes, and creating consistent visual elements to make a
                  lasting impression.
                </li>
                <li>
                  Custom WordPress Development: Tailoring WordPress themes and
                  plugins to meet your specific needs, ensuring a scalable and
                  personalized website that aligns perfectly with your business
                  goals.
                </li>
                <li>
                  Website Maintenance and Updates: Providing ongoing support and
                  maintenance services to keep your website up-to-date, secure,
                  and optimized for performance.
                </li>
                <li>
                  SEO Optimization: Implementing search engine optimization
                  techniques to improve your website's visibility, organic
                  traffic, and search engine rankings.
                </li>
                <li>
                  E-commerce Solutions: Creating robust and user-friendly online
                  stores with secure payment gateways, inventory management, and
                  intuitive shopping experiences to drive sales and revenue.
                </li>
                <li>
                  Website Audits and Optimization: Conducting thorough website
                  audits to identify areas for improvement and implementing
                  optimization strategies to enhance speed, performance, and
                  overall user experience.
                </li>
                <li>
                  Collaborative Approach: Working closely with clients to
                  understand their unique goals and objectives, fostering
                  transparent communication, and delivering customized solutions
                  that exceed expectations.
                </li>
              </ul>
            </>
          )}
        </div>
        <div>
          <AnimatedBlob className='blob' />
        </div>
      </div>
    </div>
  );
};
