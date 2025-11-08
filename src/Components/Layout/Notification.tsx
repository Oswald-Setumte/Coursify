import { Bell } from "lucide-react";
import React from "react";

export default function Notification() {
  return (
    <div>
      <div
        className="h-12 flex items-center w-12 justify-center bg-white rounded-xl"
        onClick={() => {}}
      >
        <div className="relative">
          {/* note */}
          <div className="w-2 h-2 bg-pink-500 rounded-full absolute right-1 "></div>
          <Bell />
        </div>
      </div>
    </div>
  );
}
