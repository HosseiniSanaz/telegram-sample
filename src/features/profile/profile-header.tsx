import DKAvatar from "core/components/avatar/avatar";
import UserInfoItem from "entities/user-info-item";
import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
interface Props {
  userInfo?: UserInfoItem;
}
const ProfileHeader = ({ userInfo }: Props): ReactElement => {
  return (
    <div className="h-150px tg-primary text-white py-3 px-7 d-flex flex-column position-relative">
      <div className="d-flex justify-content-between font-weight-bolder">
        <div className="d-flex align-items-start">Contact info</div>
        <div className="d-flex justify-content-between align-items-end">
          <span>Edit</span>
          <span className="ml-10">Close</span>
        </div>
      </div>
      <div className="d-flex pt-10 px-1 align-items-center">
        <DKAvatar
          hasLink={false}
          className="mr-5"
          imageUrl={userInfo?.profilePicture}
          pictureTextPlaceholder={userInfo?.profilePictureTextPlaceholder}
          size={75}
          type="circle"
        />
        <div className="d-flex flex-column">
          <span className={"font-weight-bolder font-size-h4"}>{userInfo?.name}</span>
          <span className={"font-size-sm mt-2"}>{userInfo?.status}</span>
        </div>
      </div>

      <div className="position-absolute bottom-0 right-0 mr-5 mb-n6">
        <Link to={`chat/${userInfo?.username}`}>
          <div className="symbol symbol-45 symbol-circle shadow-md">
            <i className="symbol-label fa fa-comment-alt"></i>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default ProfileHeader;
