import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const FilledBasketTotal = ({ basketLoad }) => {
  const totalPrice = basketLoad.reduce((total, item) => total + item.price, 0); 
  return (
    <Container>
      <Row className="justify-content-center align-items-center">
        {basketLoad.map((item, i) => (
          <Col sm={12} md={6} lg={4} key={i}>
            <Card className="card mb-3 m-auto">
              <Card.Img
                variant="top"
                src={item.image}
                style={{ height: "300px" }}
                className="w-75 m-auto"
              />
              <Card.Body className="d-flex justify-content-between fw-medium">
                <Card.Text className="w-75">{item.title}</Card.Text>
                <Card.Text className=" w-25 text-end">{item.price} $</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="mt-4">
        <Col className="text-center">
          <h4>Total Fee: {totalPrice.toFixed(2)} $</h4>
        </Col>
      </Row>
    </Container>
  );
};

export default FilledBasketTotal;
