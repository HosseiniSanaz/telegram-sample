import { Context } from "AppContext";
import DKAvatar from "core/components/avatar/avatar";
import React, { ReactElement, useContext } from "react";
import { Link } from "react-router-dom";

const ProfileHeader = (): ReactElement => {
  const appContext = useContext(Context);
  return (
    <div className="h-150px tg-primary text-white py-3 px-7 d-flex flex-column position-relative">
      <div className="d-flex justify-content-between font-weight-bolder">
        <div className="d-flex align-items-start">Contact info</div>
        <div className="d-flex justify-content-between align-items-end">
          <span>Edit</span>
          <span className="ml-10 cursor-pointer" onClick={() => appContext?.actions.showProfile(false)}>
            Close
          </span>
        </div>
      </div>
      <div className="d-flex pt-10 px-1 align-items-center">
        <DKAvatar
          hasLink={false}
          className="mr-5"
          imageUrl={appContext?.state.currentUserProfile.profilePicture}
          pictureTextPlaceholder={appContext?.state.currentUserProfile.profilePictureTextPlaceholder}
          size={75}
          type="circle"
        />
        <div className="d-flex flex-column">
          <span className={"font-weight-bolder font-size-h4"}>{appContext?.state.currentUserProfile.name}</span>
          <span className={"font-size-sm mt-2"}>
            {appContext?.state.currentUserProfile.type === "User"
              ? appContext?.state.currentUserProfile.status
              : appContext?.state.currentUserProfile.members?.length + " members"}
          </span>
        </div>
      </div>

      <div className="position-absolute bottom-0 right-0 mr-5 mb-n6">
        <Link
          to={`/chat/${appContext?.state.currentUserProfile.username}`}
          onClick={() => appContext?.actions.showProfile(false)}
        >
          <div className="symbol symbol-45 symbol-circle shadow-md">
            <i
              className={
                "symbol-label font-size-h2 fa " +
                (appContext?.state.currentUserProfile.isGroupAdmin ? "fa-image" : "fa-comment-alt")
              }
            ></i>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default ProfileHeader;
