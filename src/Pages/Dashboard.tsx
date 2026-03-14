import Statusbar from "../Components/Dashboard/Statusbar";
import Revenue from "../Components/Dashboard/Revenue";
import Enrollment from "../Components/Dashboard/Enrollment";
import LearningAct from "../Components/Dashboard/LearningAc";
import NewCourses from "../Components/Dashboard/NewCourses";
import StudentsDemographic from "../Components/Dashboard/StudentDemo";
import TopCourses from "../Components/Dashboard/TopCourse";
import Calendar from "../Components/Dashboard/Calendar";
import Schedule from "../Components/Dashboard/Schedule";
import RecentAct from "../Components/Dashboard/RecentAct";

export default function Dashboard() {
  return (
    <div className="flex gap-3">
      <div className=" space-y-4 ">
        {/* Status bars */}
        <div className="mt-3">
          <Statusbar />
        </div>

        {/* Second Frame */}
        <div className="grid grid-cols-2 gap-3">
          <Revenue />
          <Enrollment />
        </div>

        {/* Third Frame */}
        <div className="flex gap-3">
          <LearningAct />
          <NewCourses />
        </div>

        {/* Forth Frame */}
        <div className="grid grid-cols-[auto_auto] gap-3">
          <StudentsDemographic />
          <TopCourses />
        </div>
      </div>

      {/* Calendar Section */}
      <div className=" flex-1 bg-white pt-4 ">
        <Calendar />
        <Schedule />
        <RecentAct />
      </div>
    </div>
  );
}
