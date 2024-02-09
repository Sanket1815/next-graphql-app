import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:3000/graphql", // Update with your server URL
  }), // Replace with your GraphQL server URI
  cache: new InMemoryCache(),
});

console.log(`URL ${JSON.stringify(client.link)}`);

export default client;
