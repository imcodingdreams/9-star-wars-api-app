import React from 'react'
import { Container, Button, FormControl, Row, Col, InputGroup } from 'react-bootstrap';

function Form({ getCharacterInfo }) {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={8} lg={6}>
          <InputGroup>
            <FormControl
              className='mb-3'
              type='input'
              id='characterName'
              name='characerSearch'
              placeholder="Search a character"
            />
            <Button id='searchBtn' onClick={() => {
              getCharacterInfo()
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
