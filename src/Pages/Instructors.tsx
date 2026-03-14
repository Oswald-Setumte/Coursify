import { useState } from "react";
import InstructorCard from "../Components/Instructors/InstructorCard";
import type { Instructor } from "../Components/Instructors/InstructorCard";
import InstructorHeader from "../Components/Instructors/InstructorHeader";

const instructors = [
  {
    id: "INS-001",
    name: "Elise Wong",
    course: "Graphic Design Fundamentals",
    type: "Full Time",
    email: "elise.wong@email.com",
    phone: "+1 555-1234",
    avatar: "https://i.pravatar.cc/150?img=47",
    avatarBg: "#F5E6D3",
  },
  {
    id: "INS-002",
    name: "Fabricio Conrad",
    course: "Digital Marketing Mastery",
    type: "Part Time",
    email: "fabricio.conrad@email.com",
    phone: "+1 555-5678",
    avatar: "https://i.pravatar.cc/150?img=12",
    avatarBg: "#E8D5F5",
  },
  {
    id: "INS-003",
    name: "Gina Alexander",
    course: "Python for Beginners",
    type: "Contract",
    email: "gina.alexander@email.com",
    phone: "+1 555-9101",
    avatar: "https://i.pravatar.cc/150?img=32",
    avatarBg: "#D5E8F5",
  },
  {
    id: "INS-004",
    name: "Huston Walmiller",
    course: "Business Analytics with Excel",
    type: "Full Time",
    email: "huston.walmiller@email.com",
    phone: "+1 555-1122",
    avatar: "https://i.pravatar.cc/150?img=53",
    avatarBg: "#F5D5D5",
  },
  {
    id: "INS-005",
    name: "Ivan Sonodar",
    course: "Fitness for Beginners",
    type: "Part Time",
    email: "ivan.sonodar@email.com",
    phone: "+1 555-3344",
    avatar: "https://i.pravatar.cc/150?img=15",
    avatarBg: "#D5F5E8",
  },
  {
    id: "INS-006",
    name: "Jacqueline Hart",
    course: "UI/UX Design Basics",
    type: "Full Time",
    email: "jacqueline.hart@email.com",
    phone: "+1 555-5566",
    avatar: "https://i.pravatar.cc/150?img=44",
    avatarBg: "#F5F0D5",
  },
  {
    id: "INS-007",
    name: "Lizbeth Moore",
    course: "Front Design Report",
    type: "Contract",
    email: "lizbeth.moore@email.com",
    phone: "+1 555-7788",
    avatar: "https://i.pravatar.cc/150?img=36",
    avatarBg: "#E8D5F5",
  },
  {
    id: "INS-008",
    name: "Mason James",
    course: "Introduction to JavaScript",
    type: "Full Time",
    email: "mason.james@email.com",
    phone: "+1 555-9900",
    avatar: "https://i.pravatar.cc/150?img=57",
    avatarBg: "#D5EAF5",
  },
  {
    id: "INS-009",
    name: "Navin Singh",
    course: "Data Science for Beginners",
    type: "Full Time",
    email: "navin.singh@email.com",
    phone: "+1 555-2233",
    avatar: "https://i.pravatar.cc/150?img=8",
    avatarBg: "#F5E6D3",
  },
  {
    id: "INS-010",
    name: "Timothy Wages",
    course: "Advanced Excel for Data Analysis",
    type: "Contract",
    email: "timothy.wages@email.com",
    phone: "+1 555-4455",
    avatar: "https://i.pravatar.cc/150?img=18",
    avatarBg: "#E8F5D5",
  },
  {
    id: "INS-011",
    name: "Usiyo Miya",
    course: "Introduction to Machine Learning",
    type: "Full Time",
    email: "usiyo.miya@email.com",
    phone: "+1 555-6677",
    avatar: "https://i.pravatar.cc/150?img=40",
    avatarBg: "#D5F0F5",
  },
  {
    id: "INS-012",
    name: "Vera Wang",
    course: "Brand Strategy & Identity Design",
    type: "Part Time",
    email: "vera.wang@email.com",
    phone: "+1 555-8899",
    avatar: "https://i.pravatar.cc/150?img=48",
    avatarBg: "#F5D5E8",
  },
];
const Instructors = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = instructors.filter((i) => {
    const matchFilter = activeFilter === "All" || i.type === activeFilter;
    const matchSearch =
      search === "" ||
      i.name.toLowerCase().includes(search.toLowerCase()) ||
      i.course.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });
  return (
    <section className="p-6">
      <InstructorHeader
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        search={search}
        setSearch={setSearch}
        filtered={filtered}
      />
      {/* Instructors */}
      <div className="min-h-[70vh]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((instructor: Instructor) => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400 text-sm h-[70vh]">
            No instructors found matching your search.
          </div>
        )}
      </div>
    </section>
  );
};

export default Instructors;
