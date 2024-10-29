import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Button from "./Button";

type SearchProps = {
  isFullWidth: boolean;
  setIsFullWidth: (value: boolean) => void;
};

const Search: React.FC<SearchProps> = ({ isFullWidth, setIsFullWidth }) => {
  return (
    <form
      className={`${
        isFullWidth ? "flex" : "hidden md:flex"
      } flex-grow items-center gap-2`}
    >
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
        <input
          type="search"
          className="border border-secondary-border py-1 px-4 rounded-l-full focus:ring-1 ring-blue-600 outline-none"
          placeholder="Search"
        />
        <Button className="py-2 px-4 rounded-r-full border border-l-0 border-secondary-border">
          <SearchIcon />
        </Button>
      </div>

      <Button size="icon">
        <MicIcon />
      </Button>
    </form>
  );
};

export default Search;
