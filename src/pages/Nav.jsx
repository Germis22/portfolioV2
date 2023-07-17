import { useRef } from "react";
import Home from "./Home";

const Nav = ({ aboutRef, skillsRef, projectsRef, contactRef }) => {
  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSkills = () => {
    skillsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <nav className="navbar py-4 px-10 flex justify-between fixed top-0 z-50 backdrop-blur-xl">
        <h1 className="font-burtons text-xl font-semibold">GPCH</h1>
        <ul className="flex items-center gap-2 lg:gap-10">
          <li>
            <button onClick={scrollToAbout}>About</button>
          </li>
          <li>
            <button onClick={scrollToSkills}>Skills</button>
          </li>
          <li>
            <button onClick={scrollToProjects}>Projects</button>
          </li>
          <li>
            <button onClick={scrollToContact}>Contact</button>
          </li>
        </ul>
      </nav>
      <main className="w-full h-full overflow-scroll py-4 px-10">
        <Home
          aboutRef={aboutRef}
          skillsRef={skillsRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
      </main>
    </div>
  );
};

export default Nav;
