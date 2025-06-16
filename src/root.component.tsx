import "./frontend/style/index.css";
import { NhostProvider } from "@nhost/react";
import { ApolloProvider } from "@apollo/client";
import { nhost } from "./lib/nhost/nhost";
import { apolloClient } from "./lib/apolloClient/apolloClient";
import { App } from "./App";

export default function Root(props) {
  return (
    <NhostProvider nhost={nhost}>
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    </NhostProvider>
  );
}
