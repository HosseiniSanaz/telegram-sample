import UserInfoItem from "entities/user-info-item";
import * as React from "react";

export interface AppContextState {
  user: UserInfoItem;
}

interface AppContextActions {
  setUser: (data: UserInfoItem) => void;
}

export interface AppContextInterface {
  state: AppContextState;
  actions: AppContextActions;
}

export const Context = React.createContext<AppContextInterface | null>(null);

export const AppContextConsumer = Context.Consumer;
