import MiniChart from "./MiniChart";


const StatsCard = ({ title = 'All Schedules', number = 0, color = '' }) => {
  return (
    <div className="bg-white rounded-xl shadow max-w-50px">
      <div className={` ${color} py-2 px-4 rounded-t-xl`}>
        <p className="text-gray-500">{title}</p>
      </div>

      <div className="flex items-center justify-between p-4">
        {/*  number of agenda */} 
        <div className="flex gap-2 items-center">
          <h3 className="text-2xl font-bold">{number}</h3>
          <p className="text-gray-400">Agenda</p>
        </div>

        {/* mini chart */}
        <MiniChart />
      </div>
    </div>
  );
};

export default StatsCard;


// npm install @fullcalendar/react @fullcalendar/daygrid @fullcalendar/timegrid