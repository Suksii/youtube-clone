import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Button from "./Button";
import { useState } from "react";
import { SearchProps } from "../types/types";
import { useAppDispatch } from "../redux/hooks";
import { useNavigate } from "react-router-dom";
import { getSearchedVideos } from "../redux/store/reducers/getHomePageVideos";

const Search: React.FC<SearchProps> = ({ isFullWidth, setIsFullWidth }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClear = () => {
    setSearchTerm("");
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      dispatch(getSearchedVideos(searchTerm));

      navigate(`/results?search_query=${searchTerm}`);
    }
  };

  return (
    <form className="flex flex-grow justify-center items-center gap-4">
      {isFullWidth && (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="flex-shrink-0 relative group"
          customTitle="Back"
          onClick={() => setIsFullWidth(false)}
        >
          <ArrowBackOutlinedIcon />
        </Button>
      )}
      <div className="flex flex-grow max-w-[600px]">
        <div className="relative flex flex-grow ">
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-secondary-border h-10 pl-4 pr-8 rounded-l-full focus:border focus:border-blue-600 focus:shadow-[inset_0_4px_4px_-4px_rgba(0,0,0,0.5)] outline-none"
            placeholder="Search"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSearch();
              }
            }}
          />
          {searchTerm && (
            <Button
              type="button"
              className="absolute right-0 mx-[1px] top-1/2 -translate-y-1/2 text-secondary-text hover:bg-opacity-50 text-[10px]"
              size="icon"
              variant="ghost"
              onClick={handleClear}
            >
              <CloseOutlinedIcon />
            </Button>
          )}
        </div>
        <Button
          className="relative group py-1 px-4 rounded-r-full border border-l-0 border-secondary-border"
          customTitle="Search"
          type="button"
          onClick={handleSearch}
        >
          <SearchIcon />
        </Button>
      </div>
      <Button
        size="icon"
        type="button"
        className="relative group"
        customTitle="Search with your voice"
        titlePosition="right-0 lg:right-1/2 lg:translate-x-1/2 top-full"
      >
        <MicIcon />
      </Button>
    </form>
  );
};

export default Search;
