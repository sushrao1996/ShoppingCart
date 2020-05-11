import React, { useState, useEffect } from "react";
import { commerce, lorem } from "faker";
import Axios from "axios";
import { v4 } from "uuid";
import { Container, Col, Row } from "reactstrap";
import CartItem from "./CartItem";
const BuyPage = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const url =
    "https://api.pexels.com/v1/search?query=furniture&per_page=15&page=1";
  const apiKey = "563492ad6f917000010000017716f9b4eb59435cadbda2c673bfb191";
  const fetchDeatils = async () => {
    const { data } = await Axios.get(url, {
      headers: {
        Authorization: apiKey
      }
    });
    const { photos } = data;
    const allProduct = photos.map(photo => ({
      smallImg: photo.src.small,
      tinyImg: photo.src.tiny,
      productName: commerce.productName(),
      productPrice: commerce.price(),
      id: v4()
    }));
    setProducts(allProduct);
  };
  useEffect(() => {
    fetchDeatils();
  }, []);
  return (
    <Container fluid>
      <h1 className="text-success text-center">Buy Page</h1>
      <Row>
        {products.map(product => (
          <Col md={4} key={product.id}>
            <CartItem product={product} addToCart={addToCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BuyPage;
