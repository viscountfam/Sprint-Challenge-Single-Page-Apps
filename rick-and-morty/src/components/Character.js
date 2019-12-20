// import React, { useState, useEffect} from "react";
// import {useParams} from 'react-router-dom';
// import axios from "axios"
// import CharacterCard from './CharacterCard';
// export default function Character() {
//     const [character, setCharacter] = useState();
//     const {id} = useParams();
//     console.log(useParams());
//     console.log(id);
//     // const charid = character.find(characterid => id === `${character.id}` )
//     useEffect(() =>{
//         axios
//         .get(`https://rickandmortyapi.com/api/character/${id}`)
//         .then(response => {
//           console.log(response)
//           setCharacter(response.data);
//         })
//         .catch(error => {
//           console.error(error);
//         });

//     }, [id]);

  

//     return (
//       <div className="container">
//           <div className="entry">
//             <CharacterCard key={character.id}
//                    name={character.name} 
//                    species={character.species}
//                    gender={character.gender}
//                    status={character.status}
//                    />
//           </div>
//       </div>
//   )
    
// }