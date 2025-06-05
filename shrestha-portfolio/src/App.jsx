import "./App.css";
import AboutMe from "./components/AboutMe";
import Experiences from "./components/Experiences";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import NavbarMain from "./components/navbar/NavbarMain";
import { Element } from "react-scroll";

function App() {
  return (
    <div className="w-full bg-black text-white pt-[70px]">
      <NavbarMain />
      <Element name="about">
        <AboutMe />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="experiences">
        <Experiences />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
    </div>
  );
}

export default App;
