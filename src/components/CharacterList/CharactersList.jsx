// import {useQuery, gql} from "@apollo/client"
import { NavLink } from 'react-router-dom';
import { useCharacters } from '../../hooks/useCharacters';
import './CharacterList.css';

// const GET_CHARACTERS = gql`
// query getCharacters{
//     characters{
//       results{
//         name
//         id
//         image
//       }
//     }
//   }
// `;

export const CharacterList = () => {

  // const {error,loading,data} = useQuery(GET_CHARACTERS);
  const { error, loading, data } = useCharacters();

  if (loading) return <div><h1>Loading...</h1></div>
  if (error) return <div><h1>Something went wrong...</h1></div>
  return (
    <div className="CharacterList">
      {data.characters.results.map(character => {
        return <div key={character.image}>
        <NavLink to={`/${character.id}`}>
          <div className="CharacterList__one-character">
            <img src={character.image} alt="person face" />
            <h2>{character.name}</h2>
          </div>
          </NavLink>
        </div>
      })}
    </div>
  );
}