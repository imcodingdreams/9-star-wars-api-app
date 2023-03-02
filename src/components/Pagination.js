import React from 'react'

export const Pagination = () => {

  return (
    <div>
      
    </div>
  )
}


// function App() {
//   const [characterInfo, setCharacterInfo] = useState([]);
//   const [homeworld, setHomeworld] = useState([]);
//   const [species, setSpecies] = useState([]);
//   const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    const fetchCharacterData = async (character) => {
      const response = await axios.get('https://swapi.dev/api/people');
      setCharacterInfo(response.data.results);
      character.forEach(character => {
        const homeworldInfo = await axios.get(character.homeworld);
        setHomeworld(homeworldInfo.data.results);
      });
      character.forEach(character => {
        const speciesInfo = await axios.get(character.species);
        setSpecies(speciesInfo.data.results);
      });
      // const homeworldInfo = await axios.get(character.homeworld);
      // const speciesInfo = await axios.get(character.species);

//       // setHomeworld(homeworld.data.results);
//       // setSpecies(species.data.results);
//       // return {
//       //   ...character,
//       //   homeworld: homeworldInfo.data.name,
//       //   species: speciesInfo.data.name
//       // }
//     };
//     fetchCharacterData();
//   }, []);

//   // const fetchAdditionalInfo = async (character) => {
//   //   // const homeworldInfo = await axios.get(character.homeworld);
//   //   // const speciesInfo = await axios.get(character.species);
//   //   console.log(homeworldInfo, speciesInfo)
//   //   return {
//   //     ...character,
//   //     homeworld: homeworldInfo.data.name,
//   //     species: speciesInfo.data.name
//   //   };
//   // };

//   const handleAdditionalInfo = async () => {
//     const newData = await Promise.all(characterInfo.map(fetchCharacterData));
//     setCharacterInfo(newData);
//     setHomeworld(homeworld.data.results);
//     setSpecies(species.data.results);
//   };

//   handleAdditionalInfo();

//   const filteredData = characterInfo.filter((character) =>
//     character.name.toLowerCase().includes(filterValue.toLowerCase())
//   );

//   return (
//     <div>
//       <Header />
//       <Form filterValue={filterValue} setFilterValue={setFilterValue} handleAdditionalInfo={handleAdditionalInfo} />
//       <CharactersTable characterInfo={characterInfo} filteredData={filteredData} />
//     </div>
//   );
// }