import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { useAppDispatch } from "../redux/hooks";
import { getVideosByCategory } from "../redux/store/reducers/getHomePageVideos";

const Categories = () => {
  const categories = [
    "All",
    "Typescript",
    "Javascript",
    "Programming",
    "React",
    "Vue",
    "Next.js",
    "Object Oriented Programming",
    "Web development",
    "Coding",
    "Chess",
  ];

  const [translate, setTranslate] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [isLeftArrowVisible, setIsLeftArrowVisible] = useState(false);
  const [isRightArrowVisible, setIsRightArrowVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();

  const handleCategories = (category: string) => {
    dispatch(getVideosByCategory(category));
    setSelectedCategory(category);
  };

  useEffect(() => {
    if (containerRef.current === null) return;
    const observer = new ResizeObserver((entries) => {
      const container = entries[0]?.target;
      if (container === null) return;

      setIsLeftArrowVisible(translate > 0);
      setIsRightArrowVisible(
        translate + container.clientWidth < container.scrollWidth
      );
    });

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [categories, translate]);

  return (
    <div className="relative overflow-hidden pb-2" ref={containerRef}>
      <div
        className="flex whitespace-nowrap gap-2 w-fit transition-transform"
        style={{ transform: `translateX(-${translate}px)` }}
      >
        {categories.map((category) => {
          return (
            <Button
              className="p-2 rounded-lg whitespace-nowrap text-sm font-semibold"
              title={category}
              variant={selectedCategory === category ? "dark" : "default"}
              key={category}
              onClick={() => handleCategories(category)}
            >
              {category}
            </Button>
          );
        })}
      </div>
      {isLeftArrowVisible && (
        <div className="w-24 h-full absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent">
          <Button
            className="aspect-square h-full w-auto p-1.5 relative group"
            variant="ghost"
            customTitle="Previous"
            titlePosition="left-1/2 -translate-x-1/2"
            size="icon"
            type="button"
            onClick={() =>
              setTranslate((translate) => {
                const newTranslate = translate - 200;
                if (newTranslate <= 0) return 0;
                return newTranslate;
              })
            }
          >
            <KeyboardArrowLeftOutlinedIcon />
          </Button>
        </div>
      )}
      {isRightArrowVisible && (
        <div className="w-24 h-full flex justify-end absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white from-50% to-transparent">
          <Button
            className="aspect-square h-full w-auto p-1.5 relative group"
            variant="ghost"
            customTitle="Next"
            titlePosition="left-1/2 -translate-x-1/2"
            size="icon"
            type="button"
            onClick={() => {
              setTranslate((translate) => {
                if (containerRef.current === null) return translate;
                const newTranslate = translate + 200;
                const containerWidth = containerRef.current.scrollWidth;
                const width = containerRef.current.clientWidth;
                if (newTranslate + width >= containerWidth)
                  return containerWidth - width;
                return newTranslate;
              });
            }}
          >
            <KeyboardArrowRightOutlinedIcon />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Categories;
