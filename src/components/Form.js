

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Container, FormControl, Row, Col, InputGroup, Button } from 'react-bootstrap';


function Form({ getCharacter, urlData, getPlanetAndSpecies, setCharacterData, getCharactersData }) {

 // const [searchResult, setSearchResult] = useState([]);

  async function getCharacter() {
    const inputValue = document.getElementById('searchInput').value;
    const response = await axios.get(`${urlData}${inputValue}`);

    //setSearchResult(response.data.results);
    setCharacterData(response.data.results);
    
    //getPlanetAndSpecies(response)

    console.log(`Response: ${response}`);
    console.log(`Input value: ${inputValue}`);
    //console.log(`Search result: ${searchResult}`)
    console.log(`Url data: ${urlData}`)
  }
  
  function clearInput () {
    document.getElementById('searchInput').value = "";
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={8} lg={6}>
          <InputGroup>
            <FormControl 
              id='searchInput' 
              type="text" 
              placeholder="Search a character" 
              className='mb-3' 
              style={{
                height: "38px",
                width: "80px",
                marginLeft: "10px",
                backgroundColor: "SeaShell",
                borderColor: "black",
                color: "black" 
            }}
            />
            <Button id='searchBtn' onClick={() => {
              getCharacter();
              clearInput();
            }} style={{
              height: "38px",
              width: "80px",
              textAlign: "center",
              marginLeft: "10px",
              backgroundColor: "DarkKhaki",
              borderColor: "black", 
              color: "black"
            }}>Search</Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Form
