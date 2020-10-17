import UserInfoItem from "entities/user-info-item";
import * as React from "react";
import { Component } from "react";
import { AppContextState, Context } from "./AppContext";

class AppContextProvider extends Component<{}, AppContextState> {
  initialUser: UserInfoItem = {
    id: 0,
    name: "",
    username: "",
    type: "User",
    profilePictureTextPlaceholder: "",
  };
  state: AppContextState = {
    user: this.initialUser,
    showProfile: false,
    currentUserProfile: this.initialUser,
  };

  setUser = (userInfo: UserInfoItem): void => {
    this.setState(prevState => {
      return {
        ...prevState,
        user: userInfo,
      };
    });
  };
  showProfile = (showProfile: boolean, currentUserProfile?: UserInfoItem): void => {
    this.setState(prevState => {
      return {
        ...prevState,
        showProfile,
        currentUserProfile: currentUserProfile || prevState.currentUserProfile,
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
            showProfile: this.showProfile,
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
