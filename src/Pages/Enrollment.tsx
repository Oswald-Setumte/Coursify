import { useState, useMemo } from "react";
import {
  Search,
  Filter,
  ChevronDown,
  MoreHorizontal,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Clock,
  ArrowDownLeft,
  ArrowUpRight,
} from "lucide-react";

type Status = "Enrolled" | "Applied" | "Waitlisted";

interface Student {
  id: string;
  appliedDate: string;
  name: string;
  email: string;
  avatar: string;
  phoneNumber: string;
  course: string;
  category: string;
  batch: string;
  status: Status;
  amount: number;
}

const generateMockData = (): Student[] => {
  const statuses: Status[] = ["Enrolled", "Applied", "Waitlisted"];
  const courses = [
    { name: "Graphic Design Fundamentals", cat: "Design" },
    { name: "Digital Marketing Mastery", cat: "Marketing" },
    { name: "Python for Beginners", cat: "Web Development" },
    { name: "Business Analytics with Excel", cat: "Business" },
    { name: "French for Beginners", cat: "Language" },
    { name: "UI/UX Design Basics", cat: "Design" },
    { name: "Social Media Strategies", cat: "Marketing" },
    { name: "JavaScript Essentials", cat: "Web Development" },
    { name: "Project Management 101", cat: "Business" },
    { name: "Spanish for Beginners", cat: "Language" },
  ];

  return Array.from({ length: 80 }, (_, i) => {
    const courseObj = courses[i % courses.length];
    return {
      id: `std-${i}`,
      appliedDate: `Mar ${Math.floor(Math.random() * 10) + 1}, 2028`,
      name: [
        "Emma Johnson",
        "Michael Brown",
        "Sophia Miller",
        "James Wilson",
        "Olivia Davis",
        "Daniel White",
        "Isabella Clark",
        "Liam Harris",
        "Mason Wright",
        "Charlotte Baker",
      ][i % 10],
      email: `${["emma", "michael", "sophia", "james", "olivia", "daniel", "isabella", "liam", "mason", "charlotte"][i % 10]}@email.com`,
      avatar: `https://i.pravatar.cc/150?u=${i}`,
      phoneNumber: `+1 555-${Math.floor(1000 + Math.random() * 9000)}`,
      course: courseObj.name,
      category: courseObj.cat,
      batch: ["I", "II", "III"][i % 3],
      status: statuses[i % 3],
      amount: [299, 249, 199, 149][i % 4],
    };
  });
};

const MOCK_DATA = generateMockData();

const StatCard = ({
  title,
  value,
  change,
  isPositive,
  icon: Icon,
  iconbgColor,
  bgColor,
}: any) => (
  <div className={` rounded-2xl overflow-hidden flex-1`}>
    <div className={`flex  ${bgColor} justify-between items-start p-5`}>
      <div>
        <p className="text-gray-500 text-sm font-medium">{title}</p>
        <h3 className="text-3xl font-bold text-gray-800 mt-1">{value}</h3>
      </div>
      <div className={`${iconbgColor} p-3 rounded-xl`}>
        <Icon size={20} />
      </div>
    </div>
    <div
      className={`${iconbgColor} text-black/55 inline-flex items-center gap-1 px-5 py-1 w-full h-15 text-sm font-semibold`}
    >
      <span className="w-9 h-9 bg-white text-black  flex items-center justify-center rounded-full">
        {isPositive ? <ArrowUpRight size={15} /> : <ArrowDownLeft size={15} />}
      </span>
      {change} than last months
    </div>
  </div>
);

const StatusBadge = ({ status }: { status: Status }) => {
  const styles = {
    Enrolled: "bg-pink-100 text-pink-600 border-pink-200",
    Applied: "bg-orange-100 text-orange-600 border-orange-200",
    Waitlisted: "bg-blue-100 text-blue-600 border-blue-200",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-bold border ${styles[status]}`}
    >
      {status}
    </span>
  );
};

export default function Enrollment() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredData = useMemo(() => {
    return MOCK_DATA.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const currentTableData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(start, start + itemsPerPage);
  }, [filteredData, currentPage]);

  return (
    <div className="min-h-screen font-sans text-gray-900 space-y-3">
      <div className="bg-white md:p-5 rounded-2xl grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard
          title="Total Students"
          value="5000"
          isPositive={true}
          change="+2.84%"
          icon={GraduationCap}
          iconbgColor="bg-pink-300"
          bgColor="bg-pink-100/50"
        />
        <StatCard
          title="Enrolled"
          value="3200"
          change="+1.06%"
          isPositive={true}
          icon={GraduationCap}
          iconbgColor="bg-orange-300"
          bgColor="bg-orange-100/50"
        />
        <StatCard
          title="Applied"
          value="1500"
          change="-2.65%"
          isPositive={false}
          bgColor="bg-blue-100/50"
          icon={GraduationCap}
          iconbgColor="bg-blue-300"
        />
        <StatCard
          title="Waitlisted"
          value="300"
          change="+0.55%"
          bgColor="bg-gray-100/50"
          isPositive={true}
          icon={GraduationCap}
          iconbgColor="bg-gray-300"
        />
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden">
        <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-50">
          <div className="flex items-center gap-4 flex-1 max-w-md">
            <div className="relative flex-1">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search name, course..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl text-sm transition-all outline-none"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-600 bg-white border border-gray-200 rounded-xl hover:bg-gray-50">
              <Filter size={16} />
              <div>Filter</div>
              <ChevronDown size={16} />
            </button>
          </div>

          <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-600 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 self-end md:self-auto">
            This Week
            <ChevronDown size={16} />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-400 text-[13px] uppercase tracking-wider border-b border-gray-50">
                <th className="px-6 py-4 font-medium">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </th>
                <th className="px-6 py-4 font-medium">
                  Applied Date <ChevronDown className="inline" size={14} />
                </th>
                <th className="px-6 py-4 font-medium">
                  Name <ChevronDown className="inline" size={14} />
                </th>
                <th className="px-6 py-4 font-medium hidden lg:block ">
                  Phone Number <ChevronDown className="inline" size={14} />
                </th>
                <th className="px-6 py-4 font-medium">
                  Course <ChevronDown className="inline" size={14} />
                </th>
                <th className="px-6 py-4 font-medium hidden lg:block ">
                  Batch <ChevronDown className="inline" size={14} />
                </th>
                <th className="px-6 py-4 font-medium">
                  Status <ChevronDown className="inline" size={14} />
                </th>
                <th className="px-6 py-4 font-medium">
                  Amount <ChevronDown className="inline" size={14} />
                </th>
                <th className="px-6 py-4 font-medium"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {currentTableData.map((student) => (
                <tr
                  key={student.id}
                  className="hover:bg-gray-50 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-600">
                    {student.appliedDate}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={student.avatar}
                        alt=""
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <div className="text-sm font-bold text-gray-800">
                          {student.name}
                        </div>
                        <div className="text-xs text-gray-400">
                          {student.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="hidden lg:block px-6 py-4 text-sm text-gray-600">
                    {student.phoneNumber}
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-semibold text-gray-800">
                      {student.course}
                    </div>
                    <div className="text-xs text-gray-400">
                      {student.category}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 font-medium hidden lg:block ">
                    {student.batch}
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={student.status} />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span
                        className={`p-1 rounded-full ${student.status === "Enrolled" ? "bg-pink-50 text-pink-500" : "bg-gray-50 text-gray-400"}`}
                      >
                        {student.status === "Enrolled" ? (
                          <CheckCircle2 size={14} />
                        ) : (
                          <Clock size={14} />
                        )}
                      </span>
                      <span className="text-sm font-bold text-gray-800">
                        ${student.amount}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right hidden lg:block ">
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <MoreHorizontal size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 border-t border-gray-50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-semibold text-gray-800">
              {(currentPage - 1) * itemsPerPage + 1}-
              {Math.min(currentPage * itemsPerPage, filteredData.length)}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-800">
              {filteredData.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 disabled:opacity-30"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-1">
              {[...Array(Math.min(5, totalPages))].map((_, i) => {
                const pageNum = i + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-8 h-8 rounded-lg text-sm font-bold transition-all ${
                      currentPage === pageNum
                        ? "bg-blue-600 text-white "
                        : "text-gray-500 hover:bg-gray-100"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
              {totalPages > 5 && (
                <span className="text-gray-400 px-1">...</span>
              )}
              {totalPages > 5 && (
                <button
                  onClick={() => setCurrentPage(totalPages)}
                  className={`w-8 h-8 rounded-lg text-sm font-bold transition-all ${
                    currentPage === totalPages
                      ? "bg-blue-600/20 text-white"
                      : "text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  {totalPages}
                </button>
              )}
            </div>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 disabled:opacity-30"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
