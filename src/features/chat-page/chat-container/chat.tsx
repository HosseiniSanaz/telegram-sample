import React from "react";
import ChatItem from "../chat-item";
import DKAvatar from "core/components/avatar/avatar";
import { Link } from "react-router-dom";
interface Props {
  chatItem: ChatItem;
  isRepliedMessage?: boolean;
}

const Chat = ({ chatItem, isRepliedMessage }: Props) => {
  return (
    <div
      className={"d-flex justify-content-between p-3 "}
      //   onClick={() => setSelectedChatId(cm.user.id)}
    >
      <div className="d-flex align-items-start">
        {!isRepliedMessage && (
          <DKAvatar
            className="mr-2"
            imageUrl={chatItem.sender?.profilePicture}
            pictureTextPlaceholder={chatItem.sender?.profilePictureTextPlaceholder}
            size={45}
            type="circle"
          />
        )}
        {isRepliedMessage && <span className="bullet bullet-bar tg-secondary align-self-stretch mr-3"></span>}
        <div className="d-flex flex-column">
          <Link to={`/chat/${chatItem.sender?.username}`} className="tg-user-text">
            <span className={"font-weight-bold font-size-lg tg-user-text-color "}>{chatItem.sender?.name}</span>
          </Link>
          {chatItem.repliedTo && <Chat chatItem={chatItem.repliedTo} isRepliedMessage={true} />}
          <span
            className={"font-size-md text-dark " + (isRepliedMessage ? "text-truncate d-inline-block" : "message-text")}
            style={isRepliedMessage ? { maxWidth: "400px" } : { maxWidth: "" }}
          >
            {chatItem.text}
          </span>
        </div>
      </div>
      {!isRepliedMessage && (
        <div className="d-flex flex-column align-items-end w-50">
          <span className={"font-weight-bold font-size-sm text-muted"}>{chatItem.sendDateTime}</span>
        </div>
      )}
    </div>
  );
};
export default Chat;
