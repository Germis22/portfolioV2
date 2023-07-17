import SkillCard from "./SkillCard";
import reactLogo from "../assets/react.svg";
import htmlLogo from "../assets/html.png";
import tailwindLogo from "../assets/tailwind.svg";
import firebaseLogo from "../assets/firebase.svg";
import jsLogo from "../assets/javascript.svg";
import cssLogo from "../assets/css.png";
import gitLogo from "../assets/git.png";
import bsLogo from "../assets/bootstrap.png";
import flutterLogo from "../assets/flutter.png";
import swiftLogo from "../assets/Swift_logo.png";

const Skills = () => {
  return (
    <>
      <div>
        <h3 className="py-1 text-3xl ">Skills</h3>
        <p className="py-2 leading-8">
          {`Since the beginning of my journey as a developer, I've used different`}{" "}
          <span className="text-teal-500">technologies</span> and{" "}
          <span className="text-teal-500">tools</span> to create several
          projects.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-10">
        <SkillCard logo={jsLogo} alt={"JavaScript"} title={"JavaScript"} />
        <SkillCard
          logo={reactLogo}
          alt={"React"}
          title={"React / React Native"}
        />
        <SkillCard logo={flutterLogo} alt={"flutter"} title={"Flutter"} />
        <SkillCard logo={swiftLogo} alt={"swift"} title={"Swift"} />
        <SkillCard logo={htmlLogo} alt={"HTML"} title={"HTML"} />
        <SkillCard logo={cssLogo} alt={"CSS"} title={"CSS"} />
        <SkillCard logo={firebaseLogo} alt={"Firebase"} title={"Firebase"} />
        <SkillCard logo={gitLogo} alt={"GitHub"} title={"Git"} />
        <SkillCard logo={tailwindLogo} alt={"Tailwind"} title={"Tailwind"} />
        <SkillCard logo={bsLogo} alt={"Bootstrap"} title={"Bootstrap"} />
      </div>
    </>
  );
};

export default Skills;
