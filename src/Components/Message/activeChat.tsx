

type SelectedChatprops = {
  name: string;
  profileImg: string;
  lastSeen: string;
};

export default function SelectedChat({
  name,
  profileImg,
  lastSeen,
}: SelectedChatprops) {
  return (
    <>
      <img src={profileImg} className="w-10 h-10 rounded-xl mr-2 mt-2" />
      <div className="block py-2 ">
        <p className="font-bold">{name}</p>
        <p className="text-xs text-gray-500 mt-2">{lastSeen}</p>
      </div>
    </>
  );
}



