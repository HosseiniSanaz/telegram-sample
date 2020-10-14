import React from "react";
import ChatList from "./chat-list/chat-list";
import { ChatPage } from "./chat-page/chat-page";

export const Container = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4">
          <ChatList />
        </div>
        <div className="col-8">
          <ChatPage />
        </div>
      </div>
    </div>
  );
};
