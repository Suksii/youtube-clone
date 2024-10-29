import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  return (
    <div className="relative flex items-center">
      <input
        className="border border-gray-300 p-2 rounded-l-full focus:ring-1 ring-blue-600 focus:outline-none outline-none z-30"
        placeholder="Search"
      />
      <div title="Search" className="py-2 px-4 border border-gray-300 rounded-r-full cursor-pointer">
        <SearchIcon />
      </div>
    </div>
  );
};

export default Search;
