import { compose } from "redux";

import { withApollo } from "./with-apollo";
import { withRedux } from "./with-redux";
import { withRouter } from "./with-router";

export const withProviders = compose<() => JSX.Element>(
  withApollo,
  withRouter,
  withRedux
);
