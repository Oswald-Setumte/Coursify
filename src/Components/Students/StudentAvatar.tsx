export function Avatar({ student, size = "md" } : { student: any; size?: "sm" | "md" | "lg" }) {
  const sizes: any = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
  };
  return (
    <div
      className={`${sizes[size]} rounded-full flex items-center justify-center font-semibold text-white flex-shrink-0`}
      style={{
        background: `linear-gradient(135deg, ${student.color}cc, ${student.color})`,
      }}
    >
      {student.avatar}
    </div>
  );
}


export function StatusBadge({
  status,
}: {
  status: "Active" | "Inactive" | "Suspended";
}) {
  interface statusConfig {
    Active: {
      bg: string;
      text: string;
      dot: string;
    };
    Inactive: {
      bg: string;
      text: string;
      dot: string;
    };
    Suspended: {
      bg: string;
      text: string;
      dot: string;
    };
  }

  const statusConfig: statusConfig = {
    Active: { bg: "bg-pink-100", text: "text-pink-500", dot: "bg-pink-400" },
    Inactive: { bg: "bg-gray-100", text: "text-gray-500", dot: "bg-gray-400" },
    Suspended: {
      bg: "bg-amber-100",
      text: "text-amber-600",
      dot: "bg-amber-400",
    },
  };
  const cfg = statusConfig[status];
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${cfg.bg} ${cfg.text}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
      {status}
    </span>
  );
}

export function ProgressRing({ value = 0, size = 32 }) {
  const r = size / 2 - 4;
  const circ = 2 * Math.PI * r;
  const dash = (value / 100) * circ;
  return (
    <div className="flex items-center gap-2">
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="#f3e8ff"
          strokeWidth="3.5"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="#ec4899"
          strokeWidth="3.5"
          strokeDasharray={`${dash} ${circ}`}
          strokeLinecap="round"
        />
      </svg>
      <span className="text-sm font-medium text-gray-700">{value}%</span>
    </div>
  );
}

export function StatCard({ icon: Icon, label, value, iconBg, iconColor, cardBg }: { icon: any; label: string; value: string; iconBg: string; iconColor: string; cardBg?: string }) {
  return (
    <div
      className={`${cardBg || "bg-white"} rounded-2xl p-4 flex items-center gap-4 shadow-sm`}
    >
      <div className={`${iconBg} rounded-xl p-3 shrink-0`}>
        <Icon size={22} className={iconColor} />
      </div>
      <div>
        <p className="text-sm text-gray-500 font-medium">{label}</p>
        <p className="text-2xl font-bold text-gray-800 leading-tight">
          {value}
        </p>
      </div>
    </div>
  );
}

export const students = [
  {
    id: "STU-001",
    name: "Emma Clark",
    email: "emma@email.com",
    enrolled: "Feb 5, 2028",
    status: "Active",
    avatar: "EC",
    color: "#f472b6",
    courses: 3,
    courseList: [
      { name: "Social Media Strategies", category: "Marketing" },
      { name: "Content Creation", category: "Marketing" },
      { name: "SEO Fundamentals", category: "Marketing" },
    ],
    progress: 78,
    performance: 85,
  },
  {
    id: "STU-002",
    name: "Michael Turner",
    email: "michael@email.com",
    enrolled: "Jan 20, 2028",
    status: "Active",
    avatar: "MT",
    color: "#818cf8",
    courses: 2,
    courseList: [
      { name: "Python for Beginners", category: "Web Development" },
      { name: "JavaScript Essentials", category: "Web Development" },
    ],
    progress: 85,
    performance: 90,
  },
  {
    id: "STU-003",
    name: "Sophia Reynolds",
    email: "sophia@email.com",
    enrolled: "Mar 1, 2028",
    status: "Inactive",
    avatar: "SR",
    color: "#34d399",
    courses: 1,
    courseList: [
      { name: "Business Analytics with Excel", category: "Business" },
    ],
    progress: 65,
    performance: 78,
  },
  {
    id: "STU-004",
    name: "Daniel White",
    email: "daniel@email.com",
    enrolled: "Feb 12, 2028",
    status: "Suspended",
    avatar: "DW",
    color: "#fb923c",
    courses: 2,
    courseList: [
      { name: "Graphic Design Fundamentals", category: "Design" },
      { name: "Adobe Illustrator", category: "Design" },
    ],
    progress: 92,
    performance: 95,
  },
  {
    id: "STU-005",
    name: "Ava Mitchell",
    email: "ava@email.com",
    enrolled: "Jan 30, 2028",
    status: "Active",
    avatar: "AM",
    color: "#22d3ee",
    courses: 3,
    courseList: [
      { name: "French for Beginners", category: "Language" },
      { name: "Spanish for Beginners", category: "Language" },
      { name: "Business Communication", category: "Business" },
    ],
    progress: 74,
    performance: 80,
  },
  {
    id: "STU-006",
    name: "Liam Harris",
    email: "liam@email.com",
    enrolled: "Mar 3, 2028",
    status: "Active",
    avatar: "LH",
    color: "#a78bfa",
    courses: 2,
    courseList: [
      { name: "Digital Marketing Mastery", category: "Marketing" },
      { name: "Email Marketing", category: "Marketing" },
    ],
    progress: 80,
    performance: 88,
  },
  {
    id: "STU-007",
    name: "Charlotte Baker",
    email: "charlotte@email.com",
    enrolled: "Feb 18, 2028",
    status: "Suspended",
    avatar: "CB",
    color: "#f87171",
    courses: 3,
    courseList: [
      { name: "Advanced Photoshop Techniques", category: "Design" },
      { name: "UI/UX Design", category: "Design" },
      { name: "Brand Identity", category: "Design" },
    ],
    progress: 68,
    performance: 76,
  },
  {
    id: "STU-008",
    name: "Isabella Clark",
    email: "isabella@email.com",
    enrolled: "Mar 6, 2028",
    status: "Active",
    avatar: "IC",
    color: "#4ade80",
    courses: 1,
    courseList: [
      { name: "Full-Stack Web Development", category: "Web Development" },
    ],
    progress: 60,
    performance: 70,
  },
];