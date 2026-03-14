import { ChevronDown } from "lucide-react";

export default function TopButtons() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center">
        <div className="bg-white rounded-xl flex">
          <button className="text-sm bg-blue-200 px-5 py-3 rounded-xl hover:bg-blue-300 cursor-pointer">
            All
          </button>

          <button className="text-sm text-gray-700 px-4 py-3 rounded-xl hover:bg-gray-200 cursor-pointer">
            Active
          </button>

          <button className="text-sm text-gray-700 px-4 py-3 rounded-xl hover:bg-gray-200 cursor-pointer">
            Draft
          </button>

          <button className="text-sm text-gray-700 px-4 py-3 rounded-xl hover:bg-gray-200 cursor-pointer">
            Archived
          </button>
        </div>

        <div className="ml-auto">
          <button className="text-sm bg-white text-black px-4 py-3 rounded-xl hover:bg-gray-200 cursor-pointer">
            All Category
            <ChevronDown size={15} className="inline ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}