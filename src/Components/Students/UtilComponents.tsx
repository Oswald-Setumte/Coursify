import { ChevronDown, Clock, Edit, FileText, Home, Instagram, Linkedin, Mail, MessageCircle, MoreHorizontal, Phone, Play, Search, Twitter } from "lucide-react";




export function CircleProgress({
  pct,
  size = 36,
  stroke = 4,
  color = "#f472b6",
  bg = "#f3f4f6",
} : { pct: number; size?: number; stroke?: number; color?: string; bg?: string }) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;
  return (
    <svg width={size} height={size} className="-rotate-90">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={bg}
        strokeWidth={stroke}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={pct === 100 ? "#f472b6" : color}
        strokeWidth={stroke}
        strokeDasharray={`${dash} ${circ}`}
        strokeLinecap="round"
      />
    </svg>
  );
}


export function StatusBadge({ status = "Active" }) {
  const cls =
    status === "Completed"
      ? "bg-pink-100 text-pink-600"
      : "bg-yellow-100 text-yellow-700";
  return (
    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${cls}`}>
      {status}
    </span>
  );
}


const weekActivity = [
  { day: "Mon", pink: 2, yellow: 1.5, blue: 1 },
  { day: "Tue", pink: 1.5, yellow: 3.5, blue: 2 },
  { day: "Wed", pink: 2, yellow: 4, blue: 2.5 },
  { day: "Thu", pink: 3, yellow: 5, blue: 3.5 },
  { day: "Fri", pink: 2.5, yellow: 3, blue: 2 },
  { day: "Sat", pink: 1.5, yellow: 2, blue: 1 },
  { day: "Sun", pink: 1, yellow: 1.5, blue: 0.5 },
];

const performanceMonths = [
  { month: "Jan", val: 50 },
  { month: "Feb", val: 65 },
  { month: "Mar", val: 80 },
  { month: "Apr", val: 60 },
  { month: "May", val: 72 },
  { month: "Jun", val: 68 },
  { month: "Jul", val: 78 },
];

const student = {
  id: "STU-005",
  status: "Active",
  name: "Ava Mitchell",
  enrolledOn: "Jan 30, 2028",
  avatar:
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Ava&backgroundColor=b6e3f4",
  email: "avamitchell@email.com",
  phone: "+1 555-3344",
  address: "78 Maple Drive, New York, NY, USA",
  social: {
    linkedin: "ava-mitchell",
    twitter: "@mitchellava",
    instagram: "@iamavamitchell",
  },
};


const courseStats = [
  { hours: 16, label: "French for\nBeginners", active: false },
  { hours: 16, label: "Spanish for\nBeginners", active: true },
  { hours: 10.5, label: "Business Com...", active: false },
];

const courses = [
  {
    emoji: "📚",
    category: "Language",
    level: "Beginner",
    name: "French for Beginners",
    lessons: 15,
    hours: "25h",
    progress: 60,
    status: "Ongoing",
    score: 78,
    certificate: null,
    color: "from-blue-100 to-purple-100",
  },
  {
    emoji: "💼",
    category: "Business",
    level: "Intermediate",
    name: "Business Communication",
    lessons: 20,
    hours: "40h",
    progress: 50,
    status: "Ongoing",
    score: 72,
    certificate: null,
    color: "from-orange-100 to-red-100",
  },
  {
    emoji: "🌍",
    category: "Language",
    level: "Beginner",
    name: "Spanish for Beginners",
    lessons: 18,
    hours: "30h",
    progress: 100,
    status: "Completed",
    score: 90,
    certificate: "Spanish_Beginne...",
    color: "from-green-100 to-teal-100",
  },
  {
    emoji: "📣",
    category: "Marketing",
    level: "Beginner",
    name: "Content Marketing",
    lessons: 19,
    hours: "29h",
    progress: 35,
    status: "Ongoing",
    score: 64,
    certificate: null,
    color: "from-pink-100 to-rose-100",
  },
];

export function BarChart() {
  const max = 8;
  return (
    <div className="flex items-end gap-1.5 h-32 mt-3">
      {weekActivity.map((d) => (
        <div key={d.day} className="flex-1 flex flex-col items-center gap-0.5">
          <div
            className="flex flex-col justify-end gap-0.5 w-full"
            style={{ height: "100px" }}
          >
            <div
              className="rounded-t-md w-full bg-blue-200"
              style={{ height: `${(d.blue / max) * 100}px` }}
            />
            <div
              className="w-full bg-yellow-300"
              style={{ height: `${(d.yellow / max) * 100}px` }}
            />
            <div
              className="rounded-b-md w-full bg-pink-400"
              style={{ height: `${(d.pink / max) * 100}px` }}
            />
          </div>
          <span className="text-[10px] text-gray-400 mt-1">{d.day}</span>
        </div>
      ))}
    </div>
  );
}


export function LineChart() {
  const w = 300,
    h = 80;
  const pts = performanceMonths.map((m, i) => ({
    x: 30 + (i / (performanceMonths.length - 1)) * (w - 60),
    y: h - (m.val / 100) * h,
  }));
  const path = pts
    .map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`)
    .join(" ");
  const area = `${path} L${pts[pts.length - 1].x},${h} L${pts[0].x},${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-20">
      <defs>
        <linearGradient id="areafill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f472b6" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#f472b6" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#areafill)" />
      <path
        d={path}
        fill="none"
        stroke="#f472b6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {pts.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r="3"
          fill="white"
          stroke="#f472b6"
          strokeWidth="1.5"
        />
      ))}
    </svg>
  );
}


export function DonutChart() {
  const total = 360;
  const participation = (55 / 80) * total;
  const quiz = (15 / 80) * total;
  const exam = (10 / 80) * total;
  const r = 50,
    cx = 70,
    cy = 70,
    sw = 18;
  const circ = 2 * Math.PI * r;

  const seg = (pct : number) => (pct / 360) * circ;
  const segs = [
    { dash: seg(participation), color: "#f472b6", offset: 0 },
    { dash: seg(quiz), color: "#facc15", offset: seg(participation) },
    {
      dash: seg(exam),
      color: "#93c5fd",
      offset: seg(participation) + seg(quiz),
    },
  ];

  return (
    <svg viewBox="0 0 140 140" className="w-32 h-32">
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke="#f3f4f6"
        strokeWidth={sw}
      />
      {segs.map((s, i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke={s.color}
          strokeWidth={sw}
          strokeDasharray={`${s.dash} ${circ}`}
          strokeDashoffset={-s.offset}
          className="-rotate-90 origin-center"
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />
      ))}
      <text
        x={cx}
        y={cy - 6}
        textAnchor="middle"
        className="text-[9px]"
        fill="#9ca3af"
        fontSize="9"
      >
        Total Score
      </text>
      <text
        x={cx}
        y={cy + 10}
        textAnchor="middle"
        fill="#1f2937"
        fontSize="16"
        fontWeight="700"
      >
        80%
      </text>
    </svg>
  );
}


// ─── PROFILE CARD ────────────────────────────────────────────────────────────
export function ProfileCard() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
      {/* Banner */}
      <div className="h-28 bg-gradient-to-br from-pink-300 via-pink-200 to-rose-100 relative">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, #fff 0%, transparent 60%), radial-gradient(circle at 80% 20%, #f9a8d4 0%, transparent 50%)",
          }}
        />
      </div>
      {/* Avatar */}
      <div className="flex flex-col items-center -mt-10 pb-5 px-5">
        <div className="w-20 h-20 rounded-full border-4 border-white shadow-md bg-yellow-100 overflow-hidden z-10">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ava&backgroundColor=fef9c3&top=hijab&topColor=9ca3af"
            alt="Ava"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex gap-2 mt-3">
          <span className="bg-indigo-100 text-indigo-600 text-xs font-semibold px-2.5 py-0.5 rounded-full">
            {student.id}
          </span>
          <span className="bg-green-100 text-green-600 text-xs font-semibold px-2.5 py-0.5 rounded-full">
            {student.status}
          </span>
        </div>
        <h2 className="text-xl font-bold text-gray-800 mt-2">{student.name}</h2>
        <p className="text-sm text-gray-400">
          Enrolled on{" "}
          <span className="font-semibold text-gray-600">
            {student.enrolledOn}
          </span>
        </p>

        {/* Actions */}
        <div className="flex gap-2 mt-4 w-full">
          <button className="flex-1 flex items-center justify-center gap-1.5 border border-gray-200 rounded-xl py-2 text-sm text-gray-600 hover:bg-gray-50 transition">
            <Mail size={15} />
          </button>
          <button className="flex-1 flex items-center justify-center gap-1.5 border border-gray-200 rounded-xl py-2 text-sm text-gray-600 hover:bg-gray-50 transition">
            <Phone size={15} />
          </button>
          <button className="flex-[3] flex items-center justify-center gap-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-xl py-2 text-sm font-semibold transition">
            <MessageCircle size={15} /> Chat
          </button>
        </div>
      </div>

      {/* Contact */}
      <div className="border-t border-gray-100 px-5 py-4">
        <p className="text-sm font-bold text-gray-700 mb-3">Contact</p>
        <div className="space-y-3">
          {[
            { icon: Mail, label: "Email", value: student.email },
            { icon: Phone, label: "Phone Number", value: student.phone },
            { icon: Home, label: "Address", value: student.address },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon size={14} className="text-pink-400" />
              </div>
              <div>
                <p className="text-xs text-gray-400">{label}</p>
                <p className="text-sm text-gray-700 font-medium">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social */}
      <div className="border-t border-gray-100 px-5 py-4">
        <p className="text-sm font-bold text-gray-700 mb-3">Social Media</p>
        <div className="space-y-3">
          {[
            {
              icon: Linkedin,
              label: "Linked In",
              value: student.social.linkedin,
            },
            { icon: Twitter, label: "Twitter", value: student.social.twitter },
            {
              icon: Instagram,
              label: "Instagram",
              value: student.social.instagram,
            },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center">
                  <Icon size={13} className="text-gray-500" />
                </div>
                <span className="text-sm text-gray-600">{label}</span>
              </div>
              <span className="text-sm text-gray-400">{value}</span>
            </div>
          ))}
        </div>
        {/* <button className="mt-4 w-full flex items-center justify-center gap-1.5 border border-gray-200 rounded-xl py-2 text-sm text-gray-600 hover:bg-gray-50 transition">
          <Edit size={13} /> Edit
        </button> */}
      </div>
    </div>
  );
}


// ─── LEARNING ACTIVITY ───────────────────────────────────────────────────────
export function LearningActivity() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
      <div className="flex items-center justify-between mb-1">
        <p className="font-bold text-gray-800">Learning Activity</p>
        {/* <div className="flex items-center gap-2">
          <button className="text-sm text-gray-500 flex items-center gap-1 border border-gray-200 rounded-lg px-2 py-1">
            This Week <ChevronDown size={12} />
          </button>
          <button className="text-gray-400 hover:text-gray-600">
            <MoreHorizontal size={16} />
          </button>
        </div> */}
      </div>
      <div className="flex items-baseline gap-1.5 mt-1">
        <span className="text-3xl font-bold text-gray-800">42</span>
        <span className="text-base text-gray-500">hours</span>
        <span className="text-3xl font-bold text-gray-800 ml-1">30</span>
        <span className="text-base text-gray-500">minutes</span>
      </div>

      <div className="flex justify-between text-xs text-gray-300 mb-1 mt-2">
        {["8h", "6h", "4h", "2h", "0h"].map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>
      <BarChart />

      {/* Course stat pills */}
      <div className="flex gap-2 mt-4">
        {courseStats.map((cs, i) => (
          <div
            key={i}
            className={`flex-1 rounded-xl p-3 ${cs.active ? "bg-yellow-100" : "bg-gray-50"}`}
          >
            <p className="text-lg font-bold text-gray-800">
              {cs.hours}
              <span className="text-xs font-normal text-gray-500 ml-0.5">
                Hours
              </span>
            </p>
            <p className="text-[11px] text-gray-500 mt-0.5 whitespace-pre-line leading-tight">
              {cs.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── PERFORMANCE ─────────────────────────────────────────────────────────────
export function Performance() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
      <div className="flex items-center justify-between mb-4">
        <p className="font-bold text-gray-800">Performance</p>
        {/* <button className="text-sm text-gray-500 flex items-center gap-1 border border-gray-200 rounded-lg px-2 py-1">
          Last 6 Months <ChevronDown size={12} />
        </button> */}
      </div>
      <div className="flex items-center gap-6">
        <DonutChart />
        <div className="space-y-2">
          {[
            { label: "Participation", val: "55%", color: "bg-pink-400" },
            { label: "Quiz", val: "15%", color: "bg-yellow-400" },
            { label: "Exam", val: "10%", color: "bg-blue-300" },
          ].map(({ label, val, color }) => (
            <div key={label} className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${color}`} />
              <span className="text-xs text-gray-500">{label}</span>
              <span className="text-xs font-semibold text-gray-700 ml-auto">
                {val}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Month labels */}
      <div className="flex justify-between text-[10px] text-gray-400 mt-1 px-1">
        {performanceMonths.map((m) => (
          <span key={m.month}>{m.month}</span>
        ))}
      </div>
      <LineChart />
      <div className="flex justify-between text-[10px] text-gray-400 px-1">
        {["0%", "25%", "50%", "75%", "100%"].map((v) => (
          <span key={v}>{v}</span>
        ))}
      </div>

      {/* Motivational banner */}
      <div className="mt-4 bg-yellow-50 rounded-xl p-3 text-sm text-yellow-800 leading-snug">
        💛{" "}
        <span className="font-medium">
          Success is the sum of small efforts, repeated day in and day out. Keep
          pushing forward!
        </span>
      </div>
    </div>
  );
}


// ─── ENROLLED COURSES ────────────────────────────────────────────────────────
export function EnrolledCourses() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
        <p className="font-bold text-gray-800 text-base">Enrolled Courses</p>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 border border-gray-200 rounded-xl px-3 py-1.5 bg-white">
            <Search size={13} className="text-gray-400" />
            <input
              placeholder="Search course, category, etc"
              className="text-xs outline-none w-36 text-gray-600 placeholder-gray-400"
            />
          </div>
          {/* <button className="text-xs text-gray-500 border border-gray-200 rounded-xl px-3 py-1.5 bg-white flex items-center gap-1">
            All Status <ChevronDown size={12} />
          </button> */}
          <button className="text-xs text-indigo-600 bg-indigo-600 text-white font-semibold rounded-xl px-4 py-1.5 hover:bg-indigo-700 transition">
            View All
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {courses.map((c, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-4 hover:shadow-md transition"
          >
            <div
              className={`w-12 h-12 rounded-xl bg-linear-to-br ${c.color} flex items-center justify-center text-xl shrink-0`}
            >
              {c.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 text-[11px] mb-0.5">
                <span className="text-pink-500 font-semibold">
                  {c.category}
                </span>
                <span className="text-gray-300">›</span>
                <span className="text-gray-400">{c.level}</span>
              </div>
              <p className="text-sm font-bold text-gray-800 truncate">
                {c.name}
              </p>
              <div className="flex items-center gap-3 mt-1 text-[11px] text-gray-400">
                <span className="flex items-center gap-1">
                  <Play size={10} /> {c.lessons}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={10} /> {c.hours}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <CircleProgress pct={c.progress} size={38} stroke={4} />
              <span className="text-sm font-bold text-gray-700 w-8">
                {c.progress}%
              </span>
              <StatusBadge status={c.status} />
              <div className="text-right hidden sm:block">
                <span className="text-lg font-bold text-gray-800">
                  {c.score}
                </span>
                <span className="text-xs text-gray-400">/100</span>
              </div>
              <div className="hidden md:flex flex-col items-start text-xs text-gray-400 w-28">
                <span>Certificate:</span>
                {c.certificate ? (
                  <span className="text-indigo-500 font-medium flex items-center gap-1 mt-0.5">
                    <FileText size={11} /> {c.certificate}
                  </span>
                ) : (
                  <span className="text-gray-300">None</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}