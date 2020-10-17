import React, { useEffect, useState } from "react";
import UserInfoItem from "entities/user-info-item";
import ChatContainer from "./chat-container/chat-container";
import MessageBox from "./message-box";
import "./chat-page.scss";
import ChatItem from "./chat-item";
import ChatUtil from "utilities/chat-utilities";
interface Props {
  username?: string;
}

const ChatPage = ({ username }: Props) => {
  const [targetUser, setTargetUser] = useState<UserInfoItem>({
    id: 0,
    name: "Sanaz",
    profilePictureTextPlaceholder: "SH",
    type: "User",
    username: "",
  });

  const [newMessage, setNewMessage] = useState<ChatItem>();
  const [replyMessage, setReplyMessage] = useState<ChatItem>();
  useEffect(() => {
    setTargetUser(ChatUtil.getCurrentUser(username));
  }, [username]);
  const getMessage = (message: ChatItem) => {
    setNewMessage(message);
  };
  const removeReply = () => {
    setReplyMessage(undefined);
  };
  return (
    <div className="h-100">
      {!Boolean(username) && (
        <div className="h-100 d-flex justify-content-center align-items-center">
          <span className="text-muted font-size-lg">Please select a chat to start messaging</span>
        </div>
      )}
      {Boolean(username) && Boolean(targetUser.username) && (
        <>
          <ChatContainer username={username || targetUser.username} newMessage={newMessage} onReply={setReplyMessage} />

          <MessageBox
            targetUser={targetUser}
            sendMessage={getMessage}
            repliedToMessage={replyMessage}
            removeReply={removeReply}
          />
        </>
      )}
    </div>
  );
};
export default ChatPage;
