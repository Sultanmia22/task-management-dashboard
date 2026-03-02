import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="w-[150px] sm:w-[200px] md::w-full md:max-w-md">
      <div className="flex items-center justify-between bg-white rounded-xl px-2 py-1 sm:px-2 sm:py-1 md:px-4 md:py-2">
        
        <div className="flex items-center gap-3 w-full">
          <FiSearch className="text-gray-500 text-lg" />

          <input
            type="text"
            placeholder="Search task"
            className="bg-transparent outline-none text-gray-600 placeholder-gray-400 w-full text-sm placeholder:text-[12px] placeholder:sm:text-[14px] placeholder:md:text-[18px] "
          />
        </div>

        {/* Shortcut Badge */}
        <div className="flex items-center gap-1  px-2 py-1 bg-gray-200 rounded-md text-xs text-gray-600 font-medium">
          <span className=""> ⌘ </span > <span className="text-[8px] sm:text-[16px]">F</span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;