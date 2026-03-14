import TopButtons from "../Components/Courses/leftBtn";
import CourseCards from "../Components/Courses/courseCards";
import ActiveCard from "../Components/Courses/activeCard";
export default function Courses() {
  return (
    <div className=" w-full">
      {/*main grid*/}
      <div className=" grid grid-cols-[1fr_1fr] gap-5 py-5">
        {/*LEFT*/}
        <div className="">
          <TopButtons />
          <CourseCards />
          <CourseCards />
          <CourseCards />
          <CourseCards />
          <CourseCards />
          <CourseCards />
          <CourseCards />
        </div>
        {/*RIGHT*/}
        <div className=" bg-white rounded-xl p-4">
          <ActiveCard />
        </div>
      </div>
    </div>
  );
}
