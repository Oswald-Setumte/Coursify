import { Video, Phone, MoreHorizontal } from "lucide-react";
export default function ActionButtons() {
  return (
    <>
      <button className=" p-2 text-gray-600 cursor-pointer">
        <Video size={20} />
      </button>
      <button className="  p-2 text-gray-600 cursor-pointer">
        <Phone size={20} />
      </button>
      <button className=" p-2 text-gray-600 cursor-pointer">
        <MoreHorizontal size={20} />
      </button>
    </>
  );
}
