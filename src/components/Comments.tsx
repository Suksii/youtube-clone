import { useState } from "react";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";
import Button from "./Button";
import Comment from "./Comment";

const Comments = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isShown, setIsShown] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const handleCancel = () => {
    setValue("");
    setIsShown(false);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-8">
        <p className="text-xl font-bold">54 Comments</p>
        <div className="flex items-center gap-2">
          <SortOutlinedIcon />
          <p className="font-semibold text-sm">Sort by</p>
        </div>
      </div>
      <div className="flex gap-4 pt-2">
        <div className="flex items-center justify-center h-10 w-10 bg-blue-600 text-blue-50 rounded-full flex-shrink-0">
          D
        </div>
        <div className="flex flex-col flex-grow  gap-2">
          <input
            className="outline-none border-b border-black focus:border-b-2"
            value={value}
            onFocus={() => setIsShown(true)}
            onChange={(e) => setValue(e.target.value)}
          />
          {isShown && (
            <div className="flex justify-between">
              <Button size="icon" variant="ghost">
                <SentimentVerySatisfiedOutlinedIcon />
              </Button>
              <div className="flex gap-2">
                <Button
                  size="icon"
                  variant="ghost"
                  className="w-fit font-semibold px-3"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
                <Button
                  size="icon"
                  className={`w-fit font-semibold px-3 ${
                    value
                      ? "bg-blue-600 text-blue-50 hover:bg-blue-600"
                      : "hover:bg-neutral-200"
                  }`}
                  disabled={!value}
                >
                  Comment
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {[...Array(4)].map(() => (
          <Comment />
        ))}
      </div>
    </div>
  );
};

export default Comments;
