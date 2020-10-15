// import { Container } from "features/container";
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import { Context } from "./AppContext";
import { AppContextProvider } from "./AppContextProvider";
import routes from "./routes";
export default class APP extends React.Component<{}> {
  public constructor(props: any) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <AppContextProvider>
        <Router>
          <Switch>
            {routes.map(route => (
              <Route key={route.path} {...route} />
            ))}
          </Switch>
        </Router>
      </AppContextProvider>
    );
  }
}
APP.contextType = Context;
