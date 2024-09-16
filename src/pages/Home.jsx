import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import CategoryBar from "../components/CategoryBar";

const Home = ({basket}) => {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  
  const url = "https://fakestoreapi.com/products";
  const categoryUrl = "https://fakestoreapi.com/products/categories";

  const getProducts = async () => {
    const res = await axios.get(url);
    setProduct(res.data);
  };
  useEffect(() => {
    getProducts();
  }, []);

  const getCategories = async () => {
    const res = await axios.get(categoryUrl);
    setCategory(["All",...res.data]);
  };
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <CategoryBar category={category}/>
      <Container>
        <Row className="justify-content-center align-items-center">
          {product.map((item) => (
            <ProductCard key={item.id} basket={basket} item={item}/>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
