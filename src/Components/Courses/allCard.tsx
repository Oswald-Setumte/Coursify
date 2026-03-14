import { FileText, Timer, BarChart} from "lucide-react";

type cardProps = {
  cardName: string;
  cardImage: string;
  cardPrice: string;
  cardLevel: string;
  courseType: string;
  usersImg: string;
  numUsers: string;
};

export default function AllCard({
  cardName,
  cardImage,
  cardPrice,
  cardLevel,
  courseType,
  usersImg,
  numUsers,
}: cardProps) {
  return (
    <>
      <div className=" bg-gray-100 relative rounded-xl">
        <img src={cardImage} className="w-70 h-50 object-cover rounded-xl" />
        <div className=" flex items-center font-normal absolute top-3 left-3 bg-white px-1 rounded-md">
            <BarChart className="p-1 text-pink-300"/>
        <p className="text-sm ">
          {cardLevel}
        </p>
        </div>
        <div className="p-2">
          <div className="py-1 flex items-center">
            <p className="font-normal text-gray-400">{courseType}</p>
            <div className="flex items-center ml-auto">
              <div className="flex items-center">
                <FileText className="p-1 text-gray-400" />
                <p className="text-sm">20</p>
              </div>
              <div className="flex items-center">
                <Timer className="p-1 text-gray-400"/>
                <p className="text-sm">40H</p>
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-xl font-semibold py-2 ">{cardName}</p>
          </div>
          <div className="flex relative items-center">
            <img className="w-6 h-6 rounded-2xl" src={usersImg} />
            <img
              className="w-6 h-6 rounded-2xl absolute left-4"
              src={usersImg}
            />
            <img
              className="w-6 h-6 rounded-2xl absolute left-8"
              src={usersImg}
            />
            <p className="ml-10 ">{numUsers}</p>
            <p className="ml-auto text-2xl text-pink-400">{cardPrice}</p>
          </div>
        </div>
      </div>
    </>
  );
}
