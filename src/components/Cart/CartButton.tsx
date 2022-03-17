import classes from './CartButton.module.css';
import { uiAction } from '../../store/ui-slice';
import { useDispatch, useSelector } from 'react-redux';

interface CartTotalQuantity {
  cart: {
    totalQuantity: number;
  };
}

const CartButton = () => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state: CartTotalQuantity) => state.cart.totalQuantity);
  const toggleCart = function () {
    dispatch(uiAction.toggle());
  };

  return (
    <button onClick={toggleCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}> {cartQuantity} </span>
    </button>
  );
};

export default CartButton;
