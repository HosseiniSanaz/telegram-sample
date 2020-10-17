import { Context } from "AppContext";
import React, { useContext, useState } from "react";
import ChatUtil from "utilities/chat-utilities";
import Contacts from "features/contacts/contacts";
interface Props {
  username?: string;
}
const TGHeader = ({ username }: Props) => {
  const appContext = useContext(Context);
  const [openContacts, setOpenContacts] = useState<Boolean>(false);
  const targetUser = ChatUtil.getCurrentUser(username);
  const isSelf = ChatUtil.isSelf(appContext?.state.user.username || "", username || "");
  return (
    <>
      <div className="row w-100">
        <div className="col-4 d-flex align-items-center">
          <span className="mr-5 cursor-pointer" onClick={() => setOpenContacts(true)}>
            <i className="fas fa-users text-white font-size-h2"></i>
          </span>
          <span className="font-size-h3"> Telegram </span>
        </div>
        {username && (
          <div
            className="col-8 d-flex align-items-center"
            onClick={() => appContext?.actions.showProfile(true, targetUser)}
          >
            <div className="d-flex align-items-center">
              <span className="font-weight-bolder font-size-md">{isSelf ? "Saved Messages" : targetUser.name}</span>
              {!isSelf && (
                <span className="font-size-sm text-muted ml-3">
                  {targetUser.type === "User" ? targetUser.status : targetUser.members?.length + " members"}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
      <Contacts openModal={openContacts} onCloseContactModal={() => setOpenContacts(false)} />
    </>
  );
};
export default TGHeader;
