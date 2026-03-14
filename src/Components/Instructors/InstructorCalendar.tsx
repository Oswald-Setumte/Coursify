import { useState } from "react";
import { Icons } from "./InstructorDetailCard";

function CalendarSection() {
  const [sel, setSel] = useState(15);
  const SLOT = 56;

  const weekDays = [
    { d: 12, label: "Sun" },
    { d: 13, label: "Mon" },
    { d: 14, label: "Tue" },
    { d: 15, label: "Wed", active: true },
    { d: 16, label: "Thu" },
    { d: 17, label: "Fri", dot: true },
    { d: 18, label: "Sat" },
  ];

  const timeSlots = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
  ];

  const calEvents = [
    {
      slot: 0,
      span: 1,
      title: "Live Q&A Session",
      time: "8:00 AM – 9:00 AM",
      bg: "bg-pink-400",
      text: "text-white",
    },
    {
      slot: 2,
      span: 1.5,
      title: "Course Content Update",
      time: "10:00 AM – 11:30 AM",
      bg: "bg-yellow-300",
      text: "text-gray-800",
    },
    {
      slot: 4,
      span: 1,
      title: "Student Consultation",
      time: "12:00 AM – 1:00 PM",
      bg: "bg-blue-200",
      text: "text-blue-900",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <button className="flex items-center gap-1.5 font-black text-gray-800 text-[15px] hover:text-pink-500 transition-colors">
          March 2028 <Icons.ChevDown />
        </button>
        <div className="flex gap-1">
          <button className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 transition-colors"><Icons.ChevLeft /></button>
          <button className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 transition-colors"><Icons.ChevRight /></button>
        </div>
      </div>
      {/* Week strip */}
      <div className="grid grid-cols-7 gap-1 px-3 pb-3">
        {weekDays.map(({ d, label, active, dot }) => (
          <button key={d} onClick={() => setSel(d)}
            className={`flex flex-col items-center gap-0.5 py-2 rounded-xl transition-all ${sel === d ? "bg-yellow-400 shadow-md shadow-yellow-200/60" : "hover:bg-gray-50"}`}>
            <span className={`text-[10px] font-bold ${sel === d ? "text-yellow-100" : "text-gray-400"}`}>{label}</span>
            <span className={`text-[13px] font-black ${sel === d ? "text-white" : "text-gray-700"}`}>{d}</span>
            {dot && sel !== d && <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />}
            {!dot && sel !== d && <span className="w-1.5 h-1.5" />}
          </button>
        ))}
      </div>
      <div className="mx-4 h-px bg-gray-100" />
      {/* Schedule */}
      <div className="px-3 pb-4 overflow-y-auto" style={{ maxHeight: 260 }}>
        <div className="relative pt-1">
          {timeSlots.map((slot, i) => (
            <div key={slot} className="flex gap-3" style={{ height: SLOT }}>
              <span className="text-[10px] text-gray-400 w-14 flex-shrink-0 pt-2 font-semibold">{slot}</span>
              <div className="flex-1 border-t border-dashed border-gray-100 relative">
                {calEvents.filter(e => e.slot === i).map((ev, ei) => (
                  <div key={ei} className={`absolute inset-x-0 top-1 rounded-xl px-3 py-2 ${ev.bg} ${ev.text} z-10`}
                    style={{ height: ev.span * SLOT - 6 }}>
                    <p className="font-bold text-[13px] leading-tight">{ev.title}</p>
                    <p className="text-[11px] opacity-80 mt-0.5">{ev.time}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CalendarSection;