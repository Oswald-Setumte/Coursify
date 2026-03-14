import { Area, AreaChart, CartesianGrid, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Icons } from "./InstructorDetailCard";

function PerformanceChart() {
  const LineTip = ({ active, payload }: { active: boolean; payload: any[] }) =>
    active && payload?.length ? (
      <div className="bg-white border border-pink-100 shadow-lg text-xs px-2 py-1 rounded-lg text-pink-500 font-bold">
        {payload[0].value}%
      </div>
    ) : null;


    const performanceData = [
      { month: "Jan", v: 55 }, { month: "Feb", v: 62 },
      { month: "Mar", v: 78 }, { month: "Apr", v: 72 },
      { month: "May", v: 80 }, { month: "Jun", v: 75 },
    ];


  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-black text-gray-800 text-[15px]">Performance</h3>
        <button className="flex items-center gap-1 text-[11px] text-gray-500 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-full font-semibold hover:bg-gray-100 transition-colors">
          Last 6 Months <Icons.ChevDown />
        </button>
      </div>
      <ResponsiveContainer width="100%" height={155}>
        <AreaChart data={performanceData} margin={{ top: 12, right: 8, left: -18, bottom: 0 }}>
          <defs>
            <linearGradient id="pg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f9a8d4" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#f9a8d4" stopOpacity={0.03} />
            </linearGradient>
            <linearGradient id="pg2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#fde68a" stopOpacity={0.6} />
              <stop offset="95%" stopColor="#fde68a" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
          <YAxis domain={[0, 100]} ticks={[0, 25, 50, 75, 100]} tickFormatter={v => `${v}%`} tick={{ fontSize: 10, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
          <Tooltip content={<LineTip />} />
          <ReferenceLine y={78} stroke="#fbbf24" strokeDasharray="4 3" strokeWidth={1.5}
            label={{ value: "78%", position: "insideTopRight", fontSize: 10, fill: "#d97706", fontWeight: "700" }} />
          {/* Yellow fill below reference */}
          <Area type="monotone" dataKey="v" stroke="none" fill="url(#pg2)" fillOpacity={0.4}
            activeDot={false}
            data={performanceData.map(d => ({ ...d, v: Math.min(d.v, 78) }))} />
          <Area type="monotone" dataKey="v" stroke="#f472b6" strokeWidth={2.5} fill="url(#pg)"
            dot={false} activeDot={{ r: 4, fill: "#f472b6", stroke: "white", strokeWidth: 2 }} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PerformanceChart;