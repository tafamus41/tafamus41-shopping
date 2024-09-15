import React from "react";
import { Card, Col } from "react-bootstrap";
import { SlBasketLoaded } from "react-icons/sl";
const ProductCard = ({ id, title, price, category, image }) => {
  return (
    <Col sm={12} md={6} lg={4}>
      <Card className="card mb-3">
        <Card.Img variant="top" src={image} style={{height:"300px"}} className="w-75 m-auto" />
        <Card.Body className="d-flex justify-content-between"  >
          <Card.Text className="w-75">{title}</Card.Text>
          <Card.Text className="w-25" >{price} $</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <Card.Text>{category}</Card.Text>
          <Card.Text>
            <SlBasketLoaded />
          </Card.Text>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ProductCard;
