import { useState } from "react";
import "./services&tech.styles.css";
import servicesData from "../../data/services-data";
import Tabs from "../tabs-menu/tabs-menu.component";

export const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("webDevelopment");

  const getDataByCategory = (category) => servicesData[category];

  return (
    <div className="services-tech-container">
      <Tabs
        items={Object.keys(servicesData)}
        selectedItem={selectedCategory}
        onTabChange={setSelectedCategory}
        renderTabLabel={(category) =>
          category.replace(/([A-Z])/g, " $1").trim()
        }
        className="tech-tabs"
      />
      <div className="services-content">
        {getDataByCategory(selectedCategory).map((item) => (
          <div key={item.id} className="service-item">
            <img src={item.image} alt="" className="service-image" />
            <p>{item.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
