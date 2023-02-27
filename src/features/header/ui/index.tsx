import React from "react";

import { Logout } from "features/user/logout";
import { selectUser } from "entities/user";
import { useAppSelector } from "shared/lib";
import { UserBadge } from "shared/ui";

import { Layout } from "./layout";
import { Logo } from "./logo";
import { NavBar } from "./nav-bar";
import { IRoute } from "../model/types";

interface IHeaderProps {
  routes: IRoute[];
}

export const Header = (props: IHeaderProps) => {
  const username = useAppSelector(selectUser);

  return (
    <Layout>
      <Logo />
      <UserBadge username={username} />
      <NavBar routes={props.routes} />
      <Logout />
    </Layout>
  );
};
