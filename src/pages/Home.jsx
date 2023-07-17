import Presentation from "../components/Presentation.jsx";
import Contact from "../components/Contact.jsx";
import Projects from "../components/Projects.jsx";
import Skills from "../components/Skills.jsx";

const Home = ({ aboutRef, skillsRef, projectsRef, contactRef }) => {
  return (
    <div className="grid gap-10">
      <section ref={aboutRef} className=" pt-10 scroll-mt-16">
        <Presentation />
      </section>
      <section ref={skillsRef} className="scroll-mt-16">
        <Skills />
      </section>
      <section ref={projectsRef} className="scroll-mt-16">
        <Projects />
      </section>
      <section ref={contactRef} className="scroll-mt-16">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
