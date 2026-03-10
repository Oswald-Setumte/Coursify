import StatsCard from "../Components/Calendar/StatsCard";

const Calendar = () => {
  return (
    <section>
      {/* status cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 px-4">
        <StatsCard title="All Schedules" number={15} color="bg-gray-200" />
        <StatsCard title="Event Schedules" number={5} color="bg-pink-200" />
        <StatsCard title="Meeting Schedules" number={5} color="bg-yellow-200" />
        <StatsCard title="Workshop Schedules" number={5} color="bg-blue-200" />
      </div>
    </section>
  );
};

export default Calendar;
