import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
  Button
} from "reactstrap";
const CartItem = ({ product, addToCart }) => {
  return (
    <Card className="mt-2 mb-1">
      <CardImg top src={product.smallImg} height="250" width="100%" />
      <CardBody>
        <CardTitle>{product.productName}</CardTitle>
        <CardText>
          <div>Price: {product.productPrice}</div>
        </CardText>
      </CardBody>
      <CardFooter>
        <Button color="success" onClick={() => addToCart(product)}>
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CartItem;
