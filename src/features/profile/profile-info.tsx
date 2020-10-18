import React, { ReactElement, useContext } from "react";
import { Form } from "react-bootstrap";
import { Context } from "../../AppContext";
import MembersList from "./members-list";
const ProfileInfo = (): ReactElement => {
  const appContext = useContext(Context);
  return (
    <div className="bg-light-dark">
      <div className="bg-white">
        {appContext?.state.currentUserProfile.type === "User" && (
          <div className="my-5 ml-10 mr-0 row">
            <div className="col-2 d-inline">
              <i className="fa fa-phone icon-xl mr-5" />
            </div>
            <div className="col-10 d-inline border-bottom pb-5 pl-0">
              <div className="font-size-lg">{appContext?.state.currentUserProfile.telephoneNumber}</div>
              <div className="text-muted font-size-xs font-weight-light">phone</div>
            </div>
          </div>
        )}
        {appContext?.state.currentUserProfile.type !== "User" && (
          <div className="my-5 ml-10 mr-0 row">
            <div className="col-2 d-inline">
              <i className="fa fa-user-alt icon-xl mr-5" />
            </div>
            <div className="col-10 d-inline border-bottom pb-5 pl-0">
              <div className="font-size-lg text-hover-primary cursor-pointer">Add member</div>
            </div>
          </div>
        )}
        <div className="my-5 ml-10 mr-0 row">
          <div className="col-2 d-inline">
            <i className="fa fa-bell icon-xl mr-5" />
          </div>
          <div className="col-10 d-inline border-bottom pb-5 pl-0 d-flex justify-content-between">
            <div className="font-size-lg align-items-start"> Notifications</div>
            <Form className="align-items-end">
              <Form.Check type="switch" id="custom-switch" label="" />
            </Form>
          </div>
        </div>

        <div className="my-5 ml-10 mr-0 row">
          <div className="col-2 d-inline">
            <i className="fa fa-bars icon-xl mr-5" />
          </div>
          <div className="col-10 d-inline pb-5 pl-0">
            <div className="font-size-lg">
              {appContext?.state.currentUserProfile.type === "User" ? "Share Contact" : "Clear History"}
            </div>
            {appContext?.state.currentUserProfile.type === "User" && <div className="font-size-lg mt-5">More ...</div>}
          </div>
        </div>
      </div>
      {appContext?.state.currentUserProfile.type === "Group" && (
        <MembersList members={appContext?.state.currentUserProfile.members} />
      )}
    </div>
  );
};
export default ProfileInfo;
