import React from 'react'
import { Container, FormControl, Row, Col, InputGroup } from 'react-bootstrap';

function Form({ filterValue, setFilterValue }) {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={8} lg={6}>
          <InputGroup>
            <FormControl
              className='mb-3'
              //type='input'
              //id='characterName'
              // name='characerSearch'
              placeholder="Search a character"
              type="text"
              value={filterValue}
              onChange={event => setFilterValue(event.target.value)}
            />
            {/* <Button id='searchBtn' onClick={() => {
              handleAdditionalInfo();
            }} style={{
              height: "38px",
              width: "80px",
              textAlign: "center",
              marginLeft: "10px"
            }}>Search</Button> */}
          </InputGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Form
