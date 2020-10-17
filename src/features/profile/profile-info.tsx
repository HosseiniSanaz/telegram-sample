import React, { ReactElement } from "react";
// interface Props {
// }
const ProfileInfo = (): ReactElement => {
  return (
    <>
      <div className="my-3 mx-10 row  p-2">
        <div className="col-2 d-inline">
          <i className="fa fa-phone icon-xl mr-5" />
        </div>
        <div className="col-10 d-inline border-bottom pb-3">
          <div className="font-size-lg"> 09120286220</div>
          <div className="text-muted font-size-xs font-weight-light">phone</div>
        </div>
      </div>

      <div className="my-3 mx-10 row ">
        <div className="col-2 d-inline">
          <i className="fa fa-bell icon-xl mr-5" />
        </div>
        <div className="col-10 d-inline border-bottom pb-3">
          <div className="font-size-lg"> Notifications</div>
        </div>
      </div>

      <div className="my-3 mx-10 row ">
        <div className="col-2 d-inline">
          <i className="fa fa-bars icon-xl mr-5" />
        </div>
        <div className="col-10 d-inline border-bottom pb-3">
          <div className="font-size-lg"> Share Contact</div>
        </div>
      </div>
    </>
  );
};
export default ProfileInfo;
