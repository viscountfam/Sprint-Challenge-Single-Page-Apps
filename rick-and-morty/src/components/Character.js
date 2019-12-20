import React, { useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import axios from "axios"
import CharacterCard from './CharacterCard';
export default function Character(props) {
    const [character, setCharacter] = useState();
    const {id} = useParams();
    useEffect(() =>{
        axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
          setCharacter(response);
        })
        .catch(error => {
          console.error(error);
        });

    }, [id]);

    if (!character) {
        return <div>Loading character information....</div>
    }

    return (
      <div className="container">
          <div className="entry">
              {character.map((people, index) => {
                  return <CharacterCard key={character.id}
                   name={character.name} 
                   species={character.species}
                   gender={character.gender}
                   status={character.status}
                     />
              })}
          </div>
      </div>
  )
    
}