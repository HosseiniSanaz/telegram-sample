import * as React from "react";
import { Component } from "react";
import { AppContextState, Context } from "./AppContext";

class AppContextProvider extends Component<{}, AppContextState> {
  state: AppContextState = {
    impersonated: false,
  };

  setImpersonated = (userId: number): void => {
    this.setState(prevState => {
      return {
        ...prevState,
        impersonated: true,
      };
    });
  };
  render(): JSX.Element {
    return (
      <Context.Provider
        value={{
          state: this.state,
          actions: {
            setImpersonated: this.setImpersonated,
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
