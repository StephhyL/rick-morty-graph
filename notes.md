# Notes while following the tutorial

- There is only ever one and only one end point when using GraphQL. In this case, to https://rickandmortyapi.com/graphql

- Apollo - used to connect React with GraphQL server
- Install GraphQL and Apollo Client

  - `npm install @apollo/client graphql`

## Setting-Up Connection to API endpoint

// index.js

import {ApolloClient, InMemoryCache()} from "@apollo/client";

const client = new ApolloClient({
url: "https://rickandmortyapi.com/graphql",
cache: InMemoryCache()
})

ReactDOM.render(
<React.StrictMode>
<ApolloProvider client={client}>
<App />
</ApolloProvider>
</React.StrictMode>
)

- client has the URL endpoint in it

- Cache - cache comes in place when a graphQL query is made that has been already previously made. Instead of making the query to the graphQL server, it brings up the query response from the cache! Makes data retrieval faster!

- Provider - connects React and GraphQL server aka passes the client information via the ApolloProvider. Wrap the App with the ApolloProvider
