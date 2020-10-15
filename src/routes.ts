import { Container } from "features/container";
// import { Home } from "features/Home/Home";

export interface RouteTypes {
  exact: boolean;
  path: string;
  component: any;
  parentPath?: string;
}
const routes: RouteTypes[] = [
  // {
  //   exact: true,
  //   path: "/",
  //   component: Container,
  // },
  {
    exact: true,
    path: "/chat",
    component: Container,
  },
  {
    exact: true,
    path: "/chat/:user",
    component: Container,
  },
];

export default routes;
