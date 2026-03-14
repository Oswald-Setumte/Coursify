import UserCard from "../Components/Message/chatList";
import SearchList from "../Components/Message/searchList";
import SelectedChat from "../Components/Message/activeChat";
import ActionButtons from "../Components/Message/actionBtn";
import ChatInput from "../Components/Message/chatInput";
import MessageBubble from "../Components/Message/mainChat";
import AccountInfo from "../Components/Message/accountInfo";
import avatar from "../assets/user_profile.webp";


export default function Messages() {
  return (
    //main container
    <div className="py-3 rounded-lg">
      {/*main grid*/}

      <div className=" grid grid-cols-[1fr_3fr_1fr] rounded-xl min-h-screen bg-white mr-4">
        {/*LEFT*/}
        <div className=" rounded-l-2xl p-2 grid grid-rows-[0.1fr_2fr] gap-2">
          <SearchList />

          {/*Chat List*/}

          <div className="">
            <UserCard
              name="Emma Johnson"
              profileImg={avatar}
              textNumber={1}
              text="how are you?"
              time="10:30 AM"
            />
            <UserCard
              name="Emma Johnson"
              profileImg={avatar}
              textNumber={2}
              text="Hello, how are you?"
              time="10:30 AM"
            />
            <UserCard
              name="Emma Johnson"
              profileImg={avatar}
              textNumber={1}
              text="Hello, how are you?"
              time="10:30 AM"
            />
            <UserCard
              name="Emma Johnson"
              profileImg={avatar}
              textNumber={1}
              text="Hello, how are you?"
              time="10:30 AM"
            />
            <UserCard
              name="Emma Johnson"
              profileImg={avatar}
              textNumber={99}
              text="Hello, how are you?"
              time="10:30 AM"
            />
            <UserCard
              name="Emma Johnson"
              profileImg={avatar}
              textNumber={5}
              text="Hello, how are you?"
              time="10:30 AM"
            />
          </div>
        </div>
        {/*MIDDLE*/}
        <div className=" grid grid-row-3 mt-3 mb-">
          <div className=" row-span-15 rounded-2xl p-2 bg-blue-200/30 flex  relative">
            <div className="grid grid-cols-[2fr_1fr] mt-2 bg-white absolute rounded-xl w-[96%] h-15 top-0 ">
              <div className="flex px-3 gap-1.5">
                <SelectedChat
                  name="Emma Johnson"
                  profileImg={avatar}
                  lastSeen="last seen recently"
                />
              </div>

              <div className="flex items-center justify-end gap-2 p-2 ">
                <ActionButtons />
              </div>
            </div>
            {/* messages */}
            <div className="w-full justify-end h-[90%] flex flex-col gap-2 p-1 ">
              <MessageBubble
                text={"Hello, how are you?"}
                isMe={true}
                time={"10:30 AM"}
                unread={false}
                profileImg={avatar}
              />
              <MessageBubble
                text={"Hello, how are you?"}
                isMe={false}
                time={"10:30 AM"}
                unread={false}
                profileImg={avatar}
              />
              <MessageBubble
                text={
                  "Tech enthusiast and online learners, currently taking Javascript Essentials. Interested in front-end development"
                }
                isMe={true}
                time={"10:30 AM"}
                unread={false}
                profileImg={avatar}
              />
              <MessageBubble
                text={
                  "Tech enthusiast and online learners, currently taking Javascript Essentials. Interested in front-end development"
                }
                isMe={false}
                time={"10:30 AM"}
                unread={false}
                profileImg={avatar}
              />
              <MessageBubble
                text={
                  "Tech enthusiast and online learners, currently taking Javascript Essentials. Interested in front-end development"
                }
                isMe={true}
                time={"10:30 AM"}
                unread={false}
                profileImg={avatar}
              />
              <MessageBubble
                text={
                  "Tech enthusiast and online learners, currently taking Javascript Essentials. Interested in front-end development"
                }
                isMe={false}
                time={"10:30 AM"}
                unread={false}
                profileImg={avatar}
              />
              <MessageBubble
                text={"Hello, how are you?"}
                isMe={true}
                time={"10:30 AM"}
                unread={true}
                profileImg={" "}
              />
            </div>
            {/*Type area*/}
            <div className=" w-[95%] bg-white absolute bottom-3 rounded-xl h-14 ">
              {ChatInput()}
            </div>
          </div>
        </div>

        {/*RIGHT*/}
        <div className="w-full rounded-r-2xl flex bg-white">
          <AccountInfo
            name="Emma Johnson"
            profileImg={avatar}
            lastSeen="last seen recently"
            about="Tech enthusiast and online learners, currently taking Javascript Essentials. Interested in front-end development"
            Count={5}
            mediaItems={[
              { index: 1, item: avatar },
              { index: 2, item: avatar },
              { index: 3, item: avatar },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
