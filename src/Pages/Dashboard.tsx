import React from "react";
import Statusbar from "../Components/Dashboard/Statusbar";
import Revenue from "../Components/Dashboard/Revenue";
import Enrollment from "../Components/Dashboard/Enrollment";

export default function Dashboard() {
  return (
    <div className="flex gap-3">
      {/* main */}
      <div className="border grid gap-3">
        {/* Status bars */}
        <div className="mt-3">
          <Statusbar />
        </div>
        {/* Second Friend */}
        <div className="grid grid-cols-2 gap-3">
          {/* Revenue */}
          <div>
            <Revenue/>
          </div>
          {/* Enrollment Trends */}
          <div>
            <Enrollment/>
          </div>
        </div>
      </div>
      {/* Calendar Section */}
      <div className="border flex-1"> k</div>
    </div>
  );
}
