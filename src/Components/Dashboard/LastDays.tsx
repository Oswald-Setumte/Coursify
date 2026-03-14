import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function LastDays() {
  const [drop, setDrop] = useState(false);

  const [DayToggle, setDayToggle] = useState(true);
  const [MonthToggle, setMonthToggle] = useState(false);
  const [Days90Toggle, setDays90Toggle] = useState(false);
  function HandleDropDownForLastDays(e: number) {
    if (e == 1) {
      setDayToggle(true);
      setMonthToggle(false);
      setDays90Toggle(false);
    } else if (e == 2) {
      setDayToggle(false);
      setMonthToggle(true);
      setDays90Toggle(false);
    } else if (e == 3) {
      setDayToggle(false);
      setMonthToggle(false);
      setDays90Toggle(true);
    }
  }
  const dropDowns = [
    {
      id: 1,
      text: "Last 7 Days",
    },
    {
      id: 2,
      text: "Last 7 Months",
    },
    {
      id: 3,
      text: "Last 90 Days",
    },
  ];

  return (
    <div
      className="relative w-[120px] text-gray-400 text-[11px] bg-white
       flex justify-center items-center"
      onClick={() => {
        setDrop(!drop);
      }}
    >
      <p className="flex items-center cursor-pointer   gap-1">
        {DayToggle
          ? "Last 7 Days"
          : MonthToggle
            ? "Last 7 Months"
            : Days90Toggle
              ? "Last 90 Days"
              : " "}
        <span>
          <ChevronDown className="w-[11px]" />
        </span>
      </p>
      <div
        className={`${drop ? "block" : "hidden"} absolute z-9999 bg-white top-6 border border-gray-300/30 rounded-b-[10px]  w-full `}
      >
        {dropDowns.map((each) => {
          return (
            <div
              key={each.id}
              className={` hover:bg-gray-300/30 h-6 pl-6 flex items-center cursor-pointer`}
              onClick={() => {
                HandleDropDownForLastDays(each.id);
              }}
            >
              <p>{each.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
