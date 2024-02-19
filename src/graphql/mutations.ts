import { gql } from "@apollo/client";

export const SIGNUP_MUTATION = gql`
  mutation signup($input: UserAddParams!) {
    createUser(input: $input)
  }
`;

export const LOGIN_MUTATION = gql`
  mutation login($input: LoginParams!) {
    login(input: $input) {
      message
      token
      isAdmin
    }
  }
`;

export const VERIFY_TOKEN = gql`
  mutation verifyToken($input: VerifyTokenParams!) {
    verifyToken(input: $input)
  }
`;

export const UPDATEUSER_MUTATION = gql`
  mutation updateUser($input: UserUpdateParams!) {
    updateUser(input: $input)
  }
`;

export const APPROVE_REQUEST = gql`
  mutation ApproveRequest($input: AdminApproveParams!) {
    approveRequest(input: $input)
  }
`;
