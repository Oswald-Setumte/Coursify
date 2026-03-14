import { Edit, Info, X, Image, FileText, Link } from "lucide-react";

type InfoCardProps = {
  profileImg: string;
  name: string;
  lastSeen: string;
  about: string;
  Count: number;
  mediaItems: {
    index: number;
    item: string;
  }[];
};

export default function AccountInfo({
  profileImg,
  name,
  lastSeen,
  about,
  Count,
  mediaItems,
}: InfoCardProps) {
  return (
    <div className="p-4 w-full">
      <div className="w-full flex items-center justify-between">
        <p className="text-lg font-bold">Account Info</p>
        <X size={19} />
      </div>

      <div className="flex flex-col items-center gap-1 mt-8">
        <img src={profileImg} className=" w-20 h-20 object-cover rounded-xl" />
        <div className=" w-full flex gap-2 items-center justify-center">
          <p className="text-lg">{name}</p>
          <Edit size={15} />
        </div>
        <p className="text-sm mb-1 text-gray-400">{lastSeen}</p>
      </div>

      <div className="mt-4 flex gap-2 items-center">
        <Info size={15} />
        <span className="text-sm font-normal">About</span>
      </div>
      <div className="mt-2 text-gray-400 p-3 text-sm">
        <p className="font-normal">{about}</p>
      </div>
      <div className="mt-4 flex gap-2 items-center">
        <Image size={15} />
        <p className="text-sm font-normal">Media</p>
        <p className="font-normal">{`(${Count})`}</p>
        <button className="text-blue-500 hover:underline ml-auto text-sm">
          Show All
        </button>
      </div>
      <div className="flex items-center font-normal bg-gray-200 rounded-xl mt-3">
        <button type="button" className="p-3 hover:bg-blue-200 rounded-xl">
          Image{` (${Count})`}
        </button>
        <button type="button" className="p-3 px- hover:bg-blue-200 rounded-xl">
          Video
        </button>
        <button type="button" className="p-3 px-4 hover:bg-blue-200 rounded-xl">
          Audio
        </button>
      </div>
      <div className="w-full">
        {mediaItems && (
          <div className="mt-2 grid grid-cols-[1fr_1fr_1fr] gap-2">
            {mediaItems.map((item, index) => (
              <img
                key={index}
                src={item.item}
                alt={`Media ${index + 1}`}
                className=" w-full h-20 object-cover rounded-xl"
              />
            ))}
          </div>
        )}
      </div>
      {/* Documents Section */}
      <div>
        <div className="mt-4 mb-2 flex gap-2 items-center">
          <FileText size={15} />
          <p className="text-sm">Doument</p>
          <p className="">{`(${Count})`}</p>
          <button className="text-blue-500 hover:underline ml-auto text-sm">
            Show All
          </button>
        </div>
        <div className="w-full flex flex-col gap-2 rounded-xl">
          {/* Document items would go here */}
          <div className="flex gap-2 p-2 items-center bg-gray-100">
            <p className="bg-pink-400 p-2 rounded-lg">
              <FileText size={20} />
            </p>
            <p>login_error_report... </p>
          </div>
          <div className="flex gap-2 p-2 items-center bg-gray-100">
            <p className="bg-pink-400 p-2 rounded-lg">
              <FileText size={15} />
            </p>
            <p>login_error_report... </p>
          </div>
          <div className="flex gap-2 p-2 items-center  bg-gray-100">
            <p className="bg-amber-400 p-2 rounded-lg">
              <FileText size={15} />
            </p>
            <p>login_error_report... </p>
          </div>
        </div>
      </div>

      {/* links */}
      <div>
        <div className="mt-4 mb-2 flex gap-2 items-center">
          <Link size={15} />
          <p className="text-sm">Links</p>
          <p className="">{`(${Count})`}</p>
          <button className="text-blue-500 hover:underline ml-auto text-sm">
            Show All
          </button>
        </div>
        <div className="flex gap-2 p-2 items-center">
          <a href="#" className="text-pink-400">
            https://www.coursify.com
          </a>
          <p className="bg-gray-100 p-2 rounded-lg ml-auto">
            <Link size={15} />
          </p>
        </div>
        <div className="flex gap-2 p-2 items-center">
          <a href="#" className="text-pink-400">
            https://www.coursify.com
          </a>
          <p className="bg-gray-100 p-2 rounded-lg ml-auto">
            <Link size={15} />
          </p>
        </div>
        <div className="flex gap-2 p-2 items-center">
          <a href="#" className="text-pink-400">
            https://www.coursify.com
          </a>
          <p className="bg-gray-100 p-2 rounded-lg ml-auto">
            <Link size={15} />
          </p>
        </div>
      </div>
    </div>
  );
}
