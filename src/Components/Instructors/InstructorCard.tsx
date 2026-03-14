import { Link } from "react-router";

export type Instructor = {
  id: string;
  name: string;
  course: string;
  type: string;
  email: string;
  phone: string;
  avatar: string;
  avatarBg: string;
};

const InstructorCard = ({ instructor }: { instructor: Instructor }) => {
  const typeConfig = {
    "Full Time": {
      bg: "bg-blue-50",
      text: "text-blue-600",
      dot: "bg-blue-500",
    },
    "Part Time": {
      bg: "bg-pink-50",
      text: "text-pink-500",
      dot: "bg-pink-400",
    },
    Contract: {
      bg: "bg-purple-50",
      text: "text-purple-600",
      dot: "bg-purple-500",
    },
  };

  const Badge = ({ type }: { type: string }) => {
    const config = typeConfig[type] || typeConfig["Full Time"];
    return (
      <span
        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold ${config.bg} ${config.text}`}
      >
        <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
        {type}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 relative group h-fit">
      <Link
        to={`/Instructors/${instructor.id}`}
        className="absolute top-4 right-4 text-gray-300 hover:text-gray-500 transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="5" r="2" />
          <circle cx="12" cy="12" r="2" />
          ``
          <circle cx="12" cy="19" r="2" />
        </svg>
      </Link>

      <div className="flex md:flex-col items-center mb-4 space-x-4 md:space-x-0 md:space-y-3">
        <div
          className="w-20 h-20 rounded-full overflow-hidden mb-3 ring-4 ring-white shadow-md"
          // style={{ backgroundColor: instructor.avatarBg }}
        >
          <img
            src={instructor.avatar}
            alt={instructor.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:text-center">
          <h3 className="font-bold text-gray-800 text-sm leading-tight mb-0.5">
            {instructor.name}
          </h3>
          <p className="text-xs text-gray-400 mb-2 leading-tight">
            {instructor.course}
          </p>
          <div className="flex items-center gap-2 flex-wrap md:justify-center">
            <span className="text-xs text-gray-400 font-medium bg-blue-100 px-3 py-0.5 rounded-full">
              {instructor.id}
            </span>
            <Badge type={instructor.type} />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-3 space-y-1.5">
        <div className="flex items-center justify-between gap-2 text-xs text-gray-500">
          <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <span className="truncate">{instructor.email}</span>
        </div>
        <div className="flex items-center justify-between gap-2 text-xs text-gray-500">
          <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <span>{instructor.phone}</span>
        </div>
      </div>
    </div>
  );
};
export default InstructorCard;
