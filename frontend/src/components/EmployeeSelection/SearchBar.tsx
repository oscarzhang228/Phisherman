import React, { Dispatch, SetStateAction } from "react";

const SearchBar = (props: { onChange: Dispatch<SetStateAction<string>> }) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-grow">
          <label htmlFor="searchInput" className="sr-only">
            Search by name
          </label>
          <input
            id="searchInput"
            type="text"
            placeholder="Search by name..."
            className="w-full bg-[#151515] border-2 border-orange-500/10 rounded-xl px-6 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-all duration-300 hover:border-orange-500/30"
            onChange={(e) => props.onChange(e.target.value.toLowerCase())}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
