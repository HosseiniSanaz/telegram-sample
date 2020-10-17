import React, { useState } from "react";
import UserInfoItem from "entities/user-info-item";
import ChatContainer from "./chat-container/chat-container";
import MessageBox from "./message-box";
import "./chat-page.scss";
import ChatItem from "./chat-item";

interface Props {
  username?: string;
}

const ChatPage = ({ username }: Props) => {
  const targetUser: UserInfoItem = {
    id: 1,
    name: "Sanaz",
    telephoneNumber: "09129619007",
    status: "last seen recently",
    profilePicture:
      "data:image/jpeg;base64,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",
    profilePictureTextPlaceholder: "SH",
    type: "User",
    username: "74fdjvhbhj45y738",
  };

  const [newMessage, setNewMessage] = useState<ChatItem>();
  const getMessage = (message: ChatItem) => {
    setNewMessage(message);
  };
  return (
    <div className="h-100">
      {!Boolean(username) && (
        <div className="h-100 d-flex justify-content-center align-items-center">
          <span className="text-muted font-size-lg">Please select a chat to start messaging</span>
        </div>
      )}
      {Boolean(username) && (
        <>
          <ChatContainer username={username || targetUser.username} newMessage={newMessage} />
          <MessageBox targetUser={targetUser} sendMessage={getMessage} />
        </>
      )}
    </div>
  );
};
export default ChatPage;
