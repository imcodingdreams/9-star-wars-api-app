
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Container, FormControl, Row, Col, InputGroup, Button } from 'react-bootstrap';


function Form({ getCharacter, urlData, getPlanetAndSpecies, setCharacterData, getCharactersData }) {

  //const [searchResult, setSearchResult] = useState([]);

  async function getCharacter() {
    const inputValue = document.getElementById('searchInput').value;
    const response = await axios.get(`https://swapi.dev/api/people/?search=${inputValue}`);

    //setSearchResult(response.data.results);
    setCharacterData(response.data.results);
    
    //getPlanetAndSpecies(response);

    console.log(`Response: ${response}`);
    console.log(`Input value: ${inputValue}`);
    //console.log(`Search result: ${searchResult}`)
    console.log(`Url data: ${urlData}`)
  }
  //getCharactersData();

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={8} lg={6}>
          <InputGroup>
            <FormControl
              className='mb-3'
              id='searchInput'
              placeholder="Search a character"
              type="text"
            />
            <Button id='searchBtn' onClick={() => {
              getCharacter();
            }} style={{
              height: "38px",
              width: "80px",
              textAlign: "center",
              marginLeft: "10px"
            }}>Search</Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Form
