import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

// this function will use the useQuery call
export const useCharacters = () => {
  const { error, loading, data } = useQuery(GET_CHARACTERS);

  return { error, loading, data };
};
