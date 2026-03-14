  import {
    Paperclip,
    Send,
    Smile,

  } from "lucide-react";

  export default function ChatInput() {
    return (
      <div className="relative mt-2">
        {/* Emoji Picker */}

        <div className="absolute bottom-12 right-0 z-10"></div>
        <form className="flex items-center">
          {/* Emoji Button */}
          <button
            type="button"
            className="p-2 rounded-full ml-2 hover:bg-gray-200 "
          >
            <Smile size={20} />
          </button>

          {/* Input */}
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 rounded-lg px-3 py-2 mx-1 cursor-pointer focus:outline-none"
          />

          <button
            type="submit"
            className="px-2 py-2 text-black rounded-lg cursor-pointer hover:bg-gray-200"
          >
            <Paperclip size={20} />
          </button>
          {/* Send Button */}
          <button
            type="submit"
            className="px-2 py-2 bg-blue-200 text-black rounded-lg mr-2 cursor-pointer"
          >
            <Send size={20} className="rotate-45 mr-1" />
          </button>
        </form>
      </div>
    );
  }
