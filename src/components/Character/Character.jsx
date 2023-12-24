import { useParams } from 'react-router-dom';
import { useCharacter } from '../../hooks/useCharacter';

import './Character.css';

export const Character = () =>{
    const {id} = useParams();
    
    const { error, loading, data } = useCharacter(id);
    
    if(error) return <div><h1>Something going wrong</h1></div>
    if(loading) return <div><h1>Loading...</h1></div>

    if(data) return (
        <div>
            <img src={data.character.image} alt="" />
            <h1>{data.character.name}</h1>
            <p>{data.character.gender}</p>
            {data.character.episode.map(elem=>{
                return <div>
                    <h3>{elem.name}</h3>
                    <p>{elem.name} <b>{elem.episode}</b></p>
                </div>
            })}
        </div>
    );
}