import { ChevronDown, GraduationCap } from "lucide-react";

function CourseCell({ student, expanded, onToggle }) {
  const first = student.courseList[0];
  const extra = student.courseList.length - 1;
  return (
    <div>
      <p className="text-xs text-gray-400 mb-0.5">
        <GraduationCap size={11} className="inline mr-1" />
        {student.courses} Courses:
      </p>
      <p className="text-sm font-medium text-gray-800">{first.name}</p>
      <p className="text-xs text-gray-400">{first.category}</p>
      {expanded ? (
        <>
          {student.courseList.slice(1).map((c, i) => (
            <div key={i} className="mt-1.5">
              <p className="text-sm font-medium text-gray-800">{c.name}</p>
              <p className="text-xs text-gray-400">{c.category}</p>
            </div>
          ))}
          <button
            onClick={onToggle}
            className="text-xs text-pink-500 mt-1.5 hover:underline"
          >
            see less ∧
          </button>
        </>
      ) : extra > 0 ? (
        <button
          onClick={onToggle}
          className="mt-1 inline-flex items-center gap-1 text-xs border border-gray-200 rounded-full px-2 py-0.5 text-gray-500 hover:border-pink-300 hover:text-pink-500 transition-colors"
        >
          +{extra} more <ChevronDown size={11} />
        </button>
      ) : null}
    </div>
  );
}

export default CourseCell;