import React, { ReactElement, useContext, useEffect, useState } from "react";
import UserChatItem from "./user-chat-item";
import { useService } from "hooks/useService";
import ChatListServices from "./chat-list-services";
import DKAvatar from "core/components/avatar/avatar";
import "./chat-list.scss";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchBox from "./search-box";
import ChatUtil from "utilities/chat-utilities";
import { Context } from "AppContext";
interface Props {
  emptyUserEmptyUnread?: string;
}
const ChatList = ({ emptyUserEmptyUnread }: Props): ReactElement => {
  const appContext = useContext(Context);
  const [chatItems, setChatItems] = useState<UserChatItem[]>([]);
  const [selectedChatId, setSelectedChatId] = useState<number>(0);
  const chatList = useService<UserChatItem[]>(ChatListServices.getAllChats());
  useEffect(() => {
    if (chatList.status === "loaded") setChatItems(chatList.payload);
  }, [chatList.status]);

  useEffect(() => {
    if (chatItems.length && emptyUserEmptyUnread) {
      const changedChats = chatItems.map(chat => {
        if (emptyUserEmptyUnread === chat.user.username) chat.newMessageCount = 0;
        return chat;
      });
      setChatItems(changedChats);
    }
  }, [emptyUserEmptyUnread]);

  const onFilterChats = (searchTerm: string) => {
    if (chatList.status === "loaded") {
      const filteredContact = chatList.payload.filter(chat => {
        return (
          chat.user.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
          chat.user.username.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
        );
      });
      setChatItems(filteredContact);
    }
  };
  return (
    <div>
      <Card.Header className="border-0 p-4">
        <SearchBox onSearch={onFilterChats} />
      </Card.Header>

      <div className="card-scroll h-500px">
        {chatItems.map((cm: UserChatItem, index: number) => {
          const isSelf = ChatUtil.isSelf(appContext?.state.user.username || "", cm.user.username);
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
                    size={45}
                    type="circle"
                    isSelf={isSelf}
                    status={cm.user.status}
                  />
                  <div className="d-flex flex-column">
                    <span
                      className={
                        "font-weight-bold font-size-lg " + (selectedChatId === cm.user.id ? "" : "text-dark-75")
                      }
                    >
                      {isSelf ? "Saved Messages" : cm.user.name}
                    </span>
                    <span
                      className={
                        "font-size-sm text-truncate d-inline-block display-last-message " +
                        (selectedChatId === cm.user.id ? "" : "text-muted")
                      }
                      // style={{ maxWidth: "250px" }}
                    >
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
                  {Boolean(cm.newMessageCount) && (
                    <span
                      className={
                        "label label-sm mt-1 font-weight-bolder " +
                        (cm.user.isMuted ? "label-light-dark text-white" : "label-success")
                      }
                    >
                      {cm.newMessageCount}
                    </span>
                  )}
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
