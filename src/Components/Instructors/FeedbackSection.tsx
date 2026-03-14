import { Icons } from "./InstructorDetailCard";

function FeedbackSection() {
  const feedbacks = [
    { id: 1, name: "Emma Clark", rating: 5.0, text: "Loved how detailed and engaging this course was! The real-world examples really helped me understand content planning and audience targeting.", course: "Social Media Strategies", initials: "EC", clr: "bg-pink-100 text-pink-600" },
    { id: 2, name: "Michael Turner", rating: 4.8, text: "Great insights into branding! The instructor provided excellent tips on positioning and market strategies that I've already applied.", course: "Content Marketing & Branding", initials: "MT", clr: "bg-blue-100 text-blue-600" },
    { id: 3, name: "Sophia Reynolds", rating: 4.7, text: "The course covered everything I needed. The engagement tactics to working with brands. I wish there were more case studies, but overall, excellent!", course: "Influencer Marketing & Growth", initials: "SR", clr: "bg-amber-100 text-amber-600" },
  ];
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-black text-gray-800 text-[15px]">Feedback</h3>
        {/* <button className="text-[12px] font-bold bg-blue-300 hover:bg-blue-200 text-white px-3.5 py-2 rounded-xl transition-colors">View All</button> */}
      </div>
      <div className="flex overflow-x-auto gap-4">
        {feedbacks.map(f => (
          <div key={f.id} className="bg-gray-50/80 rounded-xl p-4 border border-gray-100 hover:border-pink-100 hover:shadow-sm transition-all min-w-70">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-black ${f.clr}`}>{f.initials}</div>
                <span className="font-bold text-gray-800 text-[13px]">{f.name}</span>
              </div>
              <div className="flex items-center gap-1"><Icons.Star size={13} /><span className="text-[12px] font-bold text-gray-700">{f.rating}</span></div>
            </div>
            <p className="text-[12px] text-gray-500 leading-relaxed" style={{ display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical", overflow: "hidden" }}>"{f.text}"</p>
            <div className="mt-3 pt-3 border-t border-gray-200/80">
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-0.5">Course</p>
              <p className="text-[12px] text-gray-600 font-bold">{f.course}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeedbackSection