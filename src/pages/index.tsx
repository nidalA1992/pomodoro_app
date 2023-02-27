import { lazy } from "react";
import { Route, Switch } from "react-router-dom";

import { selectUser } from "entities/user";
import { useAppSelector } from "shared/lib/hooks";
import { useIsAuth } from "entities/user";
import { Layout } from "shared/ui";
import { Header } from "widgets/header";

const TasksPage = lazy(() => import("./tasks"));
const StatisticsPage = lazy(() => import("./statistics"));
const AuthPage = lazy(() => import("./auth"));

export const Routing = () => {
  useIsAuth();

  const user = useAppSelector(selectUser);

  const routes = [{ path: "/statistics", title: "Статистика" }];

  return (
    <Switch>
      {user ? (
        <Layout header={<Header routes={routes} />}>
          <Route path={"/"} component={TasksPage} exact />
          <Route path={"/statistics"} component={StatisticsPage} exact />
        </Layout>
      ) : (
        <Layout header={null}>
          <AuthPage />
        </Layout>
      )}
    </Switch>
  );
};
