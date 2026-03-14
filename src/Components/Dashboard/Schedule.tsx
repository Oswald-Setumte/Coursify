import { MoreHorizontal } from "lucide-react";
import React from "react";

interface ScheduleEvent {
  id: string;
  day: number;
  weekday: string;
  type: "Workshop" | "Event" | "Meeting";
  title: string;
  time: string;
  color: string;
  bgColor: string;
}

export default function Schedule() {
  const scheduleEvents: ScheduleEvent[] = [
    {
      id: "1",
      day: 12,
      weekday: "Sun",
      type: "Workshop",
      title: "UI/UX Design Principles",
      time: "01:30 PM – 03:30 PM (UTC)",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      id: "2",
      day: 21,
      weekday: "Tue",
      type: "Event",
      title: "Industry Networking Night",
      time: "06:00 PM – 09:00 PM (UTC)",
      color: "text-pink-500",
      bgColor: "bg-pink-50",
    },
    {
      id: "3",
      day: 31,
      weekday: "Tue",
      type: "Meeting",
      title: "Client Consultation",
      time: "04:00 PM – 05:30 PM (UTC)",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
  ];
  return (
    <div className="flex flex-col px-8">
      <div className="flex items-center justify-between px-2">
        <h2 className="text-xl font-bold text-gray-800">Schedule</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreHorizontal size={24} />
        </button>
      </div>

      <div className="">
        {scheduleEvents.map((event) => (
          <div
            key={event.id}
            className="bg-blue-50/30 rounded-2rem p-5 flex items-center gap-6 transition-all hover:bg-blue-50/50"
          >
            <div className="bg-white rounded-2xl w-20 h-20 flex flex-col items-center justify-center shadow-sm shrink-0">
              <span className="text-xl font-bold text-gray-800">
                {event.day}
              </span>
              <span className="text-xs text-gray-400 uppercase font-medium">
                {event.weekday}
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span
                className={`text-xs font-semibold px-2 py-0.5 rounded-md w-fit ${event.bgColor} ${event.color}`}
              >
                {event.type}
              </span>
              <h3 className="text-lg font-bold text-gray-800 tracking-tight">
                {event.title}
              </h3>
              <p className="text-sm text-gray-400 font-medium">{event.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
