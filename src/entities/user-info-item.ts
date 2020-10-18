export default interface UserInfoItem {
  id: number;
  name: string;
  telephoneNumber?: string;
  username: string;
  bio?: string;
  status?: string;
  profilePicture?: string;
  profilePictureTextPlaceholder: string;
  type: "User" | "Group";
  role?: string;
  members?: UserInfoItem[];
  isGroupAdmin?: boolean;
  isMuted?: boolean;
}
