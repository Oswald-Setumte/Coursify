import LastDays from "./LastDays";

interface TopCourse {
  name: string;
  percentage: number;
  lessons: number;
  students: number;
  color: string;
}

const TopCourses = () => {
  const data: TopCourse[] = [
    {
      name: "Graphic Design Fundamentals",
      percentage: 35,
      lessons: 15,
      students: 1200,
      color: "#C7D9FF",
    },
    {
      name: "Digital Marketing Mastery",
      percentage: 30,
      lessons: 12,
      students: 1050,
      color: "#FFB2E6",
    },
    {
      name: "Python for Beginners",
      percentage: 25,
      lessons: 10,
      students: 900,
      color: "#FFD363",
    },
  ];

  const chartGradient = `conic-gradient(
    ${data[0].color} 0% 35%, 
    ${data[1].color} 35% 65%, 
    ${data[2].color} 65% 90%, 
    #f3f4f6 90% 100%
  )`;

  return (
    <div className="bg-white rounded-3xl p-4 grid place-content-center">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-gray-800">Top Courses</h2>
        <LastDays />
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8">
        <div
          className="relative w-50 h-50 rounded-full flex items-center justify-center overflow-hidden"
          style={{ background: chartGradient }}
        >
          <div className="w-[70%] h-[70%] bg-white rounded-full z-10" />
        </div>

        <div className="flex-1 space-y-5">
          {data.map((course, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div
                className="w-2.5 h-8 rounded-full mt-1"
                style={{ backgroundColor: course.color }}
              />

              <div>
                <h4 className="text-sm font-bold text-gray-700 leading-tight">
                  {course.name}
                </h4>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm font-black text-gray-800">
                    {course.percentage}%
                  </span>
                  <div className="w-1px h-3 bg-gray-200" />
                  <span className="text-[11px] font-bold text-gray-400">
                    {course.lessons} Lessons
                  </span>
                  <div className="w-1 h-1 rounded-full bg-gray-300" />
                  <span className="text-[11px] font-bold text-gray-400">
                    {course.students} Students
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCourses;
