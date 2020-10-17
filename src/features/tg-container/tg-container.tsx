import { DKCard, DKCardBody, DKCardHeader } from "core/components/card";
import React, { useState } from "react";
import ChatList from "../chat-list/chat-list";
import ChatPage from "../chat-page/chat-page";
import ProfileContainer from "features/profile/profile-container";
import TGHeader from "./tg-header";
interface Props {
  match?: any;
}
export const Container = ({ match }: Props) => {
  const [userEmptyUnread, setUser] = useState<string>();
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center">
        <DKCard fitBody={true} className="w-75 mx-auto">
          <DKCardHeader hasComplexHeader={true} className="tg-primary" textColor="white">
            <TGHeader username={match?.params?.user} />
          </DKCardHeader>
          <DKCardBody>
            <div className="row">
              <div className="col-4 border-right-md pr-0">
                <ChatList emptyUserEmptyUnread={userEmptyUnread} />
              </div>
              <div className="col-8">
                <ChatPage username={match?.params?.user} emptyUnreadMessage={setUser} />
              </div>
            </div>
          </DKCardBody>
        </DKCard>
        <ProfileContainer />
      </div>
    </div>
  );
};
