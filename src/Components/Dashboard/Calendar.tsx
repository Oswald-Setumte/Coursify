import React, { useState, useMemo } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const App: React.FC = () => {
  const today = new Date();
  const [viewDate, setViewDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1),
  );
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const calendarDays = useMemo(() => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    const days: {
      day: number;
      type: "prev" | "current" | "next";
      fullDate: Date;
    }[] = [];

    // fill previous month's trailing days
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      const d = daysInPrevMonth - i;
      days.push({
        day: d,
        type: "prev",
        fullDate: new Date(year, month - 1, d),
      });
    }

    // fill current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        type: "current",
        fullDate: new Date(year, month, i),
      });
    }

    // fill next month's leading days (to complete the 6-week grid if necessary)
    const remainingSlots = 42 - days.length;
    for (let i = 1; i <= remainingSlots; i++) {
      days.push({
        day: i,
        type: "next",
        fullDate: new Date(year, month + 1, i),
      });
    }

    return days;
  }, [viewDate]);

  const changeMonth = (offset: number) => {
    setViewDate(
      new Date(viewDate.getFullYear(), viewDate.getMonth() + offset, 1),
    );
    setSelectedDate(null);
  };

  const isToday = (date: Date) => {
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  return (
    <div className="bg-white flex items-center justify-center font-sans">
      <div className="bg-white px-8  w-full max-w-md select-none">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-800 tracking-tight">
            {monthNames[viewDate.getMonth()]} {viewDate.getFullYear()}
          </h2>
          <div className="flex space-x-4 text-gray-400">
            <button
              onClick={() => changeMonth(-1)}
              className="hover:text-gray-600 transition-colors p-1"
              aria-label="Previous Month"
            >
              <ChevronUp size={24} strokeWidth={2.5} />
            </button>
            <button
              onClick={() => changeMonth(1)}
              className="hover:text-gray-600 transition-colors p-1"
              aria-label="Next Month"
            >
              <ChevronDown size={24} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7">
          {daysOfWeek.map((day) => (
            <div
              key={day}
              className="text-center text-sm font-medium text-gray-400 "
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-y-2">
          {calendarDays.map((dateObj, index) => {
            const isCurrent = dateObj.type === "current";
            const todayActive = isToday(dateObj.fullDate);

            const isSelected = selectedDate === index;

            return (
              <div
                key={index}
                className={`relative flex items-center justify-center aspect-square cursor-pointer group`}
                onClick={() => setSelectedDate(index)}
              >
                {todayActive && (
                  <div className="absolute inset-0 m-1 bg-[#FFD56B] rounded-full transition-transform group-hover:scale-105" />
                )}

                {isSelected && !todayActive && (
                  <div className="absolute inset-0 m-1 bg-[#FFF0F9] rounded-full transition-transform" />
                )}

                <span
                  className={`
                  relative text-lg z-10
                  ${isCurrent ? "text-gray-700" : "text-gray-300"}
                  ${todayActive ? "font-bold text-gray-800" : "font-normal"}
                `}
                >
                  {dateObj.day}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
