import { useState } from "react";
import {
  Avatar,
  ProgressRing,
  StatCard,
  StatusBadge,
  students,
} from "../Components/Students/StudentAvatar";
import {
  ArrowUpDown,
  Bell,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Filter,
  GraduationCap,
  Menu,
  Plus,
  Search,
  Settings,
} from "lucide-react";
import CourseCell from "../Components/Students/CourseCell";
import { Link } from "react-router";

export default function CoursifyDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedRows, setExpandedRows] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selected, setSelected] = useState([]);

  const toggleRow = (id) => setExpandedRows((p) => ({ ...p, [id]: !p[id] }));
  const toggleSelect = (id) =>
    setSelected((p) => p.includes(id) ? p.filter((x) => x !== id) : [...p, id],);
  const toggleAll = () => setSelected((p) =>p.length === students.length ? [] : students.map((s) => s.id),);

  const filtered = students.filter(
    (s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.courseList.some((c) =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
  );

  return (
    <div className="min-h-screen  font-sans mt-4 rounded-2xl">
      {/* Main */}
      <main className=" space-y-5 mr-5">
        {/* Mobile title */}
        <div className="lg:hidden">
          <h1 className="text-xl font-bold text-gray-800">Students</h1>
          <p className="text-xs text-gray-400">
            <span className="text-pink-500">Dashboard</span> / Students
          </p>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <StatCard
            icon={GraduationCap}
            label="Total Students"
            value="5000"
            iconBg="bg-gray-100"
            iconColor="text-gray-500"
          />
          <StatCard
            icon={GraduationCap}
            label="Active Students"
            value="3200 (64.0%)"
            iconBg="bg-pink-100"
            iconColor="text-pink-500"
            cardBg="bg-pink-50/40"
          />
          <StatCard
            icon={GraduationCap}
            label="Inactive Students"
            value="1200 (24.0%)"
            iconBg="bg-blue-100"
            iconColor="text-blue-500"
            cardBg="bg-blue-50/30"
          />
          <StatCard
            icon={GraduationCap}
            label="Suspended Students"
            value="600 (12.0%)"
            iconBg="bg-amber-100"
            iconColor="text-amber-500"
            cardBg="bg-amber-50/40"
          />
        </div>

        {/* Table Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Toolbar */}
          <div className="flex flex-wrap items-center gap-2.5 p-4 border-b border-gray-100">
            {/* Search */}
            <div className="relative flex-1 min-w-45">
              <Search
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search name, course, etc"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-300 transition-all"
              />
            </div>

            {/* Filter */}
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-50 transition-all">
              <Filter size={15} />
              Filter
              <ChevronDown size={13} />
            </button>

            <div className="ml-auto flex items-center gap-2.5">
              {/* Sort */}
              <div className="hidden sm:flex items-center gap-2 text-sm text-gray-500">
                <span>Sort by:</span>
                <button className="flex items-center gap-1.5 px-3 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all font-medium text-gray-700">
                  Popular <ChevronDown size={13} />
                </button>
              </div>

              {/* Add Student */}
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-white text-sm font-semibold transition-all hover:opacity-90 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #ec4899, #a855f7)",
                }}
              >
                <Plus size={15} />
                <span className="hidden sm:inline">Add Student</span>
                <span className="sm:hidden">Add</span>
              </button>
            </div>
          </div>

          {/* Table Header (desktop) */}
          <div className="hidden lg:grid grid-cols-[40px_1fr_80px_1.4fr_1fr_1fr_140px] gap-4 px-4 py-3 border-b border-gray-100 bg-gray-50/50">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 rounded accent-pink-500 cursor-pointer"
                checked={selected.length === students.length}
                onChange={toggleAll}
              />
            </div>
            {[
              "ID",
              "Name",
              "Enrollment Date",
              "Course",
              "Course Progress",
              "Performance",
              "Status",
            ].map((h) => (
              <button
                key={h}
                className="flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-gray-700 text-left"
              >
                {h} <ArrowUpDown size={11} className="opacity-50" />
              </button>
            ))}
          </div>

          {/* Table Header (tablet) */}
          <div className="hidden md:grid lg:hidden grid-cols-[1fr_1.5fr_1.5fr_1fr_1fr] gap-4 px-4 py-3 border-b border-gray-100 bg-gray-50/50">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 rounded accent-pink-500 cursor-pointer"
                checked={selected.length === students.length}
                onChange={toggleAll}
              />
            </div>
            {["Student", "Course", "Course Progress", "Performance"].map(
              (h) => (
                <button
                  key={h}
                  className="flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-gray-700 text-left"
                >
                  {h} <ArrowUpDown size={11} className="opacity-50" />
                </button>
              ),
            )}
          </div>

          {/* Mobile column headers */}
          <div className="md:hidden flex items-center gap-3 px-4 py-3 border-b border-gray-100 bg-gray-50/50">
            <input
              type="checkbox"
              className="w-4 h-4 rounded accent-pink-500 cursor-pointer"
              checked={selected.length === students.length}
              onChange={toggleAll}
            />
            <span className="text-xs font-semibold text-gray-500">Student</span>
            <span className="ml-auto text-xs font-semibold text-gray-500">
              Course
            </span>
          </div>

          {/* Rows */}
          <div className="divide-y divide-gray-50">
            {filtered.map((student) => {
              const isExpanded = expandedRows[student.id];
              return (
                <div
                  key={student.id}
                  className="hover:bg-gray-50/50 transition-colors"
                >
                  {/* Desktop Row */}
                  <div className="hidden lg:flex  gap-4 px-4 py-4 items-center justify-between">
                    <div className="flex items-center pt-1">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded accent-pink-500 cursor-pointer"
                        checked={selected.includes(student.id)}
                        onChange={() => toggleSelect(student.id)}
                      />
                    </div>
                    <Link to={'/Students/' + student.id} className="text-xs font-mono text-gray-400 pt-1 text-center">
                      <span>{student.id}</span>
                    </Link>
                    <Link to={'/Students/' + student.id} className="flex items-center gap-2.5">
                      <Avatar student={student} />
                      <div>
                        <p className="text-sm font-semibold text-gray-800">
                          {student.name}
                        </p>
                        <p className="text-xs text-gray-400">{student.email}</p>
                      </div>
                    </Link >
                    <Link to={'/Students/' + student.id} className="text-sm text-gray-600 pt-1 text-center">
                      <span>{student.enrolled}</span>
                    </Link >
                    <CourseCell
                      student={student}
                      expanded={isExpanded}
                      onToggle={() => toggleRow(student.id)}
                    />
                    <Link to={'/Students/' + student.id} className="pt-1">
                      <ProgressRing value={student.progress} />
                    </Link >
                    <Link to={'/Students/' + student.id} className="pt-1">
                      <span className="text-sm font-bold text-gray-800">
                        {student.performance}
                      </span>
                      <span className="text-xs text-gray-400">/100</span>
                    </Link >
                    <Link to={'/Students/' + student.id} className="pt-1">
                      <StatusBadge status={student.status} />
                    </Link >
                  </div>

                  {/* Tablet Row */}
                  <div className="hidden md:grid lg:hidden grid-cols-[40px_1.5fr_1.5fr_1fr_1fr] gap-4 px-4 py-4 items-start">
                    <div className="flex items-center pt-1">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded accent-pink-500 cursor-pointer"
                        checked={selected.includes(student.id)}
                        onChange={() => toggleSelect(student.id)}
                      />
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Avatar student={student} />
                      <div>
                        <p className="text-sm font-semibold text-gray-800">
                          {student.name}
                        </p>
                        <StatusBadge status={student.status} />
                        <p className="text-xs text-gray-400 mt-0.5">
                          {student.id} · {student.email}
                        </p>
                        <p className="text-xs text-gray-400">
                          Enrolled on {student.enrolled}
                        </p>
                      </div>
                    </div>
                    <CourseCell
                      student={student}
                      expanded={isExpanded}
                      onToggle={() => toggleRow(student.id)}
                    />
                    <div className="pt-1">
                      <ProgressRing value={student.progress} />
                    </div>
                    <div className="pt-1">
                      <span className="text-sm font-bold text-gray-800">
                        {student.performance}
                      </span>
                      <span className="text-xs text-gray-400">/100</span>
                    </div>
                  </div>

                  {/* Mobile Row */}
                  <div className="md:hidden flex items-start gap-3 px-4 py-3.5">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded accent-pink-500 cursor-pointer mt-1"
                      checked={selected.includes(student.id)}
                      onChange={() => toggleSelect(student.id)}
                    />
                    <Avatar student={student} size="md" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-sm font-semibold text-gray-800">
                          {student.name}
                        </p>
                        <StatusBadge status={student.status} />
                      </div>
                      <p className="text-xs text-gray-400">
                        {student.id} · {student.email}
                      </p>
                      <p className="text-xs text-gray-400">
                        Enrolled on {student.enrolled}
                      </p>
                    </div>
                    <div className="shrink-0 text-right">
                      <CourseCell
                        student={student}
                        expanded={isExpanded}
                        onToggle={() => toggleRow(student.id)}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          {/* <div className="flex items-center justify-between px-4 py-3.5 border-t border-gray-100 bg-gray-50/30">
            <p className="text-xs text-gray-500">Showing 1–12 of 567</p>
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 transition-all">
                <ChevronLeft size={15} />
              </button>
              {[1, 2, 3].map((n) => (
                <button
                  key={n}
                  className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-all
                        ${
                          n === currentPage
                            ? "text-white shadow-md"
                            : "text-gray-500 hover:bg-gray-100"
                        }`}
                  style={
                    n === currentPage
                      ? {
                          background:
                            "linear-gradient(135deg, #ec4899, #a855f7)",
                        }
                      : {}
                  }
                  onClick={() => setCurrentPage(n)}
                >
                  {n}
                </button>
              ))}
              <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 text-sm">
                ...
              </button>
              <button
                className="w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-100 transition-all"
                onClick={() => setCurrentPage(8)}
              >
                8
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 transition-all">
                <ChevronRight size={15} />
              </button>
            </div>
          </div> */}
        </div>
      </main>
    </div>
  );
}
