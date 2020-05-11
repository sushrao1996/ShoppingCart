import React from "react";
import { lorem } from "faker";
import {
  Container,
  Card,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Button,
  CardHeader,
  CardBody,
  CardFooter
} from "reactstrap";
const Cart = ({ cartItem, removeItem, buyNow }) => {
  let amount = 0;
  cartItem.forEach(
    item => (amount = parseFloat(amount) + parseFloat(item.productPrice))
  );
  return (
    <Container>
      <h1 className="text-success text-center">Your Cart</h1>
      <ListGroup>
        {cartItem.map(item => (
          <ListGroupItem>
            <Row>
              <Col>
                <img src={item.tinyImg} height={80} alt="tinyImg" />
              </Col>
              <Col>
                <div>{item.productName}</div>
                <p>{item.productPrice}</p>
                <Button color="danger" onClick={() => removeItem(item)}>
                  Remove
                </Button>
              </Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>
      {cartItem.length >= 1 ? (
        <Card className="mt-4">
          <CardHeader>Grand Total</CardHeader>
          <CardBody>
            Your Amount for {cartItem.length} product is {amount}
          </CardBody>
          <CardFooter>
            <Button color="success" onClick={buyNow}>
              Buy Now
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <h1 className="text-center text-warning">Cart is Empty!</h1>
      )}
    </Container>
  );
};

export default Cart;
