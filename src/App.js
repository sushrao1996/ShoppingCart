import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Container, Row, Col } from "reactstrap";
import BuyPage from "./Components/BuyPage";
import Cart from "./Components/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
const App = () => {
  const [cartItem, setCartItem] = useState([]);
  const addToCart = item => {
    const isAlreadyAdded = cartItem.findIndex(function(array) {
      return array.id === item.id;
    });
    if (isAlreadyAdded !== -1) {
      return toast("Already added to Cart", {
        type: "error"
      });
    }
    setCartItem([...cartItem, item]);
  };
  const removeItem = item => {
    setCartItem(cartItem.filter(cItem => cItem.id !== item.id));
  };
  const buyNow = () => {
    setCartItem([]);
    return toast("Purchase Completed!", {
      type: "success"
    });
  };
  return (
    <Container fluid className="text-center">
      <ToastContainer />
      <Row>
        <Col md={8}>
          <BuyPage addToCart={addToCart} />
        </Col>
        <Col md={4}>
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
        </Col>
      </Row>
    </Container>
  );
};
export default App;
