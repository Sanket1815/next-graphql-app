import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query {
    getUser {
      id
      createdAt
      updatedAt
      name
      email
      address
      moblieNumber
      lastName
    }
  }
`;

export const GETSINGLEUSER = gql`
  query getSingleUser($input: GetSingleUserParams!) {
    getSingleUser(input: $input) {
      id
      createdAt
      updatedAt
      name
      email
      address
      moblieNumber
      lastName
      isAdmin
    }
  }
`;

export const GET_ADMIN_REQUESTS = gql`
  query {
    getAdminRequests {
      id
      email
    }
  }
`;
