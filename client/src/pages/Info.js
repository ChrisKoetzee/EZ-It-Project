import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Template from "../components/Template";

const InfoPage = () => {
  return (
    <Template>
      <div>
        <Container className="mt-5">
          <Card.Title as="h1">
            School History
          </Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </Card.Text>
          <Row>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Principal</Card.Title>
                </Card.Body>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Rehabilitation" />
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Education Support</Card.Title>
                </Card.Body>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Education Support" />
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Parents</Card.Title>
                </Card.Body>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Bursary Assistance" />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Template>
  );
};

export default InfoPage;
