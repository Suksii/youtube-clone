import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

const Categories = () => {
  const categoryData = [
    "All",
    "Typescript",
    "Javascript",
    "Programming",
    "React",
    "Next.js",
    "Object Oriented Programming",
    "Web development",
    "Coding",
  ];

  const [translate, setTranslate] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(categoryData[0]);
  const [isLeftArrowVisible, setIsLeftArrowVisible] = useState(false);
  const [isRightArrowVisible, setIsRightArrowVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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
  }, [categoryData, translate]);

  return (
    <div className="relative overflow-x-hidden" ref={containerRef}>
      <div
        className="flex whitespace-nowrap gap-2 w-fit transition-transform"
        style={{ transform: `translateX(-${translate}px)` }}
      >
        {categoryData.map((category) => {
          return (
            <Button
              className="px-3 py-1 rounded-lg whitespace-nowrap"
              variant={selectedCategory === category ? "dark" : "default"}
              key={category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          );
        })}
      </div>
      {isLeftArrowVisible && (
        <div className="w-24 h-full absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent">
          <Button
            className="aspect-square h-full w-auto p-1.5"
            variant="ghost"
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
            className="aspect-square h-full w-auto p-1.5"
            variant="ghost"
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
