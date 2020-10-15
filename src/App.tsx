import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { AppContextProvider } from "./AppContextProvider";
import { Context } from "./AppContext";
import { AppContainer } from "./features/app-container/app-container";
import "./App.scss";
export default class APP extends React.Component<{}> {
  public constructor(props: any) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <AppContextProvider>
        <Router>
          <AppContainer />
        </Router>
      </AppContextProvider>
    );
  }
}
APP.contextType = Context;
