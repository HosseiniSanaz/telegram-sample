import DKAvatar from "core/components/avatar/avatar";
import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import UserInfoItem from "../../entities/user-info-item";
import { Context } from "../../AppContext";
import ChatItem from "./chat-item";
import Util from "utilities/utilities";
import ChatUtil from "utilities/chat-utilities";
import Chat from "./chat-container/chat";
interface Props {
  targetUser: UserInfoItem;
  sendMessage: (message: ChatItem) => void;
  repliedToMessage?: ChatItem;
  removeReply: () => void;
}

const MessageBox = ({ targetUser, sendMessage, repliedToMessage, removeReply }: Props) => {
  const appContext = useContext(Context);
  const [message, setMessage] = useState<string>("");
  const sendItem = () => {
    if (message) {
      const chatItem: ChatItem = {
        text: message,
        sender: appContext?.state.user,
        sendDateTime: Util.formatAMPM(new Date()),
        repliedTo: repliedToMessage,
      };
      sendMessage(chatItem);
      removeReply();
      setMessage("");
    }
  };

  return (
    <div className="position-absolute bottom-0 w-100 mt-5 mb-2">
      {repliedToMessage && (
        <div className="w-50 d-flex justify-content-between align-items-center m-auto">
          <Chat chatItem={repliedToMessage} isRepliedMessage={true} className="ml-n10" />
          <div className="d-flex align-self-start pt-3 cursor-pointer" onClick={removeReply}>
            <i className="fa fa-times font-size-h2 text-hover-primary"></i>
          </div>
        </div>
      )}
      <div className="w-75 d-flex justify-content-center m-auto">
        <DKAvatar
          size={60}
          imageUrl={appContext?.state.user.profilePicture}
          pictureTextPlaceholder={appContext?.state.user.profilePictureTextPlaceholder}
          type="circle"
          className="mr-4"
          onShowProfile={() => appContext?.actions.showProfile(true, appContext.state.user)}
        />
        <div className="d-flex flex-column flex-grow-1">
          <Form.Control
            type="text"
            placeholder="Write a message..."
            value={message}
            onChange={ev => setMessage(ev.target.value)}
            onKeyPress={(event: any) => {
              if (event.which === 13) {
                event.preventDefault();
                sendItem();
              }
            }}
          />
          <div className="d-flex justify-content-end mt-2">
            <span className="font-weight-bolder tg-text-color font-size-md cursor-pointer" onClick={sendItem}>
              SEND
            </span>
          </div>
        </div>
        <DKAvatar
          size={60}
          imageUrl={targetUser.profilePicture}
          pictureTextPlaceholder={targetUser.profilePictureTextPlaceholder}
          type="circle"
          className="ml-4"
          onShowProfile={() => appContext?.actions.showProfile(true, targetUser)}
          isSelf={ChatUtil.isSelf(appContext?.state.user.username || "", targetUser.username)}
          status={targetUser.status}
        />
      </div>
    </div>
  );
};
export default MessageBox;
