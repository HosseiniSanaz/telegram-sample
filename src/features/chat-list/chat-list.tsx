import React, { ReactElement, useEffect, useState } from "react";
import UserChatItem from "./user-chat-item";
// import { DKCardBody, DKCardHeader } from "../../core/components/card";
import { useService } from "hooks/useService";
import ChatListServices from "./chat-list-services";
import DKAvatar from "core/components/avatar/avatar";
import "./chat-list.scss";
import { Card, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
interface Props {
  onChangeChat?: (chatId?: number) => void;
  openNewChat?: () => void;
}
const ChatList = ({ onChangeChat, openNewChat }: Props): ReactElement => {
  const [chatItems, setChatItems] = useState<UserChatItem[]>([]);
  const [selectedChatId, setSelectedChatId] = useState<number>(0);
  const chatList = useService<UserChatItem[]>(ChatListServices.getAllChats());
  useEffect(() => {
    if (chatList.status === "loaded") setChatItems(chatList.payload);
  }, [chatList.status]);

  return (
    <div>
      <Card.Header title="teada" className="border-0 p-4">
        <InputGroup className="mb-2">
          <InputGroup.Prepend>
            <InputGroup.Text>@</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control type="text" placeholder="search" />
        </InputGroup>
      </Card.Header>

      <div className="card-scroll h-500px">
        {chatItems.map((cm: UserChatItem, index: number) => {
          return (
            <Link to={`/chat/${cm.user.username}`}>
              <div
                key={index}
                className={
                  "d-flex align-items-start justify-content-between p-3 " +
                  (selectedChatId === cm.user.id ? "telegram-secondary" : "")
                }
                onClick={() => setSelectedChatId(cm.user.id)}
              >
                <div className="d-flex align-items-center">
                  <DKAvatar
                    className="mr-2"
                    imageUrl={cm.user.profilePicture}
                    pictureTextPlaceholder={cm.user.profilePictureTextPlaceholder}
                    size={50}
                    type="circle"
                    userName={cm.user.username}
                  />
                  <div className="d-flex flex-column">
                    <span
                      className={
                        "font-weight-bold font-size-lg " + (selectedChatId === cm.user.id ? "" : "text-dark-75")
                      }
                    >
                      {cm.user.name}
                    </span>
                    <span className={"font-size-sm " + (selectedChatId === cm.user.id ? "" : "text-muted")}>
                      {cm.lastMessage}
                    </span>
                  </div>
                </div>
                <div className="d-flex flex-column align-items-end">
                  <span
                    className={"font-weight-bold font-size-sm " + (selectedChatId === cm.user.id ? "" : "text-muted")}
                  >
                    {cm.lastMessageDateTime}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default ChatList;
