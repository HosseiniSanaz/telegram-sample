import React, { ReactElement, useContext } from "react";
import Modal from "react-bootstrap/esm/Modal";
import ProfileHeader from "./profile-header";
import ProfileInfo from "./profile-info";
import { Context } from "../../AppContext";

const ProfileContainer = (): ReactElement => {
  const appContext = useContext(Context);
  const onCloseProfile = () => appContext?.actions.showProfile(false);
  return (
    <Modal show={appContext?.state.showProfile} onHide={onCloseProfile} animation={false} centered={true}>
      <Modal.Body className="p-0">
        <ProfileHeader userInfo={appContext?.state.currentUserProfile} />
        <ProfileInfo />
      </Modal.Body>
    </Modal>
  );
};
export default ProfileContainer;
