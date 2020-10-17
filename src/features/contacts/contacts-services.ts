import ApplicationRequest from "../../hooks/useService";
import ContactsMockData from "./contacts-mock";
export default class ContactsServices {
  public static getContacts(): ApplicationRequest {
    return {
      url: `/fakeURL/contacts`,
      method: "GET",
      mockData: ContactsMockData.contacts,
    };
  }
}
