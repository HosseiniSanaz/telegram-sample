import DKAvatar from "core/components/avatar/avatar";
import React from "react";
import { Form } from "react-bootstrap";
interface Props {
  username?: string;
}

export const ChatPage = ({ username }: Props) => {
  return (
    <div className="h-100">
      {username}

      <div className="position-absolute bottom-0 w-100">
        <div className="w-75 d-flex justify-content-center m-auto">
          <DKAvatar size={40} pictureTextPlaceholder="S" type="circle" className="mr-4" />
          <Form.Control type="text" />
          <DKAvatar size={40} pictureTextPlaceholder="S" type="circle" className="ml-4" />
        </div>
        <div className="w-75 d-flex justify-content-end m-auto">
          <button>send</button>
        </div>
      </div>
    </div>
  );
};
