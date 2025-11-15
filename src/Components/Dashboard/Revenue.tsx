import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function Revenue() {
  const [data, setData] = useState([
    { Month: "Jan", Income: 6500, Expense: 4000 },
    { Month: "Feb", Income: 7000, Expense: 4300 },
    { Month: "Mar", Income: 6400, Expense: 3800 },
    { Month: "Apr", Income: 10548,Expense: 5100 },
    { Month: "May", Income: 8000, Expense: 4700 },
    { Month: "Jun", Income: 9000, Expense: 5200 },
    { Month: "Jul", Income: 7200, Expense: 4900 },
    { Month: "Aug", Income: 9000, Expense: 2324 },
    { Month: "Sep", Income: 8200, Expense: 134 },
    { Month: "Oct", Income: 7600, Expense: 1132 },
    { Month: "Nov", Income: 7400, Expense: 1332 },
    { Month: "Dec", Income: 7300, Expense: 2354 },
  ]);
  return (
    <div className="bg-white h-[300px] rounded-2xl p-4">
      <div className="flex justify-between">
        <h1>Revenue</h1>
        <p className="flex items-center text-gray-400 text-[11px] gap-1">
          Last 7 Months{" "}
          <span>
            <ChevronDown className="w-[11px]" />
          </span>
        </p>
      </div>
      <div>
        {/* Legend */}
        <div className="flex gap-4">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-pink-300/40"></div>
            <div>Income</div>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-black"></div>
            <div>Expense</div>
          </div>
        </div>
        <div className="h-[225px] mt-3 w-full">
          <ResponsiveContainer>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray={2} vertical={false} />
              <XAxis
                dataKey={"Month"}
                tick={{
                  fontSize: 10,
                  fontFamily: "Inter",
                }}
                axisLine={false}
              />
              <YAxis
                dataKey={"Income"}
                tick={{
                  fontSize: 10,
                  fontFamily: "Inter",
                }}
                axisLine={false}
              />

              <Tooltip />

              <Line type={"natural"} dataKey={"Income"} stroke="pink" />
              <Line type={"natural"} dataKey={"Expense"} stroke="black" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
