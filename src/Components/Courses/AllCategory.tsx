import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import TopButtons from "./leftBtn";
import AllCard from "./allCard";
import cardImage from "../../assets/user_profile.webp";

export default function AllCategories() {
  return (
    <div className="  mt-4 grid gap-5 grid-row-3">
      <div className=" grid grid-cols-3 gap-4">
        {/*Course Category */}
        <div className=" grid grid-row-2 bg-white">
          <div className=" flex items-center p-1">
            <p className="text-xl">Courses by Category</p>
            <div className="bg-gray-200 rounded-md flex ml-auto items-center p-1 ">
              <p className="text-sm font-normal px-1">This Week</p>
              <ChevronDown className="p-1" />
            </div>
          </div>
          <div className=" grid grid-cols-3">
            <div className="">
              <div className="flex gap-6">
    
              </div>
            </div>
            <div className=""></div>
            <div className="">T</div>
          </div>
        </div>

        {/*Course Rating */}
        <div className=" bg-white">W</div>

        {/*Web Development Detail */}
        <div className=" bg-white">E</div>
      </div>

      {/*All course cards */}
      <div className="mb-3 bg-white rounded-xl w-full p-4">
        <TopButtons />
        <div className="gap-3 py-3 grid grid-cols-4  grid-rows-2 w-full">
          <AllCard
            cardImage={cardImage}
            courseType="Web Develeopment"
            cardName="Graphic Desiging"
            cardPrice="$99"
            cardLevel="Beginner"
            usersImg={cardImage}
            numUsers="227+"
          />
          <AllCard
            cardImage={cardImage}
            courseType="Web Develeopment"
            cardName="Graphic Desiging"
            cardPrice="$99"
            cardLevel="Beginner"
            usersImg={cardImage}
            numUsers="227+"
          />
          <AllCard
            cardImage={cardImage}
            courseType="Web Develeopment"
            cardName="Graphic Desiging"
            cardPrice="$99"
            cardLevel="Beginner"
            usersImg={cardImage}
            numUsers="227+"
          />
          <AllCard
            cardImage={cardImage}
            courseType="Web Develeopment"
            cardName="Graphic Desiging"
            cardPrice="$99"
            cardLevel="Beginner"
            usersImg={cardImage}
            numUsers="227+"
          />
          <AllCard
            cardImage={cardImage}
            courseType="Web Develeopment"
            cardName="Graphic Desiging"
            cardPrice="$99"
            cardLevel="Beginner"
            usersImg={cardImage}
            numUsers="227+"
          />
          <AllCard
            cardImage={cardImage}
            courseType="Web Develeopment"
            cardName="Graphic Desiging"
            cardPrice="$99"
            cardLevel="Beginner"
            usersImg={cardImage}
            numUsers="227+"
          />
          <AllCard
            cardImage={cardImage}
            courseType="Web Develeopment"
            cardName="Graphic Desiging"
            cardPrice="$99"
            cardLevel="Beginner"
            usersImg={cardImage}
            numUsers="227+"
          />
          <AllCard
            cardImage={cardImage}
            courseType="Web Develeopment"
            cardName="Graphic Desiging"
            cardPrice="$99"
            cardLevel="Beginner"
            usersImg={cardImage}
            numUsers="227+"
          />
        </div>
        <div className="text-xs font-normal flex py-1 mt-1">
          <p>Showing 1-8 of 64</p>
          <div className="flex ml-auto gap-2">
            <ChevronLeft className="w-8 h-8 p-2 rounded-md  bg-gray-200 "/>
            <button className=" px-3 rounded-md text-xs bg-blue-200">1</button>
            <button className=" px-3 rounded-md text-xs  hover:bg-gray-200">2</button>
            <button className=" px-3 rounded-md text-xs  hover:bg-gray-200">3</button>
            <button className=" px-3 rounded-md  hover:bg-gray-200">...</button>
            <button className=" px-3 rounded-md text-xs  hover:bg-gray-200">8</button>
            <ChevronRight  className="w-8 h-8 p-2 rounded-md hover:bg-gray-200  "/>
          </div>
        </div>
      </div>
    </div>
  );
}