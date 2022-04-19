import { useQuery, gql } from "@apollo/client";

// import styling
import "./CharactersList.css";

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

const CharactersList = () => {
  const { error, loading, data } = useQuery(GET_CHARACTERS);

  console.log("error-->", error);
  console.log("loading--->", loading);
  console.log("data--->", data);

  if (loading) return <div>Spinner...</div>;
  if (error) return <div>Something went wrong :(</div>;

  return (
    <div className="CharactersList">
      {data.characters.results.map((character) => {
        return (
          <div>
            <img src={character.image} alt="cartoon character" />
            <h2>{character.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default CharactersList;
