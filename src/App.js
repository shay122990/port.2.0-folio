import "./index.css";
import { useState, useEffect } from "react";
import { About } from "./components/about/about.component";
import { Arrow } from "./components/arrow/arrow.component";
import { Divider } from "./components/divider/divider.component";
import { Contact } from "./components/contact/contact.component";
import { Footer } from "./components/footer/footer.components";
import { Hero } from "./components/hero/hero.component";
import { NavBar } from "./components/navigation/nav.component";
import { Projects } from "./components/projects/projects.component";
import { Services } from "./components/services&tech/services&tech.component";
import ThemeContextProvider from "./ThemeContext";
import Loader from "./components/loader/loader.component";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <ThemeContextProvider>
      <div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="components-container">
            <NavBar />
            <Hero />
            <Arrow />
            <Divider text="About" id="about" />
            <About />
            <Divider text="Projects" id="projects" />
            <Projects />
            <Divider text="Tech Stack & Services" id="tech" />
            <Services />
            <Divider text="Get in touch" id="contact" />
            <Contact />
            <Footer />
          </div>
        )}
      </div>
    </ThemeContextProvider>
  );
};

export default App;
