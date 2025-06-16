import { createApolloClient } from "@nhost/apollo";
import { nhost } from "../nhost/nhost";

export const apolloClient = createApolloClient({ nhost })