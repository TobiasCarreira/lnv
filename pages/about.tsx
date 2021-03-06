import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Layout from '../components/Layout';

export default class About extends Component {
  render() {
    return (
      <Layout>
        <Jumbotron>
          <Container fluid>
            <h1>Sobre esta página!</h1>
            <p>
              Esta página busca recopilar proyectos de estudiantes de exactas o
              afines para poder tener un espacio de esparcimiento :)
            </p>
          </Container>
        </Jumbotron>
      </Layout>
    );
  }
}
