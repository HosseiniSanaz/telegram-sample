import React, { useEffect } from "react";
import { useService } from "hooks/useService";
import ChatPageServices from "../chat-page-services";
import ChatItem from "../chat-item";
import Chat from "./chat";
interface Props {
  username: string;
}

const ChatContainer = ({ username }: Props) => {
  const allChat = useService<ChatItem[]>(ChatPageServices.getChat(username));
  let messagesEnd: any;
  const scrollToBottom = (): void => {
    messagesEnd.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (allChat.status === "loaded") {
      if (allChat.payload?.length !== 0) scrollToBottom();
    }
  }, [allChat.status]);
  return (
    <div className="mr-2 h-450px card-scroll card-scroll-thick">
      <div className=" w-75 d-flex flex-column mx-auto">
        {allChat.status === "loaded" &&
          allChat.payload.map((chat, index) => {
            return <Chat chatItem={chat} key={index} />;
          })}
        <div
          style={{ float: "left", clear: "both" }}
          ref={el => {
            messagesEnd = el;
          }}
        ></div>
      </div>
    </div>
  );
};
export default ChatContainer;
