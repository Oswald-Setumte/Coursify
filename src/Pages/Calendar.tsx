import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import StatsCard from "../Components/Calendar/StatsCard";
import { CalendarDays, Clock, LocationEdit, X } from "lucide-react";
import { useState, type ChangeEvent } from "react";

function renderEvent(eventInfo: any) {
  const colors = {
    meeting: "bg-yellow-200",
    event: "bg-pink-200",
    workshop: "bg-blue-200",
  };
  const { time, avatars, category } = eventInfo.event.extendedProps;
  const color = colors[category] || "bg-gray-200";
  return (
    <div
      className={`flex flex-col gap-2 p-2 rounded-lg ${color} text-gray-600 text-wrap `}
    >
      <div>
        <p className="text-sm">{eventInfo.event.title}</p>
        <p className="text-xs">{time}</p>
      </div>

      <div className="flex gap-2">
        {avatars?.map((avatar: string) => (
          <img src={avatar} className="rounded-full w-6 h-6" key={avatar} />
        ))}
      </div>
    </div>
  );
}

const Calendar = () => {
  const rawEventsData = [
    {
      title: "Digital Marketing Workshop",
      date: "2026-03-15",
      extendedProps: {
        category: "workshop",
        time: "10:00",
        avatars: [
          "https://www.mamp.one/wp-content/uploads/2024/09/image-resources2.jpg",
        ],
      },
    },
    {
      title: "Weekly standup meeting",
      date: "2026-03-17",
      extendedProps: {
        category: "meeting",
        time: "14:00",
        avatars: ["https://randomuser.me/api/portraits/men/32.jpg"],
      },
    },
    {
      title: "UI/UX Design Principles",
      date: "2026-03-19",
      extendedProps: {
        category: "workshop",
        time: "16:00",
        avatars: ["https://randomuser.me/api/portraits/women/44.jpg"],
      },
    },
  ];
  const [events] = useState(rawEventsData); // original events
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const eventTitles = Array.from(
    new Set(rawEventsData.map((event) => event.title)),
  );
  const eventCategories = Array.from(
    new Set(rawEventsData.map((event) => event.extendedProps.category)),
  );

  function handleFilterChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.id;
    const checked = event.target.checked;

    setActiveFilters((prev) => {
      const nextFilters = checked
        ? prev.includes(value)
          ? prev
          : [...prev, value]
        : prev.filter((filter) => filter !== value);

      const nextEvents =
        nextFilters.length === 0
          ? events
          : events.filter(
              (e) =>
                nextFilters.includes(e.title) ||
                nextFilters.includes(e.extendedProps.category),
            );

      setFilteredEvents(nextEvents);
      return nextFilters;
    });
  }

  return (
    <section className="">
      {/* status cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4 lg:px-4 px-15 ">
        <StatsCard title="All Schedules" number={15} color="bg-gray-200" />
        <StatsCard title="Event Schedules" number={5} color="bg-pink-200" />
        <StatsCard title="Meeting Schedules" number={5} color="bg-yellow-200" />
        <StatsCard title="Workshop Schedules" number={5} color="bg-blue-200" />
      </div>

      <main className="bg-white rounded-2xl mt-4 mx-4 flex gap-4 px-4 py-4 overflow-x-auto">
        {/* filter */}
        <div className="hidden lg:flex flex-col flex-[0.9]">
          <div className="flex items-center justify-between border-b border-gray-300">
            <h3 className="text-lg font-medium mb-2">Filter</h3>
            <button className="">
              <X size={20} />
            </button>
          </div>

          {/* check boxes */}
          <div className="flex flex-col gap-4 mt-4 border-b border-gray-300 pb-4">
            {eventTitles.map((title, index) => {
              return (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={title}
                    className="accent-pink-400"
                    onChange={handleFilterChange}
                    checked={activeFilters.includes(title)}
                  />
                  <label htmlFor={title} className="text-sm text-gray-500">
                    {title}
                  </label>
                </div>
              );
            })}
          </div>

          {/* cateories */}
          <div className="flex flex-col gap-4 mt-4">
            <h3 className="text-lg font-medium mb-2">Category</h3>
            {eventCategories.map((category, index) => {
              return (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={category}
                    className="accent-pink-400"
                    onChange={handleFilterChange}
                    checked={activeFilters.includes(category)}
                  />
                  <label htmlFor={category} className="text-sm text-gray-500">
                    {category}
                  </label>
                </div>
              );
            })}
          </div>
        </div>

        {/* calendar */}
        <div className="flex-3 min-w-150">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin]}
            initialView="dayGridMonth"
            events={filteredEvents.length > 0 ? filteredEvents : events}
            eventContent={renderEvent}
            height="auto"
            headerToolbar={{
              left: "title",
              center: "prev,next",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
          />
        </div>
        {/* shcedule details */}
        <div className="hidden lg:flex flex-col flex-1 ">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium mb-2">Schedule Details</h3>
            <button className="">
              <X size={20} />
            </button>
          </div>

          {/* meeting */}
          <div className="flex flex-col gap-4 mt-4 bg-yellow-200/50 p-4 rounded-2xl">
            <p className="bg-yellow-300 text-sm py-1 px-2 rounded-lg">
              Meeting
            </p>
            <h2 className="text-lg font-bold">Quarterly Review</h2>

            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-2 text-gray-500">
                <CalendarDays size={15} />
                <p className="text-xs">March 15, 2026</p>
              </div>

              <div className="flex items-center gap-2 text-gray-500">
                <Clock size={15} />
                <p className="text-xs">03 : 30 PM</p>
              </div>

              <div className="flex items-center gap-2 text-gray-500">
                <LocationEdit size={15} />
                <p className="text-xs">Conference Room B</p>
              </div>
            </div>

            {/* team */}
            <div>
              <h3 className="text-sm font-medium mb-1">Team</h3>
              <div className="flex items-center gap-2">
                <img
                  src={"https://randomuser.me/api/portraits/women/30.jpg"}
                  className="w-7 h-7 rounded-full"
                />
                <p className="text-xs">John Doe</p>
              </div>

              <div className="flex items-center gap-2 my-1">
                <img
                  src={"https://randomuser.me/api/portraits/women/44.jpg"}
                  className="w-7 h-7 rounded-full"
                />
                <img
                  src={"https://randomuser.me/api/portraits/women/45.jpg"}
                  className="w-7 h-7 rounded-full"
                />
                <img
                  src={"https://randomuser.me/api/portraits/women/46.jpg"}
                  className="w-7 h-7 rounded-full"
                />
              </div>
            </div>

            {/* note */}
            <div className="flex flex-col mt-2">
              <p className="text-sm text-gray-800">Note</p>
              <p className="text-xs text-gray-600">
                This is a sample note. You can add more details about the
                schedule.
              </p>
            </div>
          </div>

          {/* workshop */}
          <div className="flex flex-col gap-4 mt-4 bg-blue-200/50 p-4 rounded-2xl">
            <p className="bg-blue-300 text-sm py-1 px-2 rounded-lg">Workshop</p>
            <h2 className="text-lg font-bold">Public Speaking Workshop</h2>

            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-2 text-gray-500">
                <CalendarDays size={15} />
                <p className="text-xs">March 15, 2026</p>
              </div>

              <div className="flex items-center gap-2 text-gray-500">
                <Clock size={15} />
                <p className="text-xs">03 : 30 PM</p>
              </div>

              <div className="flex items-center gap-2 text-gray-500">
                <LocationEdit size={15} />
                <p className="text-xs">Conference Room B</p>
              </div>
            </div>

            {/* team */}
            <div>
              <h3 className="text-sm font-medium mb-1">Team</h3>
              <div className="flex items-center gap-2">
                <img
                  src={"https://randomuser.me/api/portraits/women/30.jpg"}
                  className="w-7 h-7 rounded-full"
                />
                <p className="text-xs">John Doe</p>
              </div>

              <div className="flex items-center gap-2 my-1">
                <img
                  src={"https://randomuser.me/api/portraits/women/44.jpg"}
                  className="w-7 h-7 rounded-full"
                />
                <img
                  src={"https://randomuser.me/api/portraits/women/45.jpg"}
                  className="w-7 h-7 rounded-full"
                />
                <img
                  src={"https://randomuser.me/api/portraits/women/46.jpg"}
                  className="w-7 h-7 rounded-full"
                />
              </div>
            </div>

            {/* note */}
            <div className="flex flex-col mt-2">
              <p className="text-sm text-gray-800">Note</p>
              <p className="text-xs text-gray-600">
                This is a sample note. You can add more details about the
                schedule.
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Calendar;
