import React from 'react'
import { Row, Table, Col, Container } from 'react-bootstrap'
//import { Pagination } from './Pagination';

function CharactersTable({ filteredData } ) {
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
            <tbody className="align-middle">
                {filteredData.map(character => (
                  <tr key = {character.id}>
                    <td>{character.name}</td>
                    <td>{character.birth_year}</td>
                    <td>{character.height}</td>
                    <td>{character.mass}</td>
                    <td>{character.homeworld}</td>
                    <td>{character.species}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Col>
      </Row >
      {/* <Pagination /> */}
    </Container >
  )
}

export default CharactersTable;