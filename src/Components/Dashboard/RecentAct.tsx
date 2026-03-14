import { Award, Check, ChevronDown, Plus, Star, User } from "lucide-react";
import React from "react";
import LastDays from "./LastDays";
interface Activity {
  id: string;
  type:
    | "course_added"
    | "enrollment"
    | "feedback"
    | "course_completed"
    | "profile_updated";
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
}
export default function RecentAct() {
  const activities: Activity[] = [
    {
      id: "a1",
      type: "course_added",
      date: "March 7, 2028, at 4:00 PM",
      title: "New Course Added",
      description: '"Advanced Graphic Design Techniques" was published.',
      icon: <Plus size={18} />,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      id: "a2",
      type: "enrollment",
      date: "March 7, 2028, at 2:30 PM",
      title: "Completed Enrollment",
      description:
        'Austin Chandler successfully enrolled in "Social Media Marketing Strategies".',
      icon: <Check size={18} />,
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
    },
    {
      id: "a3",
      type: "feedback",
      date: "March 7, 2028, at 12:15 PM",
      title: "User Feedback Submitted",
      description:
        'Benita Tray rated "JavaScript Essentials" 5 stars and left a review.',
      icon: <Star size={18} />,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      id: "a4",
      type: "course_completed",
      date: "March 6, 2028, at 6:45 PM",
      title: "Course Completed",
      description:
        'Clara Bautista completed "Business Analytics with Excel" and received a certificate.',
      icon: <Award size={18} />,
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
    {
      id: "a5",
      type: "profile_updated",
      date: "March 6, 2028, at 10:30 AM",
      title: "Profile Updated",
      description:
        "Daniella Jung updated her profile details, including email and password.",
      icon: <User size={18} />,
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
    },
  ];
  return (
    <div className="flex flex-col space-y-6 px-8 ">
      <div className="flex items-center justify-between px-2">
        <h2 className="text-xl font-bold text-gray-800">Recent Activities</h2>
        <LastDays />
      </div>

      <div className="">
        {activities.map((activity) => (
          <div key={activity.id} className="flex gap-4 items-center">
            {/* Circular Icon Wrapper */}
            <div
              className={`${activity.iconBg} ${activity.iconColor} w-12 h-12 rounded-full cursor-pointer flex items-center justify-center shrink-0`}
            >
              {activity.icon}
            </div>

            {/* Text Content */}
            <div className="flex flex-col">
              <span className="text-xs text-gray-400 font-medium mb-1">
                {activity.date}
              </span>
              <p className="text-[15px] leading-tight text-gray-500">
                <span className="font-bold text-gray-800">
                  {activity.title}
                </span>{" "}
                – {activity.description}
              </p>
              {activity.type === "feedback" && (
                <div className="flex mt-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
