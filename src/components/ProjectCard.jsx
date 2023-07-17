const ProjectCard = ({ items, title, icons }) => {
  return (
    <div className="grid justify-items-center rounded-lg shadow-lg bg-base-200">
      <div className="p-4 flex justify-center">
        <div className="carousel w-full">{items}</div>
      </div>
      <h1 className="mt-5">{title}</h1>
      <div className="grid grid-cols-3 sm:flex sm:justify-center justify-items-center gap-5 text-center p-5">
        {icons}
      </div>
    </div>
  );
};

export default ProjectCard;
