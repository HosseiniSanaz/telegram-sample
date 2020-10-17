import React, { useEffect, useState } from "react";
import UserInfoItem from "entities/user-info-item";
import SearchBox from "features/chat-list/search-box";
import { useService } from "hooks/useService";
import { Modal } from "react-bootstrap";
import Contact from "./contact";
import ContactsServices from "./contacts-services";
import ContactsHeader from "./contact-header";
interface Props {
  openModal: Boolean;
  onCloseContactModal: () => void;
}
const Contacts = ({ openModal, onCloseContactModal }: Props) => {
  const [open, setOpen] = useState<Boolean>(false);
  const [contacts, setContacts] = useState<UserInfoItem[]>([]);
  useEffect(() => {
    setOpen(openModal);
  }, [openModal]);
  const allContacts = useService<UserInfoItem[]>(ContactsServices.getContacts());
  useEffect(() => {
    if (allContacts.status === "loaded") setContacts(allContacts.payload);
  }, [allContacts.status]);
  const onCloseContacts = () => {
    setOpen(false);
    onCloseContactModal();
  };

  const onFilterContacts = (searchTerm: string) => {
    if (allContacts.status === "loaded") {
      const filteredContact = allContacts.payload.filter(contact => {
        return (
          contact.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
          contact.username.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
        );
      });
      setContacts(filteredContact);
    }
  };
  return (
    <Modal show={open} onHide={onCloseContacts} animation={false} centered={true} className="h-90vh">
      <Modal.Header className="tg-primary">
        <ContactsHeader onCloseContacts={onCloseContacts} />
      </Modal.Header>
      <Modal.Body className="p-0">
        <SearchBox onSearch={onFilterContacts} />
        <div className="ml-5 mr-1 my-5 card-scroll h-500px" style={{ overflowX: "hidden" }}>
          {allContacts.status === "loaded" &&
            contacts.map(contact => {
              return <Contact userInfo={contact} key={"contact" + contact.username} />;
            })}
        </div>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center align-items-center">
        <div className="tg-user-text-color font-weight-bolder">NEW CONTACT</div>
      </Modal.Footer>
    </Modal>
  );
};
export default Contacts;
