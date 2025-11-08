import { Search } from "lucide-react";
import React from "react";

export default function Searchbar() {
  return (
    <div>
      <div className="flex bg-white items-center relative w-70 h-12 rounded-[10px] pl-4">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search everything"
          className="flex w-full h-full outline-none"
        />
        <Search className="absolute right-0 mr-4 text-black/70" size={20} />
      </div>
    </div>
  );
}
