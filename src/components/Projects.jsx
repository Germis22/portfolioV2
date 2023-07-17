import {
  SiJavascript,
  SiReact,
  SiFirebase,
  SiArduino,
  SiStyledcomponents,
  SiTailwindcss,
  SiVite,
  SiDaisyui,
} from "react-icons/si";
import ProjectCard from "./ProjectCard";
import CarrouselItem from "./CarouselItem";
import {
  P1_1,
  P1_2,
  P1_3,
  P1_4,
  P1_5,
  P1_6,
  P1_7,
  P1_8,
  P2_1,
  P3_1,
  P3_2,
  P3_3,
  P3_4,
  P3_5,
  P3_6,
  P3_7,
  P3_8,
} from "../assets/images";

const Projects = () => {
  return (
    <div>
      <div>
        <h3 className="py-1 text-3xl ">Projects</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-10 py-10 font-semibold">
        <ProjectCard
          items={[
            <>
              <CarrouselItem
                key={1}
                id={"P1-1"}
                src={P1_1}
                alt={"img1"}
                prevSlide={"#P1-8"}
                nextSlide={"#P1-2"}
              />
              <CarrouselItem
                key={2}
                id={"P1-2"}
                src={P1_2}
                alt={"img2"}
                prevSlide={"#P1-1"}
                nextSlide={"#P1-3"}
              />
              <CarrouselItem
                key={3}
                id={"P1-3"}
                src={P1_3}
                alt={"img3"}
                prevSlide={"#P1-2"}
                nextSlide={"#P1-4"}
              />
              <CarrouselItem
                key={4}
                id={"P1-4"}
                src={P1_4}
                alt={"img4"}
                prevSlide={"#P1-3"}
                nextSlide={"#P1-5"}
              />
              <CarrouselItem
                key={5}
                id={"P1-5"}
                src={P1_5}
                alt={"img5"}
                prevSlide={"#P1-4"}
                nextSlide={"#P1-6"}
              />
              <CarrouselItem
                key={6}
                id={"P1-6"}
                src={P1_6}
                alt={"img6"}
                prevSlide={"#P1-5"}
                nextSlide={"#P1-7"}
              />
              <CarrouselItem
                key={7}
                id={"P1-7"}
                src={P1_7}
                alt={"img7"}
                prevSlide={"#P1-6"}
                nextSlide={"#P1-8"}
              />
              <CarrouselItem
                key={8}
                id={"P1-8"}
                src={P1_8}
                alt={"img8"}
                prevSlide={"#P1-7"}
                nextSlide={"#P1-1"}
              />
            </>,
          ]}
          title={"Medical Record Web"}
          icons={[
            <>
              <SiJavascript className="mx-3 text-3xl" />
              <SiReact className="mx-3 text-3xl" />
              <SiVite className="mx-3 text-3xl" />
              <SiFirebase className="mx-3 text-3xl" />
              <SiTailwindcss className="mx-3 text-3xl" />
            </>,
          ]}
        />
        <ProjectCard
          items={[
            <>
              <CarrouselItem key={"P2-1"} id={"P2-1"} src={P2_1} alt={"img1"} />
            </>,
          ]}
          title={"Public Transportation App"}
          icons={[
            <>
              <SiJavascript className="mx-3 text-3xl" />
              <SiReact className="mx-3 text-3xl" />
              <SiFirebase className="mx-3 text-3xl" />
              <SiArduino className="mx-3 text-3xl" />
              <SiStyledcomponents className="mx-3 text-4xl" />
            </>,
          ]}
        />
        <ProjectCard
          items={[
            <>
              <CarrouselItem
                key={"P3-1"}
                id={"P3-1"}
                src={P3_1}
                alt={"img1"}
                prevSlide={"#P3-8"}
                nextSlide={"#P3-2"}
              />
              <CarrouselItem
                key={"P3-2"}
                id={"P3-2"}
                src={P3_2}
                alt={"img2"}
                prevSlide={"#P3-1"}
                nextSlide={"#P3-3"}
              />
              <CarrouselItem
                key={"P3-3"}
                id={"P3-3"}
                src={P3_3}
                alt={"img3"}
                prevSlide={"#P3-2"}
                nextSlide={"#P3-4"}
              />
              <CarrouselItem
                key={"P3-4"}
                id={"P3-4"}
                src={P3_4}
                alt={"img4"}
                prevSlide={"#P3-3"}
                nextSlide={"#P3-5"}
              />
              <CarrouselItem
                key={"P3-5"}
                id={"P3-5"}
                src={P3_5}
                alt={"img5"}
                prevSlide={"#P3-4"}
                nextSlide={"#P3-6"}
              />
              <CarrouselItem
                key={"P3-6"}
                id={"P3-6"}
                src={P3_6}
                alt={"img6"}
                prevSlide={"#P3-5"}
                nextSlide={"#P3-7"}
              />
              <CarrouselItem
                key={"P3-7"}
                id={"P3-7"}
                src={P3_7}
                alt={"img7"}
                prevSlide={"#P3-6"}
                nextSlide={"#P3-8"}
              />
              <CarrouselItem
                key={"P3-8"}
                id={"P3-8"}
                src={P3_8}
                alt={"img8"}
                prevSlide={"#P3-7"}
                nextSlide={"#P3-1"}
              />
            </>,
          ]}
          title={"POS System Web App"}
          icons={[
            <>
              <SiJavascript className="mx-3 text-3xl" />
              <SiReact className="mx-3 text-3xl" />
              <SiFirebase className="mx-3 text-3xl" />
              <SiVite className="mx-3 text-3xl" />
              <SiTailwindcss className="mx-3 text-4xl" />
              <SiDaisyui className="mx-3 text-4xl" />
            </>,
          ]}
        />
      </div>
    </div>
  );
};

export default Projects;
