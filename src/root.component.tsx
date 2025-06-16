//import "./frontend/style/index.css";
import { RegisterUser } from "./frontend/pages/RegisterUser";
import { NhostProvider } from "@nhost/react";
import { ApolloProvider } from "@apollo/client";
import { nhost } from "./lib/nhost/nhost";
import { apolloClient } from "./lib/apolloClient/apolloClient";
import { LoginUser } from "./frontend/pages/LoginUser";

export default function Root(props) {
  return (
    <NhostProvider nhost={nhost}>
      <ApolloProvider client={apolloClient}>
        <div className="h-screen">
          <RegisterUser />
          {/* <LoginUser /> */}
        </div>
      </ApolloProvider>
    </NhostProvider>
  );
}
