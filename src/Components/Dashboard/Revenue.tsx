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
    { month: "Jan", income: 6500, expense: 4000 },
    { month: "Feb", income: 7000, expense: 4300 },
    { month: "Mar", income: 6400, expense: 3800 },
    { month: "Apr", income: 10548, expense: 5100 },
    { month: "May", income: 8000, expense: 4700 },
    { month: "Jun", income: 9000, expense: 5200 },
    { month: "Jul", income: 7200, expense: 4900 },
    { month: "Aug", income: 9000, expense: 2324 },
    { month: "Sep", income: 8200, expense: 134 },
    { month: "Oct", income: 7600, expense: 1132 },
    { month: "Nov", income: 7400, expense: 1332 },
    { month: "Dec", income: 7300, expense: 2354 },
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
                dataKey={"month"}
                tick={{
                  fontSize: 10,
                  fontFamily: "Inter",
                }}
                axisLine={false}
              />
              <YAxis
                dataKey={"income"}
                tick={{
                  fontSize: 10,
                  fontFamily: "Inter",
                }}
                axisLine={false}
              />

              <Tooltip />

              <Line dataKey={"income"} stroke="pink" />
              <Line dataKey={"expense"} stroke="black" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
