import React, { useContext, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./../../App.scss";
import { Context } from "./../../AppContext";
import routes from "../../routes";
import UserInfoItem from "entities/user-info-item";
import { useService } from "hooks/useService";
import UserServices from "./user-service";
export const AppContainer = () => {
  const appContext = useContext(Context);
  const userInfo = useService<UserInfoItem>(UserServices.getUser());
  useEffect(() => {
    if (userInfo.status === "loaded") {
      appContext?.actions.setUser(userInfo.payload);
    }
  }, [userInfo.status]);

  return (
    <Switch>
      {routes.map(route => (
        <Route key={route.path} {...route} />
      ))}
    </Switch>
  );
};
