import { gql } from "@apollo/client";

export const INSERT_USER = gql`
  mutation UserRegister(
    $name: String!
    $email: String!
    $last_name: String!
    $telephone: String!
    $password: String!
  ) {
    insert_sys_call_call_user(
      objects: {
        email: $email
        last_name: $last_name
        name: $name
        password: $password
        telephone: $telephone
      }
    ) {
      affected_rows
    }
  }
`;
