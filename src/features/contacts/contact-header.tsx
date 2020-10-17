import React from "react";
interface Props {
  onCloseContacts: () => void;
}
const ContactsHeader = ({ onCloseContacts }: Props) => {
  return (
    <div className="w-100 d-flex justify-content-between font-weight-bolder">
      <div className="d-flex align-items-start">Contacts</div>
      <div className="d-flex justify-content-between align-items-end">
        <span>Edit</span>
        <span className="ml-10 cursor-pointer" onClick={onCloseContacts}>
          Close
        </span>
      </div>
    </div>
  );
};
export default ContactsHeader;
