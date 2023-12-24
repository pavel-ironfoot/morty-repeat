import { gql, useLazyQuery } from '@apollo/client';
import './SearchBy.css';
import { useState } from 'react';

const GET_CHARACTER_LOCATION = gql`
query GetCharacterLocations($name: String!){
    characters(filter:{
        name: $name
    }){
      results{
        location{
          name
        }
      }
    }
  }
`;

export const SearchBy = () =>{
    const [name,setName] = useState("");

    const [getLocations, {loading, error, data, called}] = useLazyQuery(GET_CHARACTER_LOCATION, {
        variables: {
            name,
        }
    });
    
    return (
        <div>
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" name="" id="" />
            <button onClick={()=>getLocations()}>Search</button>
            {loading && <div>loading...</div>}
            {error && <div>Something going wrong...</div>}
            {data && (
                <div>
                    {data.characters.results.map((element) => {
                        return <p key={element.location.name}>{element.location.name}</p>
                    })}
                </div>
            )}
        </div>
    );
}