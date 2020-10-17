import React, { ReactElement } from "react";
import UserInfoItem from "entities/user-info-item";
import Contact from "features/contacts/contact";
interface Props {
  members?: UserInfoItem[];
}
const MembersList = ({ members = [] }: Props): ReactElement => {
  return (
    <>
      {members.map(member => {
        return <Contact userInfo={member} />;
      })}
    </>
  );
};
export default MembersList;
