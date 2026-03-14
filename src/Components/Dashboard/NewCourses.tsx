import LastDays from "./LastDays";

interface Course {
  title: string;
  category: string;
  lessons: number;
  hours: number;
  price: number;
  students: number;
  img: string;
}
const CourseCard = ({
  title,
  category,
  lessons,
  hours,
  price,
  students,
  img,
}: Course) => {
  return (
    <div className="flex flex-col cursor-pointer w-55">
      <div
        className={`relative rounded-2xl overflow-hidden   flex items-center justify-center group`}
      >
        <img src={img} alt="" className="w-full" />
        <div className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold text-gray-600 shadow-sm">
          {category}
        </div>
      </div>

      <h3 className="font-bold text-gray-400 text-xl leading-tight mb-2 min-h-14 line-clamp-2">
        {title}
      </h3>

      <div className="flex items-center text-lg text-gray-400 mb-4 gap-2">
        <span>{lessons} Lessons</span>
        <span className="w-1 h-1 rounded-full bg-gray-300" />
        <span>{hours} Hours</span>
      </div>

      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center">
          <div className="flex -space-x-2 mr-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden"
              >
                <img
                  src={`https://i.pravatar.cc/100?img=${i + 10}`}
                  alt="user"
                />
              </div>
            ))}
          </div>
          <span className="text-sm font-semibold text-gray-400">
            +{students}
          </span>
        </div>
        <span className="hidden text-2xl font-bold text-pink-400">
          ${price}
        </span>
      </div>
    </div>
  );
};

const NewCourses = () => {
  const courses = [
    {
      title: "UI/UX Design for Beginners",
      category: "Design",
      lessons: 20,
      hours: 40,
      price: 99,
      students: 320,
      img: `https://i.pravatar.cc/100?img=15`,
    },
    {
      title: "Social Media Marketing Strategies",
      category: "Marketing",
      lessons: 18,
      hours: 30,
      price: 79,
      students: 280,
      img: `https://i.pravatar.cc/100?img=12`,
    },
    {
      title: "Business Analytics with Excel",
      category: "Business",
      lessons: 22,
      hours: 45,
      price: 95,
      students: 300,
      img: `https://i.pravatar.cc/100?img=10`,
    },
  ];

  return (
    <div className="bg-white rounded-3xl p-4">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-bold text-gray-800">New Courses</h2>
        <div className="flex items-center gap-1 text-sm font-medium text-gray-400 hover:text-gray-600 transition-colors">
          <LastDays />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((course, idx) => (
          <CourseCard key={idx} {...course} />
        ))}
      </div>
    </div>
  );
};

export default NewCourses;
