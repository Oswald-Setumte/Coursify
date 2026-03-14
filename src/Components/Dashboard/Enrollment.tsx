import React, { useState } from "react";
import {
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";
import LastDays from "./LastDays";

export default function Enrollment() {
  const [data, setData] = useState([
    { Month: "Jan", Students: 6500, Fees: 4000 },
    { Month: "Feb", Students: 7000, Fees: 4300 },
    { Month: "Mar", Students: 6400, Fees: 3800 },
    { Month: "Apr", Students: 10548, Fees: 5100 },
    { Month: "May", Students: 8000, Fees: 4700 },
    { Month: "Jun", Students: 9000, Fees: 5200 },
    { Month: "Jul", Students: 7200, Fees: 4900 },
    { Month: "Aug", Students: 9000, Fees: 2324 },
    { Month: "Sep", Students: 8200, Fees: 1334 },
    { Month: "Oct", Students: 7600, Fees: 1132 },
    { Month: "Nov", Students: 7400, Fees: 1332 },
    { Month: "Dec", Students: 7300, Fees: 3354 },
  ]);

  return (
    <div className="bg-white h-[300px] rounded-2xl p-4">
      <div className="flex justify-between text-xl font-bold">
        <h1>Enrollment Trends</h1>
        <div>
          <LastDays />
        </div>
      </div>
      <div>
        {/* Legend */}
        <div className="flex gap-4 text-xl">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-pink-300"></div>
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
                dataKey={"Month"}
                tick={{
                  fontSize: 10,
                  fontFamily: "Inter",
                }}
                axisLine={false}
              />
              <YAxis
                dataKey={"Students"}
                tick={{
                  fontSize: 10,
                  fontFamily: "Inter",
                }}
                axisLine={false}
              />

              <Tooltip />

              <Line dataKey={"Fees"} stroke="" />
              <Bar
                dataKey={"Students"}
                fill="pink"
                radius={[5, 5, 5, 5]}
                barSize={20}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
