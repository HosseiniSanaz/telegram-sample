import ApplicationRequest from "../../hooks/useService";
import ChatListMockData from "./chat-list-mock";
export default class ChatListServices {
  public static getAllChats(): ApplicationRequest {
    return {
      url: `/fakeURL/chats`,
      method: "GET",
      mockData: ChatListMockData.chats,
    };
  }
}
