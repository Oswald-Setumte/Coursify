import { CheckCheck } from "lucide-react";

type MessageBubbleProps = {
  text: string;
  isMe: boolean;
  time: string;
  unread: boolean;
  profileImg: string;
};

function MessageBubble({
  text,
  time,
  unread,
  isMe,
  profileImg,
}: MessageBubbleProps) {
  return (
    <div className="w-full flex flex-col">
      {/* Message Row */}
      <div
        className={`flex w-full items-end ${
          isMe ? "justify-end" : "justify-start"
        }`}
      >
        {!isMe && (
          <img
            src={profileImg}
            className="w-10 h-10 rounded-md mb-1.5 object-cover mr-2"
          />
        )}

        <div
          className={`px-4 py-3 max-w-xs wrap-break-words shadow-sm ${
            isMe
              ? "bg-amber-300 text-white rounded-b-xl rounded-tl-xl"
              : "bg-pink-300 text-gray-800 rounded-b-xl rounded-tr-xl"
          }`}
        >
          <p className="text-sm leading-relaxed">{text}</p>
        </div>
      </div>

      {/* Timestamp */}
      <div
        className={`flex items-center gap-1 text-xs mt-1 w-full ${
          isMe ? "justify-end" : "justify-start pl-11"
        }`}
      >
        <span className="text-gray-500">{time}</span>

        {isMe && (
          <span className="ml-1">
            <CheckCheck
              size={15}
              className={unread ? "text-gray-400" : "text-blue-600"}
            />
          </span>
        )}
      </div>
    </div>
  );
}

export default MessageBubble;