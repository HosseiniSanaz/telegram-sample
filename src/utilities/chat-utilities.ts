import UserInfoItem from "entities/user-info-item";
import UserListMock from "features/chat-list/chat-list-mock";

export default class ChatUtilities {
  public static getCurrentUser = (username?: string): UserInfoItem => {
    let defaultUser: UserInfoItem = {
      id: 0,
      name: "test",
      username: "test",
      type: "User",
      profilePictureTextPlaceholder: "TE",
    };
    const allUser = UserListMock.chats;
    allUser.forEach(user => {
      if (user.user.username === username) {
        defaultUser = user.user;
      }
    });
    return defaultUser;
  };
  public static isSelf = (self: string, username: string): boolean => {
    return self === username;
  };
}
