import profile from "../../assets/user_profile.webp";
import { Dot, Bookmark, PlayCircle, Timer, Users2 } from "lucide-react";
import {} from "lucide-react";
export default function CourseCards() {
  return (
    <div className=" flex mt-6 gap-5 p-3.5 rounded-xl bg-white w-full">
      <img src={profile} className="w-40 h-30 rounded-xl " />
      <div className=" w-full">
        <div className=" flex py-1 items-center">
          <p className="text-gray-400">Design</p>
          <Dot size={20} className="text-gray-400" />
          <p className="text-blue-300">Beginner</p>
          <Bookmark size={20} className="ml-auto text-gray-400" />
        </div>
        <div className="">
          <p className="text-xl font-bold">Graphic Design Fundamentals</p>
        </div>
        <div className="flex mt-4.5 w-full">
          <div className="flex mt-2 gap-2">
            <div className=" bg-gray-100 flex gap-1 rounded-sm p-1 items-center text-sm">
              <PlayCircle size={15} />
              <p className="font-bold">20</p>
              <p className="text-gray-400">Lessons</p>
            </div>
            <div className="flex gap-1 p-1 bg-gray-100 rounded-sm items-center text-sm">
              <Timer size={15} />
              <p className="font-bold">40</p>
              <p className="text-gray-400">Hours</p>
            </div>
            <div className="flex gap-1 p-1 bg-gray-100 rounded-sm items-center text-sm">
              <Users2 size={15} />
              <p className="font-bold">320</p>
              <p className="text-gray-400">Enrolled</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
