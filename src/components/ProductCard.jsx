import React from "react";
import { Card, Col } from "react-bootstrap";
import { SlBasketLoaded } from "react-icons/sl";
const ProductCard = ({ item,basket}) => {
  return (
    <Col sm={12} md={6} lg={4}>
      <Card className="card mb-3 m-auto">
        <Card.Img variant="top" src={item.image} style={{height:"280px"}} className="w-75 m-auto" />
        <Card.Body className="d-flex justify-content-between fw-medium"  >
          <Card.Text className="w-75">{item.title}</Card.Text>
          <Card.Text className=" w-25 text-end" >{item.price} $</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between ">
          <Card.Text>{item.category}</Card.Text>
          <Card.Text>
            <SlBasketLoaded size={30} className="card-basket" onClick={()=>basket(item)}/>
          </Card.Text>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ProductCard;
