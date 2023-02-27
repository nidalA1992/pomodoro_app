import { ApolloProvider } from "@apollo/client";
import React from "react";
import type { ReactNode } from "react";

import { client } from "app/models/apollo";

export const withApollo = (component: () => ReactNode) => () =>
  <ApolloProvider client={client}>{component()}</ApolloProvider>;
