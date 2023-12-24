import {useQuery, gql} from "@apollo/client";

const GET_CHARACTERS = gql`
query getCharacters{
    characters{
      results{
        name
        id
        image
      }
    }
  }
`;

export const useCharacters = () =>{
    const {error,loading,data} = useQuery(GET_CHARACTERS);

    return {
        error,
        loading,
        data
    };
}