import { DKCard, DKCardBody, DKCardHeader } from "core/components/card";
import React from "react";
import ChatList from "../chat-list/chat-list";
import ChatPage from "../chat-page/chat-page";
interface Props {
  match?: any;
}
export const Container = ({ match }: Props) => {
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center">
        <DKCard fitBody={true} className="w-75 mx-auto mt-10">
          <DKCardHeader title={"Telegram"} className="tg-primary" textColor="white" />
          <DKCardBody>
            <div className="row">
              <div className="col-4 border-right-md pr-0">
                <ChatList />
              </div>
              <div className="col-8">
                <ChatPage username={match?.params?.user} />
              </div>
            </div>
          </DKCardBody>
        </DKCard>
      </div>
    </div>
  );
};
