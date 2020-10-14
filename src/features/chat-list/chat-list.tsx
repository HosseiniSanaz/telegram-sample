import React, { ReactElement, useState } from "react";
import UserChatItem from "./user-chat-item";
import { DKCard, DKCardBody } from "../../core/components/card";

interface Props {
  selectedChatId?: number;
  onChangeChat?: (chatId?: number) => void;
  openNewChat?: () => void;
}
const ChatList = ({ selectedChatId, onChangeChat, openNewChat }: Props): ReactElement => {
  const [chatItems /* , setChatItems */] = useState<UserChatItem[]>([]);

  return (
    <DKCard stretch={true}>
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
                onClick={() => onChangeChat(cm.user.id)}
              >
                <div className="d-flex align-items-center">
                  <div className={"symbol symbol-circle symbol-50 mr-3"}>
                    {!Boolean(cm.user.profilePicture) && (
                      <span className="font-size-h6 symbol-label font-weight-boldest">
                        {cm.user.profilePictureTextPlaceholder}
                      </span>
                    )}
                    {Boolean(cm.user.profilePicture) && <img src={cm.user.profilePicture} alt={cm.user.name} />}
                  </div>
                  <div className="d-flex flex-column">
                    <span className="text-dark-75 text-hover-primary font-weight-bold font-size-lg">
                      {cm.user.name}
                    </span>
                    <span className="text-muted font-weight-bold font-size-sm">{cm.lastMessage}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="symbol symbol-40 symbol-light-success position-absolute fixed-bottom rtl"
          title="Add New Comment"
          onClick={() => openNewChat()}
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
