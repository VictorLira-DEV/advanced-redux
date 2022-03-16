import classes from './CartButton.module.css';
import { uiAction } from '../../store/ui-slice';
import { useDispatch, useSelector } from 'react-redux';

const CartButton = (props: any) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state: any) => state.cart.totalQuantity);
  console.log(cartQuantity);
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
