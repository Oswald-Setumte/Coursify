import { Search, Plus } from "lucide-react";

export default function SearchList() {
  return (
    <div className=" rounded-lg full h-10 flex item-center gap-2 ">
      <div className="flex w-full">
        <input
          type="text"
          placeholder="Search name, chat, etc"
          className="w-full h-full px-2.5 bg-gray-300/30 rounded-l-xl focus:outline-none text-sm"
        />
        <Search
          className="h-full w-10 p-2 rounded-r-xl bg-gray-300/30 text-gray-600 cursor-pointer "
          size={30}
        />
      </div>
      <div>
        <Plus size={33} className=" h-full w-10 bg-blue-200 rounded-lg p-2.5 cursor-pointer"/>
      </div>
    </div>
  );
}
