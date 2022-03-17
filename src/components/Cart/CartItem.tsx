import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

interface Item {
  item: {
    title: string;
    quantity: number;
    total: number;
    price: number;
    id: string;
  };
}

const CartItem = (props: Item) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price, id } = props.item;

  const removeItemHandler = function () {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = function () {
    dispatch(
      cartActions.addItemToCart({
        id: id,
        title: title,
        quantity: quantity,
        price: price,
      })
    );
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
