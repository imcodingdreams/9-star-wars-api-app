import React from 'react'
import { Row, Table, Col, Container } from 'react-bootstrap'

function CharactersTable({ characterName, birthdate, height, mass, species } ) {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} lg={9}>
          <Table className="mt-5" style={{
            textAlign: "center",
            justifyContent: "center"
          }}>
            <thead style={{}}>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Birthdate</th>
                <th scope="col">Height</th>
                <th scope="col">Mass</th>
                <th scope="col">Homeworld</th>
                <th scope="col">Species</th>
              </tr>
            </thead>
            <tbody>
              <tr className="align-middle">
                {/* <td>Luke Skywalker</td>
                <td>19BBY</td>
                <td>172</td>
                <td>77</td>
                <td>Tatooine</td>
                <td>Human</td> */}
                {/* <td>{ characterInfo }</td>
                <td>{ characterSpecies }</td> */}
                <td>{ characterName }</td>
                <td>{ birthdate }</td>
                <td>{ height }</td>
                <td>{ mass }</td>
                <td>{ species }</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row >
    </Container >
  )
}

export default CharactersTable;