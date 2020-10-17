import React, { ReactElement } from "react";
import "./chat-list.scss";
import { Form, InputGroup } from "react-bootstrap";
interface Props {
  onSearch?: (searchData: string) => void;
}
const SearchBox = ({ onSearch }: Props): ReactElement => {
  return (
    <InputGroup className="mb-2">
      <InputGroup.Prepend>
        <InputGroup.Text className="px-3">
          <i className="fas fa-search icon-md"></i>
        </InputGroup.Text>
      </InputGroup.Prepend>
      <Form.Control type="text" placeholder="search" />
    </InputGroup>
  );
};
export default SearchBox;
