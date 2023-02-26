
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import CharactersTable from './components/CharactersTable';
import Form from './components/Form';
import './App.css';
import axios from 'axios';

function App() {
  const [characterInfo, setCharacterInfo] = useState([]);
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    const fetchCharacterData = async () => {
      const response = await axios.get('https://swapi.dev/api/people?search=');
      //loop through each character through response.data.results
      //for each character, get homeworld data console.log homeworld
      //for each character, get species data console.log species
      setCharacterInfo(response.data.results);
    };
    fetchCharacterData();
  }, []);
debugger
  const filteredData = characterInfo.filter(character =>
    character.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div>
      <Header />
      <Form filterValue={filterValue} setFilterValue={setFilterValue} />
      <CharactersTable characterInfo={characterInfo} filteredData={filteredData} />
    </div>
  );
}


export default App;

// function App() {
//   const [characterInfo, setCharacterInfo] = useState('')
//   const [characterSpecies, setCharacterSpecies] = useState('')
//   const getCharacterInfo = () => {
//     axios.get('https://swapi.dev/api/people', 'https://swapi.dev/api/species')
//       .then(response => {
//         let character = response.data.results;

//         let characterName = character[1].name;
//         let birthdate = character[1].birth_year;
//         let height = character[1].height;
//         let mass = character[1].mass;

//         let characterSpecies = response.data.results;
//         let species = characterSpecies[1].species;

//         setCharacterInfo({ characterName, birthdate, height, mass })
//         setCharacterSpecies({ species })
//         console.log(characterName, birthdate, height, mass, species)

//       }).catch(err => {
//         console.log(err)
//       });
//   };

//   console.log()
//   return (
//     <div>
//       <Header />
//       {/* <LiveSearchFilter /> */}
//       <Form getCharacterInfo={getCharacterInfo} />
//       <CharactersTable characterInfo={characterInfo} characterSpecies={characterSpecies} />
//     </div>
//   );
// }

//const characterData = 'https://swapi.dev/api/people?search';
//const characterSpeciesData = 'https://swapi.dev/api/species';

// function App () {
//   const characterData = 'https://swapi.dev/api/people?search=';
//   const [characterInfo, setCharacterInfo] = useState('');

//   useEffect(() => {
//     async function getCharacterInfo() {
//       let response = await axios.get(characterData);
//       let character = response.data.results;

//       let characterName = character.name;
//       let birthdate = character.birth_year;
//       let height = character.height;
//       let mass = character.mass;
//       let species = character.species;

//       setCharacterInfo({ characterName, birthdate, height, mass, species})
//       //setCharacterInfo(response.data.results)
//       console.log(characterInfo)
//     }
//   }, []);
//     return (
//     <div>
//       <Header />
//       {/* <LiveSearchFilter /> */}
//       <Form getCharacterInfo={getCharacterInfo}/>
//       <CharactersTable characterInfo={characterInfo} />
//     </div>
//   );
//   }

//https://swapi.dev/api/people?search=Darth

// const characterData = 'https://swapi.dev/api/people';
// const characterSpeciesData = 'https://swapi.dev/api/species'

// const App = () => {
//   const [characterInfo, setCharacterInfo] = useState([])
//   const [characterSpecies, setCharacterSpecies] = useState([])

//   useEffect(() => {
//     async function getCharacterInfo() {
//       const response = await axios.get(characterData, characterSpeciesData);
//       console.log(response)
//     }
//   })
//     return (
//     <div>
      
//     </div>
//   );
//   }

//   const getCharacterInfo = () => {
    
//       .then(response => {
//         let character = response.data.results;

//         let characterName = character[1].name;
//         let birthdate = character[1].birth_year;
//         let height = character[1].height;
//         let mass = character[1].mass;

//         let characterSpecies = response.data.results;
//         let species = characterSpecies[1].species;

//         setCharacterInfo({ characterName, birthdate, height, mass })
//         setCharacterSpecies({ species })
//         console.log(characterName, birthdate, height, mass, species)

//       }).catch(err => {
//         console.log(err)
//       });
//   };

//   console.log(response)
//   return (
//     <div>
//       <Header />
//       {/* <LiveSearchFilter /> */}
//       <Form getCharacterInfo={getCharacterInfo} />
//       <CharactersTable characterInfo={characterInfo} characterSpecies={characterSpecies} />
//     </div>
//   );
// }


