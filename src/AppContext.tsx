import * as React from "react";

export interface AppContextState {
  impersonated: boolean;
}

interface AppContextActions {}

export interface AppContextInterface {
  state: AppContextState;
  actions: AppContextActions;
}

export const Context = React.createContext<AppContextInterface | null>(null);

export const AppContextConsumer = Context.Consumer;
