import React, { useContext } from "react";
import UserInfoItem from "entities/user-info-item";
import DKAvatar from "core/components/avatar/avatar";
import { Context } from "AppContext";

interface Props {
  userInfo: UserInfoItem;
  isAdmin?: boolean;
}
const Contact = ({ userInfo, isAdmin }: Props) => {
  const appContext = useContext(Context);
  return (
    <div className={"d-flex align-items-start justify-content-between p-3 "}>
      <div className="d-flex align-items-center">
        <DKAvatar
          hasLink={true}
          className="mr-2"
          imageUrl={userInfo.profilePicture}
          pictureTextPlaceholder={userInfo.profilePictureTextPlaceholder}
          size={50}
          type="circle"
          onShowProfile={() => appContext?.actions.showProfile(true, userInfo)}
          status={userInfo.status}
        />
        <div className="d-flex flex-column">
          <div className="tg-user-text cursor-pointer" onClick={() => appContext?.actions.showProfile(true, userInfo)}>
            <span className={"font-weight-bold font-size-lg tg-user-text-color "}>{userInfo.name}</span>
          </div>
          <span className={"font-size-sm text-muted"}>{userInfo.status}</span>
        </div>
      </div>
      {isAdmin && (
        <div className="d-flex flex-column align-items-end">
          <span className={"font-weight-bold font-size-sm tg-text-primary cursor-pointer"}>Remove</span>
        </div>
      )}
    </div>
  );
};
export default Contact;
