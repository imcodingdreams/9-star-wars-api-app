import React from 'react'
import { Row, Table, Col, Container } from 'react-bootstrap'

function CharactersTable() {
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
                <td scope='col'>Luke Skywalker</td>
                <td scope='col'>19BBY</td>
                <td scope='col'>172</td>
                <td scope='col'>77</td>
                <td scope='col'>Tatooine</td>
                <td scope='col'>Human</td>
                {/* <td scope='col'>{search.name}</td>
                <td scope='col'>{search.birthDate}</td>
                <td scope='col'>{search.height}</td>
                <td scope='col'>{search.mass}</td>
                <td scope='col'>{search.species</td> */}
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row >
    </Container >
  )
}

export default CharactersTable;