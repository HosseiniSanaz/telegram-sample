import UserInfoItem from "entities/user-info-item";
export default interface ChatItem {
  id: string;
  sender: UserInfoItem;
  text: string;
  repliedTo?: ChatItem;
}
