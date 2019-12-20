import React, {useState, useEffect} from "react";
import CharacterCard from "./Character";
import axios from "axios";
import {Link} from 'react-router-dom';
export default function CharacterTable() {
    const [character, setCharacter] = useState ([]);


useEffect(() =>{
            axios
            .get('https://rickandmortyapi.com/api/character/')
            .then(response => {
              console.log(response)
              setCharacter(Object.values(response.data.results));
            })
    
        }, []);

    return (
        
            <div className="container">
                <div className="entry">
                    {character.map((character, index) => {
                        return (
                        <Link to={`/characters/${character.id}`}>
                         <CharacterCard key={index}
                        name={character.name} 
                        species={character.species}
                        gender={character.gender}
                        status={character.status}
                        />
                        </Link>
                        )
                    })}
                </div>
            </div>
    );
}