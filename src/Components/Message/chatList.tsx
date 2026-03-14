type UserCardProps = {
  profileImg: string;
  name: string;
  textNumber: number;
  text: string;
  time: string;
};

export default function UserCard({
  name,
  profileImg,
  textNumber,
  text,
  time,
}: UserCardProps) {
  return (
    <div className=" rounded-lg w-70 h-20 flex gap-2 p-2 hover:bg-pink-100 cursor-pointer">
      <img src={profileImg} className="w-12 h-12 object-cover rounded-md" />
      <div className="w-full">
        <div className="flex items-center justify-between w-full">
          <p className="text-sm font-bold">{name}</p>
          <p className="text-xs   text-amber-300">{time}</p>
        </div>

        <div className="flex items-center justify-between w-full py-2">
          <p className="text-xs text-gray-500">{text}</p>
          <p className="flex items-center justify-center text-xs text-gray-500  bg-amber-300 rounded-full w-3 h-3 p-2 ">
            {textNumber}
          </p>
        </div>
      </div>
    </div>
  );
}
