import { TitleProps } from "../types/types";

const Title = ({
  title,
  titlePosition = "left-1/2 -translate-x-1/2 top-full",
}: TitleProps) => {
  return title ? (
    <span
      className={`absolute mt-4 z-50 bg-secondary-text text-white text-nowrap text-sm p-2 rounded opacity-0 transition-opacity duration-200 group-hover:opacity-90 pointer-events-none ${titlePosition}`}
    >
      {title}
    </span>
  ) : null;
};

export default Title;
