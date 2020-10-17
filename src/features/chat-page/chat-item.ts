import UserInfoItem from "entities/user-info-item";
export default interface ChatItem {
  sender?: UserInfoItem;
  text: string;
  repliedTo?: ChatItem;
  sendDateTime: string;
}
