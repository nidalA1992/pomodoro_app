import React from "react";

import { Logout } from "features/user/logout";
import { User } from "entities/user/ui";

import { Layout } from "./layout";
import { Logo } from "./logo";
import { NavBar } from "./nav-bar";
import { IRoute } from "../model/types";

interface IHeaderProps {
  routes: IRoute[];
}

export const Header = (props: IHeaderProps) => {
  return (
    <Layout>
      <Logo />
      <User />
      <NavBar routes={props.routes} />
      <Logout />
    </Layout>
  );
};
