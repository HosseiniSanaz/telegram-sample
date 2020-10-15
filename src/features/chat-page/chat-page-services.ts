import ApplicationRequest from "../../hooks/useService";
import ChatPageMockData from "./chat-page-mock";
export default class ChatPageServices {
  public static getChat(username: string): ApplicationRequest {
    return {
      url: `/fakeURL/chat/${username}`,
      method: "GET",
      mockData: ChatPageMockData.chat,
    };
  }
}
