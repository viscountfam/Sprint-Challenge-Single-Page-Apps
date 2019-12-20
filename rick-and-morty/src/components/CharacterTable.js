import React, { useState, useEffect} from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";
import {Link} from "react-router-dom";
export default function CharacterTable() {
    const [character, setCharacter] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character")
        .then(response => {
            console.log(response.data.results)
            const data = response.data.results 
            const result = data.filter(character =>
             character.name
             .toLowerCase()
             .includes(search.toLowerCase())  
              );
            console.log(result);
            setCharacter(result);
        })
    }, [search])

    const handleInputChange = event => {
        setSearch(event.target.value);
      };

    return(
                <div className="container">
                <form>
                <input
                    type="text"
                    onChange={handleInputChange}
                    value={search}
                    name="name"
                    tabIndex="0"
                    className="prompt search-name"
                    placeholder="search by name"
                    autoComplete="off"
                />
                </form>
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