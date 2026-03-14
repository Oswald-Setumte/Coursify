import React from "react";
import { MoreHorizontal } from "lucide-react";

const LearningAct = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const hours = ["3pm", "2pm", "1pm", "12am", "11am", "10am", "9am"];

  const legendItems = [
    { label: "1-50", color: "bg-pink-50" },
    { label: "51-100", color: "bg-pink-100" },
    { label: "101-150", color: "bg-pink-300" },
    { label: "151-200", color: "bg-amber-400" },
  ];

  const activityData = [
    [0, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 2, 2, 1],
    [1, 2, 2, 2, 3, 3, 2],
    [2, 3, 3, 3, 3, 2, 1],
    [1, 2, 3, 3, 2, 2, 0],
    [0, 1, 2, 2, 1, 0, 0],
    [0, 1, 1, 1, 0, 0, 0],
  ];

  const getColorClass = (intensity: any) => {
    switch (intensity) {
      case 3:
        return "bg-amber-400";
      case 2:
        return "bg-pink-300";
      case 1:
        return "bg-pink-100";
      default:
        return "bg-gray-50/50";
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8  w-full max-w-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Learning Activity</h2>
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <MoreHorizontal size={24} />
        </button>
      </div>

      <div className="flex flex-wrap gap-4 mb-8">
        {legendItems.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-sm ${item.color}`} />
            <span className="text-sm font-medium text-gray-400">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-[auto_1fr] gap-x-4">
        <div className="flex flex-col justify-between py-1">
          {hours.map((hour) => (
            <span
              key={hour}
              className="text-sm font-medium text-gray-400 h-8 flex items-center justify-end"
            >
              {hour}
            </span>
          ))}
          <div className="h-6" />
        </div>

        <div>
          <div className="grid grid-cols-7 gap-2">
            {activityData.map((row, rowIndex) => (
              <React.Fragment key={rowIndex}>
                {row.map((intensity, colIndex) => (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className={`h-8 w-full rounded-lg transition-all hover:scale-105  ${getColorClass(intensity)}`}
                  />
                ))}
              </React.Fragment>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2 mt-3">
            {days.map((day) => (
              <span
                key={day}
                className="text-sm font-medium text-gray-400 text-center"
              >
                {day}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningAct;
