import {
  EnrolledCourses,
  LearningActivity,
  Performance,
  ProfileCard,
} from "../Components/Students/UtilComponents";

const StudentDetail = () => {
  return (
    <div className="flex h-screen font-sans overflow-hidden">
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto pb-20 md:pb-6">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-5">
            {/* Mobile layout: single column */}
            <div className="block lg:hidden space-y-4">
              <ProfileCard />
              <LearningActivity />
              <Performance />
              <EnrolledCourses />
            </div>

            {/* Tablet: 2-col profile + right panel */}
            <div className="hidden lg:grid lg:grid-cols-[320px_1fr] gap-5">
              {/* Left column */}
              <div className="space-y-4">
                <ProfileCard />
              </div>

              {/* Right column */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                  <LearningActivity />
                  <Performance />
                </div>
                <EnrolledCourses />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentDetail;
