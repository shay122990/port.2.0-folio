import "./index.css";
import { About } from "./components/about/about.component";
import { Arrow } from "./components/arrow/arrow.component";
import { Contact } from "./components/contact/contact.component";
import Divider from "./components/divider/divider.component";
import { Footer } from "./components/footer/footer.components";
import { Header } from "./components/header/header.component";
import { NavBar } from "./components/navigation/nav.component";
import { Projects } from "./components/projects/projects.component";
import { Services } from "./components/services&tech/services&tech.component";
import ThemeContextProvider from "./ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      <div className='App'>
        <NavBar />
        <Header />
        <Arrow />
        <Divider text='About Me' id='about' />
        <About />
        <Divider text='Projects' id='projects' />
        <Projects />
        <Arrow />
        <Divider text='Services & Tech' id='services' />
        <Services />
        <Divider text='Get in touch' id='contact' />
        <Contact />
        <Footer />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
