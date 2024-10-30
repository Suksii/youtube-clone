import { useState } from "react";
import Button from "./Button";

const Categories = () => {
  const categoryData = [
    "All",
    "Typescript",
    "Javascript",
    "Programming",
    "React",
    "Nest.js",
    "Object Oriented Programming",
    "Web development",
    "Coding",
  ];

  const [selectedCategory, setSelectedCategory] = useState(categoryData[0]);

  return (
    <div className="relative overflow-x-hidden px-10">
      <div className="flex items-center whitespace-nowrap gap-2 w-[max-content]">
        {categoryData.map((category) => {
          return (
            <Button
              className="px-3 py-1 rounded-lg"
              variant={selectedCategory === category ? "dark" : "default"}
              key={category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
