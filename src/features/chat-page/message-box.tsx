import DKAvatar from "core/components/avatar/avatar";
import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import UserInfoItem from "../../entities/user-info-item";
import { Context } from "../../AppContext";
import ChatItem from "./chat-item";
interface Props {
  targetUser: UserInfoItem;
  sendMessage: (message: ChatItem) => void;
}

const MessageBox = ({ targetUser, sendMessage }: Props) => {
  const appContext = useContext(Context);
  const [message, setMessage] = useState<string>("");
  const sendItem = () => {
    if (message) {
      const chatItem: ChatItem = {
        text: message,
        sender: appContext?.state.user,
        sendDateTime: "now",
      };
      sendMessage(chatItem);
      setMessage("");
    }
  };

  return (
    <div className="position-absolute bottom-0 w-100 my-2">
      <div className="w-75 d-flex justify-content-center m-auto">
        <DKAvatar
          hasLink={false}
          size={60}
          imageUrl={appContext?.state.user.profilePicture}
          pictureTextPlaceholder={appContext?.state.user.profilePictureTextPlaceholder}
          type="circle"
          className="mr-4"
        />
        <div className="d-flex flex-column flex-grow-1">
          <Form.Control
            type="text"
            placeholder="Write a message..."
            value={message}
            onChange={ev => setMessage(ev.target.value)}
          />
          <div className="d-flex justify-content-end mt-2">
            <a className="font-weight-bolder tg-text-color font-size-md cursor-pointer" onClick={sendItem}>
              SEND
            </a>
          </div>
        </div>
        <DKAvatar
          size={60}
          imageUrl={targetUser.profilePicture}
          pictureTextPlaceholder={targetUser.profilePictureTextPlaceholder}
          type="circle"
          className="ml-4"
        />
      </div>
    </div>
  );
};
export default MessageBox;
