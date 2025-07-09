import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { nhostConfig } from "../nhost/nhost";
import { admin_secret, role } from "../../frontend/utils/env";

const graphqlUrl = `https://${nhostConfig.subdomain}.hasura.${nhostConfig.region}.nhost.run/v1/graphql`;

export const apolloPublicClient = new ApolloClient({
  link: new HttpLink({
    uri: graphqlUrl,
    headers: {
      "x-hasura-role": role,
      "x-hasura-admin-secret": admin_secret,
    },
  }),
  cache: new InMemoryCache(),
});
