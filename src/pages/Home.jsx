import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [product, setProduct] = useState("");
  const url = "https://fakestoreapi.com/products";
  
  const getProducts = async () => {
    const res = await axios.get(url);
    setProduct(res.data);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <Row>
        {product.map((item) => (
          <ProductCard key={item.id} {...item}/>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
