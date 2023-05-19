import { useState } from "react";
import "./services&tech.styles.css";
import { ReactComponent as AnimatedBlob } from "../../media/blobanimation.svg";

export const Services = () => {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleOptionClick = (event) => {
    setSelectedOption(event.target.id);
  };

  return (
    <div className='services-container'>
      <div className='menu-container'>
        <button id='option1' onClick={handleOptionClick}>
          Tech
        </button>
        <button id='option2' onClick={handleOptionClick}>
          Services
        </button>
      </div>
      <div className='tech-blob-container'>
        <div className='info-container'>
          {selectedOption === "option1" && (
            <div>
              <h2>Tech & Experience</h2>
              <p>List of items for Option 1</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Minima, vitae. Id minus autem totam dignissimos dolor nulla
                molestias quisquam natus obcaecati eaque laborum, nam quos qui
                iusto, eligendi sit eos!
              </p>
            </div>
          )}

          {selectedOption === "option2" && (
            <div>
              <h2>Services</h2>
              <p>List of items for Option 2</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio aliquid voluptatum illum reiciendis esse accusantium,
                quibusdam earum commodi at voluptatibus tempora ad nemo sed
                ducimus placeat est sunt
              </p>
            </div>
          )}
        </div>
        <div>
          <AnimatedBlob />
        </div>
      </div>
    </div>
  );
};
