import UserInfoItem from "../../entities/user-info-item";

export default interface UserChatItem {
  user: UserInfoItem;
  lastMessage: string;
  lastMessageDateTime: string;
}
