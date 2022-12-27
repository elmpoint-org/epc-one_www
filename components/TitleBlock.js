const TitleBlock = ({ title, description }) => {
  return (
    <>
      <div className="flex flex-col items-stretch gap-2.5 p-2.5">
        <h1 className="text-center text-2xl">{title}</h1>
        <div className="p-2.5 text-justify text-base">{description}</div>
      </div>
    </>
  );
};

export default TitleBlock;
