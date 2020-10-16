import React, { ReactElement, useEffect, useState } from "react";
import UserChatItem from "./user-chat-item";
import { useService } from "hooks/useService";
import ChatListServices from "./chat-list-services";
import DKAvatar from "core/components/avatar/avatar";
import "./chat-list.scss";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchBox from "./search-box";
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
      <Card.Header className="border-0 p-4">
        <SearchBox />
      </Card.Header>

      <div className="card-scroll h-500px">
        {chatItems.map((cm: UserChatItem, index: number) => {
          return (
            <Link to={`/chat/${cm.user.username}`} key={"chat-item-" + index}>
              <div
                key={index}
                className={
                  "d-flex align-items-start justify-content-between p-3 " +
                  (selectedChatId === cm.user.id ? "tg-secondary" : "")
                }
                onClick={() => setSelectedChatId(cm.user.id)}
              >
                <div className="d-flex align-items-center">
                  <DKAvatar
                    hasLink={false}
                    className="mr-2"
                    imageUrl={cm.user.profilePicture}
                    pictureTextPlaceholder={cm.user.profilePictureTextPlaceholder}
                    size={50}
                    type="circle"
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
                  {cm.newMessageCount && <span className="label label-sm label-success">{cm.newMessageCount}</span>}
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
