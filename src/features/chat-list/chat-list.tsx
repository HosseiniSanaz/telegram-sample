import React, { ReactElement, useEffect, useState } from "react";
import UserChatItem from "./user-chat-item";
import { DKCard, DKCardBody, DKCardHeader } from "../../core/components/card";
import { useService } from "hooks/useService";
import ChatListServices from "./chat-list-services";
import DKAvatar from "core/components/avatar/avatar";
interface Props {
  selectedChatId?: number;
  onChangeChat?: (chatId?: number) => void;
  openNewChat?: () => void;
}
const ChatList = ({ selectedChatId, onChangeChat, openNewChat }: Props): ReactElement => {
  const [chatItems, setChatItems] = useState<UserChatItem[]>([]);
  const chatList = useService<UserChatItem[]>(ChatListServices.getAllChats());
  useEffect(() => {
    if (chatList.status === "loaded") setChatItems(chatList.payload);
  }, [chatList.status]);

  return (
    <DKCard stretch={true}>
      <DKCardHeader title={"Telegram"} />
      <DKCardBody className="position-relative h-100">
        <div className="card-scroll h-350px">
          {chatItems.map((cm: UserChatItem, index: number) => {
            return (
              <div
                key={index}
                className={
                  "d-flex align-items-center justify-content-between mb-5 px-2 " +
                  (selectedChatId === cm.user.id ? "active-chat py-2" : "")
                }
                // onClick={() => onChangeChat(cm.user.id)}
              >
                <div className="d-flex align-items-center">
                  <DKAvatar
                    className="mr-3"
                    imageUrl={cm.user.profilePicture}
                    pictureTextPlaceholder={cm.user.profilePictureTextPlaceholder}
                    size={50}
                    type="circle"
                  />
                  <div className="d-flex flex-column">
                    <span className="text-dark-75 text-hover-primary font-weight-bold font-size-lg">
                      {cm.user.name}
                    </span>
                    <span className="text-muted font-size-sm">{cm.lastMessage}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="symbol symbol-40 symbol-light-success position-absolute fixed-bottom rtl"
          title="Add New Comment"
          // onClick={() => openNewChat()}
        >
          <span className="symbol-label ">
            <span className="svg-icon svg-icon-lg svg-icon-success">
              <i className="la la-edit"></i>
            </span>
          </span>
        </div>
      </DKCardBody>
    </DKCard>
  );
};
export default ChatList;
