import { useState } from "react";
import "./services&tech.styles.css";
import techData from "../../data/tech-stack-data";
import Tabs from "../tabs-menu/tabs-menu.component";
import LogoSlider from "../banner/logo-slider.component";

export const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("WebDevelopment");

  const getDataByCategory = (category) => techData[category];

  return (
    <div className="services-tech-container">
      <Tabs
        items={Object.keys(techData)}
        selectedItem={selectedCategory}
        onTabChange={setSelectedCategory}
        renderTabLabel={(category) =>
          category.replace(/([A-Z])/g, " $1").trim()
        }
        className="tech-tabs"
      />
      <div className="tech-content">
        {getDataByCategory(selectedCategory).map((item) => (
          <div key={item.id} className="tech-item">
            <img src={item.image} alt="" className="tech-image" />
            <p>{item.paragraph}</p>
          </div>
        ))}
      </div>
      <LogoSlider />
    </div>
  );
};

export default Services;
