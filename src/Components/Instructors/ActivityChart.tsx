import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Icons } from "./InstructorDetailCard";

function ActivityChart() {
  const activityData = [
    { day: "Mon", h: 4.5 },
    { day: "Tue", h: 5.5 },
    { day: "Wed", h: 4.0 },
    { day: "Thu", h: 6.5 },
    { day: "Fri", h: 7.5 },
    { day: "Sat", h: 3.0 },
    { day: "Sun", h: 2.5 },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-black text-gray-800 text-[15px]">Activity</h3>
        <button className="flex items-center gap-1 text-[11px] text-gray-500 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-full font-semibold hover:bg-gray-100 transition-colors">
          This Week <Icons.ChevDown />
        </button>
      </div>
      <ResponsiveContainer width="100%" height={155}>
        <BarChart
          data={activityData}
          margin={{ top: 24, right: 8, left: -18, bottom: 0 }}
          barSize={20}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#f3f4f6"
            vertical={false}
          />
          <XAxis
            dataKey="day"
            tick={{ fontSize: 11, fill: "#9ca3af" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            ticks={[0, 2, 4, 6, 8]}
            tickFormatter={(v) => `${v}h`}
            tick={{ fontSize: 10, fill: "#9ca3af" }}
            axisLine={false}
            tickLine={false}
            domain={[0, 8]}
          />
          <Tooltip
            content={<BarTip />}
            cursor={{ fill: "rgba(249,168,212,0.07)" }}
          />
          <Bar dataKey="h" radius={[6, 6, 0, 0]} shape={<CustomBarShape />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ActivityChart;

const BarTip = ({
  active = false,
  payload = [],
}: {
  active: boolean;
  payload: any[];
}) =>
  active && payload?.length ? (
    <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded-lg">
      {payload[0].value}h
    </div>
  ) : null;

function CustomBarShape(props: any) {
  const { x, y, width, height, payload } = props;
  const isSat = payload?.day === "Sat";
  const fill = isSat ? "#fbbf24" : "#f9a8d4";
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} rx={5} fill={fill} />
      {isSat && (
        <>
          <rect
            x={x - 6}
            y={y + height / 2 - 12}
            width={width + 12}
            height={24}
            rx={6}
            fill="#1f2937"
          />
          <text
            x={x + width / 2}
            y={y + height / 2 + 1}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontSize={9}
            fontWeight="700"
          >
            3 hours
          </text>
        </>
      )}
    </g>
  );
}
