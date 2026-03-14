import {
  CheckCheck,
  Ellipsis,
  GraduationCap,
  Menu,
  PlayCircle,
  SquareCheck,
} from "lucide-react";
import React from "react";

export default function Statusbar() {
  const stat = [
    {
      id: 1,
      title: "Total Student",
      icon: <GraduationCap />,
      bg: "bg-pink-400/35",
      value: 1278,
    },
    {
      id: 2,
      title: "Total Courses",
      icon: <PlayCircle />,
      bg: "bg-blue-400/35",
      value: 138,
    },
    {
      id: 3,
      title: "Total Enrollments",
      icon: <SquareCheck />,
      bg: "bg-orange-300/50",
      value: 138,
    },
  ];
  return (
    <div>
      <div className="flex gap-5">
        {stat.map((each) => {
          return (
            <div
              key={each.id}
              className={`flex items-center gap-3 p-3 ${each.bg} relative w-[20vw] rounded-2xl`}
            >
              <div className="w-15 h-15 flex justify-center items-center rounded-xl bg-white">
                {each.icon}
              </div>
              <div className="grid gap-1">
                <p className="text-xl">{each.title}</p>
                <p className="text-2xl">{each.value}</p>
              </div>
              <div className="bg-white p-2 absolute top-3 right-3 rounded-[10px]">
                <Ellipsis className="w-5 h-5" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
