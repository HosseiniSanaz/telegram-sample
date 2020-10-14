import UserChatItem from "./user-chat-item";

export default class ChatListMockData {
  public static Comments: UserChatItem[] = [
    {
      user: {
        id: 1,
        name: "Sanaz",
        telephoneNumber: "09129619007",
        status: "last seen recently",
        profilePicture: "",
        profilePictureTextPlaceholder: "SH",
        type: "User",
      },
      lastMessage: "Hello",
      lastMessageDateTime: "now",
    },
    {
      user: {
        id: 2,
        name: "Dady",
        telephoneNumber: "09129619008",
        username: "rostaaaaam",
        bio: "Manam rostame dastan !",
        status: "last seen at 20:02",
        profilePicture: "",
        profilePictureTextPlaceholder: "R",
        type: "User",
      },
      lastMessage: "سلام دختر قشنگم :)",
      lastMessageDateTime: "19:56",
    },
    {
      user: {
        id: 3,
        name: "فک و فامیل :/",
        bio: "ye grouhe maskhare",
        status: "last seen at 20:02",
        profilePicture: "",
        profilePictureTextPlaceholder: "R",
        type: "User",
      },
      lastMessage: "سلام دختر قشنگم :)",
      lastMessageDateTime: "19:56",
    },
    {
      user: {
        id: 4,
        name: "Mojdeeeeee",
        telephoneNumber: "09129619009",
        username: "Moji_khanum",
        status: "online",
        profilePicture: "",
        profilePictureTextPlaceholder: "MK",
        type: "User",
      },
      lastMessage: "Hellow sisi",
      lastMessageDateTime: "sep 10",
    },
  ];
}
