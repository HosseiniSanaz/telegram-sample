import React, { useEffect, useState } from "react";
import { useService } from "hooks/useService";
import ChatPageServices from "../chat-page-services";
import ChatItem from "../chat-item";
import Chat from "./chat";
interface Props {
  username: string;
  newMessage?: ChatItem;
  onReply: (repliedMessage: ChatItem) => void;
}

const ChatContainer = ({ username, newMessage, onReply }: Props) => {
  const [chats, setChats] = useState<ChatItem[]>([]);
  const allChat = useService<ChatItem[]>(ChatPageServices.getChat(username));
  let messagesEnd: any;
  const scrollToBottom = (): void => {
    messagesEnd.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (allChat.status === "loaded") {
      setChats(allChat.payload);
    }
  }, [allChat.status]);
  useEffect(() => {
    if (newMessage) setChats([...chats, newMessage]);
  }, [JSON.stringify(newMessage)]);
  useEffect(() => {
    scrollToBottom();
  }, [JSON.stringify(chats)]);

  return (
    <div className="mr-2 h-450px card-scroll card-scroll-thick">
      <div className=" w-75 d-flex flex-column mx-auto">
        {allChat.status === "loaded" &&
          chats.map((chat, index) => {
            return <Chat chatItem={chat} key={index} onReply={onReply} />;
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
