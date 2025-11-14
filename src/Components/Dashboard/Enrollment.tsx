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
  BarChart,
  Bar,
} from "recharts";

export default function Enrollment() {
  const [data, setData] = useState([
    { month: "Jan", students: 6500, fees: 4000 },
    { month: "Feb", students: 7000, fees: 4300 },
    { month: "Mar", students: 6400, fees: 3800 },
    { month: "Apr", students: 10548, fees: 5100 },
    { month: "May", students: 8000, fees: 4700 },
    { month: "Jun", students: 9000, fees: 5200 },
    { month: "Jul", students: 7200, fees: 4900 },
    { month: "Aug", students: 9000, fees: 2324 },
    { month: "Sep", students: 8200, fees: 1334 },
    { month: "Oct", students: 7600, fees: 1132 },
    { month: "Nov", students: 7400, fees: 1332 },
    { month: "Dec", students: 7300, fees: 3354 },
  ]);

  return (
    <div className="bg-white h-[300px] rounded-2xl p-4">
      <div className="flex justify-between">
        <h1>Enrollment Trends</h1>
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
            <div>Students</div>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-black"></div>
            <div>Fees</div>
          </div>
        </div>
        <div className="h-[225px] mt-3 w-full">
          <ResponsiveContainer>
            <BarChart data={data} barGap={8}>
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
                dataKey={"students"}
                tick={{
                  fontSize: 10,
                  fontFamily: "Inter",
                }}
                axisLine={false}
              />

              <Tooltip />

              <Line dataKey={"fees"}  stroke=""/>
              <Bar dataKey={"students"} fill="pink" radius={[5,5,5,5]} barSize={20}/>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
