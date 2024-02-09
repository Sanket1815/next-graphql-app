import { gql } from "@apollo/client";

export const SIGNUP_MUTATION = gql`
  mutation signup($input: UserAddParams!) {
    createUser(input: $input)
  }
`;

export const LOGIN_MUTATION = gql`
  mutation login($input: LoginParams!) {
    login(input: $input)
  }
`;
