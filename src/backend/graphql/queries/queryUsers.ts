import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  query Users {
    sys_call_call_user {
      email
    }
  }
`;
