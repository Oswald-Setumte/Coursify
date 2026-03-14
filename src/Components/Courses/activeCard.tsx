import {
  Dot,
  PlayCircle,
  Timer,
  Users2,
  Star,
  Share2,
  Bookmark,
  Check,
  FileText,
} from "lucide-react";
import courseImg from "../../assets/logo.png";
import InstructorImg from "../../assets/user_profile.webp";

export default function ActiveCard() {
  return (
    <>
      <div className="flex p-2 items-center">
        <p className="text-gray-400 text-lg">Design</p>
        <Dot size={20} className="text-gray-400" />
        <p className="text-blue-300 text-lg">Beginner</p>
      </div>
      <div className="flex gap-5 items-center ">
        <p className="text-2xl font-bold">Graphic Design Fundamentals</p>
        <div className="bg-pink-50 p-1 flex items-center justify-center rounded-2xl gap-1">
          <div className="">
            <Dot size={20} className="text-pink-400" />
          </div>
          <div>
            <p className="mr-2">Active</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex mt-2 gap-2">
          <div className="flex gap-1 items-center">
            <Star className="text-amber-400 fill-amber-400" />
            <p className="text-gray-400">4.8</p>
            <p className="text-gray-400">{`(1,250 Reviwes)`}</p>
          </div>
          <div className="flex p-2">
            <div className="flex gap-1 rounded-sm p-1 items-center text-sm">
              <PlayCircle size={15} />
              <p className="font-bold">20</p>
              <p className="text-gray-400">Lessons</p>
            </div>
            <div className="flex gap-1 p-1 rounded-sm items-center text-sm">
              <Timer size={15} />
              <p className="font-bold">40</p>
              <p className="text-gray-400">Hours</p>
            </div>
            <div className="flex gap-1 p-1 rounded-sm items-center text-sm">
              <Users2 size={15} />
              <p className="font-bold">320</p>
              <p className="text-gray-400">Enrolled</p>
            </div>
          </div>
        </div>
        <div className="p-2">
          <img src={courseImg} className="w-full h-100" />
        </div>
        <div className=" flex items-center gap-2">
          <p>
            <img src={InstructorImg} className="w-10 h-10 rounded-full" />
          </p>
          <p>Huston Walmiller</p>
          <p className=" flex gap-2 p-2 ml-auto">
            <Share2 size={30} className="bg-gray-200 p-1 rounded-sm" />
            <Bookmark size={30} className="bg-gray-200 p-1 rounded-sm" />
          </p>
        </div>
      </div>

      <div>
        <p className="py-2 text-xl font-normal">About</p>
        <p className="tet-sm font-normal text-gray-400">
          This course provides a deep dive into bussiness analytics using
          Microsoft Excel. You will learn how to analyze data, create dynamic
          dashboards, and generate bussiness insights. By the end of this
          course, you'll be equipped with essential data-driven decision-making
          skills.{" "}
        </p>
      </div>
      <div className="py-2">
        <p className="py-2 text-xl font-normal">Features</p>
        <div className=" grid grid-cols-[1fr_1fr] tet-sm text-gray-400">
          <div className=" gap-2  p-2">
            <div className="flex gap-2">
              <Check size={25} className="text-pink-300" />
              <p className="font-normal text-sm">
                Hands-on project & real-world case studies
              </p>
            </div>
            <div className="flex gap-2 py-2">
              <Check size={25} className="text-pink-300" />
              <p className="font-normal text-sm">
                Hands-on project & real-world case studies
              </p>
            </div>
          </div>
          <div className=" gap-2  p-2">
            <div className="flex gap-2">
              <Check size={25} className="text-pink-300" />
              <p className="font-normal text-sm">
                Hands-on project & real-world case studies
              </p>
            </div>
            <div className="flex gap-2 py-2">
              <Check size={25} className="text-pink-300" />
              <p className="font-normal text-sm">
                Hands-on project & real-world case studies
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2">
        <p className="py-2 text-xl font-normal">Resources</p>
        <div className=" grid grid-cols-[1fr_1fr] tet-sm text-gray-400">
          <div className=" gap-2  p-2">
            <div className="flex gap-2">
              <PlayCircle size={20} className="text-gray-500" />
              <p className="text-blue-300 font-normal text-sm">
                Introdution to bussiness analytics.mp4
              </p>
            </div>
            <div className="flex gap-2 py-2">
              <PlayCircle size={25} className="text-gray-500" />
              <p className="text-blue-300 font-normal text-sm">
                Pivot Tables and Advance Excel Functio.mp4
              </p>
            </div>
            <div className="flex gap-2 py-2">
              <PlayCircle size={20} className="text-gray-500" />
              <p className="text-blue-300 font-normal text-sm">
                Creating Dynamic Dashboards.mp4
              </p>
            </div>
          </div>
          <div className="gap-2 p-2">
            <div className="flex gap-2">
              <FileText size={20} className="text-gray-500" />
              <p className="text-blue-300 font-normal text-sm">
                Course Syllabus.pdf
              </p>
            </div>
            <div className="flex gap-2 py-2">
              <FileText size={20} className="text-gray-500" />
              <p className="text-blue-300 font-normal text-sm">
                Excel Sample Datasets.xlsx
              </p>
            </div>
            <div className="flex gap-2 py-2">
              <FileText size={20} className="text-gray-500" />
              <p className="text-blue-300 font-normal text-sm">
                Bussiness Case Studies.pdf
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
