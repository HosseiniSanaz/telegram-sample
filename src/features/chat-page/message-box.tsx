import DKAvatar from "core/components/avatar/avatar";
import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import UserInfoItem from "../../entities/user-info-item";
import { Context } from "../../AppContext";
interface Props {
  targetUser: UserInfoItem;
}

const MessageBox = ({ targetUser }: Props) => {
  const appContext = useContext(Context);
  return (
    <div className="position-absolute bottom-0 w-100 my-2">
      <div className="w-75 d-flex justify-content-center m-auto">
        <DKAvatar
          hasLink={false}
          size={60}
          imageUrl={appContext?.state.user.profilePicture}
          pictureTextPlaceholder={appContext?.state.user.profilePictureTextPlaceholder}
          type="circle"
          className="mr-4"
        />
        <div className="d-flex flex-column flex-grow-1">
          <Form.Control type="text" placeholder="Write a message..." />
          <div className="d-flex justify-content-end mt-2">
            <a className="font-weight-bolder tg-text-color font-size-md">SEND</a>
          </div>
        </div>
        <DKAvatar
          size={60}
          imageUrl={targetUser.profilePicture}
          pictureTextPlaceholder={targetUser.profilePictureTextPlaceholder}
          type="circle"
          className="ml-4"
        />
      </div>
    </div>
  );
};
export default MessageBox;
