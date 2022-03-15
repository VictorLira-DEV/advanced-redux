import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props: any) => {

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{
            title: 'dfdsf',
            quantity: 3,
            total: 3,
            price: 3,
          }}
        />
      </ul>
    </Card>
  );
};

export default Cart;
