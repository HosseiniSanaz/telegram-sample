import React, { useContext } from "react";
import ChatItem from "../chat-item";
import DKAvatar from "core/components/avatar/avatar";
import { Context } from "AppContext";
interface Props {
  chatItem?: ChatItem;
  isRepliedMessage?: boolean;
  onReply?: (repliedMessage: ChatItem) => void;
  className?: string;
}

const Chat = ({ chatItem, isRepliedMessage, onReply, className }: Props) => {
  const appContext = useContext(Context);

  return (
    <>
      {chatItem && (
        <div className={"d-flex justify-content-between p-3 " + className}>
          <div className="d-flex align-items-start">
            {!isRepliedMessage && (
              <DKAvatar
                className="mr-2"
                imageUrl={chatItem.sender?.profilePicture}
                pictureTextPlaceholder={chatItem.sender?.profilePictureTextPlaceholder}
                size={45}
                type="circle"
                onShowProfile={() => appContext?.actions.showProfile(true, chatItem.sender)}
                status={chatItem.sender?.status}
              />
            )}
            {isRepliedMessage && <span className="bullet bullet-bar tg-secondary align-self-stretch mr-3"></span>}
            <div className="d-flex flex-column">
              <div
                className="tg-user-text cursor-pointer"
                onClick={() => appContext?.actions.showProfile(true, chatItem.sender)}
              >
                <span className={"font-weight-bold font-size-lg tg-user-text-color "}>{chatItem.sender?.name}</span>
              </div>
              {chatItem.repliedTo && <Chat chatItem={chatItem.repliedTo} isRepliedMessage={true} />}
              <span
                className={
                  "font-size-md text-dark " + (isRepliedMessage ? "text-truncate d-inline-block" : "message-text")
                }
                style={isRepliedMessage ? { maxWidth: "400px" } : { maxWidth: "" }}
              >
                {chatItem.text}
              </span>
            </div>
          </div>
          {!isRepliedMessage && (
            <div className="d-flex flex-column align-items-end w-50">
              <span className={"font-weight-bold font-size-sm text-muted"}>{chatItem.sendDateTime}</span>
              <div
                className="symbol symbol-circle symbol-30 mt-3 cursor-pointer"
                onClick={() => onReply && onReply({ ...chatItem, repliedTo: undefined })}
              >
                <span className="symbol-label">
                  <i className=" fas fa-reply text-primary"></i>
                </span>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
export default Chat;
