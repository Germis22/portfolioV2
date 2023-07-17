import { Routes, Route, Outlet } from "react-router-dom";
import { useRef } from "react";
import Home from "./pages/Home.jsx";
import Nav from "./pages/Nav.jsx";
import NotFound from "./pages/NotFound.jsx";

const Layout = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const skillsRef = useRef(null);

  return (
    <>
      <Nav
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      >
        <Outlet />
      </Nav>
    </>
  );
};

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
