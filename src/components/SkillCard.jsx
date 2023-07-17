const SkillCard = ({ logo, title, alt }) => {
  return (
    <div className="p-10 text-center shadow-lg rounded-xl bg-base-200">
      <div className="flex justify-center">
        <img src={logo} alt={alt} className="w-24 h-24" />
      </div>
      <h3 className="pt-8 pb-2 text-lg font-medium ">{title}</h3>
    </div>
  );
};

export default SkillCard;
