import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "apollo-link-context";

import { AuthLocalStorage } from "entities/user";

const uri = process.env.REACT_APP_API_URI;
const httpLink = createHttpLink({ uri });
const cache = new InMemoryCache({
  typePolicies: {
    User: { merge: true },
  },
});

const authLink = setContext((_, { headers }) => ({
  headers: { ...headers, authorization: AuthLocalStorage.getToken() || "" },
}));

export const client = new ApolloClient({
  // @ts-ignore
  link: authLink.concat(httpLink),
  cache,
  resolvers: {},
  connectToDevTools: true,
});
