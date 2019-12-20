import React, {useState, useEffect} from "react";
import CharacterCard from "./characterCard";
import axios from "axios";

export default function CharacterTable() {
    const [character, setCharacter] = useState ([]);


useEffect(() => {
    axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
            console.log(response);
            setCharacter(response.info.results);
        })
        .catch(error => {
            console.log("data could not be retrieved", error);
        })
}, []);

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