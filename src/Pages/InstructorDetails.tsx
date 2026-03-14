import { useState } from "react";
import PerformanceChart from "../Components/Instructors/PerformanceChart";
import ActivityChart from "../Components/Instructors/ActivityChart";
import CalendarSection from "../Components/Instructors/InstructorCalendar";
import CoursesSection from "../Components/Instructors/CoursesSection";
import FeedbackSection from "../Components/Instructors/FeedbackSection";
import InstructorDetailCard from "../Components/Instructors/InstructorDetailCard";

export default function InstructorDetails() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section
      className="min-h-screen flex justify-center"
      style={{ fontFamily: "'Plus Jakarta Sans',system-ui,sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900&display=swap');
        ::-webkit-scrollbar{width:4px;height:4px}
        ::-webkit-scrollbar-track{background:transparent}
        ::-webkit-scrollbar-thumb{background:#e5e7eb;border-radius:4px}
      `}</style>

      {/* <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} /> */}

      <div className="flex-1 flex flex-col min-w-0 ml-2 sm:ml-0">
        {/* <Header onMenu={() => setMenuOpen(true)} /> */}

        <main className="flex-1 p-4 md:p-5 overflow-auto">
          {/* ── Mobile ── */}
          <div className="md:hidden space-y-4 max-w-sm mx-auto">
            <InstructorDetailCard />
            <PerformanceChart />
            <ActivityChart />
            <CalendarSection />
            <CoursesSection />
            <FeedbackSection />
          </div>

          {/* ── Tablet ── */}
          <div className="hidden md:grid lg:hidden gap-4 max-w-3xl mx-auto">
            <div className="grid grid-cols-2 gap-4 items-start">
              <InstructorDetailCard />
              <CalendarSection />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <PerformanceChart />
              <ActivityChart />
            </div>
            <CoursesSection />
            <FeedbackSection />
          </div>

          {/* ── Desktop ── */}
          <div
            className="hidden lg:grid gap-5"
            style={{ gridTemplateColumns: "360px 1fr" }}
          >
            <div className="space-y-5">
              <InstructorDetailCard />
              <CalendarSection />
            </div>
            <div className="space-y-5 min-w-0">
              <div className="grid grid-cols-2 gap-5">
                <PerformanceChart />
                <ActivityChart />
              </div>
              <CoursesSection />
              <FeedbackSection />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
