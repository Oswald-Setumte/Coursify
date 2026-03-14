import { Icons } from "./InstructorDetailCard";

function CoursesSection() {
  const courses = [
    { id: 1, title: "Social Media Strategies", cat: "Marketing", students: 180, rating: 4.7, pct: 100, earnings: "$12,500", status: "Archived", emoji: "📱", bg: "from-pink-100 to-rose-50" },
    { id: 2, title: "Influencer Marketing & Growth", cat: "Marketing", students: 150, rating: 4.6, pct: 78, earnings: "$9,800", status: "Active", emoji: "📸", bg: "from-blue-100 to-sky-50" },
    { id: 3, title: "Content Marketing & Branding", cat: "Marketing", students: 220, rating: 4.8, pct: 90, earnings: "$15,300", status: "Active", emoji: "🎨", bg: "from-yellow-100 to-amber-50" },
  ];
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-black text-gray-800 text-[15px]">Courses</h3>
        {/* <button className="flex items-center gap-1.5 text-[12px] text-gray-600 bg-blue-100 border border-gray-200 hover:bg-gray-100 px-3 py-2 rounded-xl font-bold transition-colors">
          <Icons.Filter /> Filter <Icons.ChevDown />
        </button> */}
      </div>
      {/* Table header - md+ */}
      <div className="hidden md:grid grid-cols-[1fr_80px_130px_90px_80px] gap-2 px-3 pb-2 border-b border-gray-100">
        {["Course", "Rating", "Completion Rate", "Earnings", "Status"].map(h => (
          <div key={h} className="flex items-center gap-0.5 text-[11px] text-gray-400 font-bold">
            {h} <Icons.ChevDown />
          </div>
        ))}
      </div>
      <div className="divide-y divide-gray-50">
        {courses.map(c => (
          <div key={c.id} className="group flex flex-col md:grid md:grid-cols-[1fr_80px_130px_90px_80px] md:items-center gap-2 md:gap-2 py-3 md:px-3 hover:bg-gray-50/70 rounded-xl transition-colors">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${c.bg} flex items-center justify-center text-xl shrink-0 shadow-sm`}>{c.emoji}</div>
              <div>
                <p className="font-bold text-gray-800 text-[13px] leading-tight">{c.title}</p>
                <p className="text-[11px] text-pink-400 font-semibold">{c.cat} · {c.students} Students</p>
              </div>
            </div>
            {/* Mobile row */}
            <div className="flex md:hidden items-center justify-between text-[12px] text-gray-500 font-medium px-1">
              <span className="flex items-center gap-1"><Icons.Star size={12} /> {c.rating}</span>
              <span>{c.earnings}</span>
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${c.status === "Active" ? "bg-pink-50 text-pink-500" : "bg-gray-100 text-gray-500"}`}>{c.status}</span>
            </div>
            {/* Desktop cells */}
            <div className="hidden md:flex items-center gap-1"><Icons.Star /> <span className="text-[13px] font-bold text-gray-700">{c.rating}</span></div>
            <div className="hidden md:flex items-center gap-2">
              <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-pink-400 rounded-full" style={{ width: `${c.pct}%` }} />
              </div>
              <span className="text-[12px] text-gray-500 font-semibold w-8 text-right shrink-0">{c.pct}%</span>
            </div>
            <span className="hidden md:block text-[13px] font-bold text-gray-700">{c.earnings}</span>
            <span className={`hidden md:block text-[11px] font-bold px-2.5 py-1.5 rounded-full text-center ${c.status === "Active" ? "bg-pink-50 text-pink-500" : "bg-gray-100 text-gray-500"}`}>{c.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoursesSection;