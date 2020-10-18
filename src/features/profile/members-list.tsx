import React, { ReactElement } from "react";
import UserInfoItem from "entities/user-info-item";
import Contact from "features/contacts/contact";
interface Props {
  members?: UserInfoItem[];
}
const MembersList = ({ members = [] }: Props): ReactElement => {
  return (
    <div className="bg-white mt-n1">
      <div className="my-5 ml-10 mr-0 row">
        <div className="col-2 pt-5">
          <i className="fas fa-user-friends icon-xl"></i>
        </div>
        <div className="col-10 pl-0">
          <div className="card-scroll my-1 h-200px overflow-x-hidden">
            {members.map(member => {
              return <Contact userInfo={member} key={"member" + member.username} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MembersList;
