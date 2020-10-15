import UserInfoItem from "entities/user-info-item";
import * as React from "react";
import { Component } from "react";
import { AppContextState, Context } from "./AppContext";

class AppContextProvider extends Component<{}, AppContextState> {
  state: AppContextState = {
    user: {
      id: 0,
      name: "",
      username: "",
      type: "User",
      profilePictureTextPlaceholder: "",
    },
  };

  setUser = (userInfo: UserInfoItem): void => {
    this.setState(prevState => {
      return {
        ...prevState,
        user: userInfo,
      };
    });
  };
  render(): JSX.Element {
    return (
      <Context.Provider
        value={{
          state: this.state,
          actions: {
            setUser: this.setUser,
          },
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
export { AppContextProvider };
export const AppConsumer = Context.Consumer;
