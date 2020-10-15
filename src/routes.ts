import { Container } from "features/tg-container/tg-container";
export interface RouteTypes {
  exact: boolean;
  path: string;
  component: any;
  parentPath?: string;
}
const routes: RouteTypes[] = [
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
