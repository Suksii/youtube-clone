type TitleProps = {
  title: string;
  titlePosition: "left" | "right" | "center";
};

const Title = ({ title, titlePosition }: TitleProps) => {
  const positionClasses = {
    left: "left-0 md:left-1/2 md:-translate-x-1/2",
    right: "right-0 lg:right-1/2 lg:translate-x-1/2",
    center: "left-1/2 -translate-x-1/2",
  };

  return title ? (
    <span
      className={`absolute top-full mt-4 z-50 bg-secondary-text text-white text-nowrap text-sm p-2 rounded opacity-0 transition-opacity duration-200 group-hover:opacity-90 pointer-events-none ${positionClasses[titlePosition]}`}
    >
      {title}
    </span>
  ) : null;
};

export default Title;
