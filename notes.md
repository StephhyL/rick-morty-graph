# Notes while following the tutorial

- There is only ever one and only one end point when using GraphQL. In this case, to https://rickandmortyapi.com/graphql

- Apollo - used to connect React with GraphQL server
- Install GraphQL and Apollo Client

  - `npm install @apollo/client graphql`

## Setting-Up Connection to API endpoint

// index.js

import {ApolloClient, InMemoryCache()} from "@apollo/client";

const client = new ApolloClient({
uri: "https://rickandmortyapi.com/graphql",
cache: new InMemoryCache()
})

ReactDOM.render(
<React.StrictMode>
<ApolloProvider client={client}>
<App />
</ApolloProvider>
</React.StrictMode>
)

- client has the endpoint in it. NOTE: uri _the last letter is an i_

- Cache - cache comes in place when a graphQL query is made that has been already previously made. Instead of making the query to the graphQL server, it brings up the query response from the cache! Makes data retrieval faster!

- Provider - connects React and GraphQL server aka passes the client information via the ApolloProvider. Wrap the App with the ApolloProvider

## First Query!

// CharactersList.jsx <--component where the query is made

import {useQuery} from "@apollo/client"

const GET_CHARACTERS = gql` query { characters { results { id name image } } }`

const CharactersList = () => {
const {error, loading, data} = useQuery(GET_CHARACTERS)

return <div></div>
}

- `useQuery` - as the name suggests, used to make the graphQL queries!
- specify the query in the useQuery brackets
- use `gql` to make the query. The name of the query is usually in `CAPITAL_LETTERS_IN_SNAKE_CASE`. Written outside of the component function.
- object (in our case "obj") is returned from the query
- `obj.error` - errors (e.g. can't access API)
- `obj.loading` - true or false for if data is being retrieved (think: maybe good to add a spinner)
- `obj.data` - retrieved data

* so one can destructure it to

  - `const {error, loading, data} = useQuery(GET_CHARACTERS)` from const obj = useQuery(GET_CHARACTERS)

* best to do error and loading handling

# Query Hook!

- to refractor, we can make a hook called useCharacters (in its own file) and call the hook from the CharactersList.js

src > hooks > useCharacters.js
// useCharacters.js
import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql` query { characters { results { id name image } } }`;

// this function will use the useQuery call
export const useCharacters = () => {
const { error, loading, data } = useQuery(GET_CHARACTERS);

return { error, loading, data };
};

// CharactersList.js

...inside component function before return
const { error, loading, data } = useCharacters();
