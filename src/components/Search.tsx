import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Button, { buttonStyles } from "./Button";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

type SearchProps = {
  isFullWidth: boolean;
  setIsFullWidth: (value: boolean) => void;
};

const Search: React.FC<SearchProps> = ({ isFullWidth, setIsFullWidth }) => {
  const [value, setValue] = useState("");

  const handleClear = () => {
    setValue("");
  };

  return (
    <form className="flex flex-grow justify-center items-center gap-4">
      {isFullWidth && (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="flex-shrink-0"
          onClick={() => setIsFullWidth(false)}
        >
          <ArrowBackOutlinedIcon />
        </Button>
      )}
      <div className="flex flex-grow max-w-[600px]">
        <div className="relative flex flex-grow ">
          <input
            type="search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full border border-secondary-border py-2 px-4 rounded-l-full focus:border focus:border-blue-600 focus:shadow-[inset_0_4px_4px_-4px_rgba(0,0,0,0.5)] outline-none"
            placeholder="Search"
          />
          {value && (
            <Button
              type="button"
              className="absolute right-0 mx-[1px] top-1/2 -translate-y-1/2 text-secondary-text"
              size="icon"
              variant="ghost"
              onClick={handleClear}
            >
              <CloseOutlinedIcon
                sx={{
                  fontSize: 40,
                  padding: 0.5,
                }}
              />
            </Button>
          )}
        </div>
        <Button className="py-1 px-4 rounded-r-full border border-l-0 border-secondary-border">
          <SearchIcon />
        </Button>
      </div>
      <Button size="icon" type="button">
        <MicIcon />
      </Button>
    </form>
  );
};

export default Search;
