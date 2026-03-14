import LastDays from "./LastDays";

interface DemographicData {
  city: string;
  country: string;
  percentage: number;
  flagEmoji: string;
  color?: string;
}

const StudentsDemographic = () => {
  const demographics: DemographicData[] = [
    { city: "New York", country: "USA", percentage: 25, flagEmoji: "🇺🇸" },
    { city: "London", country: "UK", percentage: 22, flagEmoji: "🇬🇧" },
    { city: "Sydney", country: "Australia", percentage: 18, flagEmoji: "🇦🇺" },
    { city: "Toronto", country: "Canada", percentage: 15, flagEmoji: "🇨🇦" },
    { city: "Beijing", country: "Tiongkok", percentage: 12, flagEmoji: "🇨🇳" },
    {
      city: "Others",
      country: "",
      percentage: 8,
      flagEmoji: "🟡",
      color: "bg-amber-200",
    },
  ];

  return (
    <div className="bg-white rounded-3xl p-4 h-85">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">
          Students Demographic
        </h2>
        <LastDays />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="relative w-full bg-blue-50/30 rounded-2xl flex items-center justify-center overflow-hidden">
          <svg
            viewBox="0 0 800 400"
            className="w-full h-full opacity-20 fill-blue-300"
          >
            <path d="M150,100 Q180,80 220,110 T300,100 T450,120 T600,100 T750,150 L750,300 Q600,350 450,320 T250,350 T100,300 Z" />
            <circle cx="200" cy="180" r="80" />
            <circle cx="450" cy="150" r="70" />
            <circle cx="480" cy="280" r="60" />
            <circle cx="650" cy="300" r="40" />
          </svg>

          {/* Markers representing the locations in the screenshot */}
          <div className="absolute top-[45%] left-[20%] w-6 h-6 rounded-full border-2 border-white bg-white shadow-sm flex items-center justify-center text-xs">
            🇺🇸
          </div>
          <div className="absolute top-[35%] left-[15%] w-6 h-6 rounded-full border-2 border-white bg-white shadow-sm flex items-center justify-center text-xs">
            🇨🇦
          </div>
          <div className="absolute top-[35%] left-[45%] w-6 h-6 rounded-full border-2 border-white bg-white shadow-sm flex items-center justify-center text-xs">
            🇬🇧
          </div>
          <div className="absolute top-[40%] left-[70%] w-6 h-6 rounded-full border-2 border-white bg-white shadow-sm flex items-center justify-center text-xs">
            🇨🇳
          </div>
          <div className="absolute top-[75%] left-[75%] w-6 h-6 rounded-full border-2 border-white bg-white shadow-sm flex items-center justify-center text-xs">
            🇦🇺
          </div>
        </div>

        {/* List Data */}
        <div className="space-y-">
          {demographics.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between group cursor-default"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-sm border border-gray-100 ${item.color || "bg-white"}`}
                >
                  {item.flagEmoji}
                </div>
                <div>
                  <span className="font-bold text-gray-700">
                    {item.city}
                    {item.country ? `, ${item.country}` : ""}
                  </span>
                  <span className="ml-2 text-gray-400 font-medium">
                    ({item.percentage}%)
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentsDemographic;
