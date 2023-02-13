import React from 'react'
import { Container, Button, FormControl, Row, Col, InputGroup } from 'react-bootstrap';

function Form() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={8} lg={6}>
          <InputGroup>
            <FormControl
              className='mb-3'
              type="input"
              //ref={characerSearchRef}
              name="characerSearch"
              placeholder="Search a character"
            />
            <Button style={{
              height: "38px",
              width: "80px",
              textAlign: "center",
              marginLeft: "10px"
              //
              //color: "#000",
              //borderColor: "gray",
              //justifyContent: "center",
            }}>Search</Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Form

// import React, { useState } from "react";
// import { FormControl } from "react-bootstrap";

// function MyForm() {
//   const [value, setValue] = useState("");

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   return (
//     <FormControl value={value} onChange={handleChange} />
//   );
// }
